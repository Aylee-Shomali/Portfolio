"use client";

import { FadeIn } from "@/components/motion";
import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Text side */}
          <div className="md:col-span-6 lg:col-span-7">
            <FadeIn>
              <p className="font-mono text-sm uppercase tracking-[0.15em] text-cyan font-bold">
                Creative Full Stack Developer &ndash; Portland, OR
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-5 font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-orange">
                Aylee<br />Shomali
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-cyan font-bold">
                Design + Code
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-orange text-orange font-mono text-sm hover:bg-orange hover:text-canvas transition-colors"
                >
                  View My Work <span aria-hidden>→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-orange text-orange font-mono text-sm hover:bg-orange hover:text-canvas transition-colors"
                >
                  Contact Me <span aria-hidden>→</span>
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/aylee-shomali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink hover:text-orange transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/aylee-shomali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-ink hover:text-orange transition-colors"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Photo with geometric blocks */}
          <div className="md:col-span-6 lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Terracotta vertical bar — right side */}
                <div className="absolute -top-4 right-0 w-20 md:w-24 h-[110%] bg-terracotta rounded-sm" />
                {/* Cyan rectangle — behind photo, offset up-right */}
                <div className="absolute -top-6 left-8 right-8 h-[70%] bg-cyan rounded-sm" />
                {/* Photo */}
                <div className="relative z-10 mx-4 mt-4">
                  <Image
                    src="/profile.jpg"
                    alt="Aylee Shomali"
                    width={500}
                    height={600}
                    className="w-full h-auto grayscale"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/5" />
    </section>
  );
}
