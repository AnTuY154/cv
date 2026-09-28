"use client";

import { BookOpen, HeartHandshake, Lightbulb, Music2, ShieldCheck } from "lucide-react";

import { getInterestLabel } from "@/content/i18n";
import { profile } from "@/content/profile";
import { useLanguage } from "@/components/i18n/language-provider";

import { SectionHeading } from "@/components/ui/section-heading";

const principleIcons = [Lightbulb, BookOpen, HeartHandshake, ShieldCheck] as const;

export function About() {
  const { language, dictionary } = useLanguage();

  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-story-column">
          <SectionHeading
            id="about-title"
            eyebrow={dictionary.about.eyebrow}
            title={dictionary.about.title}
            description={dictionary.about.description}
          />
          <article className="about-story-card">
            <p className="eyebrow">{dictionary.about.storyEyebrow}</p>
            {dictionary.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>

        <div className="about-content">
          <article className="about-details-card">
            <div className="about-monogram" aria-hidden="true">
              AT
            </div>
            <div>
              <p className="eyebrow">{dictionary.about.detailsEyebrow}</p>
              <dl className="personal-details-list">
                <div>
                  <dt>{dictionary.about.universityLabel}</dt>
                  <dd>{profile.university}</dd>
                </div>
                <div>
                  <dt>{dictionary.about.locationLabel}</dt>
                  <dd>{dictionary.location}</dd>
                </div>
              </dl>
            </div>
          </article>

          <section className="principles-card" aria-labelledby="principles-title">
            <div>
              <p className="eyebrow">{dictionary.about.principlesEyebrow}</p>
              <h3 id="principles-title">{dictionary.about.principlesTitle}</h3>
            </div>
            <div className="ways-grid">
              {dictionary.about.principles.map(({ title, description }, index) => {
                const Icon = principleIcons[index] ?? Lightbulb;

                return (
                  <div className="way-item" key={title}>
                    <Icon size={19} aria-hidden="true" />
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="interests-row">
            <span className="eyebrow">
              <Music2 size={16} aria-hidden="true" /> {dictionary.about.interestsLabel}
            </span>
            <div className="interest-list">
              {profile.interests.map((interest) => (
                <span key={interest}>{getInterestLabel(interest, language)}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
