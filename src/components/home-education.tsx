"use client";

import { FadeIn } from "@/components/motion";

export function HomeEducation() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
            Education
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1 p-8 bg-surface rounded-sm border border-ink/5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                Oregon State University
              </p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <div className="mt-4 flex flex-wrap gap-4 items-center">
                <span className="font-mono text-sm text-muted">
                  Graduated 2024
                </span>
                <span className="text-muted">·</span>
                <span className="font-mono text-sm">
                  Cumulative GPA: <span className="text-orange font-semibold">3.97</span>
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
