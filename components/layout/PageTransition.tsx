"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Replays a short fade and lift on every route change. Keying on the
 * pathname remounts the subtree, which restarts the CSS animation without
 * needing any animation library or state of its own.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main key={pathname} id="main" className="page-enter flex-1">
      {children}
    </main>
  );
}
