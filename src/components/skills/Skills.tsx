import { Container,Typography } from "@mui/material"
import SkillLists from "./SkillLists"
import { Skill } from "../../app/models/Skill"

const Skills = () => {
    const skills: Skill[] = [
        {name: 'React', imageUrl: '../../../public/assets/react.svg'},
        {name: 'Node', imageUrl: '../../../public/assets/react.svg'},
        {name: 'Express', imageUrl: '../../../public/assets/react.svg'},
        {name:'TypeScript', imageUrl: '../../../public/assets/react.svg'},
        {name:'Asp.Net', imageUrl: '../../../public/assets/react.svg'},
        {name:'Asp.Net', imageUrl: '../../../public/assets/react.svg'},
        {name:'Asp.Net', imageUrl: '../../../public/assets/react.svg'},
        
    ]
  return (
    <Container maxWidth="md" id="Skills" sx={{pt:12}}>
        <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
            Skills
        </Typography>
        <SkillLists skills={skills} />
    </Container>
  )
}
export default Skills