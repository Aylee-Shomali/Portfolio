import { SectionLabel } from "@/components/section-label";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forward Focused LLC — Aylee Shomali",
  description: "Case study: Complete website redesign from discovery to deployment, owned end to end.",
};

export default function ForwardFocusedPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/work"
          className="font-mono text-sm text-muted hover:text-orange transition-colors"
        >
          ← Back to work
        </Link>
      </nav>

      <SectionLabel>Project 01</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
        Forward Focused LLC
      </h1>
      <p className="mt-4 text-lg text-muted max-w-xl">
        Designed, built, and shipped a company&apos;s full website redesign solo,
        working directly with the business owner.
      </p>

      {/* Image placeholder */}
      <div className="mt-12 aspect-video bg-surface-dark rounded-sm border border-ink/5 flex items-center justify-center">
        <span className="font-mono text-sm text-muted">Project screenshots coming soon</span>
      </div>

      {/* Details grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 py-8 border-y border-ink/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Role</span>
          <p className="mt-2 font-semibold">Everything — solo end-to-end</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Stack</span>
          <p className="mt-2 font-semibold">HTML/CSS/JS, Bootstrap, .NET 8, Azure</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Scope</span>
          <p className="mt-2 font-semibold">Discovery → Design → Build → Deploy</p>
        </div>
      </div>

      {/* Case study body */}
      <div className="mt-12 space-y-12 max-w-2xl">
        <section>
          <h2 className="font-display text-2xl font-semibold">The Problem</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Forward Focused LLC needed a complete website redesign that better
            reflected their brand and served their customers. They needed someone
            who could handle the entire project — not just code, but design,
            content strategy, and deployment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">My Role</h2>
          <p className="mt-4 text-muted leading-relaxed">
            I owned everything. I worked directly with the business owner from
            discovery through deployment — no handoffs, no gaps. This meant
            requirements gathering, creating a clickable Figma prototype for the
            full redesign, designing the logo in collaboration with the owner,
            building the site, assisting in editing site copy, and deploying to
            production.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">Approach</h2>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">01</span>
              <span>Created a clickable Figma prototype for the full redesign, iterating with the business owner until the vision was right.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">02</span>
              <span>Designed the logo in collaboration with the owner, ensuring brand consistency across all touchpoints.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">03</span>
              <span>Built the site with HTML, CSS, JavaScript, and Bootstrap, prioritizing performance and responsiveness.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">04</span>
              <span>Upgraded the project to .NET 8 and deployed on Azure, handling the full infrastructure setup.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">Why It Matters</h2>
          <p className="mt-4 text-muted leading-relaxed">
            This project is proof of true end-to-end ownership. One person — discovery,
            design, build, deploy, client communication. No specialists needed, no
            handoff friction. The kind of work that shows what &ldquo;full-stack&rdquo;
            actually means when someone takes it seriously.
          </p>
        </section>
      </div>

      {/* Next project */}
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
