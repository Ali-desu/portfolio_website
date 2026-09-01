import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  items: readonly string[];
  /** seconds for one full pass */
  duration?: number;
  className?: string;
  separator?: ReactNode;
};

/**
 * Seamless infinite ticker. The track holds the list twice and slides by
 * exactly -50%, so the loop point is invisible. Pauses on hover.
 */
export default function Marquee({
  items,
  duration = 34,
  className = "",
  separator,
}: MarqueeProps) {
  const sep = separator ?? (
    <span className="mx-6 text-white/25 sm:mx-8" aria-hidden="true">
      ◆
    </span>
  );

  const run = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <div key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span>{item}</span>
          {sep}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`marquee-host edge-fade overflow-hidden ${className}`}>
      <div
        className="marquee"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
