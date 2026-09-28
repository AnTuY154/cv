import type { CurrentProjectContext, ExperienceEntry } from "@/content/types";

export const experience = [
  {
    company: "HBLAB JSC",
    title: "Frontend Developer → Frontend Lead",
    period: { start: "2023-01", end: "present" },
    description:
      "Frontend delivery and technical leadership across automotive services, workflow products, property systems, payments, maps, and marketing platforms.",
    projectSlugs: [
      "oneauto",
      "commerce-convert",
      "pfd-maintain",
      "property",
      "hp-booster",
      "grafana-tools",
      "musa-pms",
      "kotoba-stripe",
      "workorder",
      "workflow",
      "account",
      "commerce",
      "kpro",
    ],
  },
  {
    company: "Viettel Software Service",
    title: "Mobile Developer",
    period: { start: "2022-09", end: "2023-04" },
    description: "React Native delivery for an internal Viettel Family competition-registration flow.",
    projectSlugs: ["viettel-family-registration"],
  },
  {
    company: "FPT Software",
    title: "Software Engineer",
    period: { start: "2020-09", end: "2022-08" },
    description: "React delivery across an enterprise requirement editor and a reusable component system.",
    projectSlugs: ["aia-components", "requirement-tool"],
  },
] satisfies readonly ExperienceEntry[];

export const currentProjectContext = {
  name: "OneAuto",
  period: { start: "2026-01", end: "present" },
  description: "Automotive workshop operations in the TASCO ecosystem.",
  technologies: ["Vue 3", "TypeScript", "Ant Design Vue"],
} satisfies CurrentProjectContext;
