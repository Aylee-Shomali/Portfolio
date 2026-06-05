"use client";

import { SectionLabel } from "@/components/section-label";
import { StaggerChildren, StaggerItem } from "@/components/motion";

const facets = [
  {
    number: "01",
    title: "Design",
    description:
      "From user research and wireframes in Figma to polished UI — I shape how products look, feel, and flow.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Full-stack implementation across React, Angular, Vue, Node, .NET, and SQL — front-end to back-end to database.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "From CI/CD pipelines and Azure deployments to client handoff — I own the product from idea to production.",
  },
];

export function HomeSkills() {
  return (
    <section className="bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
          End-to-end ownership
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
