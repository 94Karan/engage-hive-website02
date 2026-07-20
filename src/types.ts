export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic Lucide Icon
  metrics: string;
  details: string[];
}

export interface ProcessStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  iconName: string;
  duration: string;
  highlight: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  results: { label: string; value: string }[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
}
