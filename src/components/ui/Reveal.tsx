import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE } from "../../lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

/** Fades a block in once, the first time it comes near the viewport. */
const Reveal = ({ children, className, delay = 0, distance = 14 }: Props) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
