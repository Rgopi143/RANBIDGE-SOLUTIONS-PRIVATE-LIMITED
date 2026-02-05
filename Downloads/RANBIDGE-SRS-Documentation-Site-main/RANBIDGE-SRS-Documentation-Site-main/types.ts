
export interface ClientDetails {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: 'Website' | 'Web App' | 'Portal';
}

export interface SRSData {
  client: ClientDetails;
  websiteType: string[];
  pages: string[];
  designPreferences: string[];
  functionalRequirements: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  security: string[];
  marketing: string[];
  hosting: string[];
  maintenance: string;
  additionalNotes: string;
}

export enum FormStep {
  CLIENT_INFO = 0,
  PROJECT_TYPE = 1,
  FUNCTIONALITY = 2,
  TECH_STACK = 3,
  REVIEW = 4
}
