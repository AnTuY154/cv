"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, MapPin } from "lucide-react";

import { experience } from "@/content/experience";
import {
  getExperienceDescription,
  getExperienceTitle,
  getProjectCopy,
  getSkillGroupCopy,
} from "@/content/i18n";
import { profile } from "@/content/profile";
import { getProjectBySlug } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import type { Project } from "@/content/types";
import { useLanguage } from "@/components/i18n/language-provider";
import { formatPeriod } from "@/lib/utils";

import { ButtonLink } from "@/components/ui/button";

const pageOneProjects = ["oneauto", "commerce-convert", "property", "hp-booster", "kpro"];
const pageTwoProjects = [
  "pfd-maintain",
  "musa-pms",
  "grafana-tools",
  "kotoba-stripe",
  "workorder",
  "workflow",
  "commerce",
];

function ResumeProjectRow({ project, language }: { project: Project; language: "vi" | "en" }) {
  const copy = getProjectCopy(project, language);
  const impact = copy.highlights?.[0] ?? copy.contribution;

  return (
    <article className="resume-pdf-project">
      <div className={`resume-pdf-project__marker ${project.ongoing ? "is-ongoing" : ""}`} />
      <div className="resume-pdf-project__heading">
        <div>
          <Link href={`/projects/${project.slug}`}>
            {project.name} <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
          <p>{[project.role, project.team, project.client].filter(Boolean).join(" · ")}</p>
        </div>
        <time>{formatPeriod(project.period, language)}</time>
      </div>
      <p className="resume-pdf-project__summary">{copy.summary}</p>
      {impact ? (
        <p className="resume-pdf-project__impact">
          <strong>{language === "vi" ? "Dấu ấn" : "Impact"} — </strong>
          {impact}
        </p>
      ) : null}
      <p className="resume-pdf-project__tech">{project.technologies.join(" · ")}</p>
    </article>
  );
}

function PaperFooter({ page }: { page: number }) {
  return (
    <footer className="resume-paper__footer">
      <span>ĐỖ TRỌNG ANH TUẤN · FRONTEND ENGINEER / FRONTEND LEAD</span>
      <span>{page} / 2</span>
    </footer>
  );
}

export function ResumePageContent() {
  const { language, dictionary } = useLanguage();
  const labels = language === "vi"
    ? {
        back: "Về trang giới thiệu",
        online: "Bản CV trực tuyến",
        title: "CV dành cho nhà tuyển dụng",
        description: "Cùng bố cục và nội dung với bản PDF hai trang.",
        recent: "Timeline dự án gần đây · HBLAB JSC · 01/2023 — Hiện tại",
        capabilities: "Năng lực cốt lõi",
        additional: "Timeline dự án bổ sung",
        earlier: "Kinh nghiệm trước HBLAB",
        education: "Học vấn",
      }
    : {
        back: "Back to portfolio",
        online: "Online resume",
        title: "Recruiter-ready resume",
        description: "The same structure and content as the two-page PDF.",
        recent: "Recent project timeline · HBLAB JSC · Jan 2023 — Present",
        capabilities: "Core capabilities",
        additional: "Additional project timeline",
        earlier: "Earlier experience",
        education: "Education",
      };

  const resolveProjects = (slugs: readonly string[]) =>
    slugs.map(getProjectBySlug).filter((project): project is Project => Boolean(project));

  return (
    <main className="resume-page resume-pdf-page">
      <div className="container resume-preview-toolbar">
        <div>
          <Link className="back-link" href="/">
            <ArrowLeft size={16} aria-hidden="true" /> {labels.back}
          </Link>
          <p className="eyebrow">{labels.online}</p>
          <h1>{labels.title}</h1>
          <p>{labels.description}</p>
        </div>
        <ButtonLink
          href="/resume/anh-tuan-cv.pdf"
          download
          icon={<Download size={18} aria-hidden="true" />}
        >
          {dictionary.resume.downloadPdf}
        </ButtonLink>
      </div>

      <div className="container resume-paper-stack" id="resume">
        <article className="resume-paper" aria-label={`${labels.title} — 1 / 2`}>
          <div className="resume-paper__accent" />
          <header className="resume-pdf-header">
            <p className="resume-pdf-label">{dictionary.role}</p>
            <h2>{profile.name}</h2>
            <p className="resume-pdf-location">
              <MapPin size={14} aria-hidden="true" /> {dictionary.location} · {profile.yearsOfExperience}
            </p>
            <p className="resume-pdf-summary">{dictionary.hero.description}</p>
            <div className="resume-pdf-proof" aria-label={dictionary.credibility.sectionLabel}>
              <strong>React · Next.js · Vue 3</strong>
              <strong>{language === "vi" ? "Xây dựng · tích hợp · dẫn dắt" : "Build · integrate · lead"}</strong>
              <strong>HBLAB · Viettel · FPT</strong>
            </div>
          </header>

          <section className="resume-paper__section" aria-labelledby="resume-recent-projects">
            <h3 id="resume-recent-projects">{labels.recent}</h3>
            <div className="resume-pdf-projects">
              {resolveProjects(pageOneProjects).map((project) => (
                <ResumeProjectRow project={project} language={language} key={project.slug} />
              ))}
            </div>
          </section>

          <section className="resume-paper__section resume-capabilities" aria-labelledby="resume-capabilities">
            <h3 id="resume-capabilities">{labels.capabilities}</h3>
            <div className="resume-capabilities__grid">
              {skillGroups.map((group) => {
                const copy = getSkillGroupCopy(group.label, language);
                return (
                  <div key={group.label}>
                    <h4>{copy?.label ?? group.label}</h4>
                    <p>{group.skills.join(" · ")}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <PaperFooter page={1} />
        </article>

        <article className="resume-paper" aria-label={`${labels.title} — 2 / 2`}>
          <div className="resume-paper__accent" />
          <section className="resume-paper__section resume-paper__section--first" aria-labelledby="resume-additional-projects">
            <h3 id="resume-additional-projects">{labels.additional}</h3>
            <div className="resume-pdf-projects">
              {resolveProjects(pageTwoProjects).map((project) => (
                <ResumeProjectRow project={project} language={language} key={project.slug} />
              ))}
            </div>
          </section>

          <section className="resume-paper__section resume-earlier" aria-labelledby="resume-earlier">
            <h3 id="resume-earlier">{labels.earlier}</h3>
            {experience.slice(1).map((entry) => (
              <div className="resume-earlier__item" key={entry.company}>
                <div>
                  <h4>{entry.company} · {getExperienceTitle(entry.company, entry.title, language)}</h4>
                  <time>{formatPeriod(entry.period, language)}</time>
                </div>
                <p>{getExperienceDescription(entry.company, entry.description, language)}</p>
              </div>
            ))}
          </section>

          <section className="resume-paper__section resume-education" aria-labelledby="resume-education">
            <h3 id="resume-education">{labels.education}</h3>
            <p>{profile.university}</p>
          </section>
          <PaperFooter page={2} />
        </article>
      </div>
    </main>
  );
}
