import * as React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import GDPRPolicy from './components/GDPRPolicy';
import Documentation from './components/Documentation';

function App() {
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [showCookie, setShowCookie] = React.useState(false);
  const [showGDPR, setShowGDPR] = React.useState(false);
  const [showDocumentation, setShowDocumentation] = React.useState(false);
  const [showSystemStatus, setShowSystemStatus] = React.useState(false);
  const [showCaseStudies, setShowCaseStudies] = React.useState(false);
  const [showCareers, setShowCareers] = React.useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer 
        onPrivacyClick={() => setShowPrivacy(true)} 
        onTermsClick={() => setShowTerms(true)} 
        onCookieClick={() => setShowCookie(true)} 
        onGDPRClick={() => setShowGDPR(true)} 
        onDocumentationClick={() => setShowDocumentation(true)} 
        onSystemStatusClick={() => setShowSystemStatus(true)} 
        onCaseStudiesClick={() => setShowCaseStudies(true)} 
        onCareersClick={() => setShowCareers(true)} 
      />
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowTerms(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <TermsOfService />
          </div>
        </div>
      )}
      {showCookie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowCookie(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <CookiePolicy />
          </div>
        </div>
      )}
      {showGDPR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowGDPR(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <GDPRPolicy />
          </div>
        </div>
      )}
      {showDocumentation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowDocumentation(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <Documentation />
          </div>
        </div>
      )}
      {showSystemStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowSystemStatus(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">System Status</h2>
            <div className="space-y-4 text-gray-700">
              <p>All systems are operational.</p>
              {/* You can add more detailed status or integrate with a status API here */}
            </div>
          </div>
        </div>
      )}
      {showCaseStudies && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowCaseStudies(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-1">Foodfly</h3>
                <p>Food Delivery Website - A scalable, real-time web application for food ordering and delivery, built with the MERN stack.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Artilink</h3>
                <p>A platform connecting artisans with businesses, enabling direct B2B trade, fair pricing, and AI-powered insights for the handmade industry.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Project Gamma</h3>
                <p>A secure client portal for document management, featuring advanced encryption and user access controls.</p>
              </div>
              {/* Add more case studies as needed */}
            </div>
          </div>
        </div>
      )}
      {showCareers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative p-8 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setShowCareers(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Careers</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-1">Join Our Team</h3>
                <p>We're always looking for talented individuals who are passionate about technology and innovation. Join us in building the future of digital solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Current Openings</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Full Stack Developer (React/Node.js)</li>
                  <li>Mobile App Developer (React Native/Flutter)</li>
                  <li>UI/UX Designer</li>
                  <li>DevOps Engineer</li>
                  <li>AI/ML Engineer</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Benefits</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Competitive salary and benefits</li>
                  <li>Flexible work arrangements</li>
                  <li>Professional development opportunities</li>
                  <li>Collaborative and innovative work environment</li>
                  <li>Health and wellness programs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">How to Apply</h3>
                <p>Send your resume and cover letter to <a href="mailto:ranbridgeserviceprivatelimited@gmail.com" className="text-blue-600 hover:text-blue-800">ranbridgeserviceprivatelimited@gmail.com</a> with the subject line "Career Application - [Position Name]".</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;