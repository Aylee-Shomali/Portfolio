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
            description="Full website redesign — Figma prototyping, logo design, front-end build, and .NET 8 deployment on Azure. Solo project, working directly with the business owner."
            tags={["Figma", "HTML/CSS", ".NET 8", "Azure"]}
            href="/work/forward-focused"
            variant="orange"
          />
          <ProjectCard
            number="02"
            title="Growth Forge"
            description="Data-ingestion and mapping interface built for a real business client. Team of 5 developers, OSU CS Capstone project."
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
              Interested in working together?
            </h2>
            <p className="mt-3 text-canvas/70 max-w-lg">
              Open to full-time roles and select freelance projects.
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
