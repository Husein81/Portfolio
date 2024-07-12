import { Container, Typography } from "@mui/material"
import { Project } from "../../apps/model/Project";
import CustomTable from "../OtherComponents/CustomTable";

interface ProjectsProps {
  projects: Project[] ;
}
interface Column{
  id: string;
  label: string;
}
const ProjectTable: React.FC<ProjectsProps> = ({ projects }) => {
    const columns: Column[]  = [
      {id:'id', label:'ID'},
      {id:'title', label:'Title'},
      {id:'description', label:'Description'},
      {id:'startDate', label:'Start Date'},
      {id:'endDate', label:'End Date'}
    ];

  return (
    <Container>
      <CustomTable columns={columns} rows={projects} />
      {projects.length === 0 && <Typography variant="h6" color={"text.secondary"}>No Projects Found</Typography>}
    </Container>
  )
}
export default ProjectTable