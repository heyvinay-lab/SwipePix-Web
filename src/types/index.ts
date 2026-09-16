export interface ProductFeature {
  id: string;
  name: string;
  tagline: string;
  category: 'CORE' | 'SAFETY' | 'PERFORMANCE' | 'SUPPORTING' | 'SETTINGS' | 'ROADMAP';
  status: 'IMPLEMENTED' | 'PARTIALLY_IMPLEMENTED' | 'PLANNED' | 'UNVERIFIED';
  description: string;
  technicalDetails: string;
  confidence: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  headline: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  version: string;
  category: string;
  purpose: string;
  whereUsed: string;
}

export interface RoadmapItem {
  milestone: string;
  status: 'COMPLETED' | 'PLANNED';
  items: string[];
}

export interface NavigationLink {
  label: string;
  href: string;
}
