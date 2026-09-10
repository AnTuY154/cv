import type { CurrentProjectContext, ExperienceEntry } from "@/content/types";

export const experience = [
  {
    company: "HBLAB JSC",
    title: "Software Engineer",
    period: { start: "2023-01", end: "2026-01" },
    description:
      "Software engineering across management tools, dashboards, payments, observability, and marketing platforms.",
    projectSlugs: [
      "kpro",
      "account",
      "commerce",
      "commerce-admin",
      "musma-dashboard",
      "kotoba-stripe",
      "grafana-tools",
      "swiper-kit",
      "commerce-convert",
      "hp-booster",
    ],
  },
  {
    company: "Viettel Software Service",
    title: "Software Engineer",
    period: { start: "2022-09", end: "2023-01" },
    description: "Software engineering for Viettel Family registration and audit workflows.",
    projectSlugs: ["viettel-family-registration", "viettel-family-audit"],
  },
  {
    company: "FPT Software",
    title: "Software Engineer",
    period: { start: "2020-09", end: "2022-08" },
    description: "Software engineering across enterprise requirements and component-system work.",
    projectSlugs: ["requirement-tool", "aia-components"],
  },
] satisfies readonly ExperienceEntry[];

export const currentProjectContext = {
  name: "OneAuto",
  period: { start: "2026-01", end: "present" },
  description: "Ongoing services for automotive workshops in the TASCO ecosystem.",
  technologies: ["Next.js", "Java"],
} satisfies CurrentProjectContext;
