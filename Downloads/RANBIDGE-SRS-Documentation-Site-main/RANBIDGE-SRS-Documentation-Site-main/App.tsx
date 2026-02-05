
import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormStep, SRSData, ClientDetails } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SRSForm from './components/SRSForm';
import SRSViewer from './components/SRSViewer';
import Services from './pages/Services';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import WebDevelopmentSRS from './pages/WebDevelopmentSRS';
import MobileDevelopmentSRS from './pages/MobileDevelopmentSRS';
import SoftwareDevelopmentSRS from './pages/SoftwareDevelopmentSRS';
import UIUXDesignSRS from './pages/UIUXDesignSRS';
import DigitalMarketingSRS from './pages/DigitalMarketingSRS';
import ITConsultingSRS from './pages/ITConsultingSRS';
import { generateProfessionalSRS } from './services/geminiService';
import { sendSRSDocumentEmail } from './services/emailService';

const INITIAL_CLIENT: ClientDetails = {
  clientName: '',
  companyName: '',
  email: '',
  phone: '',
  projectType: 'Website',
};

const INITIAL_DATA: SRSData = {
  client: INITIAL_CLIENT,
  websiteType: [],
  pages: [],
  designPreferences: [],
  functionalRequirements: [],
  techStack: {
    frontend: [],
    backend: [],
    database: [],
  },
  security: [],
  marketing: [],
  hosting: [],
  maintenance: '3 Months',
  additionalNotes: '',
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.CLIENT_INFO);
  const [srsData, setSrsData] = useState<SRSData>(INITIAL_DATA);
  const [generatedSrs, setGeneratedSrs] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleUpdateData = (newData: Partial<SRSData>) => {
    setSrsData(prev => ({ ...prev, ...newData }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const doc = await generateProfessionalSRS(srsData);
      setGeneratedSrs(doc);
      setCurrentStep(FormStep.REVIEW);
      
      // Send SRS document to ranbidgesales@gmail.com
      const emailSent = await sendSRSDocumentEmail(doc, srsData);
      if (emailSent) {
        console.log('SRS document sent successfully to ranbidgesales@gmail.com');
      } else {
        console.warn('Failed to send SRS document via email');
      }
    } catch (err) {
      alert("Failed to generate SRS. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setSrsData(INITIAL_DATA);
    setGeneratedSrs(null);
    setCurrentStep(FormStep.CLIENT_INFO);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-slate-800">Website Requirement Collection</h1>
                <p className="text-slate-500 mt-2">Ranbidge Solutions Private Limited</p>
              </div>

              {!generatedSrs ? (
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                  <div className="flex border-b">
                    {[
                      { label: 'Details', step: FormStep.CLIENT_INFO },
                      { label: 'Type', step: FormStep.PROJECT_TYPE },
                      { label: 'Features', step: FormStep.FUNCTIONALITY },
                      { label: 'Tech', step: FormStep.TECH_STACK },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className={`flex-1 text-center py-4 text-sm font-medium transition-colors ${
                          currentStep === item.step
                            ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>

                  <div className="p-6 md:p-8">
                    <SRSForm 
                      step={currentStep} 
                      data={srsData} 
                      onUpdate={handleUpdateData}
                      onNext={() => setCurrentStep(prev => prev + 1)}
                      onPrev={() => setCurrentStep(prev => prev - 1)}
                      onGenerate={handleGenerate}
                      isGenerating={isGenerating}
                    />
                  </div>
                </div>
              ) : (
                <SRSViewer 
                  markdown={generatedSrs} 
                  data={srsData} 
                  onReset={resetForm} 
                />
              )}
            </main>
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development-srs" element={<WebDevelopmentSRS />} />
          <Route path="/mobile-development-srs" element={<MobileDevelopmentSRS />} />
          <Route path="/software-development-srs" element={<SoftwareDevelopmentSRS />} />
          <Route path="/ui-ux-design-srs" element={<UIUXDesignSRS />} />
          <Route path="/digital-marketing-srs" element={<DigitalMarketingSRS />} />
          <Route path="/it-consulting-srs" element={<ITConsultingSRS />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
