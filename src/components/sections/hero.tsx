"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Building2, Download, MapPin } from "lucide-react";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";

import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container recruiter-hero-grid">
        <div className="hero-copy reveal-on-load">
          <p className="eyebrow eyebrow-with-dot">
            <span className="status-dot" aria-hidden="true" />
            {dictionary.role}
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-statement">{dictionary.hero.headline}</p>
          <p className="hero-description">{dictionary.hero.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#experience" icon={<ArrowDown size={18} aria-hidden="true" />}>
              {dictionary.hero.viewWork}
            </ButtonLink>
            <ButtonLink
              href="/resume"
              variant="secondary"
              icon={<Download size={18} aria-hidden="true" />}
            >
              {dictionary.hero.downloadCv}
            </ButtonLink>
          </div>
          <div className="hero-employment">
            <Building2 size={17} aria-hidden="true" />
            <span>{dictionary.hero.visualCaption}</span>
          </div>
          <div className="hero-links" aria-label={dictionary.hero.profileLinks}>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {dictionary.location}
            </span>
          </div>
        </div>

        <aside className="current-work-panel reveal-on-load" aria-label={dictionary.hero.visualLabel}>
          <div className="current-work-panel__topline">
            <span className="eyebrow">{dictionary.hero.currentFocus}</span>
            <span className="current-work-panel__status">
              <i aria-hidden="true" /> {dictionary.hero.ongoing}
            </span>
          </div>
          <h2>OneAuto</h2>
          <p>{dictionary.hero.currentProjectDomain}</p>
          <ul>
            {dictionary.hero.currentProjectScope.map((scope) => (
              <li key={scope}>{scope}</li>
            ))}
          </ul>
          <div className="tag-list">
            <span className="tag">Vue 3</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Ant Design Vue</span>
          </div>
          <Link className="text-link" href="/projects/oneauto">
            {dictionary.experience.viewScope} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
