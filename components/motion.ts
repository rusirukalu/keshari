import { Variants } from "framer-motion";

// Custom premium easing curve (matching Apple / Vercel fluid transitions)
export const premiumEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  stagger: 0.06
};

// Check if prefers-reduced-motion is active (client-side accessibility hook)
export const isReducedMotionActive = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Centralized variants
export const fadeIn = (duration = durations.normal): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: premiumEase
    }
  }
});

export const fadeInUp = (yOffset = 16, duration = durations.normal): Variants => ({
  hidden: { 
    opacity: 0, 
    y: typeof window !== "undefined" && isReducedMotionActive() ? 0 : yOffset 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: premiumEase
    }
  }
});

export const fadeInDown = (yOffset = -16, duration = durations.normal): Variants => ({
  hidden: { 
    opacity: 0, 
    y: typeof window !== "undefined" && isReducedMotionActive() ? 0 : yOffset 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: premiumEase
    }
  }
});

export const staggerContainer = (staggerDelay = durations.stagger, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: typeof window !== "undefined" && isReducedMotionActive() ? 0 : staggerDelay,
      delayChildren
    }
  }
});

export const scaleUp = (initialScale = 0.99, duration = durations.normal): Variants => ({
  hidden: { 
    opacity: 0, 
    scale: typeof window !== "undefined" && isReducedMotionActive() ? 1 : initialScale 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: premiumEase
    }
  }
});

export const slideIn = (direction: "left" | "right" | "up" | "down", offset = 24, duration = durations.normal): Variants => {
  const getInitial = () => {
    if (typeof window !== "undefined" && isReducedMotionActive()) return { x: 0, y: 0, opacity: 0 };
    switch (direction) {
      case "left": return { x: -offset, y: 0, opacity: 0 };
      case "right": return { x: offset, y: 0, opacity: 0 };
      case "up": return { x: 0, y: offset, opacity: 0 };
      case "down": return { x: 0, y: -offset, opacity: 0 };
    }
  };

  return {
    hidden: getInitial(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: premiumEase
      }
    }
  };
};

export const revealMask: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: durations.slow,
      ease: premiumEase
    }
  }
};
