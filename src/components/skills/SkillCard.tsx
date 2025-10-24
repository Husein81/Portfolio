import { motion } from "framer-motion";

const SkillCard = ({
  skill,
  itemVariants,
}: {
  skill: Skill;
  itemVariants: Variants;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm shadow-black/20 backdrop-blur transition-colors duration-200 hover:border-cyan-400/80 hover:bg-white/10"
    >
      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/10">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="h-6 w-6 object-contain"
        />
      </span>
      <span className="text-sm font-medium text-gray-100 sm:text-base">
        {skill.name}
      </span>
    </motion.li>
  );
};

export default SkillCard;
