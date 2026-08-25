import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  /** Two-digit index shown in the left column. */
  index: string;
  label: string;
  title: ReactNode;
  lede?: string;
  /** Optional link or control aligned to the end of the header. */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Shared section frame. A heavy rule opens the block, the mono index and
 * label hold columns 1–3, and the statement holds 4–12 — so every section
 * header on the page aligns to the same two verticals.
 */
const Section = ({
  id,
  index,
  label,
  title,
  lede,
  action,
  children,
  className = "",
}: Props) => {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="shell">
        <Reveal>
          <header className="rule grid-12 pt-6">
            <div className="col-span-4 md:col-span-8 lg:col-span-3">
              <p className="eyebrow flex items-center gap-2 lg:flex-col lg:items-start lg:gap-3">
                <span className="text-accent">{index}</span>
                <span className="hidden h-4 w-px bg-border lg:block" />
                <span className="text-input lg:hidden" aria-hidden="true">
                  /
                </span>
                <span className="text-foreground">{label}</span>
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                <h2 className="display max-w-[22ch] text-[clamp(1.75rem,3.2vw,2.5rem)]">
                  {title}
                </h2>
                {action ? <div className="shrink-0 pb-1">{action}</div> : null}
              </div>

              {lede ? (
                <p className="mt-5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {lede}
                </p>
              ) : null}
            </div>
          </header>
        </Reveal>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
};

export default Section;
