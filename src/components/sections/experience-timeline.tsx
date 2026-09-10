"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, CircleDot } from "lucide-react";

import { currentProjectContext, experience } from "@/content/experience";
import { getExperienceDescription, getExperienceTitle } from "@/content/i18n";
import { getProjectBySlug } from "@/content/projects";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceTimeline() {
  const { language, dictionary } = useLanguage();

  return (
    <section
      className="section section-experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow={dictionary.experience.eyebrow}
          title={dictionary.experience.title}
          description={dictionary.experience.description}
        />
        <div className="timeline" role="list">
          <div className="timeline-item timeline-current reveal-card" role="listitem">
            <div className="timeline-marker timeline-marker-current" aria-hidden="true">
              <CircleDot size={17} />
            </div>
            <div className="timeline-content">
              <div className="timeline-heading">
                <div>
                  <p className="eyebrow">{dictionary.experience.currentProjectLabel}</p>
                  <h3>{currentProjectContext.name}</h3>
                </div>
                <Badge tone="orange">{dictionary.experience.ongoing}</Badge>
              </div>
              <p className="timeline-period">
                <CalendarDays size={15} aria-hidden="true" />
                {formatPeriod(currentProjectContext.period, language)}
              </p>
              <p>{dictionary.experience.currentProjectDescription}</p>
              <div className="tag-list">
                {currentProjectContext.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <Link className="text-link" href="/projects/oneauto">
                {dictionary.experience.viewScope} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {experience.map((entry, index) => (
            <div
              className="timeline-item reveal-card"
              role="listitem"
              key={entry.company}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="timeline-marker" aria-hidden="true">
                <span />
              </div>
              <div className="timeline-content">
                <div className="timeline-heading">
                  <div>
                    <p className="eyebrow">{formatPeriod(entry.period, language)}</p>
                    <h3>{entry.company}</h3>
                  </div>
                  <span className="timeline-role">
                    {getExperienceTitle(entry.company, entry.title, language)}
                  </span>
                </div>
                <p className="timeline-period timeline-period-mobile">
                  <CalendarDays size={15} aria-hidden="true" />
                  {formatPeriod(entry.period, language)}
                </p>
                <p>{getExperienceDescription(entry.company, entry.description, language)}</p>
                <div className="timeline-projects">
                  {entry.projectSlugs.map((slug) => {
                    const project = getProjectBySlug(slug);
                    return project ? (
                      <Link href={`/projects/${project.slug}`} key={project.slug}>
                        {project.name}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
