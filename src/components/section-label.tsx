export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {children}
    </span>
  );
}
