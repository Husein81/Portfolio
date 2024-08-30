import { Grid } from "@mui/material";
import { Project } from "../../app/models/Project";
import { FC } from "react";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};
const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <ProjectCard title={project.title} imageUrl={project.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProjectList;
