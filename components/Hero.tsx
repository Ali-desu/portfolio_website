"use client";

import { useRef } from "react";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import SplitWords from "@/components/ui/SplitWords";
import Spotlight from "@/components/ui/Spotlight";
import { hero, site, stack } from "@/lib/content";
import { clamp, prefersReducedMotion, useScrollTick } from "@/lib/useScroll";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // As the hero scrolls away the content recedes and the backdrop drifts
  // slower than the page — cheap depth, written straight to the DOM so
  // React never re-renders during the scroll.
  useScrollTick(() => {
    const content = contentRef.current;
    const backdrop = backdropRef.current;
    if (!content || !backdrop || prefersReducedMotion()) return;

    const p = clamp(window.scrollY / (window.innerHeight || 1));
    content.style.transform = `translate3d(0, ${(p * -90).toFixed(1)}px, 0) scale(${(1 - p * 0.07).toFixed(4)})`;
    content.style.opacity = `${clamp(1 - p * 1.35).toFixed(3)}`;
    backdrop.style.transform = `translate3d(0, ${(p * 110).toFixed(1)}px, 0)`;
  });

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-ink text-white">
      {/* ---------------------------------------------------------- */}
      {/* Backdrop                                                    */}
      {/* ---------------------------------------------------------- */}
      <div ref={backdropRef} className="absolute inset-0" aria-hidden="true">
        {/* drifting colour fields */}
        <div
          className="aurora-blob left-[-10%] top-[-15%] h-[70vh] w-[70vh] bg-accent/40"
          style={{ animation: "aurora-a 24s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob right-[-15%] top-[5%] h-[62vh] w-[62vh] bg-accent-2/30"
          style={{ animation: "aurora-b 30s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob bottom-[-25%] left-[25%] h-[65vh] w-[65vh] bg-accent-3/25"
          style={{ animation: "aurora-c 34s ease-in-out infinite" }}
        />

        <div className="absolute inset-0 grid-lines" />
        <Spotlight />
        <div className="absolute inset-0 vignette" />
        <div className="pointer-events-none absolute inset-0 grain" />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Content                                                     */}
      {/* ---------------------------------------------------------- */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col items-center justify-center px-6 pb-40 pt-32 text-center lg:px-10"
        style={{ willChange: "transform, opacity" }}
      >
        {/* availability */}
        {site.available && (
          <div
            className="anim-fade-up mb-9 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
            style={{ animationDelay: "120ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inset-0 rounded-full bg-emerald-400"
                style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
              />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/70">
              {site.availableLabel}
            </span>
          </div>
        )}

        {/* eyebrow */}
        <p
          className="anim-fade-up label mb-7"
          style={{ animationDelay: "220ms" }}
        >
          {hero.eyebrow}
        </p>

        {/* headline */}
        <h1 className="hero-words max-w-5xl text-[clamp(2.75rem,8.5vw,8rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
          <SplitWords text={hero.headline[0]} start={0} />
          <span className="block">
            <SplitWords
              text={hero.headline[1]}
              start={hero.headline[0].split(" ").length}
              accent={hero.accentWord}
            />
          </span>
        </h1>

        {/* growing rule */}
        <div
          className="anim-fade-in mt-12 h-px w-full max-w-md bg-linear-to-r from-transparent via-white/25 to-transparent"
          style={{ animationDelay: "900ms" }}
        />

        {/* intro */}
        <p
          className="anim-fade-up mt-8 max-w-xl text-balance text-base leading-8 text-white/60 sm:text-lg"
          style={{ animationDelay: "1000ms" }}
        >
          {hero.intro}
        </p>

        {/* calls to action */}
        <div
          className="anim-fade-up mt-11 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "1150ms" }}
        >
          <Magnetic strength={0.28}>
            <a href={hero.ctaPrimary.href} className="btn btn-solid group">
              {hero.ctaPrimary.label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Magnetic>

          <Magnetic strength={0.28}>
            <a href={hero.ctaSecondary.href} className="btn btn-ghost">
              {hero.ctaSecondary.label}
            </a>
          </Magnetic>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Bottom rail                                                 */}
      {/* ---------------------------------------------------------- */}
      <div
        className="anim-fade-in absolute inset-x-0 bottom-20 z-10"
        style={{ animationDelay: "1400ms" }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between px-6 lg:px-10">
          <span className="label">{site.location}</span>

          {/* scroll cue */}
          <div className="hidden flex-col items-center gap-3 sm:flex">
            <span className="label">Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/15">
              <span
                className="absolute inset-x-0 top-0 block h-1/2 bg-white/90"
                style={{ animation: "scroll-cue 2.4s ease-in-out infinite" }}
              />
            </span>
          </div>

          <span className="label">{site.year}</span>
        </div>
      </div>

      {/* stack ticker */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/8 bg-black/25 py-4 backdrop-blur-sm">
        <Marquee
          items={stack}
          duration={42}
          className="font-mono text-xs uppercase tracking-[0.2em] text-white/45"
        />
      </div>

      {/* fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 bg-linear-to-t from-ink via-ink/60 to-transparent" />
    </section>
  );
}
