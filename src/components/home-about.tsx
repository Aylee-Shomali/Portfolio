"use client";

import { FadeIn } from "@/components/motion";
import { GeometricShapes } from "@/components/geometric-shapes";

export function HomeAbout() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Text side */}
          <div className="md:col-span-7">
            <FadeIn>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
                Who I am
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg font-semibold text-ink">
                I&apos;m a <span className="text-orange">Full Stack Developer</span> specializing
                in Angular, UI/UX, C#, and SQL Server based in Portland, OR.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Proactive and independent, I enjoy discovering{" "}
                  <span className="text-orange font-semibold">solutions</span> to
                  complex problems and accomplishing goals in an{" "}
                  <strong className="text-ink">organized</strong> manner. Experienced
                  in taking full-stack web applications from initial{" "}
                  <strong className="text-ink">brainstorm</strong> to{" "}
                  <strong className="text-ink">release</strong>, as part of
                  collaborative teams and individually.
                </p>
                <p>
                  A firm believer in continuous{" "}
                  <strong className="text-ink">growth</strong>, I am passionate
                  about learning and applying new technologies and development
                  techniques.
                </p>
                <p>
                  Outside of software development, I love to spend time on
                  various <strong className="text-ink">creative</strong> projects.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Geometric shapes */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <FadeIn delay={0.2}>
              <GeometricShapes className="w-48 md:w-64 lg:w-72" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
