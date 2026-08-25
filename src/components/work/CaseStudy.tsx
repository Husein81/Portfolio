import type { Project } from "../../types";
import Reveal from "../ui/Reveal";
import {
  DecisionList,
  MetaBlock,
  ProjectLinks,
  StackLine,
} from "./ProjectMeta";

type Props = {
  project: Project;
  index: number;
  variant: "lead" | "standard";
};

const ProjectImage = ({
  project,
  aspect,
  sizes,
}: {
  project: Project;
  aspect: string;
  sizes: string;
}) => (
  /* Hover shifts the frame colour only — nothing here moves the layout. */
  <div className="border border-border bg-card transition-colors duration-300 hover:border-input">
    <img
      src={project.imageUrl}
      alt={`${project.name} interface`}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      className={`${aspect} w-full object-cover ${
        project.portraitImage ? "object-center" : "object-top"
      }`}
    />
  </div>
);

/** Index / year / role, set as one mono spec line above the name. */
const Header = ({
  project,
  index,
  size,
}: {
  project: Project;
  index: number;
  size: "lead" | "standard";
}) => (
  <div>
    <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-accent">{String(index).padStart(2, "0")}</span>
      <span className="text-input" aria-hidden="true">
        /
      </span>
      <span>{project.year}</span>
      <span className="text-input" aria-hidden="true">
        /
      </span>
      <span>{project.role}</span>
    </p>

    <h3
      className={`display mt-3.5 uppercase ${
        size === "lead"
          ? "text-[clamp(1.875rem,3.6vw,2.75rem)]"
          : "text-[1.625rem]"
      }`}
    >
      {project.name}
    </h3>

    <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-foreground">
      {project.tagline}
    </p>
  </div>
);

const CaseStudy = ({ project, index, variant }: Props) => {
  if (variant === "lead") {
    return (
      <article className="rule pt-8">
        <Reveal>
          <ProjectImage
            project={project}
            aspect="aspect-[16/9]"
            sizes="(min-width: 1024px) 1232px, 100vw"
          />
        </Reveal>

        <div className="grid-12 mt-9">
          {/* The identity block pins while the detail column scrolls past it,
              so the lead study's name stays with the decisions it explains. */}
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <Header project={project} index={index} size="lead" />
            <div className="mt-7">
              <ProjectLinks project={project} />
            </div>
          </Reveal>

          <Reveal
            className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6"
            delay={0.06}
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <MetaBlock label="Problem">{project.problem}</MetaBlock>
              <MetaBlock label="Approach">{project.solution}</MetaBlock>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="eyebrow mb-4">Decisions</h4>
              <DecisionList items={project.decisions} />
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="eyebrow mb-3.5">Stack</h4>
              <StackLine items={project.stack} />
            </div>
          </Reveal>
        </div>
      </article>
    );
  }

  // Alternating split. Even indices place the image in the left columns.
  const imageFirst = index % 2 === 0;

  return (
    <article className="rule pt-8">
      <div className="grid-12 items-start">
        <Reveal
          className={`col-span-4 md:col-span-8 lg:col-span-6 ${
            imageFirst ? "" : "lg:order-2 lg:col-start-7"
          }`}
        >
          <ProjectImage
            project={project}
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 592px, 100vw"
          />
        </Reveal>

        <Reveal
          className={`col-span-4 md:col-span-8 lg:col-span-6 ${
            imageFirst ? "" : "lg:order-1 lg:col-start-1"
          }`}
          delay={0.06}
        >
          <Header project={project} index={index} size="standard" />

          <div className="mt-7 space-y-6">
            <MetaBlock label="Problem">{project.problem}</MetaBlock>
            <MetaBlock label="Approach">{project.solution}</MetaBlock>
          </div>

          <div className="mt-7">
            <h4 className="eyebrow mb-3.5">Decisions</h4>
            <DecisionList items={project.decisions.slice(0, 3)} />
          </div>

          <div className="mt-7 border-t border-border pt-5">
            <StackLine items={project.stack} />
          </div>

          <div className="mt-5">
            <ProjectLinks project={project} />
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export default CaseStudy;
