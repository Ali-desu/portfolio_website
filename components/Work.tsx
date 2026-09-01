"use client";

import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitWords from "@/components/ui/SplitWords";
import { projects, socials, type Project } from "@/lib/content";
import { clamp, prefersReducedMotion, useScrollTick } from "@/lib/useScroll";

const githubUrl =
  socials.find((s) => s.label === "GitHub")?.href ?? "https://github.com/";

/** Initials for multi-word titles, first three letters for single-word ones. */
function monogram(title: string) {
  const initials = title
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("");
  return (initials.length > 1 ? initials : title.slice(0, 3)).toUpperCase();
}

export default function Work() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Each card sticks in place while the next one slides over it. The covered
  // card shrinks and dims by exactly how much of it is overlapped, so the deck
  // reads as physical depth rather than a hard cut.
  useScrollTick(() => {
    if (prefersReducedMotion()) return;

    for (let i = 0; i < cardRefs.current.length; i++) {
      const card = cardRefs.current[i];
      const next = wrapRefs.current[i + 1];
      if (!card) continue;

      let coverage = 0;
      if (next) {
        const cardRect = card.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        coverage = clamp(
          (cardRect.bottom - nextRect.top) / Math.max(cardRect.height, 1),
        );
      }

      card.style.transform = `scale(${(1 - coverage * 0.08).toFixed(4)}) translate3d(0, ${(coverage * -12).toFixed(1)}px, 0)`;
      card.style.opacity = `${(1 - coverage * 0.45).toFixed(3)}`;
    }
  });

  return (
    <section
      id="work"
      className="relative border-t border-white/8 bg-ink px-6 py-32 text-white sm:py-44 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" label="Selected work" />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <Reveal className="stagger-words" y={0} blur={0}>
            <h2 className="max-w-2xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              <SplitWords text="Things I've built." />
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-sm text-sm leading-7 text-white/45">
              A few projects that show how I think about problems, interfaces
              and the code underneath them.{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="link-sweep text-white/80 hover:text-white"
              >
                All of them on GitHub
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* the deck */}
        <div className="mt-24">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(node) => {
                wrapRefs.current[i] = node;
              }}
              className="sticky pb-6"
              // a tighter step keeps the fifth card's stack offset off-screen-safe
              style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}
            >
              <div
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                className="origin-top"
                style={{ willChange: "transform, opacity" }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [from, to] = project.colors;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)] sm:p-12">
      {/* project-tinted light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-[90px] transition-opacity duration-700 group-hover:opacity-70"
        style={{ background: `radial-gradient(circle, ${from}, transparent 70%)` }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        {/* text */}
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs text-white/35">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-white/15" />
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span className="rounded-full border border-white/12 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/45">
              {project.kind}
            </span>
          </div>

          <h3 className="mt-7 text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            {project.title}
          </h3>

          <p className="mt-5 max-w-lg text-[0.95rem] leading-7 text-white/55">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-sweep inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* abstract visual — no photography, just light and geometry */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <div
            className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 grid-lines opacity-70" />

          {/* slow orbiting sheen */}
          <div
            aria-hidden="true"
            className="absolute -inset-1/2 opacity-30"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${to}, transparent 45%)`,
              animation: "spin-slow 14s linear infinite",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-outline text-[clamp(3rem,9vw,6rem)] font-semibold tracking-[-0.05em]">
              {monogram(project.title)}
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 grain" />
        </div>
      </div>
    </article>
  );
}
