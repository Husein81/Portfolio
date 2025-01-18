import { Project } from "../../app/models/Project";

interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded shadow overflow-hidden bg-primary">
      <img
        className="hover:scale-105 duration-200 h-full rounded cursor-pointer sm:h-[150px] "
        src={project.imageUrl}
        alt={project.title}
      />
      <div className="p-4">
        <p className="text-iron">{project.title}</p>
        {project.sourceCodeUrl && (
          <div className="mt-2">
            <span className="text-iron capitalize text-sm ">
              source code:{" "}
              <a
                href={project.sourceCodeUrl}
                className="hover:underline hover:text-blue-500 capitalize"
              >
                view
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
