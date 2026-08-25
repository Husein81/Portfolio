import { ArrowUpRight, Github } from "lucide-react";

import { repoUrl } from "../../data/site";
import type { Project } from "../../types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

/** Wrapping technology badges. Reads as a spec line, not a chip wall. */
export const StackLine = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li key={item}>
        <Badge variant="outline">{item}</Badge>
      </li>
    ))}
  </ul>
);

/** Rule-marked list used for technical decisions. */
export const DecisionList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3.5">
        <span
          className="mt-[0.6875rem] h-px w-4 shrink-0 bg-accent"
          aria-hidden="true"
        />
        <span className="text-sm leading-relaxed text-muted-foreground">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export const ProjectLinks = ({ project }: { project: Project }) => {
  if (!project.repo && !project.liveUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {project.liveUrl ? (
        <Button asChild variant="outline" size="sm">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live site
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      ) : null}

      {project.repo ? (
        <Button asChild variant="outline" size="sm">
          <a href={repoUrl(project.repo)} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      ) : null}
    </div>
  );
};

/** Label + body pair used for Problem / Approach. */
export const MetaBlock = ({
  label,
  children,
}: {
  label: string;
  children: string;
}) => (
  <div>
    <h4 className="eyebrow">{label}</h4>
    <p className="mt-2.5 max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
      {children}
    </p>
  </div>
);
