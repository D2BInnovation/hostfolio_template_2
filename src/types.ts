export interface HeroSection {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
    twitter: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AboutSection {
  title: string;
  description: string;
  image: string;
  skills: SkillCategory[];
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
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PortfolioData {
  hero: HeroSection;
  about: AboutSection;
  projects: ProjectItem[];
  contact: ContactSection;
}
