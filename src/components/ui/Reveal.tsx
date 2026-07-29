import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT, riseVariants, staggerContainer } from '../../lib/motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

/** Fade-and-rise-in wrapper triggered when the content scrolls into view. */
export const Reveal = ({ children, width = '100%', delay = 0 }: RevealProps) => (
  <div style={{ position: 'relative', width }}>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  </div>
);

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a group (e.g. a card grid) so its direct `StaggerItem` children fade
 * and rise in one after another as the group scrolls into view.
 */
export const Stagger = ({ children, className }: StaggerProps) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

/** A single item inside a `Stagger` group. */
export const StaggerItem = ({ children, className }: StaggerProps) => (
  <motion.div className={className} variants={riseVariants}>
    {children}
  </motion.div>
);
