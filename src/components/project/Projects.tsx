import { motion } from "framer-motion";

import { fadeUp, highlightCards, PROJECTS, stagger } from "./config";
import ProjectList from "./ProjectList";
import HighlightCard from "./HighlightCard";
import GradientSphere from "../GradientSphere";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative overflow-hidden bg-asphalt py-24 sm:py-28"
    >
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-200 shadow-sm shadow-black/20 backdrop-blur">
            Selected work
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Engineering products that balance velocity and reliability
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
            From live-data platforms to microservice ecosystems, these projects
            highlight how I partner with teams to ship resilient, user-first
            experiences.
          </p>
        </motion.div>

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
