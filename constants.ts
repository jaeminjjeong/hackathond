import { ServiceCategory, ServiceGig } from './types';

export const MOCK_USER = {
  id: 'u1',
  name: 'Alex Thompson',
  email: 'alex@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  role: 'client' as const
};

export const MOCK_GIGS: ServiceGig[] = [
  {
    id: '1',
    title: 'Build a responsive React website with Tailwind',
    sellerName: 'Sarah Jenkins',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    sellerLevel: 'Top Rated',
    category: ServiceCategory.DEV,
    description: 'I will create a modern, high-performance website for your business using the latest tech stack.',
    price: 450,
    rating: 4.9,
    reviews: 124,
    image: 'https://picsum.photos/seed/webdev/400/300',
    deliveryTime: '5 days'
  },
  {
    id: '2',
    title: 'Professional Logo Design & Brand Identity',
    sellerName: 'Davide Rossi',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Davide',
    sellerLevel: 'Pro',
    category: ServiceCategory.DESIGN,
    description: 'Complete branding package including logo, color palette, and typography guide.',
    price: 299,
    rating: 5.0,
    reviews: 89,
    image: 'https://picsum.photos/seed/design/400/300',
    deliveryTime: '3 days'
  },
  {
    id: '3',
    title: 'SEO Optimization for E-commerce',
    sellerName: 'Elena Gomez',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    sellerLevel: 'Rising Talent',
    category: ServiceCategory.MARKETING,
    description: 'Boost your shop ranking with technical SEO and keyword strategy.',
    price: 150,
    rating: 4.7,
    reviews: 210,
    image: 'https://picsum.photos/seed/seo/400/300',
    deliveryTime: '7 days'
  },
  {
    id: '4',
    title: 'Technical Blog Writing & Documentation',
    sellerName: 'Mike Chen',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    sellerLevel: 'Top Rated',
    category: ServiceCategory.WRITING,
    description: 'High-quality technical articles and API documentation for developers.',
    price: 120,
    rating: 4.8,
    reviews: 56,
    image: 'https://picsum.photos/seed/writing/400/300',
    deliveryTime: '2 days'
  },
  {
    id: '5',
    title: 'Virtual Assistant for Data Entry',
    sellerName: 'Marcus Miller',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    sellerLevel: 'Rising Talent',
    category: ServiceCategory.ADMIN,
    description: 'Reliable data entry, email management, and scheduling services.',
    price: 25,
    rating: 4.6,
    reviews: 42,
    image: 'https://picsum.photos/seed/admin/400/300',
    deliveryTime: '1 day'
  },
  {
    id: '6',
    title: 'Custom AI Model Fine-tuning',
    sellerName: 'Lisa Ray',
    sellerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    sellerLevel: 'Pro',
    category: ServiceCategory.AI,
    description: 'Fine-tune LLMs on your proprietary dataset for specific business needs.',
    price: 1200,
    rating: 5.0,
    reviews: 15,
    image: 'https://picsum.photos/seed/ai/400/300',
    deliveryTime: '14 days'
  }
];

export const MARKET_STATS = [
  { name: 'Dev', value: 400 },
  { name: 'Design', value: 300 },
  { name: 'Marketing', value: 200 },
  { name: 'Writing', value: 278 },
  { name: 'AI', value: 189 },
];