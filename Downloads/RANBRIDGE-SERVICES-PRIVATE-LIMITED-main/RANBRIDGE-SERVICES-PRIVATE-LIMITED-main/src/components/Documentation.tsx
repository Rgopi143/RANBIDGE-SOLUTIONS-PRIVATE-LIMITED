import React from 'react';

const Documentation = () => (
  <section id="documentation" className="py-20 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[30px] shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Website Documentation</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Getting Started for New Users</h2>
      <ol className="list-decimal ml-6 mb-6 text-gray-700">
        <li>Start at the top navigation bar to see all main sections: Home, About, Services, Team, and Contact.</li>
        <li>Scroll or click any section in the Navbar or Footer to jump directly to that part of the site.</li>
        <li>Read about the company, its services, and meet the team to understand what RANBRIDGE SERVICES PRIVATE LIMITED offers.</li>
        <li>If you want to get in touch, use the Contact section to send a message, call, or email the company directly.</li>
        <li>For support, click “Contact Support” in the footer to chat via WhatsApp.</li>
        <li>Review the Privacy Policy, Terms of Service, Cookie Policy, and GDPR by clicking their links in the footer—these open in easy-to-read popups.</li>
        <li>For more details about the website or how to use it, click “Documentation” in the footer to open this guide at any time.</li>
      </ol>
      <p className="mb-6 text-gray-700">
        This documentation provides an overview of the RANBRIDGE SERVICES PRIVATE LIMITED Portfolio Website, its structure, main features, and usage instructions for both users and developers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Overview</h2>
      <p className="mb-4 text-gray-700">
        The website is a modern, responsive portfolio and company site built with React and Tailwind CSS. It showcases company information, services, team members, and provides contact options. Legal and policy documents are accessible via modals.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Main Sections & Components</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li><strong>Navbar:</strong> Sticky navigation bar with smooth scrolling to sections (Home, About, Services, Team, Contact).</li>
        <li><strong>Hero:</strong> Landing section with company tagline and call-to-action.</li>
        <li><strong>About:</strong> Company introduction, mission, and key statistics.</li>
        <li><strong>Services:</strong> Grid of core services (Web Development, Mobile Apps, AI, Cloud, E-commerce, CRM/ERP).</li>
        <li><strong>Team:</strong> Profiles of key team members with social links (LinkedIn, GitHub, Instagram).</li>
        <li><strong>Contact:</strong> Contact form (opens mail client with form details), company emails, phone, and address.</li>
        <li><strong>Footer:</strong> Quick links to all sections, services, support, and legal documents. Social media icons included.</li>
        <li><strong>Legal Modals:</strong> Privacy Policy, Terms of Service, and Cookie Policy are shown in scrollable modals when clicked in the footer.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Usage Instructions</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Click navigation links or use the Navbar to scroll to any section.</li>
        <li>Contact form sends details to company email via mailto link.</li>
        <li>Footer links provide quick access to all main sections and legal documents.</li>
        <li>Legal links open modals with scrollable content for Privacy Policy, Terms of Service, and Cookie Policy.</li>
        <li>"Contact Support" in the footer opens WhatsApp chat with the company number.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Developer Notes</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Built with React (TypeScript) and Tailwind CSS.</li>
        <li>Component-based structure: all main sections are in <code>src/components/</code>.</li>
        <li>Legal modals are managed in <code>App.tsx</code> using state and passed as props to <code>Footer</code>.</li>
        <li>Contact form logic is in <code>Contact.tsx</code> and uses <code>mailto:</code> for submissions.</li>
        <li>All styling is handled via Tailwind CSS classes and custom animations in <code>index.css</code>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Customization</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Update company info, services, and team in their respective components.</li>
        <li>To add new sections, create a new component and add it to <code>App.tsx</code> and the Navbar/Footer as needed.</li>
        <li>Legal documents can be edited in their respective files in <code>src/components/</code>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact</h2>
      <p className="mb-4 text-gray-700">
        For questions or support, email <a href="mailto:ranbridgeserviceprivatelimited@gmail.com" className="text-blue-600 underline">ranbridgeserviceprivatelimited@gmail.com</a> or use the WhatsApp link in the footer.
      </p>
    </div>
  </section>
);

export default Documentation; 