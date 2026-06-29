export function GeometricShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-3 ${className}`} aria-hidden>
      {/* Arch with cutout */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path
          d="M10,100 L10,50 A40,40 0 0,1 90,50 L90,100 Z"
          fill="var(--color-cyan)"
        />
        <path
          d="M30,100 L30,60 A20,20 0 0,1 70,60 L70,100 Z"
          fill="var(--color-canvas)"
        />
      </svg>

      {/* Four-pointed star */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path
          d="M50,5 C55,40 60,45 95,50 C60,55 55,60 50,95 C45,60 40,55 5,50 C40,45 45,40 50,5Z"
          fill="var(--color-cyan)"
        />
      </svg>

      {/* Leaf / petal */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path
          d="M50,10 Q90,50 50,90 Q10,50 50,10Z"
          fill="var(--color-cyan)"
        />
      </svg>

      {/* Quarter circles (clover) */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path d="M2,2 A48,48 0 0,1 50,50 L2,50Z" fill="var(--color-cyan)" />
        <path d="M98,2 A48,48 0 0,0 50,50 L98,50Z" fill="var(--color-cyan)" />
        <path d="M2,98 A48,48 0 0,0 50,50 L2,50Z" fill="var(--color-cyan)" />
        <path d="M98,98 A48,48 0 0,1 50,50 L98,50Z" fill="var(--color-cyan)" />
      </svg>

      {/* Concentric circles */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <circle cx="50" cy="50" r="45" fill="var(--color-cyan)" />
        <circle cx="50" cy="50" r="33" fill="var(--color-canvas)" />
        <circle cx="50" cy="50" r="22" fill="var(--color-cyan)" />
        <circle cx="50" cy="50" r="11" fill="var(--color-canvas)" />
      </svg>

      {/* Cross / plus */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path
          d="M35,8 L65,8 L65,35 L92,35 L92,65 L65,65 L65,92 L35,92 L35,65 L8,65 L8,35 L35,35Z"
          fill="var(--color-cyan)"
        />
      </svg>

      {/* Semicircles facing each other */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path d="M48,10 A30,30 0 0,0 48,90" fill="var(--color-cyan)" />
        <path d="M52,10 A30,30 0 0,1 52,90" fill="var(--color-cyan)" />
      </svg>

      {/* Rainbow / concentric arches */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <path d="M5,90 A45,45 0 0,1 95,90" fill="none" stroke="var(--color-cyan)" strokeWidth="7" />
        <path d="M17,90 A33,33 0 0,1 83,90" fill="none" stroke="var(--color-cyan)" strokeWidth="7" />
        <path d="M29,90 A21,21 0 0,1 71,90" fill="none" stroke="var(--color-cyan)" strokeWidth="7" />
        <path d="M41,90 A9,9 0 0,1 59,90" fill="none" stroke="var(--color-cyan)" strokeWidth="7" />
      </svg>

      {/* Stacked diamonds */}
      <svg viewBox="0 0 100 100" className="aspect-square">
        <polygon points="50,8 78,36 50,64 22,36" fill="var(--color-cyan)" />
        <polygon points="50,36 78,64 50,92 22,64" fill="var(--color-cyan)" opacity="0.5" />
      </svg>
    </div>
  );
}
