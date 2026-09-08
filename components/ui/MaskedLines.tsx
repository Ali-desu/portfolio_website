import type { CSSProperties, ReactNode } from "react";

type MaskedLinesProps = {
  lines: ReactNode[];
  /** ms before the first line moves */
  delay?: number;
  className?: string;
};

/**
 * Each line slides up out of its own clipping box on load. Pure CSS with
 * staggered delays, so it plays before hydration rather than waiting on JS.
 */
export default function MaskedLines({
  lines,
  delay = 0,
  className = "",
}: MaskedLinesProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span style={{ "--li": i, "--ld": `${delay}ms` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
