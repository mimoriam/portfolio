export interface AppProject {
  id: string;
  name: string;
  publicTitle: string;
  packageId: string;
  playStoreUrl: string;
  category: string;
  rating?: number;
  ratingCount?: number;
  downloadsBadge?: string;
  tagline: string;
  oneLiner: string;
  icon: string;
  screenshots: string[];
  featured: boolean;
  accentColor: string;
  badgeText?: string;
  platform: 'Android' | 'Cross-Platform (Flutter)';
  tags: string[];
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    technicalArchitecture: string;
    engineeringHighlights: string[];
    keyFeatures: string[];
    role: string;
    techStack: string[];
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  impactHighlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface PublicationItem {
  title: string;
  venue: string;
  date: string;
  doi: string;
  doiUrl: string;
  description: string;
  highlights: string[];
}

export interface ExpertiseItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  codeSnippet?: string;
}

export interface LifecyclePhase {
  step: string;
  title: string;
  description: string;
  capabilities: string[];
}
