"use client";

import { useRef } from "react";
import { clamp, useScrollTick } from "@/lib/useScroll";

/** Thin gradient bar across the top showing how far down the page you are. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollTick(() => {
    const el = ref.current;
    if (!el) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? clamp(window.scrollY / scrollable) : 0;
    el.style.transform = `scaleX(${progress.toFixed(4)})`;
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5 bg-white/5"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-linear-to-r from-accent via-accent-2 to-accent-3"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
