import { motion } from "framer-motion";
import { SKILLS } from "./config";
import SkillCard from "./SkillCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const SkillList: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20">
      {/* Subtle background glow */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex w-full flex-wrap justify-center gap-3 sm:gap-4"
        >
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              itemVariants={itemVariants}
            />
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 shadow-sm shadow-black/20 backdrop-blur sm:text-sm"
        >
          Constantly exploring new tools to keep this list growing.
        </motion.div>
      </div>
    </section>
  );
};

export default SkillList;
