import { Skill } from "../../app/models/Skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="relative group w-full h-32 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/20">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mountain-meadow/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {/* Icon container with modern glow */}
        <div className="relative mb-3">
          <div className="absolute inset-0 bg-gradient-to-r from-mountain-meadow to-secondary rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Skill Name */}
        <span className="text-white font-medium text-sm text-center  transition-colors duration-300">
          {skill.name}
        </span>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-mountain-meadow to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default SkillCard;
