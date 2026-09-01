import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitWords from "@/components/ui/SplitWords";
import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden border-t border-white/8 bg-ink px-6 py-32 text-white sm:py-44 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="What I do" />

        <Reveal className="stagger-words mt-12" y={0} blur={0}>
          <h2 className="max-w-3xl text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            <SplitWords text="Four ways I help teams ship." />
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {expertise.map((item, i) => (
            <Reveal key={item.number} delay={i * 110} y={40} className="h-full">
              <GlowCard className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-white/20 sm:p-10">
                {/* corner accent that grows on hover */}
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 origin-top-right scale-0 rounded-bl-[100%] bg-linear-to-bl from-accent/25 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                />

                <div className="relative flex h-full flex-col">
                  <span className="font-mono text-xs text-white/30">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.7rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2 pt-6">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
