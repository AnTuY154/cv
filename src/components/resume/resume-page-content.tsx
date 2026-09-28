"use client";

import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

import {
  getDomainLabel,
  getExperienceDescription,
  getExperienceTitle,
  getProjectCopy,
  getSkillGroupCopy,
} from "@/content/i18n";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { ButtonLink } from "@/components/ui/button";

export function ResumePageContent() {
  const { language, dictionary } = useLanguage();

  return (
    <main className="resume-page">
      <div className="container resume-toolbar">
        <div>
          <p className="eyebrow">{dictionary.resume.eyebrow}</p>
          <h1>{dictionary.resume.title}</h1>
          <p>{dictionary.resume.description}</p>
        </div>
        <ButtonLink
          href="/resume/anh-tuan-cv.pdf"
          download
          icon={<Download size={18} aria-hidden="true" />}
        >
          {dictionary.resume.downloadPdf}
        </ButtonLink>
      </div>

      <article className="container resume-sheet" id="resume">
        <header className="resume-header">
          <div>
            <p className="eyebrow">{dictionary.role}</p>
            <h2>{profile.name}</h2>
            <p className="resume-summary">{dictionary.hero.description}</p>
          </div>
          <div className="resume-contact">
            <span>
              <MapPin size={15} aria-hidden="true" /> {dictionary.location}
            </span>
            {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : null}
            {profile.githubUrl ? (
              <a href={profile.githubUrl}>{profile.githubUrl.replace(/^https?:\/\//, "")}</a>
            ) : null}
          </div>
        </header>

        <div className="resume-grid">
          <section aria-labelledby="resume-experience-title">
            <p className="eyebrow">{dictionary.resume.experienceEyebrow}</p>
            <h3 id="resume-experience-title">{dictionary.resume.experienceTitle}</h3>
            <div className="resume-experience-list">
              {experience.map((entry) => (
                <div className="resume-experience-item" key={entry.company}>
                  <div>
                    <h4>{entry.company}</h4>
                    <p>{getExperienceTitle(entry.company, entry.title, language)}</p>
                  </div>
                  <span>{formatPeriod(entry.period, language)}</span>
                  <p>{getExperienceDescription(entry.company, entry.description, language)}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-skills-title">
            <p className="eyebrow">{dictionary.resume.capabilitiesEyebrow}</p>
            <h3 id="resume-skills-title">{dictionary.resume.capabilitiesTitle}</h3>
            <div className="resume-skills-list">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4>{getSkillGroupCopy(group.label, language)?.label ?? group.label}</h4>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="resume-projects" aria-labelledby="resume-projects-title">
          <div className="resume-section-heading">
            <div>
              <p className="eyebrow">{dictionary.resume.projectsEyebrow}</p>
              <h3 id="resume-projects-title">{dictionary.resume.projectsTitle}</h3>
            </div>
            <Link className="text-link" href="/#experience">
              {dictionary.resume.viewCaseStudies} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="resume-project-grid">
            {featuredProjects.map((project) => {
              const copy = getProjectCopy(project, language);

              return (
                <Link
                  className="resume-project-item"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                >
                  <span>{getDomainLabel(project.domain, language)}</span>
                  <strong>{project.name}</strong>
                  <small>
                    {[project.role, formatPeriod(project.period, language)].filter(Boolean).join(" · ")}
                  </small>
                  <p>{copy.summary}</p>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </section>
      </article>
    </main>
  );
}
