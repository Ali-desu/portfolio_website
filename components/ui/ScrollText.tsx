"use client";

import { useRef } from "react";
import { clamp, prefersReducedMotion, useScrollTick } from "@/lib/useScroll";

type ScrollTextProps = {
  text: string;
  className?: string;
  /** how many words the illuminated edge spans */
  feather?: number;
};

/**
 * Large statement text that lights up word by word as you scroll through it —
 * the reader's eye and the scroll position stay in sync.
 */
export default function ScrollText({
  text,
  className = "",
  feather = 9,
}: ScrollTextProps) {
  const hostRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  useScrollTick(() => {
    const host = hostRef.current;
    if (!host) return;

    if (prefersReducedMotion()) {
      for (const w of wordsRef.current) if (w) w.style.opacity = "1";
      return;
    }

    const rect = host.getBoundingClientRect();
    const vh = window.innerHeight || 1;

    // starts as the block crosses 82% of the viewport, finishes near the top third
    const progress = clamp(
      (vh * 0.82 - rect.top) / (rect.height + vh * 0.3),
    );

    const total = words.length;
    const head = progress * (total + feather);

    for (let i = 0; i < wordsRef.current.length; i++) {
      const el = wordsRef.current[i];
      if (!el) continue;
      const local = clamp((head - i) / feather);
      el.style.opacity = `${(0.14 + local * 0.86).toFixed(3)}`;
    }
  });

  return (
    <p ref={hostRef} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(node) => {
            wordsRef.current[i] = node;
          }}
          className="scroll-word"
        >
          {word}
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
