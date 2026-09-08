import Link from "next/link";
import type { Project } from "@/lib/content";

/**
 * One line in the project index. The whole row is the link; the title
 * slides right and picks up the accent colour on hover.
 */
export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="row-link group">
      <div className="relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-7 md:grid-cols-[3rem_1.4fr_1fr_auto] md:gap-x-8 md:py-9">
        <span className="meta">{String(index + 1).padStart(2, "0")}</span>

        <h3 className="row-title display text-3xl md:text-[2.6rem]">
          {project.title}
        </h3>

        <p className="col-start-2 row-start-2 mt-2 text-sm text-muted md:col-start-3 md:row-start-1 md:mt-0">
          {project.discipline}
        </p>

        <div className="flex items-center gap-4 self-center">
          <span className="meta">{project.year}</span>
          <span className="row-arrow text-accent" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
