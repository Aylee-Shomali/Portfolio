import Link from "next/link";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  variant?: "default" | "orange";
}

export function ProjectCard({
  number,
  title,
  description,
  tags,
  href,
  variant = "default",
}: ProjectCardProps) {
  const isOrange = variant === "orange";

  return (
    <Link
      href={href}
      className={`group block p-8 md:p-10 rounded-sm transition-all duration-300 hover:-translate-y-1 ${
        isOrange
          ? "bg-orange text-canvas"
          : "bg-surface border border-ink/5 hover:border-ink/10"
      }`}
    >
      <span
        className={`font-mono text-xs tracking-[0.2em] uppercase ${
          isOrange ? "text-canvas/70" : "text-muted"
        }`}
      >
        Project {number}
      </span>
      <h3
        className={`mt-4 font-display text-2xl md:text-3xl font-semibold ${
          isOrange ? "text-canvas" : "text-ink"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 leading-relaxed ${
          isOrange ? "text-canvas/85" : "text-muted"
        }`}
      >
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-xs px-2 py-1 rounded-sm ${
              isOrange
                ? "bg-canvas/15 text-canvas/90"
                : "bg-surface-dark text-muted"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`inline-block mt-6 font-mono text-sm group-hover:translate-x-1 transition-transform ${
          isOrange ? "text-canvas" : "text-orange"
        }`}
      >
        View case study →
      </span>
    </Link>
  );
}
