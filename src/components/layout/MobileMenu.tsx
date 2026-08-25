import { ArrowUpRight } from "lucide-react";

import { navItems, site, socials } from "../../data/site";
import { SheetClose } from "../ui/sheet";

type Props = {
  activeId: string;
};

/** Rendered inside `SheetContent` — closing is handled by `SheetClose`. */
const MobileMenu = ({ activeId }: Props) => (
  <div className="flex min-h-0 flex-1 flex-col">
    <nav
      className="shell min-h-0 flex-1 overflow-y-auto pt-2"
      aria-label="Mobile"
    >
      <ul className="flex flex-col">
        {navItems.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="border-b border-border">
              <SheetClose asChild>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="flex min-h-14 items-baseline gap-4 py-4 transition-colors duration-200 hover:text-accent"
                >
                  <span
                    className={`eyebrow w-6 shrink-0 ${
                      isActive ? "text-accent" : ""
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`display text-[1.75rem] uppercase ${
                      isActive ? "text-accent" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </nav>

    <div className="shell shrink-0 border-t border-border py-5">
      <a
        href={`mailto:${site.email}`}
        className="link inline-flex min-h-11 items-center text-[0.9375rem] font-medium"
      >
        {site.email}
      </a>
      <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-200 hover:text-accent"
            >
              {social.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MobileMenu;
