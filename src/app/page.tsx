import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { personStructuredData, stringifyJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(personStructuredData()) }}
      />
      <Hero />
      <CredibilityStrip />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
