import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Aylee Shomali",
  description: "Selected projects — design, development, and deployment.",
};

export default function WorkPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionLabel>Work</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
        Selected projects
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
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

      {/* Experience Block */}
      <div className="mt-20 p-8 md:p-12 bg-surface border border-ink/5 rounded-sm">
        <SectionLabel>Professional Experience</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold">
          CorVel Corporation
        </h2>
        <p className="mt-1 font-mono text-sm text-muted">2021 – Present · QA Engineer I → QA Automation Engineer → Software Engineer</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-muted">
          <div>
            <p className="font-semibold text-ink mb-2">Front End</p>
            <p>Angular, Bootstrap, Kendo UI</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Back End</p>
            <p>C#, Azure Functions, REST APIs</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Data</p>
            <p>SQL Server — stored procedures, triggers, data scripts</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Testing & Tooling</p>
            <p>Selenium (C#), Azure Application Insights, KQL, code reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
