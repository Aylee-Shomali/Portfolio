"use client";

import { useState } from "react";
import { Monogram } from "./monogram";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-ink/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Home">
          <Monogram className="w-8 h-8" />
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
            Aylee Shomali
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-sm uppercase tracking-wider text-muted hover:text-orange transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/5 bg-canvas">
          <ul className="px-6 py-4 space-y-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-sm uppercase tracking-wider text-muted"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
