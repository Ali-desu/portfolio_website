import type { Metadata } from "next";
import Link from "next/link";
import MaskedLines from "@/components/ui/MaskedLines";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import {
  about,
  education,
  experience,
  languages,
  site,
  skillGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer in Marrakech. Computer engineering at ENSA Marrakech, internships at DXC Technology and SAMSIC, and work across backend, frontend and AI.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="shell pb-20 pt-16 md:pt-24">
        <p className="meta">About</p>

        <h1 className="display mt-7 text-[clamp(3rem,10vw,7.5rem)]">
          <MaskedLines lines={[site.name]} />
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <Reveal delay={200}>
            <div className="prose-body space-y-6 text-[1.05rem]">
              {about.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="space-y-0">
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4">
                <dt className="meta">Location</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4">
                <dt className="meta">Email</dt>
                <dd className="text-sm">
                  <a href={`mailto:${site.email}`} className="u-link">
                    {site.email}
                  </a>
                </dd>
              </div>
              {languages.map((language) => (
                <div
                  key={language.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-4"
                >
                  <dt className="meta">{language.label}</dt>
                  <dd className="text-sm">{language.level}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* How I work */}
      <section className="shell pb-24 md:pb-32">
        <SectionHead index="01" label="How I work" />

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {about.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 90}>
              <div className="border-t border-line pt-6">
                <h3 className="display text-2xl">{principle.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-muted">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="shell pb-24 md:pb-32">
        <SectionHead index="02" label="Experience" />

        <div className="mt-12">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 90}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[12rem_1fr] md:gap-12">
                <div>
                  <p className="meta">{job.period}</p>
                  <p className="mt-3 text-sm text-muted">{job.place}</p>
                </div>

                <div>
                  <h3 className="display text-3xl">{job.role}</h3>
                  <p className="mt-2 text-sm text-accent">{job.org}</p>

                  <div className="prose-body mt-5 max-w-2xl space-y-4 text-[0.98rem]">
                    {job.body.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-line px-3 py-1.5 text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* Education */}
      <section className="shell pb-24 md:pb-32">
        <SectionHead index="03" label="Education" />

        <div className="mt-12">
          {education.map((entry, i) => (
            <Reveal key={entry.org} delay={i * 90}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[12rem_1fr] md:gap-12">
                <div>
                  <p className="meta">{entry.period}</p>
                  <p className="mt-3 text-sm text-muted">{entry.place}</p>
                </div>

                <div>
                  <h3 className="display text-3xl">{entry.role}</h3>
                  <p className="mt-2 text-sm text-accent">{entry.org}</p>

                  {entry.body.length > 0 && (
                    <div className="prose-body mt-5 max-w-2xl space-y-4 text-[0.98rem]">
                      {entry.body.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* Skills */}
      <section className="shell pb-24 md:pb-32">
        <SectionHead index="04" label="Tools" />

        <div className="mt-12">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i * 60, 240)}>
              <div className="grid grid-cols-1 gap-4 border-t border-line py-6 md:grid-cols-[10rem_1fr] md:gap-12">
                <p className="meta">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      <section className="shell">
        <Reveal>
          <div className="border-t border-line pt-12">
            <h2 className="display max-w-3xl text-[clamp(2rem,5vw,3.5rem)]">
              Want to see the work?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="btn btn-accent">
                View projects
              </Link>
              <Link href="/contact" className="btn">
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
