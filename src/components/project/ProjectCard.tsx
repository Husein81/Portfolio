import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type Props = {
  project: Project;
  index?: number;
};

const accentGradients = [
  "from-cyan-500/20 via-blue-500/10 to-purple-500/20",
  "from-emerald-400/20 via-teal-500/10 to-cyan-500/20",
  "from-amber-400/20 via-orange-500/10 to-pink-500/20",
];

const ProjectCard = ({ project, index = 0 }: Props) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const displayedTechnologies = showAllTech
    ? project.technologies ?? []
    : project.technologies?.slice(0, 4) ?? [];
  const accentGradient = accentGradients[index % accentGradients.length];
  const repoUrl = project.sourceCodeUrl
    ? `https://github.com/Husein81/${project.sourceCodeUrl}`
    : undefined;

  const remainingTechCount = project.technologies
    ? project.technologies.length - displayedTechnologies.length
    : 0;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative h-56 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-200 backdrop-blur">
          {project.technologies?.[0] || "Full stack"}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-200">
            Case study
          </span>
          {project.startDate && (
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              {project.startDate}{" "}
              {project.endDate ? `– ${project.endDate}` : ""}
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {project.description ||
              "An innovative project showcasing modern development practices."}
          </p>
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {displayedTechnologies.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && !showAllTech && (
              <button
                type="button"
                onClick={() => setShowAllTech(true)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300 transition-colors duration-200 hover:border-cyan-400/60 hover:text-white"
              >
                +{remainingTechCount} more
              </button>
            )}
            {showAllTech && project.technologies.length > 4 && (
              <button
                type="button"
                onClick={() => setShowAllTech(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300 transition-colors duration-200 hover:border-cyan-400/60 hover:text-white"
              >
                Show less
              </button>
            )}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="text-[11px] uppercase tracking-wide text-gray-400">
            {project.endDate ? "Shipped" : "In production"}
          </div>
          {repoUrl && (
            <a
              target="_blank"
              rel="noreferrer"
              href={repoUrl}
              className="group/cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105"
            >
              <Github className="h-4 w-4" />
              View code
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
