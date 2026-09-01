"use client";

import { useEffect, useRef } from "react";

/**
 * A soft light that trails the cursor across the section it is dropped into.
 * Eases toward the pointer rather than snapping, which reads as depth.
 */
export default function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let targetX = 50;
    let targetY = 40;
    let x = 50;
    let y = 40;
    let active = false;

    const loop = () => {
      x += (targetX - x) * 0.09;
      y += (targetY - y) * 0.09;
      el.style.setProperty("--mx", `${x.toFixed(2)}%`);
      el.style.setProperty("--my", `${y.toFixed(2)}%`);

      // keep easing until we've essentially arrived
      if (active || Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1) {
        frame = requestAnimationFrame(loop);
      } else {
        frame = 0;
      }
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
      active = true;
      el.style.opacity = "1";
      start();
    };

    const onLeave = () => {
      active = false;
      el.style.opacity = "0.35";
      start();
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`spotlight pointer-events-none absolute inset-0 opacity-[0.35] ${className}`}
    />
  );
}
