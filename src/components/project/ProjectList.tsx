import { Project } from "../../models/Project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`transform transition-all duration-500 hover:scale-105 project-card-${index}`}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
export default ProjectList;
