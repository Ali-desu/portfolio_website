"use client";

import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitWords from "@/components/ui/SplitWords";
import { journey } from "@/lib/content";
import { clamp, prefersReducedMotion, useScrollTick } from "@/lib/useScroll";

export default function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  // The rail draws itself downward, tracking the reading position.
  useScrollTick(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;

    if (prefersReducedMotion()) {
      line.style.transform = "scaleY(1)";
      return;
    }

    const rect = list.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const progress = clamp((vh * 0.75 - rect.top) / (rect.height + vh * 0.2));
    line.style.transform = `scaleY(${progress.toFixed(4)})`;
  });

  return (
    <section
      id="journey"
      className="relative border-t border-white/8 bg-ink px-6 py-32 text-white sm:py-44 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" label="The journey" />

        <Reveal className="stagger-words mt-12" y={0} blur={0}>
          <h2 className="max-w-2xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            <SplitWords text="How I got here." />
          </h2>
        </Reveal>

        <ol ref={listRef} className="relative mt-20 pl-8 sm:pl-12">
          {/* rail */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-white/10"
          />
          <span
            ref={lineRef}
            aria-hidden="true"
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-linear-to-b from-accent via-accent-2 to-transparent"
            style={{ transform: "scaleY(0)", willChange: "transform" }}
          />

          {journey.map((entry, i) => (
            <li key={entry.period} className="relative pb-16 last:pb-0">
              {/* node */}
              <span
                aria-hidden="true"
                className="absolute -left-8 top-2 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:-left-12"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              </span>

              <Reveal delay={i * 90} y={28}>
                <div className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <p className="font-mono text-xs text-accent-2">{entry.period}</p>

                  <div>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/40">{entry.org}</p>
                    <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-white/55">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
