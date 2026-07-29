import type { Variants } from 'framer-motion';

/**
 * Shared motion vocabulary so every animation on the site eases the same way.
 * `EASE_OUT` is an expo-style curve (fast start, long gentle settle) — the
 * curve that gives polished marketing sites their "smooth" feel.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise used by scroll reveals and staggered grid items. */
export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Container that reveals its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
