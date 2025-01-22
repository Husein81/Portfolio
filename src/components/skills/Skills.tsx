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
    <div className="container mt-12 gap-2 mx-auto p-4" id="Skills">
      <h1 className="text-4xl text-iron mb-4">Skills</h1>

      <DndContext onDragEnd={handleDragEnd}>
        <SkillLists skills={skills} />
      </DndContext>
      <div
        className="flex justify-center flex-col gap-2 mt-4 py-4 mx-auto"
        id="CV"
      >
        <LinkButton
          to="Contact"
          className="capitalize border rounded p-1 "
          smooth={true}
          duration={1000}
        >
          hire me
        </LinkButton>
        <a
          className="capitalize ring-1 rounded ring-mountainMeadow text-center  p-1 bg-mountainMeadow/65 hover:bg-mountainMeadow"
          download
          href="/public/Hussein-CV.pdf"
        >
          download cv
        </a>
      </div>
    </div>
  );
};
export default Skills;
