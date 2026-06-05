import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Aylee Shomali",
  description: "Selected projects by Aylee Shomali — design, build, and ship end to end.",
};

export default function WorkPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionLabel>Work</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
        Selected projects
      </h1>
      <p className="mt-4 text-muted text-lg max-w-xl">
        A look at recent work — each showcasing end-to-end ownership from design
        through deployment.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
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

      {/* Experience Block */}
      <div className="mt-20 p-8 md:p-12 bg-surface border border-ink/5 rounded-sm">
        <SectionLabel>Professional Experience</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold">
          CorVel Corporation
        </h2>
        <p className="mt-1 font-mono text-sm text-muted">2021 – Present</p>
        <p className="mt-4 text-muted leading-relaxed max-w-2xl">
          Promoted from QA Engineer I → QA Automation Engineer → Software Engineer.
          Building front-end features in Angular / Bootstrap / Kendo UI; back-end
          services in C# / Azure Functions / APIs; managing data with SQL Server
          stored procedures, triggers, and scripts. Debugging with Azure Application
          Insights and KQL, conducting code reviews, and maintaining automated test
          suites in C# with Selenium.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Angular",
            "C#",
            "Azure Functions",
            "SQL Server",
            "Selenium",
            "Kendo UI",
            "KQL",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-surface-dark text-muted rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
