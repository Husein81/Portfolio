import { ArrowUpRight } from "lucide-react";

import { journey } from "../../data/journey";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Section from "../ui/Section";
import { Stagger, StaggerItem } from "../ui/Stagger";

const Experience = () => {
  return (
    <Section
      id="experience"
      index="05"
      label="Experience"
      title="Where the work above actually happened."
      lede="Production engineering across municipal operations, enterprise CRM, real-time geospatial SaaS, and distributed systems."
    >
      <Stagger as="ol">
        {journey.map((entry, index) => {
          const isCurrent = entry.period.toLowerCase().includes("present");
          const isFirst = index === 0;
          const isLast = index === journey.length - 1;

          return (
            <StaggerItem
              key={`${entry.org}-${entry.start}`}
              as="li"
              className="border-t border-border"
            >
              <div className="group relative grid-12 -mx-3 px-3 py-6 transition-colors duration-200 hover:bg-muted">
                {/* Mobile / Tablet vertical timeline spine */}
                <span
                  aria-hidden="true"
                  className={`lg:hidden absolute left-3 w-px bg-border transition-colors duration-200 group-hover:bg-accent/40 ${
                    isFirst
                      ? "top-[34px] -bottom-6"
                      : isLast
                        ? "-top-6 h-[58px]"
                        : "-top-6 -bottom-6"
                  }`}
                />

                {/* Mobile / Tablet timeline node */}
                <span
                  aria-hidden="true"
                  className="lg:hidden absolute left-3 top-[29px] -translate-x-1/2 flex items-center justify-center"
                >
                  <span
                    className={`flex h-2.5 w-2.5 items-center justify-center border transition-colors duration-200 ${
                      isCurrent
                        ? "border-accent bg-background"
                        : "border-border bg-background group-hover:border-accent group-hover:bg-accent"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 transition-colors duration-200 ${
                        isCurrent
                          ? "bg-accent"
                          : "bg-border group-hover:bg-accent-foreground"
                      }`}
                    />
                  </span>
                </span>

                {/* Date & Kind Badge */}
                <div className="col-span-4 pl-7 flex flex-wrap items-center gap-x-3 gap-y-2 md:col-span-8 lg:col-span-3 lg:flex-col lg:items-start lg:pl-0">
                  <p className="datum text-muted-foreground transition-colors duration-200 group-hover:text-accent">
                    {entry.period}
                  </p>
                  <Badge variant="outline">{entry.kind}</Badge>
                </div>

                {/* Details Column with Desktop timeline spine & node */}
                <div className="col-span-4 pl-7 relative md:col-span-8 lg:col-span-9 lg:pl-8">
                  {/* Desktop vertical timeline spine */}
                  <span
                    aria-hidden="true"
                    className={`hidden lg:block absolute left-0 w-px bg-border transition-colors duration-200 group-hover:bg-accent/40 ${
                      isFirst
                        ? "top-[12px] -bottom-6"
                        : isLast
                          ? "-top-6 h-[36px]"
                          : "-top-6 -bottom-6"
                    }`}
                  />

                  {/* Desktop timeline node */}
                  <span
                    aria-hidden="true"
                    className="hidden lg:flex absolute left-0 top-[7px] -translate-x-1/2 items-center justify-center"
                  >
                    <span
                      className={`flex h-2.5 w-2.5 items-center justify-center border transition-colors duration-200 ${
                        isCurrent
                          ? "border-accent bg-background"
                          : "border-border bg-background group-hover:border-accent group-hover:bg-accent"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 transition-colors duration-200 ${
                          isCurrent
                            ? "bg-accent"
                            : "bg-border group-hover:bg-accent-foreground"
                        }`}
                      />
                    </span>
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[1.0625rem] font-semibold text-foreground">
                        {entry.role}
                      </h3>
                      <p className="eyebrow mt-1.5">
                        {entry.url ? (
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                          >
                            <span>{entry.org}</span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5 text-accent"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          entry.org
                        )}
                      </p>
                    </div>

                    {entry.url ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="shrink-0"
                      >
                        <a href={entry.url} target="_blank" rel="noreferrer">
                          Live site
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    ) : null}
                  </div>

                  <p className="mt-3.5 max-w-[72ch] text-sm leading-relaxed text-muted-foreground">
                    {entry.summary}
                  </p>
                  {entry.tags.length > 0 ? (
                    <p className="datum mt-3.5 text-xs text-faint">
                      {entry.tags.join(" / ")}
                    </p>
                  ) : null}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
};

export default Experience;
