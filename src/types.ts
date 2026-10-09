export type PageId = 'home' | 'services' | 'about' | 'portfolio' | 'process' | 'contact';

export interface ServicePackage {
  id: string;
  tier: 'Basic' | 'Standard' | 'Premium';
  name: string;
  tagline: string;
  idealFor: string;
  onceOffPrice: string;
  priceNote?: string;
  ongoingSupport?: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  highlight: string;
}

export interface BroaderCapability {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  responsibilities: string[];
  bio: string;
  focus: string;
  imageAlt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'E-Commerce' | 'Corporate Web' | 'AI & Automation' | 'SaaS & Portals';
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  clientActions: string;
  vanguardDeliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Process' | 'Hosting & Tech' | 'Support';
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  highlight: string;
  badge: string;
  description: string;
  benefits: string[];
  statLabel: string;
  statValue: string;
  iconName: string;
}

export interface SocialProofTestimonial {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  industry: string;
  location: string;
  avatarText: string;
  rating: number;
  review: string;
  projectType: string;
  projectYear: string;
  before: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
    painPoints: string[];
    screenshotUrl?: string;
  };
  after: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
    keyImprovements: string[];
    screenshotUrl?: string;
  };
}
