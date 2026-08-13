/**
 * Core Portfolio TypeScript Definitions
 * Jessica Osta Portfolio
 */

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export type ProjectCategory = 
  | 'AI/ML'
  | 'Generative AI'
  | 'Machine Learning'
  | 'Responsible AI'
  | 'Explainability (XAI)'
  | 'Full-Stack'
  | 'Embedded & IoT'
  | 'Web Systems'
  | 'Research';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  metrics?: Array<{ label: string; value: string }>;
  publishedAt: string;
}

export type SkillProficiency = 'Expert' | 'Advanced' | 'Intermediate' | 'Proficient';

export interface Skill {
  name: string;
  category: 'AI/ML & Frameworks' | 'Responsible AI & Ethics' | 'Data & Engineering' | 'Full-Stack & Cloud';
  proficiency?: SkillProficiency;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Academic' | 'Industry' | 'Research' | 'Leadership';
  description: string[];
  skillsUsed: string[];
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuerOrPublisher: string;
  date: string;
  type: 'Publication' | 'Certification' | 'Award' | 'Speaking' | 'Academic Milestone';
  summary?: string;
  linkUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  mainNav: NavLink[];
  socials: SocialLink[];
  focusAreas: string[];
}
