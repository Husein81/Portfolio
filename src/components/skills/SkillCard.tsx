import { motion } from "framer-motion";
import { Skill } from "../../models/Skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="relative  group cursor-pointer "
    >
      {/* Mobile-first card design matching the image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-20 lg:h-20  bg-gray-800/85 md:bg-iron/30 border border-gray-700/50 md:border-white/20 rounded-xl md:rounded-lg shadow-lg flex flex-col items-center justify-center p-3 md:p-2 transition-all duration-300 group-hover:bg-gray-700 group-hover:border-gray-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/70">
        {/* Colored glow effect on hover */}
        <div className="absolute inset-0 rounded-xl md:rounded-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        {/* Icon - responsive sizing */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-1 md:mb-0.5 relative z-10">
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg"
          />
        </div>
      </div>

      {/* Tooltip on hover - responsive positioning */}
      <div className="absolute -top-8 sm:-top-10 md:-top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 md:bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {skill.name}
      </div>
    </motion.div>
  );
};

export default SkillCard;
