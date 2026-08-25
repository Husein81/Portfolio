import { ArrowUpRight } from "lucide-react";

import { featuredProjects, otherProjects } from "../../data/projects";
import { site } from "../../data/site";
import CaseStudy from "../work/CaseStudy";
import WorkRow from "../work/WorkRow";
import { Button } from "../ui/button";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const Work = () => {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Three builds worth explaining, and the rest of what shipped."
      lede="Each of these started with a constraint — live bidding, a spreadsheet nobody trusted, a watchlist spread across tabs. What follows is the problem, the shape of the solution, and the calls that made it work."
      action={
        <Button asChild variant="outline" size="sm">
          <a href={site.github} target="_blank" rel="noreferrer">
            All repositories
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      }
    >
      <div className="space-y-16 sm:space-y-24">
        {featuredProjects.map((project, position) => (
          <CaseStudy
            key={project.slug}
            project={project}
            index={position + 1}
            variant={position === 0 ? "lead" : "standard"}
          />
        ))}
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal className="rule pt-6">
          <div className="grid-12">
            <p className="eyebrow col-span-4 md:col-span-8 lg:col-span-3">
              Also shipped
            </p>
            <p className="col-span-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground md:col-span-8 lg:col-span-9">
              Smaller in scope, same standards.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={0.06}>
          <ul>
            {otherProjects.map((project, position) => (
              <WorkRow
                key={project.slug}
                project={project}
                index={featuredProjects.length + position + 1}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default Work;
