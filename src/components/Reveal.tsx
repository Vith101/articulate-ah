import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  delay = 0.25 
}: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ 
          duration: 0.5, 
          delay: delay,
          ease: "easeOut" 
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};