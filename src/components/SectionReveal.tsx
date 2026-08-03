"use client";

import { motion } from "framer-motion";
import { SectionRevealProps } from "@/types";

const SectionReveal = ({
  children,
  className = "",
  id,
}: SectionRevealProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
