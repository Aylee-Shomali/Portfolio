"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Forward Focused",
    image: "/projects/forward-focused.png",
    href: "/work/forward-focused",
  },
  {
    number: "02",
    title: "Growth Forge",
    image: "/projects/growth-forge.png",
    href: "/work/growth-forge",
  },
];

export function HomeProjects() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
            Recent Projects
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-12 grid sm:grid-cols-2 gap-8 max-w-4xl">
          {projects.map((project) => (
            <StaggerItem key={project.number}>
              <Link
                href={project.href}
                className="group block bg-surface rounded-lg border border-ink/5 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-5 pb-0">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-orange">
                    <span className="font-mono text-lg">{project.number}</span>{" "}
                    {project.title}
                  </h3>
                </div>
                <div className="mt-4 aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-5 pt-3">
                  <p className="font-mono text-sm text-cyan">
                    View Project <span aria-hidden>→</span>
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
