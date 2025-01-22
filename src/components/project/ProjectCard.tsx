import { Project } from "../../app/models/Project";

interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded shadow-md shadow-mountainMeadow overflow-hidden bg-primary">
      <img
        className="hover:scale-105 duration-200 h-full w-full rounded cursor-pointer sm:h-[150px] "
        src={project.imageUrl}
        alt={project.title}
      />
      <div className="p-4 text-white">
        <h2>{project.title}</h2>
        <p className="text-sm mt-2">{project.description}</p>
        <div className="mt-2">
          <a
            target="blank"
            href={"https://github.com/Husein81/" + project.sourceCodeUrl}
            className="border px-4 py-2 bg-transparent rounded-lg capitalize"
          >
            view in github
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
