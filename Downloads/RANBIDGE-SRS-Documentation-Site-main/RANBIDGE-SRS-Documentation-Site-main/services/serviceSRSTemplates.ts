export interface ServiceSRSTemplate {
  serviceId: string;
  serviceName: string;
  sections: {
    title: string;
    items: {
      id: string;
      text: string;
      checked: boolean;
    }[];
  }[];
}

export const serviceSRSTemplates: ServiceSRSTemplate[] = [
  {
    serviceId: 'web-development',
    serviceName: 'Web Development',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'This document outlines the Software Requirements Specification (SRS) for web development projects at Ranbidge Solutions Private Limited.',
          'The purpose is to define the functional and non-functional requirements for custom web applications.',
          'This SRS serves as the foundation for project planning, development, and quality assurance.'
        ]
      },
      {
        title: 'Functional Requirements',
        content: [
          'User Authentication and Authorization System',
          'Responsive User Interface Design',
          'Content Management System (CMS)',
          'Database Integration and Management',
          'API Development and Integration',
          'Search Functionality',
          'User Profile Management',
          'Admin Dashboard',
          'Reporting and Analytics',
          'Email Notification System'
        ]
      },
      {
        title: 'Technical Specifications',
        content: [
          'Frontend: React.js, Vue.js, or Angular',
          'Backend: Node.js, Python (Django/Flask), or .NET',
          'Database: MySQL, PostgreSQL, or MongoDB',
          'Cloud Hosting: AWS, Google Cloud, or Azure',
          'Version Control: Git',
          'CI/CD Pipeline: Jenkins or GitHub Actions',
          'Containerization: Docker',
          'Load Balancing and Scaling'
        ]
      },
      {
        title: 'Design Requirements',
        content: [
          'Mobile-First Responsive Design',
          'Cross-Browser Compatibility (Chrome, Firefox, Safari, Edge)',
          'Accessibility Compliance (WCAG 2.1 AA)',
          'Loading Speed Optimization',
          'SEO-Friendly Structure',
          'Modern UI/UX Design Principles',
          'Brand Guidelines Implementation',
          'Interactive Elements and Animations'
        ]
      },
      {
        title: 'Security Requirements',
        content: [
          'HTTPS Implementation',
          'SQL Injection Prevention',
          'Cross-Site Scripting (XSS) Protection',
          'Data Encryption at Rest and in Transit',
          'Regular Security Audits',
          'Compliance with GDPR/CCPA',
          'Secure Password Storage',
          'Session Management',
          'API Rate Limiting',
          'Backup and Recovery Systems'
        ]
      }
    ]
  },
  {
    serviceId: 'mobile-development',
    serviceName: 'Mobile App Development',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Software Requirements Specification for mobile application development projects.',
          'Covers native iOS, Android, and cross-platform mobile applications.',
          'Defines requirements for mobile-first user experiences and device-specific optimizations.'
        ]
      },
      {
        title: 'Functional Requirements',
        content: [
          'Mobile User Authentication',
          'Push Notification System',
          'Offline Functionality',
          'GPS and Location Services',
          'Camera and Media Integration',
          'Biometric Authentication',
          'Social Media Integration',
          'In-App Purchases',
          'Real-time Synchronization',
          'App Store Deployment'
        ]
      },
      {
        title: 'Technical Specifications',
        content: [
          'iOS: Swift or Objective-C',
          'Android: Kotlin or Java',
          'Cross-Platform: React Native or Flutter',
          'Backend API Integration',
          'Local Database: SQLite or Realm',
          'Cloud Storage Integration',
          'Analytics Integration',
          'Crash Reporting',
          'Performance Monitoring',
          'App Distribution Systems'
        ]
      },
      {
        title: 'Platform Requirements',
        content: [
          'iOS 13+ Compatibility',
          'Android 8+ Compatibility',
          'App Store Guidelines Compliance',
          'Google Play Store Requirements',
          'Device Size Adaptation',
          'Dark Mode Support',
          'Accessibility Features',
          'Battery Optimization',
          'Memory Management',
          'Network Connectivity Handling'
        ]
      }
    ]
  },
  {
    serviceId: 'software-development',
    serviceName: 'Software Development',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'Comprehensive SRS for enterprise software development projects.',
          'Covers desktop applications, enterprise systems, and custom software solutions.',
          'Focuses on scalability, security, and integration capabilities.'
        ]
      },
      {
        title: 'Functional Requirements',
        content: [
          'Multi-User Support and Role Management',
          'Workflow Automation',
          'Data Import/Export Functionality',
          'Integration with Third-Party Systems',
          'Custom Reporting Engine',
          'Audit Trail and Logging',
          'Batch Processing Capabilities',
          'Real-time Data Processing',
          'Backup and Restore Systems',
          'System Configuration Management'
        ]
      },
      {
        title: 'Technical Architecture',
        content: [
          'Microservices Architecture',
          'Service-Oriented Architecture (SOA)',
          'Message Queue Systems',
          'Load Balancing Configuration',
          'Database Clustering',
          'Caching Strategies',
          'API Gateway Implementation',
          'Monitoring and Alerting',
          'Disaster Recovery Planning',
          'High Availability Setup'
        ]
      },
      {
        title: 'Integration Requirements',
        content: [
          'RESTful API Development',
          'GraphQL Support',
          'Database Integration',
          'LDAP/Active Directory Integration',
          'Email System Integration',
          'Payment Gateway Integration',
          'Cloud Service Integration',
          'Third-Party API Integration',
          'Legacy System Migration',
          'Data Synchronization'
        ]
      }
    ]
  },
  {
    serviceId: 'ui-ux-design',
    serviceName: 'UI/UX Design',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'SRS for UI/UX design projects covering user research, wireframing, and prototyping.',
          'Focuses on creating intuitive and engaging digital experiences.',
          'Defines requirements for design systems and user-centered design processes.'
        ]
      },
      {
        title: 'Design Requirements',
        content: [
          'User Research and Persona Development',
          'Information Architecture Design',
          'Wireframe Creation',
          'Interactive Prototyping',
          'Visual Design System',
          'Component Library Development',
          'Design Pattern Documentation',
          'Usability Testing Framework',
          'Accessibility Design Standards',
          'Brand Identity Integration'
        ]
      },
      {
        title: 'User Experience Requirements',
        content: [
          'User Journey Mapping',
          'Interaction Design Patterns',
          'Navigation Structure Design',
          'Content Strategy Development',
          'Mobile-First Design Approach',
          'Responsive Design Implementation',
          'Loading State Design',
          'Error State Handling',
          'Onboarding Experience Design',
          'User Feedback Mechanisms'
        ]
      },
      {
        title: 'Technical Design Specifications',
        content: [
          'Design Tool Requirements (Figma, Sketch, Adobe XD)',
          'Design Handoff Process',
          'Design Token System',
          'CSS Framework Integration',
          'Component-Based Design',
          'Design Version Control',
          'Collaboration Tools Setup',
          'Design Documentation',
          'Style Guide Creation',
          'Design Asset Management'
        ]
      }
    ]
  },
  {
    serviceId: 'digital-marketing',
    serviceName: 'Digital Marketing',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'SRS for digital marketing platforms and campaign management systems.',
          'Covers SEO tools, social media management, and analytics platforms.',
          'Focuses on automation, reporting, and multi-channel integration.'
        ]
      },
      {
        title: 'Marketing Platform Requirements',
        content: [
          'Campaign Management System',
          'Email Marketing Automation',
          'Social Media Scheduling',
          'SEO Analysis Tools',
          'Content Management System',
          'Lead Generation Forms',
          'A/B Testing Framework',
          'Marketing Analytics Dashboard',
          'Customer Relationship Management',
          'Marketing Automation Workflows'
        ]
      },
      {
        title: 'Analytics Requirements',
        content: [
          'Real-time Analytics Dashboard',
          'Conversion Tracking',
          'User Behavior Analysis',
          'Traffic Source Monitoring',
          'ROI Calculation Tools',
          'Custom Report Generation',
          'Data Visualization',
          'Performance Metrics Tracking',
          'Competitor Analysis Tools',
          'Marketing Attribution Modeling'
        ]
      },
      {
        title: 'Integration Requirements',
        content: [
          'Google Analytics Integration',
          'Social Media API Integration',
          'Email Service Provider Integration',
          'CRM System Integration',
          'Payment Gateway Integration',
          'Third-Party Marketing Tools',
          'Webhook Support',
          'Data Import/Export',
          'API Rate Limiting',
          'Data Synchronization'
        ]
      }
    ]
  },
  {
    serviceId: 'it-consulting',
    serviceName: 'IT Consulting',
    sections: [
      {
        title: 'Project Overview',
        content: [
          'SRS for IT consulting projects and system optimization initiatives.',
          'Covers technology assessment, system integration, and consulting deliverables.',
          'Focuses on strategic planning and implementation roadmaps.'
        ]
      },
      {
        title: 'Consulting Service Requirements',
        content: [
          'Technology Assessment Framework',
          'System Architecture Review',
          'Performance Analysis Tools',
          'Security Audit Systems',
          'Compliance Checking Framework',
          'Cloud Migration Planning',
          'Digital Transformation Roadmap',
          'Cost-Benefit Analysis Tools',
          'Risk Assessment Framework',
          'Implementation Planning Systems'
        ]
      },
      {
        title: 'Documentation Requirements',
        content: [
          'Technical Documentation System',
          'Process Flow Documentation',
          'System Architecture Diagrams',
          'Best Practices Guidelines',
          'Training Material Development',
          'Knowledge Base Management',
          'Change Management Documentation',
          'Project Reporting Tools',
          'Executive Dashboard',
          'Compliance Reporting'
        ]
      },
      {
        title: 'Implementation Requirements',
        content: [
          'Project Management Tools',
          'Resource Planning Systems',
          'Timeline Tracking',
          'Milestone Management',
          'Quality Assurance Framework',
          'Testing Protocols',
          'Deployment Planning',
          'Training Management System',
          'Support Ticket System',
          'Continuous Improvement Framework'
        ]
      }
    ]
  }
];
