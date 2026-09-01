import Reveal from "@/components/ui/Reveal";

/** Numbered rule + caption used to open every section. */
export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal y={18} blur={4}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-12 bg-white/20" />
        <span className="label">{label}</span>
      </div>
    </Reveal>
  );
}
