import { Box, Button, Container } from "@mui/material";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import { useState } from "react";
import { useGetProjectsQuery } from "../../apps/redux/Slice/projectApi";
import Loader from "../Loader";


const ProjectPage = () => {
    const [toggleForm, setToggleForm] = useState(false);
    const handleToggleForm = () => {
        setToggleForm(true);
    }
    const handleToggleView = () => {
        setToggleForm(false);
    }
    const {data, isLoading} = useGetProjectsQuery();
    const projects = data || [];

    if(isLoading) return <Loader />
  return (
    <Container maxWidth="md" sx={{pt:3 ,mx:'auto'}}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={"flex"} justifyContent={'space-between'} px={3}>
                <Button variant="contained" onClick={handleToggleForm} color="secondary">Add Project</Button>
                <Button variant="contained" onClick={handleToggleView} color="secondary">View Projects</Button>
            </Box>
            <Box >
                {toggleForm ? 
                <ProjectForm/> :
                <ProjectTable projects={projects}/>}
            </Box>
        </Box>
    </Container>
  )
}
export default ProjectPage