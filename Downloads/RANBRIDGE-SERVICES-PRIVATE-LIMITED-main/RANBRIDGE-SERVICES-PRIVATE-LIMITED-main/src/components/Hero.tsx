import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Modern office building"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Bridging Innovation
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 block">
            with Impact
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay-1">
          Complete IT services and digital solutions - from web and mobile development to AI-powered platforms and cloud infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-emerald-500 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-orange-500 rounded-full opacity-20 animate-float-delay-2"></div>
    </section>
  );
};

export default Hero;