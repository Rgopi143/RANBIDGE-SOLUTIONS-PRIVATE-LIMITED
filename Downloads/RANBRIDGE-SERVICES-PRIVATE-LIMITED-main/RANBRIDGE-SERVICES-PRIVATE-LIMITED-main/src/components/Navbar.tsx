import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const externalLink = {
    url: 'https://interns-ui-for-showing-cources.onrender.com/',
    label: 'Visit Courses',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinkClasses = (isMobile = false) =>
    `px-3 py-2 font-medium transition-colors duration-300 capitalize ${
      isMobile
        ? 'block text-left text-base text-gray-700 hover:text-blue-500 w-full'
        : `text-sm ${
            scrolled ? 'text-gray-700' : 'text-white'
          } hover:text-blue-500`
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://ik.imagekit.io/76tcs71lul/company%20Logo.png?updatedAt=1760552763272"
              alt="RANBRIDGE Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navLinkClasses()}
              >
                {item.label}
              </button>
            ))}
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClasses()}
            >
              {externalLink.label}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navLinkClasses(true)}
              >
                {item.label}
              </button>
            ))}
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClasses(true)}
            >
              {externalLink.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  
