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
              <SectionLabel>Full-Stack Developer · Portland, OR</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
                Aylee Shomali
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Design and development, end to end. Five years building
                full-stack web applications — from UI design in Figma to
                back-end services and deployment.
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
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Half-circle arc */}
                <div className="absolute inset-0 border-[3px] border-orange/30 rounded-full" />
                <div className="absolute top-6 left-6 right-6 bottom-6 border-[3px] border-orange/15 rounded-full" />
                {/* Offset solid arc — bottom-right quarter */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange/10 rounded-tl-full" />
                {/* Small accent shapes */}
                <div className="absolute -bottom-3 -left-6 w-12 h-12 border-2 border-teal/25 rounded-full" />
                <div className="absolute top-8 -right-3 w-6 h-20 bg-wood/20 rounded-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/5" />
    </section>
  );
}
