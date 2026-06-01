"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: MotionWrapperProps) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom luxury easing cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
