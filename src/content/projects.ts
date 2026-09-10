import type { Project } from "@/content/types";

export const projects = [
  {
    slug: "oneauto",
    name: "OneAuto",
    period: { start: "2026-01", end: "present" },
    domain: "Automotive services",
    summary: "Services for automotive workshops in the TASCO ecosystem.",
    challenge: "An ongoing product context for services used by automotive workshops.",
    contribution: "The verified public scope currently covers the product domain and stack.",
    responsibilities: [],
    technologies: ["Next.js", "Java"],
    featured: true,
    ongoing: true,
    detail: {
      context: "Ongoing services for automotive workshops in the TASCO ecosystem.",
    },
  },
  {
    slug: "hp-booster",
    name: "HP Booster",
    domain: "Marketing platform",
    summary: "A drag-and-drop marketing website builder.",
    challenge:
      "Marketing teams need a flexible way to assemble pages without a custom build for every variation.",
    contribution:
      "Worked on the builder context and helped break delivery work into smaller tasks.",
    responsibilities: [
      "Worked on a drag-and-drop marketing website builder.",
      "Helped break delivery work into smaller, actionable tasks.",
    ],
    technologies: [],
    featured: true,
    detail: {
      context: "A marketing website builder centered on drag-and-drop page creation.",
    },
  },
  {
    slug: "grafana-tools",
    name: "Grafana Tools",
    domain: "Observability tooling",
    summary: "Modernization from Grafana 6.3.4 to Grafana 12.2.",
    challenge: "An older Grafana-based toolset needed a major version modernization.",
    contribution: "Contributed to the Grafana 6.3.4 → 12.2 modernization work.",
    responsibilities: ["Modernized Grafana tooling from 6.3.4 to 12.2."],
    technologies: ["Grafana"],
    featured: true,
    detail: {
      context: "A Grafana toolset undergoing a major-version modernization.",
      technicalDecisions: ["The verified migration boundary is Grafana 6.3.4 → 12.2."],
    },
  },
  {
    slug: "kotoba-stripe",
    name: "Kotoba Stripe",
    domain: "Payments",
    summary: "Online payment and account-management workflows.",
    challenge:
      "Payment and account workflows need to stay understandable across the customer journey.",
    contribution: "Worked with Stripe-based payment flows and account management.",
    responsibilities: ["Worked on online payment and account-management workflows."],
    technologies: ["Stripe"],
    featured: true,
    detail: {
      context: "A product combining online payment and account-management workflows.",
      technicalDecisions: ["Stripe is the verified payment integration in the project record."],
    },
  },
  {
    slug: "commerce",
    name: "Commerce",
    domain: "Building management",
    summary: "Building management and data analysis with map integrations.",
    challenge:
      "Building operations benefit from a clear view of property data and location context.",
    contribution:
      "Worked with building-management and data-analysis flows using Google Maps and Terra Map.",
    responsibilities: [
      "Worked on building-management and data-analysis workflows.",
      "Integrated Google Maps and Terra Map in the verified project scope.",
    ],
    technologies: ["Google Maps", "Terra Map"],
    featured: true,
    detail: {
      context: "A building-management product with data analysis and map integrations.",
      technicalDecisions: ["The verified map integrations are Google Maps and Terra Map."],
    },
  },
  {
    slug: "aia-components",
    name: "AIA Components",
    client: "AIA Thailand",
    domain: "UI engineering",
    summary: "A component system supported by Storybook and E2E testing.",
    challenge: "Shared UI needs consistent behavior and a repeatable way to validate components.",
    contribution:
      "Worked on Figma-to-code component implementation with Storybook and E2E testing.",
    responsibilities: [
      "Implemented UI components from Figma/design-system inputs.",
      "Worked with Storybook and E2E testing in the verified project scope.",
    ],
    technologies: ["Storybook", "E2E testing"],
    featured: true,
    detail: {
      context: "AIA Thailand component work focused on reusable UI and verification.",
      technicalDecisions: ["Storybook and E2E testing are the verified project practices."],
    },
  },
  {
    slug: "requirement-tool",
    name: "Requirement Tool",
    company: "FPT Software",
    domain: "Enterprise tooling",
    summary: "A tool for managing software requirements in an enterprise delivery context.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "viettel-family-registration",
    name: "Viettel Family — Competition Registration",
    company: "Viettel Software Service",
    domain: "Registration workflow",
    summary: "Registration experience for Viettel Family competition activities.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "viettel-family-audit",
    name: "Viettel Family — Audit",
    company: "Viettel Software Service",
    domain: "Audit workflow",
    summary: "Inspection and audit workflows for Viettel Family.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "kpro",
    name: "Kpro",
    company: "HBLAB JSC",
    domain: "File and property management",
    summary: "File and property management workflows.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "account",
    name: "Account",
    company: "HBLAB JSC",
    domain: "User administration",
    summary: "User and user-group management.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "commerce-admin",
    name: "Commerce Admin",
    company: "HBLAB JSC",
    domain: "Workflow administration",
    summary: "Workflow and formula management for Commerce.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "musma-dashboard",
    name: "Musma Dashboard",
    company: "HBLAB JSC",
    domain: "Data dashboard",
    summary: "Employee-work monitoring charts and dashboards.",
    responsibilities: [],
    technologies: [],
    featured: false,
  },
  {
    slug: "swiper-kit",
    name: "Swiper Kit",
    company: "HBLAB JSC",
    domain: "Marketing platform",
    summary: "Marketing website tooling and React-to-Next.js migration work.",
    responsibilities: ["Worked on marketing website tooling and a React-to-Next.js migration."],
    technologies: ["React", "Next.js"],
    featured: false,
  },
  {
    slug: "commerce-convert",
    name: "Commerce Convert",
    company: "HBLAB JSC",
    domain: "SEO modernization",
    summary: "React-to-Next.js migration and SEO work.",
    responsibilities: ["Worked on a React-to-Next.js migration with SEO considerations."],
    technologies: ["React", "Next.js", "SEO"],
    featured: false,
  },
] satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { previous?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index < 0) {
    return {};
  }

  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}
