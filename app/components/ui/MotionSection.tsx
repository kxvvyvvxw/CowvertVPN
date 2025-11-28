"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const FADE_IN_UP_TRANSITION = {
  duration: 0.8,
  ease: [0.2, 0.65, 0.3, 0.9] as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: [0.96, 1],
    transition: FADE_IN_UP_TRANSITION,
  },
};

type MotionSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  animateOnLoad?: boolean;
  as?: "section" | "div";
};

export default function MotionSection({
  children,
  delay,
  className,
  id,
  animateOnLoad,
  as = "div",
}: MotionSectionProps) {
  const transition =
    delay != null
      ? { ...FADE_IN_UP_TRANSITION, delay }
      : FADE_IN_UP_TRANSITION;

  const MotionComponent = as === "section" ? motion.section : motion.div;

  return (
    <MotionComponent
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      transition={transition}
      {...(animateOnLoad
        ? { animate: "show" }
        : {
            whileInView: "show",
            viewport: { once: true, amount: 0.25 },
          })}
    >
      {children}
    </MotionComponent>
  );
}


