import Link from "next/link";
import MaskedLines from "@/components/ui/MaskedLines";
import ProjectRow from "@/components/ui/ProjectRow";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { home, projects, site, skillGroups } from "@/lib/content";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      {/* Hero */}
      <section className="shell pb-24 pt-16 md:pb-36 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Reveal y={0}>
              <div className="mb-10 flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="meta">{site.availableLabel}</span>
              </div>
            </Reveal>

            <h1 className="display text-[clamp(3.5rem,13vw,10rem)]">
              <MaskedLines
                lines={[
                  home.headline[0],
                  <span key="second" className="display-italic text-accent">
                    {home.headline[1]}
                  </span>,
                ]}
                delay={80}
              />
            </h1>
          </div>

          <Reveal delay={420}>
            <p className="lead max-w-md text-balance">{home.intro}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="btn btn-accent">
                See the work
              </Link>
              <Link href="/contact" className="btn">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Fact strip */}
        <Reveal delay={520}>
          <dl className="mt-20 grid grid-cols-1 gap-px border-t border-line pt-6 sm:grid-cols-3">
            {home.facts.map((fact) => (
              <div key={fact.label} className="py-3">
                <dt className="meta">{fact.label}</dt>
                <dd className="mt-2 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Selected work */}
      <section className="shell pb-24 md:pb-36">
        <SectionHead
          index="01"
          label="Selected work"
          title="Recent projects."
          intro={home.workIntro}
        />

        <div className="mt-14">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>

        <Reveal>
          <Link href="/work" className="u-link mt-10 inline-block text-sm">
            All six projects
          </Link>
        </Reveal>
      </section>

      {/* About preview */}
      <section className="shell pb-24 md:pb-36">
        <SectionHead index="02" label="About" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="display max-w-2xl text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.25]">
              {home.aboutIntro}
            </p>

            <Link href="/about" className="u-link mt-10 inline-block text-sm">
              More about me
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              {skillGroups.slice(0, 4).map((group) => (
                <div
                  key={group.label}
                  className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line pt-4"
                >
                  <p className="meta">{group.label}</p>
                  <p className="text-sm text-muted">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact strip */}
      <section className="shell">
        <Reveal>
          <div className="border-t border-line pt-12">
            <p className="meta">Next step</p>
            <h2 className="display mt-6 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)]">
              Have something you want built?
            </h2>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-accent">
                {site.email}
              </a>
              <Link href="/contact" className="btn">
                Other ways to reach me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
