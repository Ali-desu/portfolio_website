"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms before the transition starts */
  delay?: number;
  /** starting offset in px */
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  /** fraction of the element that must be visible before it fires */
  amount?: number;
  style?: CSSProperties;
};

/**
 * Fades + lifts its children into place the first time they enter the viewport.
 * The actual transition lives in globals.css under `[data-reveal]`, so a child
 * with `stagger-words` picks up the same `.is-in` signal and cascades.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  x = 0,
  scale = 1,
  blur = 8,
  amount = 0.15,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already on screen at mount (or no observer support): show it immediately.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            observer.unobserve(el);
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          "--rd": `${delay}ms`,
          "--ry": `${y}px`,
          "--rx": `${x}px`,
          "--rs": scale,
          "--rb": `${blur}px`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
