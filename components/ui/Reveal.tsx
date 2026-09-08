"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms before the transition starts */
  delay?: number;
  /** starting offset in px */
  y?: number;
  style?: CSSProperties;
};

/**
 * Fades its children up the first time they enter the viewport. The
 * transition itself lives in globals.css under [data-reveal].
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          "--rd": `${delay}ms`,
          "--ry": `${y}px`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
