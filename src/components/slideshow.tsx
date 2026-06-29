"use client";

import { useState } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: { src: string; alt: string }[];
}

export function Slideshow({ images }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative rounded-sm border border-ink/5 overflow-hidden bg-surface">
      <Image
        src={images[current].src}
        alt={images[current].alt}
        width={1200}
        height={675}
        className="w-full h-auto block"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/80 backdrop-blur-sm border border-ink/10 flex items-center justify-center text-ink hover:bg-canvas transition-colors"
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12L6 8l4-4" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas/80 backdrop-blur-sm border border-ink/10 flex items-center justify-center text-ink hover:bg-canvas transition-colors"
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4l4 4-4 4" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-orange" : "bg-ink/20 hover:bg-ink/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
