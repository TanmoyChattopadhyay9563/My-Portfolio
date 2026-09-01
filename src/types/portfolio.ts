export interface Project {
  id: string;
  title: string;
  category: string;
  role?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  secondaryImage?: string;
  imageCaption?: string;
  secondaryImageCaption?: string;
  technologies: string[];
  highlights: string[];
  problemStatement?: string;
  solutionArchitecture?: string;
  businessImpact?: string[];
  metrics?: { label: string; value: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge?: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  year: string;
  description?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
  badge: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    tag?: string;
  }[];
}
