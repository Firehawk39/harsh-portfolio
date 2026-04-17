"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import { BlurReveal } from "@/components/common/BlurReveal";

export default function About() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    // Set the left panel image for the About page
    setLeftContent(
      "/about-me.jpg", 
      "About me", 
      "Conviction, Curiosity, and the Craft of AI."
    );
  }, [setLeftContent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        A little about me
      </h1>

      <div className="space-y-6 text-lg text-foreground/90 leading-relaxed font-medium">
        <BlurReveal delay={0.1}>
          <p>
            Hi, I&apos;m Harsh Solanki, a final-year Computer Science student specializing in AI/ML, building intelligent systems that are <strong>practical, private, and purposeful</strong>.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.2}>
          <p>
            It started long before the code. Growing up, films like <strong>A.I</strong>, <strong>The Matrix</strong>, and <strong>Tron</strong>{" "}
            didn&apos;t just entertain me. They made me ask hard questions about intelligence, humanity, and what we&apos;re truly building when we build AI. That philosophical lens never left me. It just found a new home in my work.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p>
            Today I work at the intersection of architecture and intention. When I encounter a problem, my instinct is to map it. <strong>Where does intelligence fit? What should the system look like? How do we make it actually work?</strong> From fine-tuned vision models and locally deployed LLMs to production-ready agentic workflows, I care about the craft as much as the outcome.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.4}>
          <p>
            With conviction and curiosity, I build systems that matter.
          </p>
        </BlurReveal>
      </div>


    </motion.div>
  );
}
