import type { Metadata } from "next";
import MaskedLines from "@/components/ui/MaskedLines";
import Reveal from "@/components/ui/Reveal";
import { contact, site, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about full-time roles or freelance work. Based in Marrakech, Morocco, working remotely.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="shell pb-24 pt-16 md:pb-32 md:pt-24">
      <p className="meta">Contact</p>

      <h1 className="display mt-7 text-[clamp(3rem,11vw,8rem)]">
        <MaskedLines
          lines={[
            "Get in",
            <span key="touch" className="display-italic text-accent">
              touch
            </span>,
          ]}
        />
      </h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
        <Reveal delay={220}>
          <div className="prose-body space-y-5 text-[1.05rem]">
            {contact.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <a
            href={`mailto:${site.email}`}
            className="btn btn-accent mt-10 inline-flex"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={320}>
          <dl>
            <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-5">
              <dt className="meta">Email</dt>
              <dd className="text-sm">
                <a href={`mailto:${site.email}`} className="u-link">
                  {site.email}
                </a>
              </dd>
            </div>

            {socials.map((social) => (
              <div
                key={social.label}
                className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-5"
              >
                <dt className="meta">{social.label}</dt>
                <dd className="text-sm">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="u-link"
                  >
                    {social.href.replace("https://", "").replace(/\/$/, "")}
                  </a>
                </dd>
              </div>
            ))}

            <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-5">
              <dt className="meta">Location</dt>
              <dd className="text-sm">{site.location}</dd>
            </div>

            <div className="grid grid-cols-[7rem_1fr] gap-4 border-t border-b border-line py-5">
              <dt className="meta">Status</dt>
              <dd className="text-sm">{site.availableLabel}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
