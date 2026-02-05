import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Transform Your Ideas into
              <span className="text-indigo-600 block">Digital Reality</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ranbidge Solutions delivers cutting-edge web development, mobile apps, and digital marketing solutions 
              that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center"
              >
                Explore Services
              </Link>
              <a 
                href="https://wa.me/918247392437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors text-center"
              >
                Start Your Project
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-100 to-slate-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-slate-600 mt-1">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-slate-600 mt-1">Expert Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">24/7</div>
                  <div className="text-sm text-slate-600 mt-1">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Trusted by Leading Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-slate-400">TechCorp</div>
            <div className="text-2xl font-bold text-slate-400">InnovateLab</div>
            <div className="text-2xl font-bold text-slate-400">DigitalFirst</div>
            <div className="text-2xl font-bold text-slate-400">CloudScale</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
