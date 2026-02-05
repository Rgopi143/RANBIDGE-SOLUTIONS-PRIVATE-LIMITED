import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
      icon: '🌐',
      srsPath: '/web-development-srs'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Optimization'],
      icon: '📱',
      srsPath: '/mobile-development-srs'
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business needs with scalable architecture.',
      features: ['Custom Software', 'API Development', 'Cloud Solutions', 'DevOps Services'],
      icon: '💻',
      srsPath: '/software-development-srs'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      icon: '🎨',
      srsPath: '/ui-ux-design-srs'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media Marketing', 'PPC Campaigns'],
      icon: '📈',
      srsPath: '/digital-marketing-srs'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help businesses leverage technology for growth and efficiency.',
      features: ['Technology Strategy', 'System Integration', 'Cloud Migration', 'Security Audits'],
      icon: '🔧',
      srsPath: '/it-consulting-srs'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age. 
            From web development to digital marketing, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link
                  to={service.srsPath}
                  className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center"
                >
                  View SRS
                </Link>
                <Link 
                  to="/contact" 
                  className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
