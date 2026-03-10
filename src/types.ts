export interface HeroSection {
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  resumeUrl?: string;
  greeting?: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  social?: {
    github: string;
    linkedin: string;
    email: string;
    twitter: string;
  };
  resume?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AboutSection {
  title?: string;
  description: string | string[];
  image?: string;
  skills: SkillCategory[] | string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

export interface ContactSection {
  title: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PortfolioData {
  personal?: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    resume?: string;
  };
  hero: HeroSection;
  about: AboutSection;
  projects: ProjectItem[];
  experience: any[];
  contact: ContactSection;
  resume?: string;
}
