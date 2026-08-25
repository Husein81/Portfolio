import { practices, stackGroups } from "../../data/stack";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const Stack = () => {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack"
      title="Tools, grouped by the job they do."
      lede="The names set in full contrast are what I reach for first, and what actually appears in the work above. The rest I've shipped with and would again."
    >
      <Reveal>
        <dl>
          {stackGroups.map((group) => (
            <div key={group.label} className="grid-12 border-t border-border py-5">
              <dt className="eyebrow col-span-4 md:col-span-8 lg:col-span-3 lg:pt-1">
                {group.label}
              </dt>
              <dd className="col-span-4 md:col-span-8 lg:col-span-9">
                <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  {group.items.map((item, index) => (
                    <li key={item.name} className="flex items-center gap-2.5">
                      <span
                        className={
                          item.primary
                            ? "text-[0.9375rem] font-medium text-foreground"
                            : "text-[0.9375rem] text-muted-foreground"
                        }
                      >
                        {item.name}
                      </span>
                      {index < group.items.length - 1 ? (
                        <span className="text-input" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}

          <div className="grid-12 border-y border-border py-5">
            <dt className="eyebrow col-span-4 md:col-span-8 lg:col-span-3 lg:pt-0.5">
              Practices
            </dt>
            <dd className="datum col-span-4 text-muted-foreground md:col-span-8 lg:col-span-9">
              {practices.join("  /  ")}
            </dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
};

export default Stack;
