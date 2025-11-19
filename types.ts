export enum ServiceCategory {
  DEV = 'Development & IT',
  DESIGN = 'Design & Creative',
  MARKETING = 'Sales & Marketing',
  WRITING = 'Writing & Translation',
  ADMIN = 'Admin & Support',
  AI = 'AI Services'
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'client' | 'freelancer';
}

export interface ServiceGig {
  id: string;
  title: string;
  sellerName: string;
  sellerAvatar: string;
  sellerLevel: 'Rising Talent' | 'Top Rated' | 'Pro';
  category: ServiceCategory;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  deliveryTime: string;
}

export interface ProjectScope {
  title: string;
  overview: string;
  deliverables: string[];
  skillsRequired: string[];
  estimatedBudget: string;
  timeline: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ViewState = 'home' | 'market' | 'planner' | 'login' | 'profile';