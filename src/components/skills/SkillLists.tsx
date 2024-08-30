import { Grid } from "@mui/material";
import { Skill } from "../../app/models/Skill";
import SkillCard from "./SkillCard";

interface SkillProps {
  skills: Skill[];
}
const SkillLists: React.FC<SkillProps> = ({ skills }) => {
  return (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <SkillCard name={skill.name} image={skill.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};
export default SkillLists;
