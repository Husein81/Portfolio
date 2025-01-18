import { useDraggable } from "@dnd-kit/core";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
    <Box
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`shadow rounded ${
        transform ? "cursor-grabbing" : "cursor-grab"
      }  shadow-mountainMeadow  w-full`}
    >
      <Card sx={{ width: "100%", backgroundColor: "#2a2a2a" }}>
        <Box
          component={"img"}
          className="hover:scale-105 duration-200 object-contain h-32 sm:h-24 mx-auto w-20 rounded"
          src={skill.imageUrl}
          alt=""
        />
        <CardContent>
          <Typography variant="h6" color={"gray"} component="h1" gutterBottom>
            {skill.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default SkillCard;
