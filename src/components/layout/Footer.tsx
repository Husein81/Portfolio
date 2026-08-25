import { ArrowUp, ArrowUpRight } from "lucide-react";

import { navItems, site, socials } from "../../data/site";

const Footer = () => {
  return (
    <footer className="pb-10 pt-16">
      <div className="shell">
        <div className="grid-12 rule pt-8">
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <p className="flex items-baseline gap-2.5">
              <span className="font-mono text-sm font-medium text-accent">
                HN
              </span>
              <span className="text-sm font-medium tracking-tight">
                {site.name}
              </span>
            </p>
            <p className="eyebrow mt-2">
              {site.role} · {site.location}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link mt-5 inline-flex min-h-11 items-center text-sm"
            >
              {site.email}
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-2 md:col-span-4 lg:col-span-3 lg:col-start-7"
          >
            <p className="eyebrow text-accent">Sections</p>
            <ul className="mt-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <p className="eyebrow text-accent">Elsewhere</p>
            <ul className="mt-4 space-y-1">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  download
                  className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <p className="datum text-xs text-faint">
            © {new Date().getFullYear()} {site.name} — built with React,
            TypeScript, and Tailwind CSS.
          </p>

          <a
            href="#home"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-200 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
