import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE } from "../../lib/motion";

const CONTAINER_TAGS = {
  div: motion.div,
  ol: motion.ol,
  ul: motion.ul,
  dl: motion.dl,
} as const;
const CONTAINER_PLAIN = { div: "div", ol: "ol", ul: "ul", dl: "dl" } as const;

const ITEM_TAGS = { div: motion.div, li: motion.li } as const;
const ITEM_PLAIN = { div: "div", li: "li" } as const;

type ContainerTag = keyof typeof CONTAINER_TAGS;
type ItemTag = keyof typeof ITEM_TAGS;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ContainerTag;
  /** Seconds between each child's entrance. */
  gap?: number;
  /** Seconds before the first child starts. */
  delay?: number;
};

/**
 * Orchestrates a cascade across direct `StaggerItem` children, once, the
 * first time the container nears the viewport. Pair the two rather than
 * reaching for `Reveal` + a manual `index % n` delay — the cascade stays in
 * sync even when a list's length or column count changes.
 */
export const Stagger = ({
  children,
  className,
  as = "div",
  gap = 0.07,
  delay = 0,
}: StaggerProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Plain = CONTAINER_PLAIN[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = CONTAINER_TAGS[as];

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: ItemTag;
  distance?: number;
};

const itemVariants = (distance: number) => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
});

/** One cascading step inside a `Stagger`. Falls back to a plain element when reduced motion is set — matching `Stagger`'s own fallback so the two never disagree. */
export const StaggerItem = ({
  children,
  className,
  as = "div",
  distance = 14,
}: StaggerItemProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Plain = ITEM_PLAIN[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = ITEM_TAGS[as];

  return (
    <Comp className={className} variants={itemVariants(distance)}>
      {children}
    </Comp>
  );
};
