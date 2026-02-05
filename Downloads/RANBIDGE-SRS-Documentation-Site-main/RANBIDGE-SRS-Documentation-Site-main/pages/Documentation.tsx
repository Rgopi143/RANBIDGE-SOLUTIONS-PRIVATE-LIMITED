import React, { useState } from 'react';

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: `
        <h3 class="text-xl font-semibold mb-4">Welcome to Ranbidge Solutions Documentation</h3>
        <p class="mb-4">This comprehensive guide will help you understand our services, processes, and how to get the most out of our solutions.</p>
        
        <h4 class="text-lg font-semibold mb-2">Quick Start Guide</h4>
        <ol class="list-decimal list-inside space-y-2 mb-6">
          <li>Browse our services to understand what we offer</li>
          <li>Contact us for a free consultation</li>
          <li>Receive a customized proposal</li>
          <li>Begin your project with our expert team</li>
        </ol>
        
        <h4 class="text-lg font-semibold mb-2">Prerequisites</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Clear understanding of your business requirements</li>
          <li>Budget allocation for your project</li>
          <li>Timeline expectations</li>
          <li>Key stakeholders identified</li>
        </ul>
      `
    },
    {
      id: 'services',
      title: 'Services Overview',
      content: `
        <h3 class="text-xl font-semibold mb-4">Our Service Portfolio</h3>
        <p class="mb-4">We offer a comprehensive range of technology services designed to meet diverse business needs.</p>
        
        <h4 class="text-lg font-semibold mb-2">Web Development Services</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Frontend Development:</strong> React, Vue.js, Angular, TypeScript</li>
          <li><strong>Backend Development:</strong> Node.js, Python, Java, .NET</li>
          <li><strong>Database Solutions:</strong> MySQL, PostgreSQL, MongoDB, Redis</li>
          <li><strong>Cloud Deployment:</strong> AWS, Google Cloud, Azure</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Mobile Development</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Native iOS:</strong> Swift, Objective-C</li>
          <li><strong>Native Android:</strong> Kotlin, Java</li>
          <li><strong>Cross-Platform:</strong> React Native, Flutter</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Consulting Services</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Technology strategy and roadmap planning</li>
          <li>System architecture design</li>
          <li>Performance optimization</li>
          <li>Security audits and compliance</li>
        </ul>
      `
    },
    {
      id: 'process',
      title: 'Development Process',
      content: `
        <h3 class="text-xl font-semibold mb-4">Our Development Methodology</h3>
        <p class="mb-4">We follow an agile development approach to ensure flexibility, transparency, and quality delivery.</p>
        
        <h4 class="text-lg font-semibold mb-2">Phase 1: Discovery & Planning</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Requirements gathering and analysis</li>
          <li>Technical feasibility assessment</li>
          <li>Project timeline and resource planning</li>
          <li>Risk assessment and mitigation strategies</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Phase 2: Design & Prototyping</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>UI/UX design and wireframing</li>
          <li>Interactive prototypes</li>
          <li>Design system creation</li>
          <li>User testing and feedback incorporation</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Phase 3: Development & Testing</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Sprint-based development cycles</li>
          <li>Continuous integration and deployment</li>
          <li>Automated testing and quality assurance</li>
          <li>Regular progress reviews and demos</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Phase 4: Deployment & Support</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Production deployment</li>
          <li>Performance monitoring</li>
          <li>Ongoing maintenance and support</li>
          <li>Training and documentation handover</li>
        </ul>
      `
    },
    {
      id: 'api',
      title: 'API Documentation',
      content: `
        <h3 class="text-xl font-semibold mb-4">API Integration Guide</h3>
        <p class="mb-4">Learn how to integrate with our APIs and services for seamless connectivity.</p>
        
        <h4 class="text-lg font-semibold mb-2">Authentication</h4>
        <div class="bg-slate-100 p-4 rounded-lg mb-4">
          <code class="text-sm">
            curl -X POST "https://api.ranbidge.com/auth/token" \<br/>
            &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
            &nbsp;&nbsp;-d '{"apiKey": "your-api-key", "secret": "your-secret"}'
          </code>
        </div>
        
        <h4 class="text-lg font-semibold mb-2">Common Endpoints</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>GET /api/v1/projects:</strong> List all projects</li>
          <li><strong>POST /api/v1/projects:</strong> Create new project</li>
          <li><strong>GET /api/v1/projects/{id}:</strong> Get project details</li>
          <li><strong>PUT /api/v1/projects/{id}:</strong> Update project</li>
          <li><strong>DELETE /api/v1/projects/{id}:</strong> Delete project</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Rate Limiting</h4>
        <p class="mb-4">API requests are limited to 1000 requests per hour per API key. Exceeding this limit will result in a 429 status code.</p>
        
        <h4 class="text-lg font-semibold mb-2">Error Handling</h4>
        <p>All API responses include appropriate HTTP status codes and error messages in JSON format.</p>
      `
    },
    {
      id: 'support',
      title: 'Support & Troubleshooting',
      content: `
        <h3 class="text-xl font-semibold mb-4">Get Help & Support</h3>
        <p class="mb-4">We're here to help you succeed with our solutions. Find answers to common questions and get support when you need it.</p>
        
        <h4 class="text-lg font-semibold mb-2">Support Channels</h4>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Email Support:</strong> support@ranbidge.com (24-48 hour response)</li>
          <li><strong>Phone Support:</strong> +91-8247392437 (Business hours: 9 AM - 6 PM IST)</li>
          <li><strong>Live Chat:</strong> Available on our website during business hours</li>
          <li><strong>Priority Support:</strong> Available for enterprise clients</li>
        </ul>
        
        <h4 class="text-lg font-semibold mb-2">Common Issues</h4>
        <div class="space-y-4 mb-4">
          <div>
            <h5 class="font-semibold">Q: How do I reset my password?</h5>
            <p>A: Click on "Forgot Password" on the login page and follow the instructions sent to your email.</p>
          </div>
          <div>
            <h5 class="font-semibold">Q: Why is my deployment failing?</h5>
            <p>A: Check your build logs, ensure all dependencies are installed, and verify environment variables.</p>
          </div>
          <div>
            <h5 class="font-semibold">Q: How can I upgrade my service plan?</h5>
            <p>A: Contact our sales team or use the upgrade option in your account dashboard.</p>
          </div>
        </div>
        
        <h4 class="text-lg font-semibold mb-2">Emergency Support</h4>
        <p>For critical issues affecting production systems, call our emergency hotline: +91-8247392437 (Available 24/7 for enterprise clients)</p>
      `
    }
  ];

  const activeSection = documentationSections.find(section => section.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Documentation</h1>
          <p className="text-xl text-slate-600">
            Comprehensive guides and resources to help you make the most of our services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <nav className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {documentationSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveTab(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === section.id
                          ? 'bg-indigo-100 text-indigo-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {activeSection?.title}
              </h2>
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: activeSection?.content || '' }}
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              → Download API SDK
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              → Video Tutorials
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              → Community Forum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
