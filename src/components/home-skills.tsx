"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const skills = {
  Build: [
    "Angular",
    "TypeScript",
    "JavaScript",
    "C#",
    "ASP.NET",
    "Python",
    "React",
    "Vue",
    "Node.js / Express.js",
    "NuGet Package Creation",
    "REST APIs",
  ],
  "Data & Cloud": [
    "SQL Server",
    "MongoDB",
    "Azure",
    "Azure Functions",
    "Azure DevOps",
    "Google Cloud",
    "Git",
  ],
  Design: [
    "Figma", 
    "UI/UX", 
    "CSS", 
    "Tailwind", 
    "Bootstrap", 
    "Prototyping", 
    "Graphic Design", 
    "Photoshop", 
    "Canva", 
    "Google Material 3"
  ],
};

export function HomeSkills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
            Skills & Tools
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-12 grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <StaggerItem key={category}>
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-cyan">
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
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2} className="mt-20">
          <p className="text-sm font-mono text-center">
              *This is just a snapshot of my skillset. I'm always interested in learning new technologies and tools as needed.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
