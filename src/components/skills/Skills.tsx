import { Box, Button, Container,Typography } from "@mui/material"
import SkillLists from "./SkillLists"
import { Skill } from "../../app/models/Skill"
import { Button as LinkButton } from "react-scroll"

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
        <Box display={'flex'} flexDirection={'column'} gap={1} py={4} mx='auto'>
          <LinkButton to="Contact" className="capitalize border border-2 p-1 " smooth={true} duration={1000}>hire me</LinkButton>
          <Button variant="contained" color="secondary" id="CV" download={true} href="/Hussein-CV.pdf">download cv</Button>
        </Box>
    </Container>
  )
}
export default Skills