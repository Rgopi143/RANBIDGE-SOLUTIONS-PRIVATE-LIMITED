export interface ServiceChecklistConfig {
  serviceId: string;
  serviceName: string;
  sections: {
    id: string;
    title: string;
    type: 'client-details' | 'checkboxes' | 'radio' | 'text' | 'tech-stack' | 'textarea';
    options?: string[];
    subcategories?: {
      title: string;
      options: string[];
    }[];
    required?: boolean;
  }[];
}

export const serviceChecklistConfigs: ServiceChecklistConfig[] = [
  {
    serviceId: 'web-development',
    serviceName: 'Web Development',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'project-type',
        title: '2. Project Type',
        type: 'radio',
        options: ['Website', 'Web Application', 'E-commerce Platform', 'Portal', 'CMS', 'Custom Web Solution']
      },
      {
        id: 'website-type',
        title: '3. Website Type',
        type: 'checkboxes',
        options: [
          'Company / Corporate Website',
          'Portfolio Website',
          'E-commerce Website',
          'Educational / Internship Website',
          'Blog / News Website',
          'Custom Website'
        ]
      },
      {
        id: 'pages-required',
        title: '4. Pages Required',
        type: 'checkboxes',
        options: [
          'Home', 'About Us', 'Services', 'Internship / Careers',
          'Projects / Portfolio', 'Blog', 'Contact Us', 'FAQ',
          'Privacy Policy', 'Terms & Conditions', 'Gallery', 'Team'
        ]
      },
      {
        id: 'design-preferences',
        title: '5. Design Preferences',
        type: 'checkboxes',
        options: [
          'Simple & Professional', 'Modern UI', 'Creative / Animated',
          'Corporate Theme', 'Dark Mode', 'Light Mode', 'Mobile-First Design'
        ]
      },
      {
        id: 'functional-requirements',
        title: '6. Functional Requirements',
        type: 'checkboxes',
        options: [
          'Contact Form', 'Inquiry Form', 'Internship Application Form',
          'Resume Upload', 'Admin Panel', 'Login / Signup',
          'Email Notifications', 'WhatsApp Integration',
          'Google Maps Integration', 'Chatbot', 'Payment Gateway'
        ]
      },
      {
        id: 'technology-stack',
        title: '7. Technology Preference',
        type: 'tech-stack',
        subcategories: [
          {
            title: 'Frontend',
            options: ['HTML / CSS / JavaScript', 'React.js', 'Next.js', 'Vue.js', 'Angular']
          },
          {
            title: 'Backend',
            options: ['Node.js', 'Python Flask', 'Django', 'PHP', '.NET', 'Java']
          },
          {
            title: 'Database',
            options: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase']
          }
        ]
      },
      {
        id: 'security-requirements',
        title: '8. Security Requirements',
        type: 'checkboxes',
        options: [
          'SSL Certificate', 'Secure Admin Login', 'Data Encryption',
          'CAPTCHA on Forms', 'Two-Factor Authentication', 'GDPR Compliance'
        ]
      },
      {
        id: 'seo-marketing',
        title: '9. SEO & Marketing',
        type: 'checkboxes',
        options: [
          'Basic SEO', 'Google Analytics', 'Meta Tags',
          'Sitemap', 'Social Media Integration', 'Google Search Console'
        ]
      },
      {
        id: 'hosting-domain',
        title: '10. Hosting & Domain',
        type: 'checkboxes',
        options: [
          'Client Has Domain', 'Domain Required', 'Shared Hosting',
          'Cloud Hosting', 'Deployment on Render / AWS', 'VPS Hosting'
        ]
      },
      {
        id: 'maintenance-support',
        title: '11. Maintenance & Support',
        type: 'radio',
        options: ['3 Months', '6 Months', '1 Year', 'On-demand Support']
      },
      {
        id: 'additional-requirements',
        title: '12. Additional Requirements',
        type: 'textarea'
      }
    ]
  },
  {
    serviceId: 'mobile-development',
    serviceName: 'Mobile App Development',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'platform-selection',
        title: '2. Platform Selection',
        type: 'checkboxes',
        options: ['iOS', 'Android', 'Cross-Platform (React Native)', 'Cross-Platform (Flutter)', 'Progressive Web App']
      },
      {
        id: 'app-category',
        title: '3. App Category',
        type: 'radio',
        options: ['Business', 'Education', 'Entertainment', 'Health & Fitness', 'Social', 'E-commerce', 'Productivity', 'Custom']
      },
      {
        id: 'core-features',
        title: '4. Core Features',
        type: 'checkboxes',
        options: [
          'User Authentication', 'Push Notifications', 'Offline Mode',
          'GPS & Location Services', 'Camera Integration', 'Social Media Login',
          'In-App Purchases', 'Real-time Chat', 'File Upload/Download'
        ]
      },
      {
        id: 'ui-ux-requirements',
        title: '5. UI/UX Requirements',
        type: 'checkboxes',
        options: [
          'Material Design', 'Human Interface Guidelines', 'Custom Design',
          'Dark/Light Theme', 'Animations', 'Gesture Controls'
        ]
      },
      {
        id: 'technology-stack',
        title: '6. Technology Stack',
        type: 'tech-stack',
        subcategories: [
          {
            title: 'iOS Development',
            options: ['Swift', 'Objective-C', 'React Native', 'Flutter']
          },
          {
            title: 'Android Development',
            options: ['Kotlin', 'Java', 'React Native', 'Flutter']
          },
          {
            title: 'Backend',
            options: ['Node.js', 'Firebase', 'AWS Amplify', 'Python', 'Java']
          }
        ]
      },
      {
        id: 'api-integrations',
        title: '7. API Integrations',
        type: 'checkboxes',
        options: [
          'Google Maps API', 'Facebook SDK', 'Google Analytics',
          'Payment Gateway', 'Cloud Storage', 'Third-Party APIs'
        ]
      },
      {
        id: 'security-requirements',
        title: '8. Security Requirements',
        type: 'checkboxes',
        options: [
          'Biometric Authentication', 'Encryption', 'Secure API',
          'App Store Security Guidelines', 'Data Privacy Compliance'
        ]
      },
      {
        id: 'app-store-deployment',
        title: '9. App Store Deployment',
        type: 'checkboxes',
        options: [
          'Apple App Store', 'Google Play Store', 'Amazon Appstore',
          'Enterprise Distribution', 'Web App Deployment'
        ]
      },
      {
        id: 'maintenance-support',
        title: '10. Maintenance & Support',
        type: 'radio',
        options: ['3 Months', '6 Months', '1 Year', 'On-demand Support']
      },
      {
        id: 'additional-requirements',
        title: '11. Additional Requirements',
        type: 'textarea'
      }
    ]
  },
  {
    serviceId: 'software-development',
    serviceName: 'Software Development',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'software-type',
        title: '2. Software Type',
        type: 'radio',
        options: ['Desktop Application', 'Enterprise Software', 'SaaS Platform', 'API Service', 'Custom Solution']
      },
      {
        id: 'business-domain',
        title: '3. Business Domain',
        type: 'checkboxes',
        options: [
          'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing',
          'Logistics', 'Real Estate', 'Entertainment', 'Government'
        ]
      },
      {
        id: 'core-modules',
        title: '4. Core Modules',
        type: 'checkboxes',
        options: [
          'User Management', 'Role-Based Access', 'Dashboard',
          'Reporting System', 'Workflow Automation', 'Data Analytics',
          'Inventory Management', 'Billing System', 'Notification System'
        ]
      },
      {
        id: 'architecture-requirements',
        title: '5. Architecture Requirements',
        type: 'checkboxes',
        options: [
          'Microservices', 'Monolithic', 'Serverless', 'Event-Driven',
          'Multi-tenant', 'Scalable Architecture', 'High Availability'
        ]
      },
      {
        id: 'technology-stack',
        title: '6. Technology Stack',
        type: 'tech-stack',
        subcategories: [
          {
            title: 'Frontend',
            options: ['React', 'Angular', 'Vue.js', 'Electron', 'WPF', 'JavaFX']
          },
          {
            title: 'Backend',
            options: ['.NET', 'Java Spring', 'Python Django', 'Node.js', 'PHP Laravel']
          },
          {
            title: 'Database',
            options: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle']
          }
        ]
      },
      {
        id: 'integration-requirements',
        title: '7. Integration Requirements',
        type: 'checkboxes',
        options: [
          'Third-Party APIs', 'Legacy Systems', 'ERP Integration',
          'CRM Integration', 'Payment Gateways', 'Cloud Services'
        ]
      },
      {
        id: 'deployment-requirements',
        title: '8. Deployment Requirements',
        type: 'checkboxes',
        options: [
          'Cloud Deployment', 'On-Premise', 'Hybrid',
          'Containerization', 'CI/CD Pipeline', 'Auto-scaling'
        ]
      },
      {
        id: 'security-compliance',
        title: '9. Security & Compliance',
        type: 'checkboxes',
        options: [
          'ISO 27001', 'SOC 2', 'GDPR', 'HIPAA',
          'Data Encryption', 'Audit Logging', 'Access Control'
        ]
      },
      {
        id: 'maintenance-support',
        title: '10. Maintenance & Support',
        type: 'radio',
        options: ['3 Months', '6 Months', '1 Year', 'On-demand Support']
      },
      {
        id: 'additional-requirements',
        title: '11. Additional Requirements',
        type: 'textarea'
      }
    ]
  },
  {
    serviceId: 'ui-ux-design',
    serviceName: 'UI/UX Design',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'project-scope',
        title: '2. Project Scope',
        type: 'radio',
        options: ['Complete Redesign', 'New Design', 'Design Improvement', 'Design System Creation']
      },
      {
        id: 'target-platforms',
        title: '3. Target Platforms',
        type: 'checkboxes',
        options: [
          'Web Application', 'Mobile App (iOS)', 'Mobile App (Android)',
          'Desktop Application', 'Tablet Design', 'Responsive Design'
        ]
      },
      {
        id: 'design-deliverables',
        title: '4. Design Deliverables',
        type: 'checkboxes',
        options: [
          'User Research', 'Personas', 'User Journey Maps',
          'Wireframes', 'Mockups', 'Interactive Prototypes',
          'Design System', 'Style Guide', 'Asset Export'
        ]
      },
      {
        id: 'design-style',
        title: '5. Design Style Preferences',
        type: 'checkboxes',
        options: [
          'Minimalist', 'Corporate', 'Creative', 'Modern',
          'Classic', 'Trendy', 'Custom Brand Style'
        ]
      },
      {
        id: 'color-preferences',
        title: '6. Color Preferences',
        type: 'checkboxes',
        options: [
          'Brand Colors', 'Light Theme', 'Dark Theme',
          'High Contrast', 'Pastel Colors', 'Vibrant Colors'
        ]
      },
      {
        id: 'typography',
        title: '7. Typography Requirements',
        type: 'checkboxes',
        options: [
          'Custom Fonts', 'Web Safe Fonts', 'Google Fonts',
          'System Fonts', 'Multi-language Support'
        ]
      },
      {
        id: 'accessibility',
        title: '8. Accessibility Requirements',
        type: 'checkboxes',
        options: [
          'WCAG 2.1 AA', 'Screen Reader Support', 'Keyboard Navigation',
          'Color Blindness Friendly', 'Large Text Support'
        ]
      },
      {
        id: 'tools-and-software',
        title: '9. Design Tools & Software',
        type: 'checkboxes',
        options: [
          'Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop',
          'Adobe Illustrator', 'Framer', 'InVision'
        ]
      },
      {
        id: 'deliverable-format',
        title: '10. Deliverable Format',
        type: 'checkboxes',
        options: [
          'Figma Files', 'Sketch Files', 'Adobe XD Files',
          'PDF Export', 'PNG Assets', 'SVG Icons'
        ]
      },
      {
        id: 'additional-requirements',
        title: '11. Additional Requirements',
        type: 'textarea'
      }
    ]
  },
  {
    serviceId: 'digital-marketing',
    serviceName: 'Digital Marketing',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'marketing-goals',
        title: '2. Marketing Goals',
        type: 'checkboxes',
        options: [
          'Brand Awareness', 'Lead Generation', 'Sales Growth',
          'Website Traffic', 'Social Media Engagement', 'Customer Retention'
        ]
      },
      {
        id: 'target-audience',
        title: '3. Target Audience',
        type: 'checkboxes',
        options: [
          'B2B', 'B2C', 'Local Market', 'National Market',
          'International Market', 'Specific Demographics'
        ]
      },
      {
        id: 'marketing-services',
        title: '4. Marketing Services',
        type: 'checkboxes',
        options: [
          'SEO Optimization', 'PPC Advertising', 'Social Media Marketing',
          'Content Marketing', 'Email Marketing', 'Influencer Marketing'
        ]
      },
      {
        id: 'social-media-platforms',
        title: '5. Social Media Platforms',
        type: 'checkboxes',
        options: [
          'Facebook', 'Instagram', 'Twitter', 'LinkedIn',
          'YouTube', 'TikTok', 'Pinterest', 'Reddit'
        ]
      },
      {
        id: 'content-types',
        title: '6. Content Types',
        type: 'checkboxes',
        options: [
          'Blog Posts', 'Videos', 'Infographics', 'Case Studies',
          'Whitepapers', 'E-books', 'Podcasts', 'Webinars'
        ]
      },
      {
        id: 'analytics-tools',
        title: '7. Analytics & Tools',
        type: 'checkboxes',
        options: [
          'Google Analytics', 'Google Search Console', 'Facebook Insights',
          'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp'
        ]
      },
      {
        id: 'budget-range',
        title: '8. Monthly Budget Range',
        type: 'radio',
        options: ['$500-$1000', '$1000-$3000', '$3000-$5000', '$5000-$10000', '$10000+']
      },
      {
        id: 'campaign-duration',
        title: '9. Campaign Duration',
        type: 'radio',
        options: ['3 Months', '6 Months', '1 Year', 'Ongoing']
      },
      {
        id: 'reporting-requirements',
        title: '10. Reporting Requirements',
        type: 'checkboxes',
        options: [
          'Monthly Reports', 'Weekly Reports', 'Real-time Dashboard',
          'Custom Reports', 'Performance Analysis'
        ]
      },
      {
        id: 'additional-requirements',
        title: '11. Additional Requirements',
        type: 'textarea'
      }
    ]
  },
  {
    serviceId: 'it-consulting',
    serviceName: 'IT Consulting',
    sections: [
      {
        id: 'client-details',
        title: '1. Client Details',
        type: 'client-details',
        required: true
      },
      {
        id: 'consulting-type',
        title: '2. Consulting Type',
        type: 'radio',
        options: [
          'Technology Assessment', 'System Architecture', 'Digital Transformation',
          'Process Optimization', 'Security Audit', 'Cloud Migration'
        ]
      },
      {
        id: 'current-infrastructure',
        title: '3. Current Infrastructure',
        type: 'checkboxes',
        options: [
          'On-Premise Servers', 'Cloud Services', 'Hybrid Setup',
          'Legacy Systems', 'Multiple Locations', 'Remote Workforce'
        ]
      },
      {
        id: 'business-challenges',
        title: '4. Business Challenges',
        type: 'checkboxes',
        options: [
          'Scalability Issues', 'Security Concerns', 'High Maintenance Costs',
          'Outdated Technology', 'Integration Problems', 'Performance Issues'
        ]
      },
      {
        id: 'consulting-scope',
        title: '5. Consulting Scope',
        type: 'checkboxes',
        options: [
          'Technology Roadmap', 'System Integration', 'Process Improvement',
          'Staff Training', 'Vendor Selection', 'Project Management'
        ]
      },
      {
        id: 'technology-focus',
        title: '6. Technology Focus Areas',
        type: 'checkboxes',
        options: [
          'Cloud Computing', 'Cybersecurity', 'Data Analytics',
          'AI/ML Implementation', 'IoT Solutions', 'DevOps'
        ]
      },
      {
        id: 'compliance-requirements',
        title: '7. Compliance Requirements',
        type: 'checkboxes',
        options: [
          'GDPR', 'HIPAA', 'SOC 2', 'ISO 27001',
          'PCI DSS', 'Industry-specific Regulations'
        ]
      },
      {
        id: 'team-size',
        title: '8. Organization Size',
        type: 'radio',
        options: ['Startup (1-10)', 'Small (11-50)', 'Medium (51-200)', 'Large (200+)']
      },
      {
        id: 'timeline',
        title: '9. Project Timeline',
        type: 'radio',
        options: ['1-3 Months', '3-6 Months', '6-12 Months', '12+ Months']
      },
      {
        id: 'deliverables',
        title: '10. Expected Deliverables',
        type: 'checkboxes',
        options: [
          'Assessment Report', 'Architecture Diagrams', 'Implementation Plan',
          'Cost Analysis', 'Risk Assessment', 'Training Materials'
        ]
      },
      {
        id: 'additional-requirements',
        title: '11. Additional Requirements',
        type: 'textarea'
      }
    ]
  }
];
