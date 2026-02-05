import emailjs from '@emailjs/browser';
import { SRSData } from '../types';
import { ContactFormData } from './pdfService';

// EmailJS configuration - These should be set in environment variables
const EMAILJS_PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
const EMAILJS_SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendSRSDocumentEmail = async (
  srsContent: string,
  clientData: SRSData
): Promise<boolean> => {
  try {
    const emailParams = {
      to_email: 'ranbidgesales@gmail.com',
      client_name: clientData.client.clientName,
      company_name: clientData.client.companyName,
      project_type: clientData.client.projectType,
      email: clientData.client.email,
      phone: clientData.client.phone,
      srs_content: srsContent,
      subject: `New SRS Document - ${clientData.client.companyName} - ${clientData.client.projectType}`,
      generated_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative: Simple email function using a backend API
export const sendSRSDocumentViaAPI = async (
  srsContent: string,
  clientData: SRSData
): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-srs-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ranbidgesales@gmail.com',
        subject: `New SRS Document - ${clientData.client.companyName} - ${clientData.client.projectType}`,
        clientData,
        srsContent,
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully via API');
      return true;
    } else {
      console.error('Failed to send email via API');
      return false;
    }
  } catch (error) {
    console.error('Error sending email via API:', error);
    return false;
  }
};

// Send contact form email (without PDF)
export const sendContactFormEmail = async (
  formData: ContactFormData
): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === 'your_public_key' || 
        EMAILJS_SERVICE_ID === 'your_service_id' || 
        EMAILJS_TEMPLATE_ID === 'your_template_id') {
      console.warn('EmailJS not properly configured. Using fallback method.');
      return await sendContactFormFallback(formData);
    }
    
    // Create email parameters
    const emailParams = {
      to_email: 'ranbridgeservicesprivatelimite@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      subject: `New Contact Form Submission from ${formData.name}`,
      submission_date: new Date().toLocaleString(),
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams
    );

    console.log('Contact form email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    // Fallback to manual email method
    return await sendContactFormFallback(formData);
  }
};

// Fallback method: open email client with form details
const sendContactFormFallback = async (
  formData: ContactFormData
): Promise<boolean> => {
  try {
    // Create mailto link with form details
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Contact Form Submission Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
Submitted: ${new Date().toLocaleString()}
    `.trim());
    
    const mailtoUrl = `mailto:ranbridgeservicesprivatelimite@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
    
    return true;
  } catch (error) {
    console.error('Fallback method also failed:', error);
    return false;
  }
};

// Alternative: Send contact form via API with PDF attachment
export const sendContactFormViaAPI = async (
  formData: ContactFormData,
  pdfBlob: Blob
): Promise<boolean> => {
  try {
    // Convert PDF blob to base64
    const pdfBase64 = await blobToBase64(pdfBlob);
    
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ranbridgeservicesprivatelimite@gmail.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        formData,
        pdfAttachment: pdfBase64,
      }),
    });

    if (response.ok) {
      console.log('Contact form email sent successfully via API');
      return true;
    } else {
      console.error('Failed to send contact form email via API');
      return false;
    }
  } catch (error) {
    console.error('Error sending contact form email via API:', error);
    return false;
  }
};

// Helper function to convert blob to base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // Remove data URL prefix to get pure base64
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
