export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  weeklyHours: string;
  summary: string;
  responsibilities: string[];
  keyCompetencies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  category: string;
  description: string;
  details: string[];
  badgeText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'placeholder';
  isUserAdded?: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
