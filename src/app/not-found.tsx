import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan">
        404
      </span>
      <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold text-orange">
        Page Not Found
      </h1>
      <p className="mt-4 text-lg text-muted max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-orange text-orange font-mono text-sm hover:bg-orange hover:text-canvas transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
