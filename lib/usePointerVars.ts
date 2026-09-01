"use client";

import { useEffect, type RefObject } from "react";

/**
 * Writes the pointer's position over `ref` into `--mx` / `--my` (as percentages)
 * so CSS can draw a glow that follows the cursor. Skipped on touch devices,
 * where there is no hover to follow.
 */
export function usePointerVars(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x = ((e.clientX - rect.left) / rect.width) * 100;
      y = ((e.clientY - rect.top) / rect.height) * 100;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    el.addEventListener("pointermove", onMove);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
    };
  }, [ref]);
}
