"use client";

import { FadeIn } from "@/components/motion";

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-canvas">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-orange">
            Get in Touch
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-canvas/70 max-w-lg text-lg">
            Open to full-time roles and select freelance projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:aylee.shomali@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-orange text-orange font-mono text-sm hover:bg-orange hover:text-canvas transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              aylee.shomali@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/aylee-shomali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-cyan text-cyan font-mono text-sm hover:bg-cyan hover:text-ink transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
