export function GeometricShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`} aria-hidden>
      {/* Row 1 */}
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-br-full" />
      </div>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-full" />
      </div>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-bl-full" />
      </div>
      {/* Row 2 */}
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tr-full" />
      </div>
      <div className="aspect-square overflow-hidden flex items-end justify-end">
        <div className="w-full h-1/2 bg-cyan rounded-t-full" />
      </div>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tl-full rounded-br-full" />
      </div>
      {/* Row 3 */}
      <div className="aspect-square overflow-hidden flex items-end">
        <div className="w-1/2 h-full bg-cyan rounded-tr-full" />
      </div>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tl-full" />
      </div>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan/40 rounded-full" />
      </div>
    </div>
  );
}
