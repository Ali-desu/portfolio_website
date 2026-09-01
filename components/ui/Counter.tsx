"use client";

import { useEffect, useRef } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  /** ms */
  duration?: number;
  className?: string;
};

/** Counts up from zero the first time it scrolls into view. */
export default function Counter({
  to,
  suffix = "",
  duration = 1600,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finish = () => {
      el.textContent = `${to}${suffix}`;
    };

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finish();
      return;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();

        const started = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - started) / duration, 1);
          // ease-out-expo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          el.textContent = `${Math.round(to * eased)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, suffix, duration]);

  // server-rendered value is the final one, so no-JS still shows the number
  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
