"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, isReducedMotionActive } from "./motion";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number;
  hoverScale?: boolean;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, delay = 0, hoverScale = true, ...props }, ref) => {
    const isReduced = typeof window !== "undefined" && isReducedMotionActive();

    // Standardized premium hover animations
    const hoverAnimation = !isReduced && hoverScale
      ? {
          y: -4,
          boxShadow: "0 16px 36px -12px rgba(0, 0, 0, 0.08)",
          borderColor: "rgba(126, 143, 122, 0.4)" // Soft sage border accent on hover
        }
      : {};

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInUp(12)} // Subtle 12px entrance animation
        transition={{ delay }}
        whileHover={hoverAnimation}
        className={cn(
          "rounded-[32px] border border-graphite-100/80 bg-white p-8 md:p-10 transition-all duration-300 shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export default AnimatedCard;
