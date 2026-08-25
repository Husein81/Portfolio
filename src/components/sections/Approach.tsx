import { principles } from "../../data/problems";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const Approach = () => {
  return (
    <Section
      id="approach"
      index="03"
      label="How I build"
      title="The order things actually happen in."
      lede="Not a values poster — the sequence I follow on every one of the projects above, in order."
    >
      <ol>
        {principles.map((principle, index) => (
          <li key={principle.title} className="border-t border-border">
            <Reveal delay={(index % 2) * 0.05}>
              <div className="grid-12 py-6">
                {/* The step number carries the weight; the rule carries the order. */}
                <p className="col-span-4 md:col-span-8 lg:col-span-3">
                  <span className="display text-[2.5rem] leading-none text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </p>

                <h3 className="col-span-4 text-[1.0625rem] font-semibold leading-snug text-foreground md:col-span-3 lg:col-span-3">
                  {principle.title}
                </h3>

                <p className="col-span-4 max-w-[62ch] text-sm leading-relaxed text-muted-foreground md:col-span-5 lg:col-span-6">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Approach;
