import { useDraggable } from "@dnd-kit/core";
import { Skill } from "../../app/models/Skill";

interface SkillCardProps {
  skill: Skill;
}
const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: skill.name,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`shadow rounded bg-primary  ${
        transform ? "cursor-grabbing" : "cursor-grab"
      }  shadow-mountainMeadow  w-full `}
    >
      <img
        className="hover:scale-105 duration-200 object-contain h-32 sm:h-24 mx-auto w-20 rounded"
        src={skill.imageUrl}
        alt=""
      />
      <div className="p-4">
        <span className="text-iron text-center">{skill.name}</span>
      </div>
    </div>
  );
};
export default SkillCard;
