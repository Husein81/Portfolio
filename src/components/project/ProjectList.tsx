import { Project } from "../../app/models/Project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};
const ProjectList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((project) => (
        <div key={project.title}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
export default ProjectList;
