import { motion } from "framer-motion";
import {
  adjustPositionForMobile,
  getPositionValue,
  getResponsiveSize,
} from "../../lib/functions";

type AnimatedTechIconProps = {
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
};

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
  const positionStyle: React.CSSProperties = {
    position: "absolute",
  };

  if (position.top) {
    const adjustedTop = adjustPositionForMobile(position.top, "y");
    positionStyle.top = getPositionValue(adjustedTop);
  }
  if (position.bottom) {
    const adjustedBottom = adjustPositionForMobile(position.bottom, "y");
    positionStyle.bottom = getPositionValue(adjustedBottom);
  }
  if (position.left) {
    const adjustedLeft = adjustPositionForMobile(position.left, "x");
    positionStyle.left = getPositionValue(adjustedLeft);
  }
  if (position.right) {
    const adjustedRight = adjustPositionForMobile(position.right, "x");
    positionStyle.right = getPositionValue(adjustedRight);
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
      className={`${cssAnimation || ""} hidden sm:flex`}
      style={positionStyle}
      whileInView={animation.whileInView}
      transition={animation.transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`${getResponsiveSize(
          size.container
        )} ${backgroundColor} backdrop-blur-sm border ${borderColor} rounded-xl flex items-center justify-center`}
      >
        <img
          src={imageUrl}
          alt={name}
          className={getResponsiveSize(size.icon)}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedTechIcon;
