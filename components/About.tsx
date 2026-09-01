import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import ScrollText from "@/components/ui/ScrollText";
import SectionLabel from "@/components/ui/SectionLabel";
import { about, skillGroups } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink px-6 py-32 text-white sm:py-44 lg:px-10"
    >
      {/* faint field behind the statement */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionLabel index="01" label="About me" />

        {/* the statement lights up as you scroll it */}
        <ScrollText
          text={about.statement}
          className="mt-14 max-w-4xl text-[clamp(1.6rem,3.6vw,2.9rem)] font-medium leading-[1.28] tracking-[-0.025em]"
        />

        {/* supporting copy + facts */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 110}>
                <p className="max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div>
            {about.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 110} y={22}>
                <div className="border-t border-white/8 py-6">
                  <p className="label">{fact.label}</p>
                  <p className="mt-3 text-lg text-white/85">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="mt-28 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 130}
              y={26}
              className="bg-ink px-8 py-12 text-center sm:text-left"
            >
              <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.04em]">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 text-sm text-white/45">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        {/* stack, grouped the way the CV reads */}
        <div className="mt-28">
          <Reveal>
            <p className="label mb-10">Technologies I work with</p>
          </Reveal>

          <div className="space-y-10">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.label} delay={gi * 90} y={24}>
                <div className="grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <p className="font-mono text-xs text-accent-2">{group.label}</p>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-all duration-400 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
