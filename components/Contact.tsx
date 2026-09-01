import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SplitWords from "@/components/ui/SplitWords";
import Spotlight from "@/components/ui/Spotlight";
import { contact, site, socials } from "@/lib/content";

const ribbon = Array.from({ length: 6 }, () => "Let's work together");

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/8 bg-ink px-6 py-32 text-white sm:py-44 lg:px-10"
    >
      {/* backdrop echoes the hero so the page closes the way it opened */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="aurora-blob bottom-[-30%] left-[10%] h-[70vh] w-[70vh] bg-accent/30"
          style={{ animation: "aurora-a 26s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob right-[-10%] top-[-20%] h-[55vh] w-[55vh] bg-accent-2/25"
          style={{ animation: "aurora-c 32s ease-in-out infinite" }}
        />
        <Spotlight />
        <div className="absolute inset-0 vignette" />
        <div className="pointer-events-none absolute inset-0 grain" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionLabel index="05" label="Contact" />

        <Reveal className="stagger-words mt-14" y={0} blur={0}>
          <h2 className="max-w-4xl text-[clamp(2.6rem,7.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            <SplitWords text={contact.heading[0]} />
            <span className="block">
              <SplitWords
                text={contact.heading[1]}
                start={contact.heading[0].split(" ").length}
                accent={contact.accentWord}
              />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-10 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
            {contact.blurb}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <Magnetic strength={0.3}>
              <a href={`mailto:${site.email}`} className="btn btn-solid group">
                {site.email}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Magnetic>

            <span className="text-sm text-white/35">or find me on</span>

            <div className="flex flex-wrap gap-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-sweep text-sm text-white/70 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* closing ribbon */}
      <div className="relative mt-32">
        <Marquee
          items={ribbon}
          duration={30}
          className="text-[clamp(2rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] text-white/10"
          separator={
            <span className="mx-8 text-accent/50" aria-hidden="true">
              —
            </span>
          }
        />
      </div>
    </section>
  );
}
