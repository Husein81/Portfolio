import { Box, Button, Container,Typography } from "@mui/material"
import SkillLists from "./SkillLists"
import { Skill } from "../../app/models/Skill"
import { Button as LinkButton } from "react-scroll"

const Skills = () => {
    const skills: Skill[] = [
        {name:'Asp.Net', imageUrl: '/assets/skills/ASP.png'},
        {name:'React', imageUrl: '/assets/skills/react.png'},
        {name:'TypeScript', imageUrl: '/assets/skills/TS.png'},
        {name:'Node', imageUrl: '/assets/skills/node.png'},
        {name:"Tailwind CSS", imageUrl: '/assets/skills/Tailwind.png'},
        {name:'React Native', imageUrl: '/assets/skills/reactNative.png'},
        {name:'Java', imageUrl: '/assets/skills/Java.png'},
        {name:'MongoDB', imageUrl: '/assets/skills/MongoDB.png'}, 
        {name:'MySQL', imageUrl: '/assets/skills/mysSQL.png'},
        {name:"Git and Github", imageUrl: '/assets/skills/git.png'},
        
    ]
  return (
    <Container maxWidth="md" id="Skills" sx={{pt:12 ,gap:2}}>
        <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
            Skills
        </Typography>
        <SkillLists skills={skills}  />
        <Box display={'flex'} id="CV" flexDirection={'column'} gap={1} py={4} mx='auto' >
          <LinkButton to="Contact" className="capitalize border border-2 p-1 " smooth={true} duration={1000}>hire me</LinkButton>
          <Button variant="contained" color="secondary" download={true} href="/public/assets/Hussein-CV.pdf">download cv</Button>
        </Box>
    </Container>
  )
}
export default Skills