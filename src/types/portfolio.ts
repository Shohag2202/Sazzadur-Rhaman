export type Language = 'en' | 'bn';

export interface Project {
  id: string;
  title: string;
  titleBn?: string;
  tagline: string;
  taglineBn?: string;
  category: string;
  categoryBn?: string;
  year: string;
  image: string;
  accentColor?: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  summary: string;
  summaryBn?: string;
}

export interface SkillItem {
  name: string;
  nameBn?: string;
  color?: string;
}

export interface SkillGroup {
  name: string;
  nameBn?: string;
  color?: string;
  items: SkillItem[];
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface PortfolioData {
  fullName: string;
  fullNameBn?: string;
  role: string;
  roleBn?: string;
  tagline: string;
  taglineBn?: string;
  shortBio: string;
  shortBioBn?: string;
  location: string;
  locationBn?: string;
  available: boolean;
  avatarImage?: string;
  socials: SocialLinks;
  stats: {
    label: string;
    labelBn?: string;
    value: string;
    color?: string;
  }[];
  skills: SkillGroup[];
  projects: Project[];
}

export interface AdminAuthConfig {
  adminEmail: string;
  passwordHash: string; // or passcode
}
