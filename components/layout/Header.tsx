"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { nav, site } from "@/lib/content";
import { useScrollTick } from "@/lib/useScroll";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useScrollTick(() => {
    setScrolled(window.scrollY > 8);
  });

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

  // /work/chicaura should still light up the Work link.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-sm ${
          scrolled ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            aria-label={`${site.name}, home`}
            className="group flex items-center gap-3"
          >
            <Logo
              size={26}
              className="transition-transform duration-500 group-hover:-rotate-6"
            />
            <span className="flex items-baseline gap-3">
              <span className="text-[0.95rem] font-medium tracking-tight">
                {site.name}
              </span>
              <span className="meta hidden sm:inline">{site.role}</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive(item.href)}
                  className={`u-link text-sm transition-colors ${
                    isActive(item.href)
                      ? "text-text"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`block h-px w-5 bg-text transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-text transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-center">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display border-t border-line py-6 text-5xl"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(14px)",
                transition: "opacity .5s ease, transform .5s ease",
                transitionDelay: `${open ? 80 + i * 70 : 0}ms`,
              }}
            >
              <span className="meta mr-4 align-middle">0{i + 1}</span>
              {item.label}
            </Link>
          ))}

          <a
            href={`mailto:${site.email}`}
            className="mt-10 text-sm text-muted"
            style={{
              opacity: open ? 1 : 0,
              transition: "opacity .5s ease",
              transitionDelay: `${open ? 340 : 0}ms`,
            }}
          >
            {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
