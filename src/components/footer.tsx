import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-canvas">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-semibold">Let&apos;s work together.</p>
            <p className="mt-2 text-muted max-w-md">
              Currently open to full-time product roles and select freelance projects.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:aylee.shomali@gmail.com"
              className="font-mono text-muted hover:text-orange transition-colors"
            >
              aylee.shomali@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/aylee-shomali"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-muted hover:text-orange transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="font-mono text-orange hover:text-terracotta transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-ink/5 text-xs text-muted font-mono">
          © {new Date().getFullYear()} Aylee Shomali. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}
