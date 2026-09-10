"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ExternalLink } from "lucide-react";

import { getDomainLabel, getProjectCopy } from "@/content/i18n";
import type { Project } from "@/content/types";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { ProjectVisual } from "@/components/project/project-visual";
import { Badge } from "@/components/ui/badge";

type ProjectCaseStudyProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

export function ProjectCaseStudy({ project, previous, next }: ProjectCaseStudyProps) {
  const { language, dictionary } = useLanguage();
  const copy = getProjectCopy(project, language);

  return (
    <main className="project-page">
      <section className="project-hero-section" aria-labelledby="project-title">
        <div className="container project-hero-grid">
          <div className="project-hero-copy reveal-on-load">
            <Link className="back-link" href="/#work">
              <ArrowLeft size={16} aria-hidden="true" />
              {dictionary.project.backToWork}
            </Link>
            <div className="project-hero-kicker">
              <span className="eyebrow">{getDomainLabel(project.domain, language)}</span>
              {project.ongoing ? <Badge tone="orange">{dictionary.project.current}</Badge> : null}
            </div>
            <h1 id="project-title">{project.name}</h1>
            <p className="project-hero-summary">{copy.summary}</p>
            <div className="project-hero-meta">
              {project.period ? (
                <span>
                  <CalendarDays size={16} aria-hidden="true" />{" "}
                  {formatPeriod(project.period, language)}
                </span>
              ) : null}
              {project.client ? <span>{project.client}</span> : null}
              {project.company ? <span>{project.company}</span> : null}
            </div>
            {project.technologies.length > 0 ? (
              <div
                className="tag-list"
                aria-label={dictionary.project.technologiesAriaLabel(project.name)}
              >
                {project.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>

      <div className="project-main">
        <div className="container project-content-grid">
          <aside className="project-overview" aria-label={dictionary.project.overviewAriaLabel}>
            <p className="eyebrow">{dictionary.project.overview}</p>
            <dl>
              <div>
                <dt>{dictionary.project.domain}</dt>
                <dd>{getDomainLabel(project.domain, language)}</dd>
              </div>
              {project.period ? (
                <div>
                  <dt>{dictionary.project.period}</dt>
                  <dd>{formatPeriod(project.period, language)}</dd>
                </div>
              ) : null}
              {project.client ? (
                <div>
                  <dt>{dictionary.project.client}</dt>
                  <dd>{project.client}</dd>
                </div>
              ) : null}
              {project.company ? (
                <div>
                  <dt>{dictionary.project.company}</dt>
                  <dd>{project.company}</dd>
                </div>
              ) : null}
              <div>
                <dt>{dictionary.project.status}</dt>
                <dd>
                  {project.ongoing ? dictionary.project.ongoing : dictionary.project.completed}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="project-longform">
            {copy.context ? (
              <section className="project-copy-section" aria-labelledby="context-title">
                <p className="eyebrow">{dictionary.project.contextEyebrow}</p>
                <h2 id="context-title">{dictionary.project.contextTitle}</h2>
                <p>{copy.context}</p>
              </section>
            ) : null}

            {copy.challenge ? (
              <section className="project-copy-section" aria-labelledby="challenge-title">
                <p className="eyebrow">{dictionary.project.challengeEyebrow}</p>
                <h2 id="challenge-title">{dictionary.project.challengeTitle}</h2>
                <p>{copy.challenge}</p>
              </section>
            ) : null}

            {copy.responsibilities && copy.responsibilities.length > 0 ? (
              <section className="project-copy-section" aria-labelledby="responsibilities-title">
                <p className="eyebrow">{dictionary.project.responsibilitiesEyebrow}</p>
                <h2 id="responsibilities-title">{dictionary.project.responsibilitiesTitle}</h2>
                <ul className="check-list">
                  {copy.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <Check size={18} aria-hidden="true" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {copy.technicalDecisions && copy.technicalDecisions.length > 0 ? (
              <section className="project-copy-section" aria-labelledby="decisions-title">
                <p className="eyebrow">{dictionary.project.technicalDecisionsEyebrow}</p>
                <h2 id="decisions-title">{dictionary.project.technicalDecisionsTitle}</h2>
                <ul className="check-list">
                  {copy.technicalDecisions.map((decision) => (
                    <li key={decision}>
                      <Check size={18} aria-hidden="true" />
                      {decision}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {copy.outcomes && copy.outcomes.length > 0 ? (
              <section className="project-copy-section" aria-labelledby="outcomes-title">
                <p className="eyebrow">{dictionary.project.outcomeEyebrow}</p>
                <h2 id="outcomes-title">{dictionary.project.outcomeTitle}</h2>
                <ul className="check-list">
                  {copy.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <Check size={18} aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {!copy.responsibilities?.length && !copy.outcomes?.length ? (
              <section
                className="verified-scope-note"
                aria-label={dictionary.project.scopeNoteAriaLabel}
              >
                <ExternalLink size={18} aria-hidden="true" />
                <p>{dictionary.project.scopeNote}</p>
              </section>
            ) : null}
          </div>
        </div>
      </div>

      <nav
        className="container project-pagination"
        aria-label={dictionary.project.navigationAriaLabel}
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="project-pagination-link project-pagination-previous"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>
              <small>{dictionary.project.previous}</small>
              <strong>{previous.name}</strong>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="project-pagination-link project-pagination-next"
          >
            <span>
              <small>{dictionary.project.next}</small>
              <strong>{next.name}</strong>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
