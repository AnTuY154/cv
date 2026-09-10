import type { SkillGroup } from "@/content/types";

export const skillGroups = [
  {
    label: "Frontend",
    description: "Interfaces that stay clear across screens and devices.",
    skills: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Responsive UI"],
  },
  {
    label: "UI engineering",
    description: "Reusable components translated from design intent into maintainable UI.",
    skills: ["Storybook", "Figma-to-code", "Component systems", "E2E testing"],
  },
  {
    label: "Backend & integration",
    description: "Pragmatic integration work across product boundaries.",
    skills: ["Node.js", "Express", "Java", "Python", "C#", "REST APIs"],
  },
  {
    label: "Product integrations",
    description: "Product-facing integrations where implementation details meet user workflows.",
    skills: ["Stripe", "Google Maps", "Terra Map", "Grafana"],
  },
  {
    label: "Delivery",
    description: "A delivery habit built around shared context and steady quality.",
    skills: ["GitLab", "Code review", "Estimation", "Deployment support", "SEO"],
  },
] satisfies readonly SkillGroup[];
