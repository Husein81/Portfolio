import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ProjectList = ({ projects }: Props) => {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <motion.li
          key={project.title}
          variants={itemVariants}
          className="h-full"
        >
          <ProjectCard project={project} index={index} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default ProjectList;
