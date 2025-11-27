import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string; // URL routing ID
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[]; // Detailed features for the page
  process: { step: string; title: string; desc: string }[]; // Process flow
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  image: string; // Image for the carousel
  tags: string[];
  icon: LucideIcon;
  serviceIds: string[]; // Links to ServiceItem.id
}

export interface CompanyInfo {
  name: string;
  englishName: string;
  representative: string;
  address: string;
  established: string;
  businessItems: string[];
  email: string;
  domain: string;
}

export interface NavItem {
  label: string;
  path: string;
  hash?: string;
}