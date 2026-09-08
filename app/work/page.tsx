import type { Metadata } from "next";
import MaskedLines from "@/components/ui/MaskedLines";
import ProjectRow from "@/components/ui/ProjectRow";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six projects: a live jewellery storefront, a document assistant that cites its sources, a microservices banking platform, semantic image search, a medical chatbot and a library system.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="shell pb-16 pt-16 md:pt-24">
        <p className="meta">Work</p>

        <h1 className="display mt-7 text-[clamp(3rem,10vw,7.5rem)]">
          <MaskedLines lines={["Projects"]} />
        </h1>

        <Reveal delay={220}>
          <p className="lead mt-8 max-w-xl">
            Six projects, listed newest first. Each one has its own page with
            what it does, what I built and the stack behind it.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 60, 240)}>
            <ProjectRow project={project} index={i} />
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </section>
    </>
  );
}
