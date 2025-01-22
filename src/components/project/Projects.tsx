import { Project } from "../../app/models/Project";
import ProjectList from "./ProjectList";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Inventory Management System",
      imageUrl: "/assets/projects/dashboard.png",
      sourceCodeUrl: "Inventory-Management-System.API",
    },
    {
      title: "The Spot",
      imageUrl: "/assets/projects/theSpot.png",
      sourceCodeUrl: "The-Spot",
    },
  ];
  return (
    <div className="container mx-auto mt-12 gap-2 p-4" id="Projects">
      <h1 className="text-4xl text-iron mb-4">Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};
export default Projects;
