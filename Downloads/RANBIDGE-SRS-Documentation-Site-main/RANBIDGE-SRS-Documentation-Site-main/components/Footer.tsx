
import React, { useState } from 'react';

interface FooterData {
  companyName: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  privacyPolicy: string;
  termsOfService: string;
}

const Footer: React.FC = () => {
  const [footerData] = useState<FooterData>({
    companyName: 'RANBIDGE SOLUTIONS PRIVATE LIMITED',
    description: 'A premier technology solutions provider helping businesses transform their digital presence through innovative web and software engineering.',
    email: 'support@ranbidge.com',
    phone: '+91-8247392437',
    location: 'Narasaraopet, India',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  });


  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-slate-800">{footerData.companyName}</span>
            </div>
              <p className="text-slate-500 text-sm max-w-md">{footerData.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Contact Us</h4>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>
                {footerData.email}
              </li>
              <li>
                {footerData.phone}
              </li>
              <li>
                {footerData.location}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>
                  <a href="#" className="hover:text-indigo-600">{footerData.privacyPolicy}</a>
              </li>
              <li>
                  <a href="#" className="hover:text-indigo-600">{footerData.termsOfService}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
