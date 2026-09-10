"use client";

import { ArrowDown, ArrowUpRight, Download, Github, Mail, MapPin, Terminal } from "lucide-react";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";

import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy reveal-on-load">
          <p className="eyebrow eyebrow-with-dot">
            <span className="status-dot" aria-hidden="true" />
            {dictionary.role}
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-statement">{dictionary.hero.headline}</p>
          <p className="hero-description">{dictionary.hero.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#work" icon={<ArrowDown size={18} aria-hidden="true" />}>
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
          <div className="hero-links" aria-label={dictionary.hero.profileLinks}>
            {profile.githubUrl ? (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" />
                {dictionary.hero.github}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                {dictionary.hero.email}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}
            <span>
              <MapPin size={16} aria-hidden="true" />
              {dictionary.location}
            </span>
          </div>
        </div>

        <div
          className="hero-visual reveal-on-load"
          aria-label={dictionary.hero.visualLabel}
          role="img"
        >
          <div className="hero-visual-glow" />
          <div className="hero-grid-lines" />
          <div className="hero-code-card hero-code-card-main">
            <div className="code-card-bar">
              <span className="code-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>product.tsx</span>
              <Terminal size={15} aria-hidden="true" />
            </div>
            <div className="code-lines" aria-hidden="true">
              <span>
                <b>01</b>
                <em>const</em> product = <strong>build</strong>();
              </span>
              <span>
                <b>02</b>
                <em>return</em> &lt;ReliableUI /&gt;
              </span>
              <span>
                <b>03</b>
                <span className="code-highlight">ship</span>(withCare);
              </span>
            </div>
          </div>
          <div className="hero-proof-card">
            <span className="proof-card-label">{dictionary.hero.currentFocus}</span>
            <strong>OneAuto</strong>
            <span>{dictionary.hero.currentProjectDomain}</span>
            <div className="proof-card-footer">
              <span>Next.js</span>
              <span>Java</span>
              <span className="proof-live">
                <i /> {dictionary.hero.ongoing}
              </span>
            </div>
          </div>
          <div className="hero-visual-caption">{dictionary.hero.visualCaption}</div>
        </div>
      </div>
    </section>
  );
}
