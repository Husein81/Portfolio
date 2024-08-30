import { Container, Typography } from "@mui/material";
import { Project } from "../../app/models/Project";
import ProjectList from "./ProjectList";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Inventory Management System",
      imageUrl: "/assets/projects/dashboard.png",
    },
    { title: "The Spot", imageUrl: "/assets/projects/theSpot.png" },
  ];
  return (
    <Container id={"Projects"} sx={{ pt: 13 }}>
      <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
        Projects
      </Typography>
      <ProjectList projects={projects} />
    </Container>
  );
};
export default Projects;
