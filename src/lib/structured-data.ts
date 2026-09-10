import type { Project } from "@/content/types";

import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/metadata";

type JsonLd = Record<string, unknown>;

export function personStructuredData(): JsonLd {
  const sameAs = profile.githubUrl ? [profile.githubUrl] : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressCountry: "VN",
    },
    ...(sameAs ? { sameAs } : {}),
    url: siteUrl,
  };
}

export function projectStructuredData(project: Project): JsonLd {
  const type = project.domain === "Payments" ? "SoftwareApplication" : "CreativeWork";
  const url = new URL(`/projects/${project.slug}`, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: project.name,
    description: project.summary,
    url,
    creator: {
      "@type": "Person",
      name: profile.name,
    },
    ...(project.technologies.length > 0 ? { keywords: project.technologies.join(", ") } : {}),
  };
}

export function stringifyJsonLd(value: JsonLd): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
