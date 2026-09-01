import { nav, site, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink px-6 py-14 text-white lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-2 text-sm text-white/35">
            {site.role} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/45">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-sweep transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="link-sweep transition-colors duration-300 hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 text-xs text-white/30">
          <span>© {site.year}</span>
          <a
            href="#top"
            className="link-sweep transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
