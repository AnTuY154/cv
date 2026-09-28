import type { SkillGroup } from "@/content/types";

export const skillGroups = [
  {
    label: "Frontend product engineering",
    description: "Enterprise interfaces built around real operational workflows.",
    skills: ["TypeScript", "React", "Next.js", "Vue 3", "Responsive UI"],
  },
  {
    label: "UI systems",
    description: "Reusable UI with documented behavior and repeatable verification.",
    skills: ["Ant Design", "Storybook", "Atomic Design", "Playwright"],
  },
  {
    label: "Product integration",
    description: "Frontend integration across payments, maps, APIs, and source-based products.",
    skills: ["REST APIs", "Stripe", "Google Maps", "Terra Map", "Grafana"],
  },
  {
    label: "Frontend leadership",
    description: "Turning requirements into plans that a frontend team can deliver clearly.",
    skills: ["Estimation", "Task breakdown", "Code review", "UI/UX", "Client communication"],
  },
] satisfies readonly SkillGroup[];
