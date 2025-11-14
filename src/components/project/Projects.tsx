import { motion } from "framer-motion";

import { highlightCards, stagger } from "./config";
import ProjectList from "./ProjectList";
import HighlightCard from "./HighlightCard";
import GradientSphere from "../GradientSphere";
import Heading from "../Heading";
import Icon from "../icon";

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

        <ProjectList />
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/Husein81"}
            className="group/cta w-fit inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105"
          >
            <Icon name="Github" className="h-4 w-4" />
            View github repo
            <Icon
              name="ArrowUpRight"
              className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;
