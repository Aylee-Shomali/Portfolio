import { SectionLabel } from "@/components/section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aylee Shomali",
  description: "Full-stack developer based in Portland, OR. Design and development, end to end.",
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
              <span className="font-mono text-sm text-muted">
                Photo coming soon
              </span>
            </div>
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
            Portland, OR · Full-Stack Developer
          </p>

          <div className="mt-8 space-y-5 text-muted leading-relaxed">
            <p>
              Full-stack developer with a design background. I work across the
              stack — UI design in Figma, front-end development in React, Angular,
              and Vue, back-end services in C# and Node, and database work in
              SQL Server and MongoDB.
            </p>
            <p>
              I was homeschooled, started at community college, and earned my BS
              in Computer Science from Oregon State University in 2024 while
              working full-time.
            </p>
            <p>
              At CorVel Corporation, I&apos;ve moved from QA Engineer to QA
              Automation Engineer to Software Engineer over three years — building
              Angular front ends, C# back-end services, and working with
              SQL Server day to day. Outside of that, I run Forward Focused LLC,
              taking on web design and development projects for clients.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="mt-10 space-y-4">
            <div className="p-5 bg-surface rounded-sm border border-ink/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Software Engineer</p>
                  <p className="text-sm text-muted">CorVel Corporation</p>
                </div>
                <span className="font-mono text-xs text-muted">2021 – Present</span>
              </div>
            </div>
            <div className="p-5 bg-surface rounded-sm border border-ink/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Owner / Developer</p>
                  <p className="text-sm text-muted">Forward Focused LLC</p>
                </div>
                <span className="font-mono text-xs text-muted">Ongoing</span>
              </div>
            </div>
            <div className="p-5 bg-surface rounded-sm border border-ink/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">BS Computer Science</p>
                  <p className="text-sm text-muted">Oregon State University</p>
                </div>
                <span className="font-mono text-xs text-muted">2024</span>
              </div>
            </div>
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
