import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const About = () => {
  return (
    <Section
      id="about"
      index="06"
      label="About"
      title="Outside the ticket, this is what I actually care about."
    >
      <Reveal>
        <div className="grid-12">
          <div className="col-span-4 space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground md:col-span-8 lg:col-span-7 lg:col-start-4">
            {/* Opening paragraph carries a rule and full-contrast text so the
                section has an entry point without a heading. */}
            <p className="border-l-2 border-accent pl-5 text-foreground">
              I'm Hussein. I started writing C# backends for an ERP system,
              moved through frontend work on a crop-tracking SaaS, and now
              build point-of-sale, CRM, and business systems full-time — with
              freelance projects running alongside almost every role since.
            </p>
            <p>
              What I actually enjoy is the part most people skip: modelling a
              business process correctly before writing UI for it. A POS order
              isn't just a form — it's a draft that can be held, split across
              payments, partially refunded, or cancelled, and every one of
              those states has to stay consistent with inventory and the audit
              log. Getting that model right matters more than the framework on
              top of it.
            </p>
            <p>
              I also use AI tooling deliberately rather than by default —
              Claude Code and Copilot for test generation, boilerplate, and
              refactors, while the architecture and edge cases stay under
              direct review. It's a real part of how I work now, not a buzzword
              on top of it.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
