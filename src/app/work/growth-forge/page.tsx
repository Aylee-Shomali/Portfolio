import { SectionLabel } from "@/components/section-label";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Forge — Aylee Shomali",
  description: "Case study: Data-ingestion and mapping interface — team lead, OSU CS Capstone.",
};

export default function GrowthForgePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <nav className="mb-8">
        <Link
          href="/work"
          className="font-mono text-sm text-muted hover:text-orange transition-colors"
        >
          ← Back to work
        </Link>
      </nav>

      <SectionLabel>Project 02</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
        Growth Forge
      </h1>
      <p className="mt-4 text-lg text-muted max-w-xl">
        Third-party data-ingestion and mapping interface, built for a real
        business client as part of the OSU CS Capstone.
      </p>

      {/* Image placeholder */}
      <div className="mt-12 aspect-video bg-surface-dark rounded-sm border border-ink/5 flex items-center justify-center">
        <span className="font-mono text-sm text-muted">Project screenshots coming soon</span>
      </div>

      {/* Details grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 py-8 border-y border-ink/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Role</span>
          <p className="mt-2 font-semibold">Team lead — 5 developers</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Context</span>
          <p className="mt-2 font-semibold">OSU CS Capstone, real client</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Focus</span>
          <p className="mt-2 font-semibold">Front end, UI, requirements, PM</p>
        </div>
      </div>

      {/* Pullquote placeholder */}
      <blockquote className="mt-12 border-l-4 border-orange pl-6 py-2">
        <p className="font-display text-xl md:text-2xl italic text-ink/80">
          &ldquo;Client feedback quote coming soon.&rdquo;
        </p>
        <cite className="mt-3 block font-mono text-sm text-muted not-italic">
          — Business Client
        </cite>
      </blockquote>

      <div className="mt-12 space-y-12 max-w-2xl">
        <section>
          <h2 className="font-display text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-muted leading-relaxed">
            A business client needed a way to ingest third-party data and map it
            to their internal systems. The project was scoped as a capstone at
            Oregon State, with a real stakeholder and a real delivery deadline.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">What I Did</h2>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">01</span>
              <span>Led the team of 5 — managed the project timeline, ran standups, and coordinated code reviews.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">02</span>
              <span>Gathered requirements directly from the business client.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">03</span>
              <span>Prototyped the data-mapping interface.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">04</span>
              <span>Delivered a working data-ingestion and mapping interface on time.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">Results</h2>
          <ul className="mt-4 space-y-2 text-muted leading-relaxed">
            <li>Top grades for the team</li>
            <li>Positive feedback from the business client</li>
          </ul>
        </section>
      </div>

      <div className="mt-20 pt-8 border-t border-ink/10">
        <Link
          href="/work/forward-focused"
          className="group flex items-center justify-between"
        >
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
              Previous Project
            </span>
            <p className="mt-1 font-display text-2xl font-semibold group-hover:text-orange transition-colors">
              Forward Focused LLC
            </p>
          </div>
          <span className="text-2xl text-muted group-hover:text-orange group-hover:-translate-x-1 transition-all">
            ←
          </span>
        </Link>
      </div>
    </article>
  );
}
