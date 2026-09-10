"use client";

import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";

import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";

import { ButtonLink } from "@/components/ui/button";

export function Contact() {
  const { dictionary } = useLanguage();

  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div>
          <p className="eyebrow eyebrow-with-dot">
            <span className="status-dot" aria-hidden="true" /> {dictionary.contact.status}
          </p>
          <h2 id="contact-title">{dictionary.contact.title}</h2>
          <p className="contact-copy">{dictionary.contact.description}</p>
          <div className="contact-meta">
            <span>
              <MapPin size={16} aria-hidden="true" /> {dictionary.contact.locationLabel}
            </span>
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" /> {dictionary.contact.email}: {profile.email}
              </a>
            ) : null}
            {profile.githubUrl ? (
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" /> {dictionary.contact.github}{" "}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
        <div className="contact-actions">
          {profile.email ? (
            <ButtonLink
              href={`mailto:${profile.email}`}
              icon={<Mail size={18} aria-hidden="true" />}
            >
              {dictionary.contact.startConversation}
            </ButtonLink>
          ) : null}
          <ButtonLink
            href="/resume"
            variant={profile.email ? "secondary" : "primary"}
            icon={<ArrowUpRight size={18} aria-hidden="true" />}
          >
            {dictionary.contact.reviewResume}
          </ButtonLink>
          {!profile.email && !profile.githubUrl ? (
            <p className="contact-note">{dictionary.contact.unpublishedNote}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
