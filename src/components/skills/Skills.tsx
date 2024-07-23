import { Box, Button, Container,Typography } from "@mui/material"
import SkillLists from "./SkillLists"
import { Skill } from "../../app/models/Skill"
import { Button as LinkButton } from "react-scroll"

const Skills = () => {
    const skills: Skill[] = [
        {name:'Asp.Net', imageUrl: '../../../public/assets/skills/ASP.png'},
        {name:'React', imageUrl: '../../../public/assets/skills/react.png'},
        {name:'React Native', imageUrl: '../../../public/assets/skills/reactNative.png'},
        {name:'TypeScript', imageUrl: '../../../public/assets/skills/TS.png'},
        {name:"Tailwind CSS", imageUrl: '../../../public/assets/skills/tailwind.png'},
        {name:'Java', imageUrl: '../../../public/assets/skills/Java.png'},
        {name:"Kotlin", imageUrl:'../../../public/assets/skills/kotlin.png'},
        {name:'Node', imageUrl: '../../../public/assets/skills/node.png'},
        {name:'MongoDB', imageUrl: '../../../public/assets/skills/MongoDB.png'},
        {name:'MySQL', imageUrl: '../../../public/assets/skills/mysSQL.png'},
        {name:"Git and Github", imageUrl: '../../../public/assets/skills/git.png'},
        
    ]
  return (
    <Container maxWidth="md" id="Skills" sx={{pt:12 ,gap:2}}>
        <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
            Skills
        </Typography>
        <SkillLists skills={skills}  />
        <Box display={'flex'} id="CV" flexDirection={'column'} gap={1} py={4} mx='auto' >
          <LinkButton to="Contact" className="capitalize border border-2 p-1 " smooth={true} duration={1000}>hire me</LinkButton>
          <Button variant="contained" color="secondary" download={true} href="/Hussein-CV.pdf">download cv</Button>
        </Box>
    </Container>
  )
}
export default Skills