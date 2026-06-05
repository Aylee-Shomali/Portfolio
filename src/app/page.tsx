import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import { HomeHero } from "@/components/home-hero";
import { HomeSkills } from "@/components/home-skills";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Selected Work */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
          Recent projects
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <ProjectCard
            number="01"
            title="Forward Focused LLC"
            description="Designed, built, and shipped a complete website redesign solo — from discovery and Figma prototyping to .NET 8 deployment on Azure."
            tags={["Figma", "HTML/CSS", ".NET 8", "Azure"]}
            href="/work/forward-focused"
            variant="orange"
          />
          <ProjectCard
            number="02"
            title="Growth Forge"
            description="Led a 5-developer team to build a data-ingestion and mapping interface for a real business client. Top grades, glowing client feedback."
            tags={["React", "Node.js", "Team Lead", "Capstone"]}
            href="/work/growth-forge"
          />
        </div>
      </section>

      <HomeSkills />

      {/* Contact CTA */}
      <section className="bg-ink text-canvas">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>
              <span className="text-canvas/50">Get in Touch</span>
            </SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-canvas/70 max-w-lg">
              I&apos;m currently open to full-time product roles and select freelance
              projects. Let&apos;s talk about what you&apos;re building.
            </p>
          </div>
          <a
            href="mailto:aylee.shomali@gmail.com"
            className="inline-block px-8 py-4 bg-orange text-canvas font-mono text-sm uppercase tracking-wider hover:bg-terracotta transition-colors"
          >
            Say hello →
          </a>
        </div>
      </section>
    </>
  );
}
