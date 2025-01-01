import { Skill } from "../../app/models/Skill";
import SkillCard from "./SkillCard";

interface SkillProps {
  skills: Skill[];
}
const SkillLists: React.FC<SkillProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard key={skill.id} name={skill.name} image={skill.imageUrl} />
      ))}
    </div>
  );
};
export default SkillLists;
