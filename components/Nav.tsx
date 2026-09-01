"use client";

import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { nav, site } from "@/lib/content";
import { useScrollTick } from "@/lib/useScroll";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useScrollTick(() => {
    setScrolled(window.scrollY > 40);
  });

  // lock the page while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <ScrollProgress />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-ink/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 lg:px-10">
          {/* wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
              <span className="absolute inset-0 rounded-full bg-linear-to-br from-accent to-accent-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative font-mono text-[11px]">
                {site.name.charAt(0)}
              </span>
            </span>
            <span>{site.name}</span>
          </a>

          {/* desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-sweep text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2 text-sm transition-all duration-400 hover:border-white/40 hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>

          {/* mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-transform duration-400 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform duration-400 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {[...nav, { label: "Get in touch", href: "#contact" }].map(
            (item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/8 py-5 text-3xl font-medium tracking-tight transition-all duration-500"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(20px)",
                  transitionDelay: `${open ? 120 + i * 70 : 0}ms`,
                }}
              >
                <span className="mr-4 font-mono text-xs text-white/30">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ),
          )}

          <p className="mt-10 text-sm text-white/40">{site.email}</p>
        </div>
      </div>
    </>
  );
}
