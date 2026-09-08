import Reveal from "@/components/ui/Reveal";

/**
 * Numbered section opener. The rule under the label keeps the page reading
 * like an index rather than a stack of cards.
 */
export default function SectionHead({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title?: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <div className="border-t border-line pt-5">
        <div className="flex items-center gap-4">
          <span className="meta text-accent">{index}</span>
          <span className="meta">{label}</span>
        </div>

        {title && (
          <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)]">
            {title}
          </h2>
        )}

        {intro && <p className="lead mt-5 max-w-2xl">{intro}</p>}
      </div>
    </Reveal>
  );
}
