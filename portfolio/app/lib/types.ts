// Content Types for Portfolio

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: string;
  categoryId: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  lesson?: string;
  skills?: string[];
  // Image paths (to be filled with real images later)
  heroImage?: string;
  galleryImages?: string[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  projects: string[]; // Array of project slugs
}

export interface Interest {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  galleryImages?: string[];
  image?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  social: {
    linkedin?: string;
    calendly?: string;
    github?: string;
    twitter?: string;
  };
}
