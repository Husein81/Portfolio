import { ArrowUpRight, Github } from "lucide-react";

import { repoUrl } from "../../data/site";
import type { Project } from "../../types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Stagger, StaggerItem } from "../ui/Stagger";

/** Wrapping technology badges. Reads as a spec line, not a chip wall. */
export const StackLine = ({ items }: { items: string[] }) => (
  <Stagger as="ul" className="flex flex-wrap gap-1.5" gap={0.035}>
    {items.map((item) => (
      <StaggerItem key={item} as="li" distance={8}>
        <Badge variant="outline">{item}</Badge>
      </StaggerItem>
    ))}
  </Stagger>
);

/** Rule-marked list used for technical decisions. */
export const DecisionList = ({ items }: { items: string[] }) => (
  <Stagger as="ul" className="space-y-3" gap={0.06}>
    {items.map((item) => (
      <StaggerItem key={item} as="li" className="flex gap-3.5" distance={10}>
        <span
          className="mt-[0.6875rem] h-px w-4 shrink-0 bg-accent"
          aria-hidden="true"
        />
        <span className="text-sm leading-relaxed text-muted-foreground">
          {item}
        </span>
      </StaggerItem>
    ))}
  </Stagger>
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
