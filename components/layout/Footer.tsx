import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { nav, site, socials } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-line">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo size={34} className="mb-5" />
            <p className="display text-3xl">{site.name}</p>
            <p className="mt-3 text-sm text-muted">
              {site.role}, {site.location}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="u-link mt-5 inline-block text-sm"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="meta mb-4">Pages</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="u-link text-sm text-muted hover:text-text">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="u-link text-sm text-muted hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="u-link text-sm text-muted hover:text-text"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="meta">
            {year} {site.name}
          </p>
          <p className="meta">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
