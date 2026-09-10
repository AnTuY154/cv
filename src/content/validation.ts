import type { Project } from "@/content/types";

export function validateProjects(items: readonly Project[]): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const project of items) {
    if (!project.slug.trim()) {
      errors.push("Every project needs a slug.");
    }

    if (slugs.has(project.slug)) {
      errors.push(`Duplicate project slug: ${project.slug}`);
    }
    slugs.add(project.slug);

    if (!project.name.trim()) {
      errors.push(`Project ${project.slug} needs a name.`);
    }

    if (!project.summary.trim()) {
      errors.push(`Project ${project.slug} needs a summary.`);
    }

    if (
      project.period &&
      project.period.end !== "present" &&
      project.period.start > project.period.end
    ) {
      errors.push(`Project ${project.slug} has an invalid period.`);
    }
  }

  const featured = items.filter((project) => project.featured);
  if (featured.length < 6) {
    errors.push("At least six projects must be featured.");
  }

  if (!items.some((project) => project.ongoing)) {
    errors.push("At least one project must be marked ongoing.");
  }

  return errors;
}
