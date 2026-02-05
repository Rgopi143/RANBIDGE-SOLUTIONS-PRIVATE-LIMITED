import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceChecklistConfigs, ServiceChecklistConfig } from '../services/serviceChecklistConfigs';

interface ServiceSRSFormProps {
  serviceName: string;
  serviceId: string;
}

const ServiceSRSForm: React.FC<ServiceSRSFormProps> = ({ serviceName, serviceId }) => {
  const navigate = useNavigate();
  const config = serviceChecklistConfigs.find(c => c.serviceId === serviceId);
  
  const [formData, setFormData] = useState<Record<string, any>>({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    additionalRequirements: '',
    clientSignature: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? prev[field].includes(value)
          ? prev[field].filter((item: string) => item !== value)
          : [...prev[field], value]
        : value
    }));
  };

  const handleTechStackChange = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: {
        ...prev.techStack,
        [category]: prev.techStack?.[category]?.includes(value)
          ? prev.techStack[category].filter((item: string) => item !== value)
          : [...(prev.techStack?.[category] || []), value]
      }
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service SRS Form Submitted:', { serviceId, serviceName, formData });
    alert(`${serviceName} SRS form submitted successfully! We will contact you soon.`);
    navigate('/services');
  };

  const renderSection = (section: ServiceChecklistConfig['sections'][0]) => {
    switch (section.type) {
      case 'client-details':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Client Name:</label>
              <input
                type="text"
                value={formData.clientName || ''}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Name:</label>
              <input
                type="text"
                value={formData.companyName || ''}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email ID:</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number:</label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        );

      case 'radio':
        return (
          <div className="flex flex-wrap gap-4">
            {section.options?.map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name={section.id}
                  value={option}
                  checked={formData[section.id] === option}
                  onChange={(e) => handleInputChange(section.id, e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkboxes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {section.options?.map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData[section.id]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(section.id, option)}
                  className="mr-2"
                />
                <span className="text-sm text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'tech-stack':
        return (
          <div className="space-y-4">
            {section.subcategories?.map(subcategory => (
              <div key={subcategory.title}>
                <h4 className="font-medium text-slate-700 mb-2">{subcategory.title}</h4>
                <div className="flex flex-wrap gap-4">
                  {subcategory.options.map(option => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.techStack?.[subcategory.title.toLowerCase()]?.includes(option) || false}
                        onChange={() => handleTechStackChange(subcategory.title.toLowerCase(), option)}
                        className="mr-2"
                      />
                      <span className="text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            value={formData[section.id] || ''}
            onChange={(e) => handleInputChange(section.id, e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Please specify any additional requirements..."
          />
        );

      default:
        return null;
    }
  };

  if (!config) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h1>
            <p className="text-slate-600 mb-6">The requested service configuration is not available.</p>
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">SRS Document</h1>
            <h2 className="text-xl font-semibold text-slate-600 mb-2">Requirement Collection Form</h2>
            <p className="text-lg text-indigo-600 font-bold">RANBIDGE SOLUTIONS PRIVATE LIMITED</p>
            <p className="text-sm text-slate-500 mt-2">Service: {config.serviceName}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {config.sections.map((section, index) => (
              <div key={section.id} className="border-b pb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  {index + 1}. {section.title}
                </h3>
                {renderSection(section)}
              </div>
            ))}

            {/* Approval Section */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                {config.sections.length + 1}. Approval
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Client Name:</label>
                  <input
                    type="text"
                    value={formData.clientSignature || ''}
                    onChange={(e) => handleInputChange('clientSignature', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Signature:</label>
                  <input
                    type="text"
                    value={formData.clientSignature || ''}
                    onChange={(e) => handleInputChange('clientSignature', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Type signature"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date:</label>
                  <input
                    type="date"
                    value={formData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300 transition-colors"
              >
                Back to Services
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Submit SRS Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceSRSForm;
