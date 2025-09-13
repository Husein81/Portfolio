import AnimatedTechIcon from "./AnimatedTechIcon";
import { techIconsConfig } from "./techIconsConfig";

const TechConstellation = () => {
  return (
    <>
      {techIconsConfig.map((icon) => (
        <AnimatedTechIcon
          key={icon.id}
          name={icon.name}
          imageUrl={icon.imageUrl}
          position={icon.position}
          size={icon.size}
          borderColor={icon.borderColor}
          backgroundColor={icon.backgroundColor}
          animation={icon.animation}
          cssAnimation={icon.cssAnimation}
        />
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="line-gradient-start" />
            <stop offset="100%" className="line-gradient-end" />
          </linearGradient>
        </defs>
        {/* Animated connecting lines */}
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="20%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="16%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="20%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="84%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
      </svg>
    </>
  );
};

export default TechConstellation;
