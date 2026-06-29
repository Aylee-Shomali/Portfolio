import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Aylee Shomali",
  description: "Shop coming soon.",
};

export default function ShopPage() {
  return (
    <div className="pt-66 pb-66 flex-1 flex flex-col items-center justify-center text-center bg-surface-dark">
      <h1 className="font-display text-5xl md:text-6xl font-bold text-orange">
        Shop Coming Soon!
      </h1>
      <p className="mt-4 text-lg text-muted max-w-md">
        Something exciting is in the works. Check back soon.
      </p>
    </div>
  );
}
