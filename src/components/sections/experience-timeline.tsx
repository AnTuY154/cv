"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import { experience } from "@/content/experience";
import {
  getDomainLabel,
  getExperienceDescription,
  getExperienceTitle,
  getProjectCopy,
} from "@/content/i18n";
import { getProjectBySlug } from "@/content/projects";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceTimeline() {
  const { language, dictionary } = useLanguage();

  return (
    <section className="section section-experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow={dictionary.experience.eyebrow}
          title={dictionary.experience.title}
          description={dictionary.experience.description}
        />

        <div className="career-timeline">
          {experience.map((entry) => (
            <article className="career-company" key={entry.company}>
              <header className="career-company__header">
                <p className="eyebrow">{formatPeriod(entry.period, language)}</p>
                <h3>{entry.company}</h3>
                <strong>{getExperienceTitle(entry.company, entry.title, language)}</strong>
                <p>{getExperienceDescription(entry.company, entry.description, language)}</p>
              </header>

              <div className="career-projects">
                {entry.projectSlugs.map((slug) => {
                  const project = getProjectBySlug(slug);
                  if (!project) return null;

                  const copy = getProjectCopy(project, language);
                  const highlight = copy.highlights?.[0] ?? copy.contribution;
                  const period = project.period
                    ? formatPeriod(project.period, language)
                    : language === "vi"
                      ? `Trong thời gian tại ${entry.company}`
                      : `During ${entry.company} tenure`;

                  return (
                    <section className="career-project" key={project.slug}>
                      <div className="career-project__period">
                        <CalendarDays size={15} aria-hidden="true" />
                        <span>{period}</span>
                      </div>
                      <div className="career-project__body">
                        <div className="career-project__heading">
                          <div>
                            <span className="career-project__domain">
                              {getDomainLabel(project.domain, language)}
                            </span>
                            <h4>{project.name}</h4>
                          </div>
                          {project.ongoing ? <Badge tone="orange">{dictionary.experience.ongoing}</Badge> : null}
                        </div>

                        <p className="career-project__meta">
                          {[project.role, project.client, project.team].filter(Boolean).join(" · ")}
                        </p>
                        <p>{copy.summary}</p>
                        {highlight ? <p className="career-project__highlight">{highlight}</p> : null}

                        <div className="career-project__footer">
                          <div className="tag-list">
                            {project.technologies.map((technology) => (
                              <span className="tag" key={technology}>{technology}</span>
                            ))}
                          </div>
                          <Link className="text-link" href={`/projects/${project.slug}`}>
                            {dictionary.experience.viewScope}
                            <ArrowUpRight size={15} aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
