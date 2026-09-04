import {
  ArrowUpRight,
  Building2,
  Database,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { whatsappUrl } from "../../lib/whatsapp";
import { cn } from "../../lib/utils";
import type { Service } from "../../types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Reveal from "../ui/Reveal";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const ICONS: Record<string, LucideIcon> = {
  ShoppingCart,
  Building2,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  Database,
};

type Props = {
  service: Service;
  /** Position in the grid — sets the stagger delay and which edges carry a divider. */
  index: number;
};

/**
 * The grid runs 3-up at lg and 2-up at md on the same `col-span-4` track, so
 * row width changes with the breakpoint. These are the vertical hairlines
 * that divider the row — left border on every column but the first, undone
 * again wherever a 2-up column happens to land first in the 3-up row.
 */
const dividerClass = (index: number) => {
  const classes: string[] = [];

  if (index % 2 !== 0) classes.push("md:border-l", "md:pl-6");

  if (index % 3 !== 0) {
    classes.push("lg:border-l", "lg:pl-7");
  } else if (index % 2 !== 0) {
    classes.push("lg:border-l-0", "lg:pl-0");
  }

  return classes.join(" ");
};

const ServiceCard = ({ service, index }: Props) => {
  const Icon = ICONS[service.icon];

  return (
    <li className={cn("col-span-4 border-t border-border pt-7", dividerClass(index))}>
      <Reveal delay={(index % 3) * 0.06} className="flex h-full flex-col">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-accent"
          aria-hidden="true"
        >
          <Icon className="h-4 w-4" />
        </span>

        <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug text-foreground">
          {service.name}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-1.5"
          aria-label={`${service.name} capabilities`}
        >
          {service.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline">{tag}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Button asChild variant="outline" size="sm">
            <a
              href={whatsappUrl(service.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label={`${service.ctaLabel} on WhatsApp`}
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {service.ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Reveal>
    </li>
  );
};

export default ServiceCard;
