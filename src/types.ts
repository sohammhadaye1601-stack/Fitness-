export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  focus: string[];
  level: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface Transformation {
  id: string;
  clientInitials: string;
  goal: string;
  timeframe: string;
  focus: string;
  beforeImg: string;
  afterImg: string;
  note: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'functional' | 'yoga' | 'interior';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface FitnessTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  content: string[];
  takeaways: string[];
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  fitnessGoal: string;
  preferredTraining: string;
  message: string;
}
