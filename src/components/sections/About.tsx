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
              building production web and mobile systems with TypeScript/Node,
              .NET, and React.
            </p>
            <p>
              I specialize in system design and architecture from domain
              modeling and API design to microservices and UI. My recent work
              centers on POS, CRM, and microservices platforms, with an emphasis
              on clean architecture and fault-tolerant, maintainable systems.
            </p>
            <p>
              My stack spans TypeScript, C#/.NET, Next.js, React, Vue.js,
              NestJS, Electron, FastAPI, and databases like PostgreSQL, SQL
              Server, and MongoDB. On infrastructure, I work with Docker,
              Kubernetes, RabbitMQ, and cloud platforms like AWS and Digital
              Ocean.
            </p>
            <p>
              I actively integrate AI dev tools like Claude Code (CLI), Cursor,
              and GitHub Copilot to accelerate prototyping, test coverage, and
              repetitive flows by roughly 30%—while ensuring core architecture,
              domain models, and critical logic remain rigorously engineered.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
