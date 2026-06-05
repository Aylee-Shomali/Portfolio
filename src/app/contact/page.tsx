import { SectionLabel } from "@/components/section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aylee Shomali",
  description: "Get in touch — let's talk about what you're building.",
};

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
          Let&apos;s talk.
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          I&apos;m currently open to full-time product roles and select freelance
          projects. If you have something interesting in mind, I&apos;d love to
          hear about it.
        </p>

        <div className="mt-12 space-y-6">
          <a
            href="mailto:aylee.shomali@gmail.com"
            className="group flex items-center gap-4 p-6 bg-surface border border-ink/5 rounded-sm hover:border-orange/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <p className="mt-1 font-semibold group-hover:text-orange transition-colors">
                aylee.shomali@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/aylee-shomali"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-surface border border-ink/5 rounded-sm hover:border-orange/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-orange">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                LinkedIn
              </p>
              <p className="mt-1 font-semibold group-hover:text-orange transition-colors">
                linkedin.com/in/aylee-shomali
              </p>
            </div>
          </a>
        </div>

        <div className="mt-12 p-8 bg-orange text-canvas rounded-sm">
          <p className="font-display text-2xl font-semibold">
            Prefer a quick hello?
          </p>
          <p className="mt-2 text-canvas/80">
            Drop me a line at the email above. I typically respond within a day.
          </p>
        </div>
      </div>
    </section>
  );
}
