
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handlePortalLogin = () => {
    navigate('/admin/login');
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 tracking-tight">RANBIDGE</span>
              <span className="text-indigo-600 font-medium text-xs block -mt-1 uppercase tracking-widest">Solutions</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/documentation" className="hover:text-indigo-600">Documentation</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
