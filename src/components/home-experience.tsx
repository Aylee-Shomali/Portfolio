"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

interface Role {
  title: string;
  type: string;
  date: string;
  location: string;
  bullets: string[];
}

interface Job {
  company: string;
  roles: Role[];
}

const experience: Job[] = [
  {
    company: "CorVel Corporation",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        date: "Jul 2024 — Present",
        location: "Remote",
        bullets: [
          "Developing and implementing Front-End features and bug fixes using Angular, Bootstrap, and Kendo UI.",
          "Contributing to and maintaining Back-End logic and APIs using C#; including Azure Functions.",
          "Implementing database changes in SQL Server; including triggers, stored procedures, table modifications, and data scripts.",
          "Contributing to the software development lifecycle (SDLC) through deployment scripting, process adherence, and team collaboration.",
          "Actively participating in code reviews, providing and incorporating feedback to maintain code standards.",
          "Collaborating with team members on implementation plans.",
          "Debugging web applications using Azure Application Insights and KQL queries.",
          "Creating and executing unit tests as needed.",
        ],
      },
      {
        title: "QA Automation Engineer",
        type: "Part-time",
        date: "Feb 2022 — Jun 2024",
        location: "Remote",
        bullets: [
          "Creating, executing, and maintaining automated test cases for new and changing functionality using C#, Selenium WebDriver, SQL Server, and Visual Studio.",
          "Regression, functional, and integration testing in an Agile development environment.",
          "Identifying, documenting, and communicating bugs discovered during testing.",
          "Collaborating with QA team members in daily standups and meetings to discuss progress related to individual tasks/projects.",
          "Participating in code reviews as both reviewer and reviewee.",
        ],
      },
      {
        title: "Quality Assurance Engineer I",
        type: "Part-time",
        date: "Aug 2021 — Feb 2022",
        location: "Remote",
        bullets: [
          "Creating, executing, and maintaining manual test cases for new and changing functionality.",
          "Creating test suites to verify development changes.",
          "Regression, functional, and integration testing in an Agile development environment.",
          "Identifying, documenting, and communicating bugs discovered during testing.",
          "Collaborating with QA team members in daily standups and meetings.",
        ],
      },
    ],
  },
  {
    company: "Forward Focused LLC",
    roles: [
      {
        title: "Web Developer",
        type: "Part-time",
        date: "Feb 2017 — Present",
        location: "Portland, OR",
        bullets: [
          "Implemented website redesign and upgraded project to .NET 8.0.",
          "Created clickable prototype in Figma for entire website redesign.",
          "Designed and developed the company website using HTML, CSS, JS, Bootstrap and Azure.",
          "Created the logo design in communication with business owner.",
          "Assisted in editing written content on webpage.",
        ],
      },
    ],
  },
  {
    company: "Cedar Mill Community Library",
    roles: [
      {
        title: "Shelving Assistant",
        type: "Part-time",
        date: "May 2018 — Mar 2020",
        location: "Portland, OR",
        bullets: [
          "Re-shelving in all sections of the library.",
          "Helping public locate library items and answering other questions.",
        ],
      },
    ],
  },
];

export function HomeExperience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
            Experience
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-14">
          {experience.map((job) => (
            <StaggerItem key={job.company} className="relative pl-8 md:pl-10">
              {/* Timeline line */}
              <div className="absolute left-[7px] md:left-[9px] top-3 bottom-0 w-px bg-cyan/30" />

              {/* Company header */}
              <div className="relative mb-6 mt-4">
                <div className="absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-[3px] border-cyan bg-canvas z-10" />
                <h3 className="font-display text-2xl md:text-3xl font-semibold">
                  {job.company}
                </h3>
              </div>

              {/* Roles */}
              <div className="space-y-8 pb-12 last:pb-0">
                {job.roles.map((role) => (
                  <div key={`${job.company}-${role.title}`} className="relative">
                    <div className="absolute -left-8 md:-left-10 top-1.5 w-[9px] h-[9px] md:w-[11px] md:h-[11px] rounded-full bg-cyan/60 ml-[3px] md:ml-[4px] z-10" />
                    <div>
                      <h4 className="font-display text-lg md:text-xl font-semibold">
                        {role.title}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-cyan">
                          {role.type}
                        </span>
                        <span className="text-ink/20">|</span>
                        <span className="font-mono text-xs text-muted">
                          {role.date}
                        </span>
                        <span className="text-ink/20">|</span>
                        <span className="font-mono text-xs text-muted">
                          {role.location}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted leading-relaxed"
                          >
                            <span className="text-orange mt-0.5 shrink-0">&#8226;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
