export type ProjectPeriod = {
  start: string;
  end: string | "present";
};

export type ProjectDetail = {
  context?: string;
  technicalDecisions?: readonly string[];
  learnings?: readonly string[];
};

export type ProjectParticipation = "lead" | "contributor" | "reviewer";

export type Project = {
  slug: string;
  name: string;
  internalName?: string;
  period?: ProjectPeriod;
  company?: string;
  client?: string;
  role?: string;
  participation?: ProjectParticipation;
  team?: string;
  domain: string;
  summary: string;
  challenge?: string;
  contribution?: string;
  responsibilities: readonly string[];
  highlights?: readonly string[];
  technologies: readonly string[];
  outcomes?: readonly string[];
  featured: boolean;
  ongoing?: boolean;
  confidential?: boolean;
  detail?: ProjectDetail;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  summary: string;
  shortSummary: string;
  location: string;
  yearsOfExperience: string;
  completedProjects: number;
  ongoingProjects: number;
  reactSince: string;
  nextSince: string;
  university: string;
  dateOfBirth: string;
  email: string | null;
  githubUrl: string | null;
  interests: readonly string[];
};

export type ExperienceEntry = {
  company: string;
  title: string;
  period: ProjectPeriod;
  description: string;
  projectSlugs: readonly string[];
};

export type CurrentProjectContext = {
  name: string;
  period: ProjectPeriod;
  description: string;
  technologies: readonly string[];
};

export type SkillGroup = {
  label: string;
  description: string;
  skills: readonly string[];
};
