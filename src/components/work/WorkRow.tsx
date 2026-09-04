import { ArrowUpRight } from "lucide-react";

import { repoUrl } from "../../data/site";
import type { Project } from "../../types";
import { StaggerItem } from "../ui/Stagger";

type Props = {
  project: Project;
  index: number;
};

const ROW_CLASS =
  "group flex items-start gap-5 py-5 transition-colors duration-200 sm:gap-6";

/** Compact row for work that does not need a full case study. */
const WorkRow = ({ project, index }: Props) => {
  const href =
    project.liveUrl ?? (project.repo ? repoUrl(project.repo) : undefined);

  const content = (
    <>
      <span className="eyebrow w-6 shrink-0 pt-1 transition-colors duration-200 group-hover:text-accent">
        {String(index).padStart(2, "0")}
      </span>

      <div className="hidden w-28 shrink-0 border border-border bg-card transition-colors duration-200 group-hover:border-input sm:block">
        <img
          src={project.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className={`aspect-[16/10] w-full object-cover ${
            project.portraitImage ? "object-center" : "object-top"
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[1.0625rem] font-semibold transition-colors duration-200 group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <p className="datum mt-2.5 text-xs text-faint">
          {project.stack.join(" / ")}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4 self-start pt-1">
        <span className="eyebrow">{project.year}</span>
        {href ? (
          <ArrowUpRight
            className="h-4 w-4 text-input transition-colors duration-200 group-hover:text-accent"
            aria-hidden="true"
          />
        ) : null}
      </div>
    </>
  );

  return (
    <StaggerItem as="li" className="border-t border-border">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — ${project.tagline}`}
          className={`${ROW_CLASS} -mx-3 px-3 hover:bg-muted`}
        >
          {content}
        </a>
      ) : (
        <div className={ROW_CLASS}>{content}</div>
      )}
    </StaggerItem>
  );
};

export default WorkRow;
