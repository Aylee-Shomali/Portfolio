"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function RotatingShape({
  children,
  speed = 1,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90 * speed]);

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}

export function GeometricShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`} aria-hidden>
      {/* Row 1 */}
      <RotatingShape speed={0.8} className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-br-full" />
      </RotatingShape>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-full" />
      </div>
      <RotatingShape speed={-0.6} className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-bl-full" />
      </RotatingShape>
      {/* Row 2 */}
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tr-full" />
      </div>
      <RotatingShape speed={1} className="aspect-square overflow-hidden flex items-end justify-end">
        <div className="w-full h-1/2 bg-cyan rounded-t-full" />
      </RotatingShape>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tl-full rounded-br-full" />
      </div>
      {/* Row 3 */}
      <RotatingShape speed={-0.5} className="aspect-square overflow-hidden flex items-end">
        <div className="w-1/2 h-full bg-cyan rounded-tr-full" />
      </RotatingShape>
      <div className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan rounded-tl-full" />
      </div>
      <RotatingShape speed={0.7} className="aspect-square overflow-hidden">
        <div className="w-full h-full bg-cyan/40 rounded-full" />
      </RotatingShape>
    </div>
  );
}
