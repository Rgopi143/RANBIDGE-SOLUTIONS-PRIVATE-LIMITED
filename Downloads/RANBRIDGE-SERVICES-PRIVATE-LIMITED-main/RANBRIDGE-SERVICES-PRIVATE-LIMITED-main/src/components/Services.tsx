import React, { useState } from 'react';
import { Code, Smartphone, Cloud, BarChart3, Shield, Zap } from 'lucide-react';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const services = [
    {
      icon: Code,
      title: 'Web Application Development',
      description: 'Custom web applications using modern technology stacks for scalable solutions.',
      features: ['MERN Stack', 'MEAN Stack', 'Full-stack solutions'],
      projects: [
        { name: 'Foodfly', description: 'Food Delivery Website', image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400', link: 'https://foodfly-restaurent.netlify.app' },
        { name: 'Artilink', description: 'A platform connecting artisans with businesses, enabling direct B2B trade, fair pricing, and AI-powered insights for the handmade industry.', image: 'https://images.pexels.com/photos/5974415/pexels-photo-5974415.jpeg?auto=compress&w=400', link: 'https://artilink.netlify.app/' },
        { name: 'Weather App', description: 'A simple weather application built with modern web technologies.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&w=400', link: 'https://prakashnarayanam.github.io/SIMPLE-WEATHER-APP/' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile applications for iOS and Android platforms.',
      features: ['Flutter', 'React Native', 'Kotlin'],
      projects: [
        { name: 'App Delta', description: 'A food delivery mobile app for iOS and Android.', image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&w=400', link: '#' },
        { name: 'App Epsilon', description: 'A fitness tracking app with social features.', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400', link: '#' },
        { name: 'App Zeta', description: 'A secure mobile banking application.', image: 'https://images.pexels.com/photos/210241/pexels-photo-210241.jpeg?auto=compress&w=400', link: '#' }
      ]
    },
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Intelligent chatbots, assistants, and content tools powered by AI and machine learning.',
      features: ['AI Chatbots', 'Virtual Assistants', 'Machine Learning'],
      projects: [
        { name: 'House Price Prediction', description: 'A machine learning project to predict house prices based on various features and datasets.', image: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&w=400', link: 'https://github.com/Rgopi143/predating-of-Home-prices-using-Machine-Learning.git' },
        { name: 'AI Facial Recognition', description: 'An AI-powered application for facial recognition using advanced machine learning techniques.', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=400', link: 'https://github.com/Rgopi143/Facial_Recognition_App.git' },
        { name: 'AI Lambda', description: 'A predictive analytics engine for business intelligence.', image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=400', link: '#' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.projects && (
                <button
                  className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  View Projects {expandedIndex === index ? '↓' : '→'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Projects Container Below All Cards */}
        {expandedIndex !== null && services[expandedIndex].projects && (
          <div className="mt-12 max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-blue-700">{services[expandedIndex].title} Projects</h4>
            <ul className="space-y-8">
              {services[expandedIndex].projects.map((project, i) => (
                <li key={i} className="flex items-center gap-6 border-b border-blue-100 pb-6 mb-6 last:border-b-0 last:mb-0">
                  {project.name === 'AI Facial Recognition' ? (
                    <div className="relative w-24 h-24">
                      <img src={project.image} alt={project.name} className="w-24 h-24 object-cover rounded-lg shadow" />
                      {/* Green square overlay simulating full face detection */}
                      <div style={{
                        position: 'absolute',
                        top: '6%',
                        left: '6%',
                        width: '88%',
                        height: '88%',
                        border: '3px solid #22c55e', // Tailwind green-500
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        pointerEvents: 'none',
                      }} />
                    </div>
                  ) : (
                    <img src={project.image} alt={project.name} className="w-24 h-24 object-cover rounded-lg shadow" />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg mb-1">{project.name}</div>
                    <div className="text-gray-600 text-sm mb-2">{project.description}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Click Here</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;