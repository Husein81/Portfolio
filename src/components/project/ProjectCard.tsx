import { useState } from "react";
import { Project } from "../../models/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [show, setShow] = useState(false);
  const isExpenseTracker = project.title
    .toLowerCase()
    .includes("expense tracker");

  const technologies = show
    ? project.technologies
    : project.technologies?.slice(0, 3);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-mountain-meadow/20 hover:border-mountain-meadow/30 ${
        show && "border-mountain-meadow/30 shadow-mountain-meadow/20"
      }`}
    >
      {/* Project Image */}
      <div className="relative h-64 md:h-48 overflow-hidden flex items-center justify-center">
        {isExpenseTracker ? (
          <div className="bg-gradient-to-tr from-mountain-meadow via-gradient-end to-accent origin-center">
            <img
              className="object-contain w-full scale-45 transition-transform duration-700 group-hover:scale-65"
              src="/assets/projects/expense-tracker.png"
              alt={project.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ) : (
          <>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-meadow/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-mountain-meadow transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`text-iron text-sm line-clamp-2 leading-relaxed ${
            show && "line-clamp-none"
          }`}
        >
          {project.description ||
            "An innovative project showcasing modern development practices."}
        </p>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-mountain-meadow/20 text-mountain-meadow rounded-full border border-mountain-meadow/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && !show && (
              <button
                onClick={() => setShow(true)}
                className="px-2 py-1 text-xs cursor-pointer font-medium bg-iron/20 text-iron rounded-full border border-iron/30"
              >
                +{project.technologies.length - 3} more
              </button>
            )}
            {project.technologies.length > 3 && show && (
              <button
                className="px-2 py-1 text-xs font-medium hover:underline cursor-pointer bg-iron/20 text-iron rounded-full border border-iron/30"
                onClick={() => setShow(false)}
              >
                show less
              </button>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 hover:transition-transform duration-300 group-hover:translate-y-[-2px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/Husein81/" + project.sourceCodeUrl}
            className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mountain-meadow to-secondary hover:from-mountain-meadow/80 hover:to-secondary/80 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View Code
          </a>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-mountain-meadow/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          show && "opacity-100"
        }`}
      />
    </div>
  );
};

export default ProjectCard;
