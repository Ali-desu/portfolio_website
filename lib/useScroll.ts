"use client";

import { useEffect, useRef } from "react";

/**
 * Runs `cb` on scroll/resize, throttled to one call per animation frame.
 * The callback is kept in a ref so callers can pass an inline function
 * without re-subscribing on every render.
 */
export function useScrollTick(cb: () => void) {
  const saved = useRef(cb);

  // refresh after each render so the listener always calls the latest closure
  useEffect(() => {
    saved.current = cb;
  });

  useEffect(() => {
    let frame = 0;

    const run = () => {
      frame = 0;
      saved.current();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };

    // run once so the initial position is correct
    schedule();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}

export const clamp = (v: number, min = 0, max = 1) =>
  v < min ? min : v > max ? max : v;

/**
 * How far an element has travelled through the viewport.
 * 0 = its top edge is entering from the bottom, 1 = its bottom edge has left the top.
 */
export function viewportProgress(el: Element) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return clamp((vh - rect.top) / (vh + rect.height));
}

/**
 * How far the page has scrolled *past* an element's start.
 * 0 while the element's top is below the viewport top, 1 once a full
 * viewport height has scrolled past it.
 */
export function scrolledPast(el: Element) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return clamp(-rect.top / vh);
}

/** Respects the user's reduced-motion setting. */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
