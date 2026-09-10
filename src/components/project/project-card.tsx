"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, CalendarDays } from "lucide-react";

import type { Project } from "@/content/types";
import { getDomainLabel, getProjectCopy } from "@/content/i18n";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/project/project-visual";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { language, dictionary } = useLanguage();
  const copy = getProjectCopy(project, language);

  return (
    <article className="project-card reveal-card" style={{ animationDelay: `${index * 70}ms` }}>
      <Link className="project-card-link" href={`/projects/${project.slug}`}>
        <ProjectVisual project={project} />
        <div className="project-card-body">
          <div className="project-card-topline">
            <p className="project-domain">{getDomainLabel(project.domain, language)}</p>
            {project.ongoing ? <Badge tone="orange">{dictionary.project.current}</Badge> : null}
          </div>
          <h3>{project.name}</h3>
          {project.client ? <p className="project-client">{project.client}</p> : null}
          <p className="project-summary">{copy.summary}</p>
          {copy.challenge ? (
            <p className="project-detail-line">
              <span>{dictionary.work.challengeLabel}</span>
              {copy.challenge}
            </p>
          ) : null}
          {copy.contribution ? (
            <p className="project-detail-line">
              <span>{dictionary.work.contributionLabel}</span>
              {copy.contribution}
            </p>
          ) : null}
          <div className="project-card-meta">
            {project.period ? (
              <span>
                <CalendarDays size={15} aria-hidden="true" />
                {formatPeriod(project.period, language)}
              </span>
            ) : null}
            {project.company ? (
              <span>
                <Building2 size={15} aria-hidden="true" />
                {project.company}
              </span>
            ) : null}
          </div>
          {project.technologies.length > 0 ? (
            <div
              className="tag-list"
              aria-label={dictionary.work.technologiesAriaLabel(project.name)}
            >
              {project.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          ) : null}
          <span className="project-card-cta">
            {dictionary.work.readCaseStudy} <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
