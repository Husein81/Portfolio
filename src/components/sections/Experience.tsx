import { journey } from "../../data/journey";
import { Badge } from "../ui/badge";
import Section from "../ui/Section";
import { Stagger, StaggerItem } from "../ui/Stagger";

const Experience = () => {
  return (
    <Section
      id="experience"
      index="05"
      label="Experience"
      title="Where the work above actually happened."
      lede="A current full-time role, a freelance engagement that ran alongside it, and the backend job that started it all."
    >
      <Stagger as="ol">
        {journey.map((entry) => (
          <StaggerItem
            key={`${entry.org}-${entry.start}`}
            as="li"
            className="border-t border-border"
          >
            <div className="group grid-12 -mx-3 px-3 py-6 transition-colors duration-200 hover:bg-muted">
              <div className="col-span-4 flex flex-wrap items-center gap-x-3 gap-y-2 md:col-span-8 lg:col-span-3 lg:flex-col lg:items-start">
                <p className="datum text-muted-foreground transition-colors duration-200 group-hover:text-accent">
                  {entry.period}
                </p>
                <Badge variant="outline">{entry.kind}</Badge>
              </div>

              <div className="col-span-4 md:col-span-8 lg:col-span-9">
                <h3 className="text-[1.0625rem] font-semibold text-foreground">
                  {entry.role}
                </h3>
                <p className="eyebrow mt-1.5">{entry.org}</p>
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
        ))}
      </Stagger>
    </Section>
  );
};

export default Experience;
