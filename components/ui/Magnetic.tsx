"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** how far the element drifts toward the cursor, 0–1 */
  strength?: number;
};

/**
 * Pulls its child gently toward the cursor while hovering, then springs back.
 * Disabled on touch/coarse pointers.
 */
export default function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      frame = 0;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      tx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      ty = (e.clientY - (rect.top + rect.height / 2)) * strength;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </span>
  );
}
