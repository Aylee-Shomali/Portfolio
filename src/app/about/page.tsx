import { SectionLabel } from "@/components/section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aylee Shomali",
  description: "Creative full-stack developer based in Portland, OR. Design + code, owned end to end.",
};

const skills = {
  Build: [
    "TypeScript",
    "JavaScript",
    "C#",
    "Python",
    "React",
    "Vue",
    "Angular",
    "Node / Express",
    "ASP.NET",
    "REST APIs",
  ],
  "Data & Cloud": [
    "SQL Server",
    "MongoDB",
    "Azure",
    "Azure Functions",
    "Azure DevOps",
    "Docker",
    "Git",
  ],
  Design: ["Figma", "UI/UX", "Prototyping", "Graphic Design"],
};

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Photo column */}
        <div className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[3/4] bg-surface-dark rounded-sm border border-ink/5 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange/40" />
                </div>
                <span className="font-mono text-sm text-muted">
                  Profile photo coming soon
                </span>
              </div>
            </div>
            {/* Geometric accent behind photo */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange/10 rounded-sm -z-10" />
          </div>
        </div>

        {/* Text column */}
        <div className="md:col-span-7">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
            Aylee Shomali
          </h1>
          <p className="mt-2 font-mono text-sm text-orange">
            Portland, OR · Creative Full-Stack Developer
          </p>

          <div className="mt-8 space-y-5 text-muted leading-relaxed">
            <p>
              I&apos;m a full-stack developer who designs. Or a designer who codes.
              Either way, I take products from a vague idea to deployment — and I
              care about every layer in between.
            </p>
            <p>
              My path wasn&apos;t the typical CS pipeline. I was homeschooled, started
              at community college, and earned my BS in Computer Science from Oregon
              State University in 2024 — while working full-time. That
              self-directed discipline is the through-line of everything I do.
            </p>
            <p>
              At CorVel Corporation, I grew from QA Engineer to Software Engineer
              over three years, shipping front-end features in Angular, building
              back-end services in C#, and managing data in SQL Server. On my own
              time, I run Forward Focused LLC — designing and building complete web
              products for clients, end to end.
            </p>
            <p>
              What sets me apart: I don&apos;t just make things look good or make
              things work. I do both — and I take pleasure in making the invisible
              parts (architecture, information design, systems) as clean and
              intentional as the UI.
            </p>
          </div>

          {/* Education */}
          <div className="mt-12 p-6 bg-surface rounded-sm border border-ink/5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Education
            </span>
            <p className="mt-2 font-semibold">
              BS in Computer Science — Oregon State University
            </p>
            <p className="text-sm text-muted">2024</p>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="mt-20 md:mt-28">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
          Skills & tools
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-orange">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 bg-surface border border-ink/5 text-ink rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
