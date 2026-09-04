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
              I'm Hussein, a software engineer with 2+ years of experience
              building POS, ERP, CRM, e-commerce, and SaaS systems.
            </p>
            <p>
              I focus on the engineering behind the interface — modelling
              business processes, designing reliable APIs and data models, and
              building systems that handle real-world complexity such as
              payments, inventory, permissions, offline workflows,
              synchronization, and auditability.
            </p>
            <p>
              My background spans C#/.NET, React, Vue, Node.js, NestJS, and
              modern databases and infrastructure. I care less about following a
              specific stack and more about choosing the right architecture to
              solve the problem.
            </p>
            <p>
              I also use AI tools like Claude Code and GitHub Copilot to move
              faster with testing, refactoring, and repetitive work — while
              keeping architecture, business logic, and critical decisions under
              direct engineering review.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
