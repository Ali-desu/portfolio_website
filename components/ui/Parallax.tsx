"use client";

import { useRef, type ReactNode } from "react";
import { prefersReducedMotion, useScrollTick, viewportProgress } from "@/lib/useScroll";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** px of travel across the full pass through the viewport; negative moves up */
  distance?: number;
};

/** Drifts its children as the page scrolls, at a different rate than the page. */
export default function Parallax({
  children,
  className = "",
  distance = -80,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useScrollTick(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    // centre the range so the element sits at rest mid-viewport
    const offset = (viewportProgress(el) - 0.5) * distance;
    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
