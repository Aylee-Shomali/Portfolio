export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-canvas">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-muted font-mono">
          © {new Date().getFullYear()} Aylee Shomali
        </span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:aylee.shomali@gmail.com"
            className="font-mono text-xs text-muted hover:text-orange transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/aylee-shomali"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-orange transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aylee-shomali"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-orange transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
