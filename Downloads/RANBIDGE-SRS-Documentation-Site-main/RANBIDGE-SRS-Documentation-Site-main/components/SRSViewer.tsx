
import React from 'react';
import { SRSData } from '../types';

interface SRSViewerProps {
  markdown: string;
  data: SRSData;
  onReset: () => void;
}

const SRSViewer: React.FC<SRSViewerProps> = ({ markdown, data, onReset }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-6">
        <div className="bg-indigo-600 px-6 py-4 flex items-center justify-between text-white print:hidden">
          <div>
            <h2 className="text-lg font-bold">Generated Documentation</h2>
            <p className="text-xs text-indigo-100 uppercase tracking-widest font-medium">Software Requirements Specification</p>
          </div>
          <div className="flex space-x-3">
            <button onClick={handlePrint} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Print / Save PDF
            </button>
            <button onClick={onReset} className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              New Draft
            </button>
          </div>
        </div>

        <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600">
          <div className="mb-12 border-b-2 border-slate-100 pb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">SRS DOCUMENT</h1>
                <p className="text-indigo-600 font-bold">Ranbidge Solutions Private Limited</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Document Date</p>
                <p className="text-lg font-bold text-slate-800">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-slate-400 uppercase font-bold text-[10px] mb-2 tracking-widest">Prepared For</p>
                <p className="font-bold text-slate-800 text-lg">{data.client.clientName}</p>
                <p className="text-slate-600">{data.client.companyName}</p>
                <p className="text-slate-600 mt-1">{data.client.email}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-slate-400 uppercase font-bold text-[10px] mb-2 tracking-widest">Project Reference</p>
                <p className="font-bold text-slate-800 text-lg">#{Math.floor(Math.random() * 900000) + 100000}</p>
                <p className="text-slate-600">Type: {data.client.projectType}</p>
                <p className="text-slate-600 mt-1">Status: Requirement Draft</p>
              </div>
            </div>
          </div>

          <div className="markdown-content whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
            {markdown}
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-widest text-center">12. APPROVAL & SIGN-OFF</h3>
            <div className="grid grid-cols-2 gap-12 mt-8">
              <div className="border-t border-slate-300 pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Client Authorization</p>
                <div className="flex flex-col space-y-2">
                  <div className="h-px bg-slate-200 w-full mb-1"></div>
                  <p className="text-sm text-slate-700">{data.client.clientName}</p>
                  <p className="text-[10px] text-slate-400">Authorized Signatory, {data.client.companyName}</p>
                </div>
              </div>
              <div className="border-t border-slate-300 pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Service Provider Approval</p>
                <div className="flex flex-col space-y-2">
                  <div className="h-px bg-slate-200 w-full mb-1"></div>
                  <p className="text-sm text-slate-700">Project Manager</p>
                  <p className="text-[10px] text-slate-400">Ranbidge Solutions Private Limited</p>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-12 italic">
              * This document is generated electronically based on requirements collected via the Ranbidge SRS Portal. 
              The requirements are subject to technical feasibility review by the engineering department.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @media print {
          body { background: white; }
          .container { max-width: 100%; width: 100%; margin: 0; padding: 0; }
          .shadow-xl { border: none; box-shadow: none; }
          .prose { max-width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SRSViewer;
