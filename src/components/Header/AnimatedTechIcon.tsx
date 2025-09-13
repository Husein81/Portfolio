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
  return (
    <motion.div
      className={`${cssAnimation || ""}`}
      whileInView={animation.whileInView}
      transition={animation.transition}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        position: "absolute",
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        transform: position.transform,
      }}
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
