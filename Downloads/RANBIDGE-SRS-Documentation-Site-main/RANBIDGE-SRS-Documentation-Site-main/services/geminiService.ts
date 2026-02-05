
import { GoogleGenAI } from "@google/genai";
import { SRSData } from "../types";

export const generateProfessionalSRS = async (data: SRSData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Act as a professional Senior Business Analyst. Generate a detailed Software Requirements Specification (SRS) Document for Ranbidge Solutions Private Limited based on the following client requirements:

    CLIENT: ${data.client.clientName} of ${data.client.companyName}
    PROJECT: ${data.client.projectType}
    WEBSITE TYPES: ${data.websiteType.join(', ')}
    PAGES: ${data.pages.join(', ')}
    DESIGN: ${data.designPreferences.join(', ')}
    FEATURES: ${data.functionalRequirements.join(', ')}
    TECH STACK: 
      - Frontend: ${data.techStack.frontend.join(', ')}
      - Backend: ${data.techStack.backend.join(', ')}
      - Database: ${data.techStack.database.join(', ')}
    SECURITY: ${data.security.join(', ')}
    MARKETING: ${data.marketing.join(', ')}
    HOSTING: ${data.hosting.join(', ')}
    MAINTENANCE: ${data.maintenance}
    ADDITIONAL NOTES: ${data.additionalNotes || 'None provided'}

    The output should be in professional Markdown format including:
    1. Introduction & Project Scope
    2. Functional Requirements (Detailed)
    3. Non-Functional Requirements (Performance, Security, Reliability)
    4. Technical Architecture Recommendation
    5. Sitemap and Content Hierarchy
    6. Timeline and Delivery Methodology

    Ensure the tone is corporate, authoritative, and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Failed to generate SRS document.";
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return "Error generating content. Please try again.";
  }
};
