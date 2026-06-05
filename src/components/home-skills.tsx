"use client";

import { SectionLabel } from "@/components/section-label";
import { StaggerChildren, StaggerItem } from "@/components/motion";

const facets = [
  {
    number: "01",
    title: "Design",
    description:
      "User research, wireframes, and prototyping in Figma. UI/UX design and graphic design.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Full-stack development across React, Angular, Vue, Node, .NET, and SQL Server.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "CI/CD, Azure deployments, automated testing, and production support.",
  },
];

export function HomeSkills() {
  return (
    <section className="bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
          Design, build, and ship
        </h2>

        <StaggerChildren className="mt-12 grid md:grid-cols-3 gap-8">
          {facets.map((facet) => (
            <StaggerItem key={facet.number}>
              <div className="space-y-4">
                <span className="font-mono text-xs text-orange tracking-[0.2em]">
                  {facet.number}
                </span>
                <h3 className="font-display text-2xl font-semibold">
                  {facet.title}
                </h3>
                <p className="text-muted leading-relaxed">{facet.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
