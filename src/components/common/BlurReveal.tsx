"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BlurReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
