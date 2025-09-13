import { motion } from "framer-motion";

interface AnimatedTechIconProps {
  name: string;
  imageUrl: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  size: {
    container: string;
    icon: string;
  };
  borderColor: string;
  backgroundColor?: string;
  animation: {
    whileInView: {
      x?: number[];
      y?: number[];
      opacity?: number[];
      scale?: number[];
      rotate?: number[];
    };
    transition: {
      duration: number;
      delay: number;
      ease: string;
    };
  };
  cssAnimation?: string;
}

const AnimatedTechIcon = ({
  name,
  imageUrl,
  position,
  size,
  borderColor,
  backgroundColor = "bg-white/10",
  animation,
  cssAnimation,
}: AnimatedTechIconProps) => {
  // Convert position values to proper CSS values for inline styles
  const getPositionValue = (value: string) => {
    if (value === "1/2") return "50%";
    if (value.includes("/")) return value.replace("1/2", "50%");
    if (value.match(/^\d+$/)) return `${value}px`;
    return value;
  };

  // Create inline styles for positioning to ensure consistency between dev and production
  const positionStyle: React.CSSProperties = {
    position: "absolute",
  };

  if (position.top) {
    positionStyle.top = getPositionValue(position.top);
  }
  if (position.bottom) {
    positionStyle.bottom = getPositionValue(position.bottom);
  }
  if (position.left) {
    positionStyle.left = getPositionValue(position.left);
  }
  if (position.right) {
    positionStyle.right = getPositionValue(position.right);
  }

  // Handle transform separately - convert Tailwind classes to CSS
  let transformValue = "";
  if (position.transform) {
    transformValue = position.transform
      .replace("-translate-x-1/2", "translateX(-50%)")
      .replace("-translate-y-1/2", "translateY(-50%)")
      .replace("-translate-x-1/2 -translate-y-1/2", "translate(-50%, -50%)")
      .replace("translate-x-1/2", "translateX(50%)")
      .replace("translate-y-1/2", "translateY(50%)");

    if (transformValue) {
      positionStyle.transform = transformValue;
    }
  }

  return (
    <motion.div
      className={`${cssAnimation || ""}`}
      style={positionStyle}
      whileInView={animation.whileInView}
      transition={animation.transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`${
          size.container
        } ${backgroundColor} backdrop-blur-sm border ${borderColor} rounded-xl flex items-center justify-center ${
          name === "TypeScript" ? "animate-pulse" : ""
        }`}
      >
        <img src={imageUrl} alt={name} className={size.icon} />
      </div>
    </motion.div>
  );
};

export default AnimatedTechIcon;
