import { Box } from "@mui/material";
import { Skill } from "../../app/models/Skill";
import SkillCard from "./SkillCard";


interface SkillProps {
    skills: Skill[]
}
const SkillLists: React.FC<SkillProps> = ({ skills }) => {
  return (
    <Box className='grid grid-cols-1 sm:grid-cols-4 gap-5 '>
            {skills.map((skill, index) => (
                <Box flexWrap={'wrap'} key={index} className="flex items-center gap-5">
                   <SkillCard name={skill.name} image={skill.imageUrl} />
                </Box>
            ))}
    </Box>
  )
}
export default SkillLists