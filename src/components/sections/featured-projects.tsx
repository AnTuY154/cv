"use client";

import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/content/projects";
import { useLanguage } from "@/components/i18n/language-provider";

import { ProjectCard } from "@/components/project/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  const { dictionary } = useLanguage();

  return (
    <section className="section section-work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            id="work-title"
            eyebrow={dictionary.work.eyebrow}
            title={dictionary.work.title}
            description={dictionary.work.description}
          />
          <a className="text-link section-heading-link" href="#experience">
            {dictionary.work.timelineLink} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
