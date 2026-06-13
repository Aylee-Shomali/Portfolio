import { SectionLabel } from "@/components/section-label";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Fueler Calculator — Aylee Shomali",
  description: "Case study: Social media outrage economy calculator.",
};

export default function FireFuelerPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <nav className="mb-8">
        <Link
          href="/#work"
          className="font-mono text-sm text-muted hover:text-orange transition-colors"
        >
          ← Back to home
        </Link>
      </nav>

      <SectionLabel>Project 03</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold text-orange">
        Fire Fueler Calculator
      </h1>
      <p className="mt-4 text-lg text-muted max-w-xl">
        See how your social media actions fuel the Outrage Economy.
      </p>

      <div className="mt-12 aspect-video bg-surface-dark rounded-sm border border-ink/5 overflow-hidden">
        <Image
          src="/projects/fire-fueler.png"
          alt="Fire Fueler Calculator screenshot"
          width={1200}
          height={675}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 py-8 border-y border-ink/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Role</span>
          <p className="mt-2 font-semibold">Design & development</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Type</span>
          <p className="mt-2 font-semibold">Interactive web app</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Stack</span>
          <p className="mt-2 font-semibold">Details coming soon</p>
        </div>
      </div>

      <div className="mt-12 space-y-12 max-w-2xl">
        <section>
          <h2 className="font-display text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-muted leading-relaxed">
            An interactive calculator that helps users understand how their social
            media behaviors contribute to the outrage economy. Multi-step form
            collecting platform usage, time spent, and interaction types to
            generate a personalized assessment.
          </p>
        </section>
      </div>

      <div className="mt-20 pt-8 border-t border-ink/10">
        <Link
          href="/work/growth-forge"
          className="group flex items-center gap-3"
        >
          <span className="text-2xl text-muted group-hover:text-orange group-hover:-translate-x-1 transition-all">
            ←
          </span>
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
              Previous Project
            </span>
            <p className="mt-1 font-display text-xl font-semibold group-hover:text-orange transition-colors">
              Growth Forge
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
}
