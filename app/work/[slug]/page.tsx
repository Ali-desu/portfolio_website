import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MaskedLines from "@/components/ui/MaskedLines";
import Reveal from "@/components/ui/Reveal";
import { projectBySlug, projects, site } from "@/lib/content";

/** params is a Promise in this version of Next. */
type ProjectPageProps = { params: Promise<{ slug: string }> };

/** Prerender every project page at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      type: "article",
      url: `${site.url}/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* Header */}
      <section className="shell pt-10 md:pt-14">
        <Link href="/work" className="u-link meta inline-block">
          Back to work
        </Link>

        <h1 className="display mt-10 text-[clamp(2.8rem,9vw,7rem)]">
          <MaskedLines lines={[project.title]} />
        </h1>

        <Reveal delay={200}>
          <p className="lead mt-7 max-w-2xl">{project.summary}</p>
        </Reveal>

        {/* Meta table */}
        <Reveal delay={280}>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 md:grid-cols-3">
            <div>
              <dt className="meta">Year</dt>
              <dd className="mt-2 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="meta">Type</dt>
              <dd className="mt-2 text-sm">{project.type}</dd>
            </div>
            <div>
              <dt className="meta">Discipline</dt>
              <dd className="mt-2 text-sm">{project.discipline}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Body */}
      <section className="shell mt-20 md:mt-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="meta">Overview</h2>
              <div className="prose-body mt-6 space-y-5 text-[1.02rem]">
                {project.overview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="meta mt-16">What I built</h2>
              <ul className="mt-6 space-y-0">
                {project.contribution.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-line py-4 text-[0.98rem] text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="lg:sticky lg:top-28">
              <h2 className="meta">Stack</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-3 py-1.5 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="mt-10 flex flex-col gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn justify-between"
                    >
                      {link.label}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <section className="shell mt-28">
        <Link href={`/work/${next.slug}`} className="row-link group block">
          <div className="relative flex flex-wrap items-baseline justify-between gap-4 py-10">
            <div>
              <p className="meta">Next project</p>
              <p className="row-title display mt-3 text-[clamp(2rem,5vw,3.5rem)]">
                {next.title}
              </p>
            </div>
            <span className="meta">{next.year}</span>
          </div>
        </Link>
        <div className="border-t border-line" />
      </section>
    </>
  );
}
