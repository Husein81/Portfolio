import { Box, Button, Container, Typography } from "@mui/material";
import SkillLists from "./SkillLists";
import { Skill } from "../../app/models/Skill";
import { Button as LinkButton } from "react-scroll";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "React", name: "React", imageUrl: "/assets/skills/react.png" },
    { id: "TypeScript", name: "TypeScript", imageUrl: "/assets/skills/TS.png" },
    { id: "Asp.Net", name: "Asp.Net", imageUrl: "/assets/skills/ASP.png" },
    { id: "Node", name: "Node", imageUrl: "/assets/skills/node.png" },
    {
      id: "Tailwind CSS",
      name: "Tailwind CSS",
      imageUrl: "/assets/skills/Tailwind.png",
    },
    {
      id: "React Native",
      name: "React Native",
      imageUrl: "/assets/skills/reactNative.png",
    },
    { id: "Java", name: "Java", imageUrl: "/assets/skills/Java.png" },
    { id: "MongoDB", name: "MongoDB", imageUrl: "/assets/skills/MongoDB.png" },
    { id: "MySQL", name: "MySQL", imageUrl: "/assets/skills/mysSQL.png" },
    {
      id: "Git and Github",
      name: "Git and Github",
      imageUrl: "/assets/skills/git.png",
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Find indexes of active and over cards
    const activeIndex = skills.findIndex((card) => card.id === active.id);
    const overIndex = skills.findIndex((card) => card.id === over.id);

    // Swap the skills
    const updatedSkills = [...skills];
    [updatedSkills[activeIndex], updatedSkills[overIndex]] = [
      updatedSkills[overIndex],
      updatedSkills[activeIndex],
    ];

    setSkills(updatedSkills);
  };

  return (
    <Container id="Skills" sx={{ pt: 12, gap: 2 }}>
      <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
        Skills
      </Typography>
      <DndContext onDragEnd={handleDragEnd}>
        <SkillLists skills={skills} />
      </DndContext>
      <Box
        display={"flex"}
        id="CV"
        flexDirection={"column"}
        gap={1}
        py={4}
        mx="auto"
      >
        <LinkButton
          to="Contact"
          className="capitalize border border-2 p-1 "
          smooth={true}
          duration={1000}
        >
          hire me
        </LinkButton>
        <Button
          variant="contained"
          color="secondary"
          download={true}
          href="/public/Hussein-CV.pdf"
        >
          download cv
        </Button>
      </Box>
    </Container>
  );
};
export default Skills;
