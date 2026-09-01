import { Fragment, type CSSProperties } from "react";

type SplitWordsProps = {
  text: string;
  /** stagger offset, so a second line continues the first line's rhythm */
  start?: number;
  /** this word gets the shimmering gradient treatment */
  accent?: string;
  className?: string;
};

/**
 * Splits a line into masked words that slide up individually.
 * Animation is pure CSS: `.hero-words` plays on load, `.stagger-words`
 * waits for a parent <Reveal> to add `.is-in`.
 */
export default function SplitWords({
  text,
  start = 0,
  accent,
  className = "",
}: SplitWordsProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        // the space sits outside the mask so lines still wrap normally
        <Fragment key={`${word}-${i}`}>
          <span className="word-mask">
            <span
              className={`word-inner ${word === accent ? "text-shimmer" : ""}`}
              style={{ "--wi": start + i } as CSSProperties}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
