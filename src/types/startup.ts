export type StartupStage = 'Idea' | 'Early Stage' | 'Incubated' | 'Scaled';

export interface StartupItem {
  id: string;
  name: string;
  tagline: string;
  stage: StartupStage;
  founders: string[];
  logoUrl?: string;
  websiteUrl?: string;
  domain: string;
  foundedYear: number;
}
