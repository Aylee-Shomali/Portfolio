import { SectionLabel } from "@/components/section-label";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forward Focused LLC — Aylee Shomali",
  description: "Case study: Complete website redesign — design, development, and deployment.",
};

export default function ForwardFocusedPage() {
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

      <SectionLabel>Project 01</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold text-orange">
        Forward Focused LLC
      </h1>
      <p className="mt-4 text-lg text-muted max-w-xl">
        Complete website redesign for a small business — design through deployment, working directly with the business owner.
      </p>

      <div className="mt-12 aspect-video bg-surface-dark rounded-sm border border-ink/5 overflow-hidden">
        <Image
          src="/projects/forward-focused.png"
          alt="Forward Focused website screenshot"
          width={1200}
          height={675}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 py-8 border-y border-ink/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Role</span>
          <p className="mt-2 font-semibold">Solo — design & development</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Stack</span>
          <p className="mt-2 font-semibold">HTML/CSS/JS, Bootstrap, .NET 8, Azure</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Scope</span>
          <p className="mt-2 font-semibold">Discovery, design, build, deploy</p>
        </div>
      </div>

      <div className="mt-12 space-y-12 max-w-2xl">
        <section>
          <h2 className="font-display text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Forward Focused LLC needed a website redesign that better represented
            their brand. The project covered the full scope — from initial discovery
            conversations with the business owner through to production deployment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">What I Did</h2>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">01</span>
              <span>Created a clickable Figma prototype for the full redesign, iterating with the business owner on direction.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">02</span>
              <span>Designed the logo in collaboration with the owner.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">03</span>
              <span>Built the site with HTML, CSS, JavaScript, and Bootstrap.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">04</span>
              <span>Upgraded the project to .NET 8 and deployed on Azure.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">05</span>
              <span>Assisted in editing site copy and handled client communication throughout.</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-20 pt-8 border-t border-ink/10">
        <Link
          href="/work/growth-forge"
          className="group flex items-center justify-between"
        >
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
              Next Project
            </span>
            <p className="mt-1 font-display text-2xl font-semibold group-hover:text-orange transition-colors">
              Growth Forge
            </p>
          </div>
          <span className="text-2xl text-muted group-hover:text-orange group-hover:translate-x-1 transition-all">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
