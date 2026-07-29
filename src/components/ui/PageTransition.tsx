import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '../../lib/motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

/** Fade-and-rise wrapper applied to routed pages as they enter and leave. */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
