"use client";

import { FadeIn } from "@/components/motion";
import { SectionLabel } from "@/components/section-label";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Text side */}
          <div className="md:col-span-7">
            <FadeIn>
              <SectionLabel>Creative Full-Stack Developer</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
                I design it, build it,{" "}
                <span className="text-orange">and ship it.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Five years shipping full-stack web apps. I care about the whole
                product — the interface people see and the systems underneath.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-block px-8 py-4 bg-orange text-canvas font-mono text-sm uppercase tracking-wider hover:bg-terracotta transition-colors"
                >
                  See my work
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 border border-ink/20 font-mono text-sm uppercase tracking-wider hover:border-ink/40 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Geometric accent */}
          <div className="hidden md:flex md:col-span-5 justify-end items-start pt-8">
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-orange/10 flex items-center justify-center">
                  <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-orange/20 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-orange" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-teal/20 rounded-full" />
                <div className="absolute top-4 -right-4 w-8 h-24 bg-wood/30 rounded-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative arc */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/5" />
    </section>
  );
}
