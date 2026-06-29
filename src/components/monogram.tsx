export function Monogram({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AS monogram"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        className="font-display"
        fill="currentColor"
        fontSize="18"
        fontWeight="600"
      >
        AS
      </text>
    </svg>
  );
}
