import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, Twitter, MapPin } from 'lucide-react';

const Footer = (props: { onPrivacyClick?: () => void; onTermsClick?: () => void; onCookieClick?: () => void; onGDPRClick?: () => void; onDocumentationClick?: () => void; onSystemStatusClick?: () => void; onCaseStudiesClick?: () => void; onCareersClick?: () => void }) => {
  // Data structure with specific href paths for links
  const footerLinks = {
    Company: [
      { text: 'About Us', href: '#team', type: 'scroll' },
      { text: 'Our Team', href: '#team', type: 'scroll' },
      { text: 'Careers', href: '#', type: 'modal' },
      { text: 'Case Studies', href: '#', type: 'modal' }
    ],
    Services: [
      { text: 'Web Development', href: '#services', type: 'scroll' },
      { text: 'Mobile Apps', href: '#services', type: 'scroll' },
      { text: 'AI Solutions', href: '#services', type: 'scroll' },
      { text: 'Cloud Services', href: '#services', type: 'scroll' }
    ],
    Support: [
      { text: 'Help Center', href: '#contact', type: 'scroll' },
      { text: 'Documentation', href: '#', type: 'modal' },
      { text: 'Contact Support', href: '#contact', type: 'scroll' },
      { text: 'System Status', href: '#', type: 'modal' }
    ],
    Legal: [
      { text: 'Privacy Policy', href: '#', type: 'modal' },
      { text: 'Terms of Service', href: '#', type: 'modal' },
      { text: 'Cookie Policy', href: '#', type: 'modal' },
      { text: 'GDPR', href: '#', type: 'modal' }
    ]
  };

  // Social links with names for accessibility labels
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578597456959', name: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/RanbridgePvtLtd', name: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ranbridge-services-private-limited-company-a98983376/', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ranbridgeserviceprivatelimited?igsh=MTYxOWU4NHJ0YzcwaA%3D%3D', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@ranbridgeservicesprivatelimite?si=-YmZRdTQ-K4OwR4V', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">RANBRIDGE SERVICES</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bridging innovation with impact through comprehensive IT services. 
              Your trusted partner for web development, mobile apps, AI solutions, and digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">ranbridgeserviceprivatelimited@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">ranbridgeservicesprivatelimite@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400">+91 8247392437</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400">Srinivasa Nagar, Narasaraopet, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.text}>
                    {link.type === 'scroll' ? (
                      <a
                        href={link.href}
                        onClick={e => {
                          e.preventDefault();
                          const targetId = link.href.substring(1); // Remove '#' from href
                          const el = document.getElementById(targetId);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    ) : link.type === 'modal' ? (
                      <button
                        onClick={
                          link.text === 'Case Studies' ? props.onCaseStudiesClick :
                          link.text === 'Careers' ? props.onCareersClick :
                          link.text === 'Documentation' ? props.onDocumentationClick :
                          link.text === 'System Status' ? props.onSystemStatusClick :
                          link.text === 'Privacy Policy' ? props.onPrivacyClick :
                          link.text === 'Terms of Service' ? props.onTermsClick :
                          link.text === 'Cookie Policy' ? props.onCookieClick :
                          link.text === 'GDPR' ? props.onGDPRClick :
                          undefined
                        }
                        className="text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
                        style={{ background: 'none', border: 'none' }}
                      >
                        {link.text}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RANBRIDGE SERVICES PRIVATE LIMITED. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group"
              >
                <social.icon size={16} className="text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;