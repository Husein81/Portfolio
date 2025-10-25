import { motion } from "framer-motion";

import { highlightCards, PROJECTS, stagger } from "./config";
import ProjectList from "./ProjectList";
import HighlightCard from "./HighlightCard";
import GradientSphere from "../GradientSphere";
import Heading from "../Heading";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative overflow-hidden bg-asphalt py-24 sm:py-28"
    >
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Heading
          preTitle="Selected Work"
          title="Engineering products that balance velocity and reliability."
          description="From live-data platforms to microservice ecosystems, these projects highlight how I partner with teams to ship resilient, user-first experiences."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlightCards.map((card) => (
            <HighlightCard key={card.title} card={card} />
          ))}
        </motion.div>

        <ProjectList projects={PROJECTS} />
      </div>
    </section>
  );
};
export default Projects;
