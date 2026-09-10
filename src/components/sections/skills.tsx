"use client";

import { ArrowUpRight } from "lucide-react";

import { getSkillGroupCopy } from "@/content/i18n";
import { skillGroups } from "@/content/skills";
import { useLanguage } from "@/components/i18n/language-provider";

import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const { language, dictionary } = useLanguage();

  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            id="skills-title"
            eyebrow={dictionary.skills.eyebrow}
            title={dictionary.skills.title}
            description={dictionary.skills.description}
          />
          <span className="section-index" aria-hidden="true">
            {dictionary.skills.index}
          </span>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill-card reveal-card"
              key={group.label}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="skill-card-index">0{index + 1}</div>
              <div>
                <h3>{getSkillGroupCopy(group.label, language)?.label ?? group.label}</h3>
                <p>{getSkillGroupCopy(group.label, language)?.description ?? group.description}</p>
              </div>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="skill-card-arrow" size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
