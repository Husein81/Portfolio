import { motion } from "framer-motion";
import { Skill } from "../../app/models/Skill";

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
      className="relative group"
    >
      {/* Keyboard key style container - responsive sizing */}
      <div className="w-24 h-24 md:w-18 md:h-18 bg-white/10 md:bg-white/20 border border-white/30 rounded-lg shadow-lg flex flex-col items-center justify-center p-1 sm:p-2 transition-all duration-300 group-hover:bg-gray-700 group-hover:border-gray-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/30">
        {/* Colored glow effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

        {/* Icon - responsive sizing */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-0.5 sm:mb-1 relative z-10">
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg"
          />
        </div>

        {/* Skill Name - responsive text sizing */}
        <span className="text-gray-300 text-xs sm:text-xs md:text-xs lg:text-sm font-medium text-center leading-tight transition-colors duration-300 group-hover:text-white relative z-10 px-1">
          {skill.name.length > 8 ? skill.name.split(" ")[0] : skill.name}
        </span>
      </div>

      {/* Tooltip on hover - responsive positioning */}
      <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
        {skill.name}
      </div>
    </motion.div>
  );
};

export default SkillCard;
