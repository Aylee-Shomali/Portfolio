import { SectionLabel } from "@/components/section-label";
import { Slideshow } from "@/components/slideshow";
import Link from "next/link";
import type { Metadata } from "next";

const slides = [
  { src: "/projects/growth-forge/step1.png", alt: "Growth Forge — Step 1" },
  { src: "/projects/growth-forge/step2.png", alt: "Growth Forge — Step 2" },
  { src: "/projects/growth-forge/step3.png", alt: "Growth Forge — Step 3" },
  { src: "/projects/growth-forge/step4.png", alt: "Growth Forge — Step 4" },
  { src: "/projects/growth-forge/step5.png", alt: "Growth Forge — Step 5" },
  { src: "/projects/growth-forge/step6.png", alt: "Growth Forge — Step 6" },
  { src: "/projects/growth-forge/step7.png", alt: "Growth Forge — Step 7" },
];

export const metadata: Metadata = {
  title: "Growth Forge — Aylee Shomali",
  description: "Case study: Data-ingestion and mapping interface — team lead, OSU CS Capstone.",
};

export default function GrowthForgePage() {
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

      <SectionLabel>Project 02</SectionLabel>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold text-orange">
        Growth Forge
      </h1>
      <p className="mt-4 text-lg text-muted max-w-xl">
        Third-party data-ingestion and mapping interface, built for a
        business client as part of the OSU CS Capstone.
      </p>

      <div className="mt-12">
        <Slideshow images={slides} />
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 py-8 border-y border-ink/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Role</span>
          <p className="mt-2 font-semibold">Team lead — 5 developers</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Context</span>
          <p className="mt-2 font-semibold">OSU CS Capstone Project</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Focus</span>
          <p className="mt-2 font-semibold">Front End, UI Prototyping, Code Review, Requirements</p>
        </div>
      </div>

      <blockquote className="mt-12 border-l-4 border-cyan pl-6 py-2">
        <p className="font-display text-xl md:text-2xl italic text-ink/80">
          &ldquo;We have to give a special call out to Aylee Shomali, who really led the team and drove each of the regular meetings with us. She also demonstrated a lot of flexibility and attention to detail in the development work she did. She did a fantastic job, and we were really impressed with her&rdquo;
        </p>
        <cite className="mt-3 block font-mono text-sm text-muted not-italic">
          — Jim Bodio and Stephen Rich, Managing Partners, BRI, LLC
        </cite>
      </blockquote>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="font-display text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-muted leading-relaxed">
            As part of the OSU CS Capstone, our team was tasked with building a data-ingestion and mapping interface for BRI Associates, a Business Strategy consulting company. BRI already had a robust business strategy application (called Growth Forge) for their clients to use, and wanted to include a new feature to allow users to integrate data from multiple APIs (Such as census and business data) for various business strategies. They needed a way to map the data from the APIs to their internal data model for use in their existing system. Our team built a 7-step interface that allowed the user to select an API, filter and select data segments, and customize metadata with advanced editing tools.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">What I Did</h2>
          <ul className="mt-4 space-y-3 text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">01</span>
              <span><span className="font-semibold">Team Lead</span> - managed the project timeline, ran standups/development meetings, maintained communication and collaboration with team members, kept track of progress, helped ensure that deadlines were met, and coordinated/completed code reviews.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">02</span>
              <span><span className="font-semibold">Client Communication</span> - Gathered requirements directly from the business client during weekly meetings and through Teams messages.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">03</span>
              <span><span className="font-semibold">UI Prototyping</span> - Prototyped the data-mapping 7-step interface in Figma and made improvements based on feedback.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">04</span>
              <span><span className="font-semibold">Front-End Implementation</span> - Implemented core UI for the data-mapping 7-step interface in Vue.js, including dynamic forms, inline grid editing, and multilevel filtering tailored to each individual API that the user could select.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange font-mono text-sm mt-0.5">05</span>
              <span><span className="font-semibold">Project Delivery</span> - Delivered a working data-ingestion and mapping interface on time.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">Results</h2>
          <ul className="mt-4 space-y-2 text-muted leading-relaxed">
            <li>A working data-ingestion and mapping interface ready to be integrated into BRI's existing UI.</li>
          </ul>
        </section>

        <blockquote className="mt-12 border-l-4 border-cyan pl-6 py-2">
        <p className="font-display text-xl md:text-2xl italic text-ink/80">
          &ldquo;We are happy with the scope of what the team was able to deliver and look forward to using it as a basis for capabilities that we hope to deploy within our commercial product later this year.&rdquo;
        </p>
        <cite className="mt-3 block font-mono text-sm text-muted not-italic">
          — Jim Bodio and Stephen Rich, Managing Partners, BRI, LLC
        </cite>
      </blockquote>
      </div>

      <div className="mt-20 pt-8 border-t border-ink/10">
        <Link
          href="/work/forward-focused"
          className="group flex items-center gap-3"
        >
          <span className="text-2xl text-muted group-hover:text-orange group-hover:-translate-x-1 transition-all">
            ←
          </span>
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
              Previous
            </span>
            <p className="mt-1 font-display text-xl font-semibold group-hover:text-orange transition-colors">
              Forward Focused
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
}
