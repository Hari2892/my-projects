import React from "react";

import { motion } from "framer-motion";
import type { Variants } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] // ✅ cubic-bezier (safe)
    }
  }
};

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ marginBottom: "80px" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
