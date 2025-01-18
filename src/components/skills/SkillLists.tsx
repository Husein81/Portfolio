import { Skill } from "../../app/models/Skill";
import SkillCard from "./SkillCard";
import DroppableArea from "../DroppableArea";

interface SkillProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {skills.map((skill) => (
        <DroppableArea id={skill.id as string} key={skill.id}>
          <SkillCard skill={skill} />
        </DroppableArea>
      ))}
    </div>
  );
};

export default SkillList;
