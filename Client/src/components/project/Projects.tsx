import { Container, Grid, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects = [
        {title:'Project 1', imageUrl:'../../../public/assets/react.svg'},
        {title:'Project 2', imageUrl:'../../../public/assets/react.svg'},
        {title:'Project 3', imageUrl:'../../../public/assets/react.svg'},
        {title:'Project 4', imageUrl:'../../../public/assets/react.svg'},

    ]
  return (
    <Container maxWidth="md" id={"Projects"}sx={{pt:13}}>
        <Typography variant="h4"color={"gray"} component="h1" gutterBottom>
            Projects
        </Typography>
        <Grid container spacing={2}>
            {projects.map((project,index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <ProjectCard title={project.title} imageUrl={project.imageUrl}/>
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}
export default Projects