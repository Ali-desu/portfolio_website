"use client";

import { useRef, type ReactNode } from "react";
import { usePointerVars } from "@/lib/usePointerVars";

/** Card whose highlight tracks the cursor (see `.card-glow` in globals.css). */
export default function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  usePointerVars(ref);

  return (
    <div ref={ref} className={`card-glow relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
