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
      "AI Engineer building intelligent, real-world systems."
    );
  }, [setLeftContent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        A little about me
      </h1>

      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <BlurReveal delay={0.1}>
          <p>
            Hi, I&apos;m Harsh Solanki — an AI Engineer passionate about turning ideas into intelligent, real-world systems. It started long before the code. Growing up, films like <em>A.I.</em>, <em>The Matrix</em>, and <em>Tron</em> didn&apos;t just entertain me — they made me ask hard questions about intelligence, humanity, and what we&apos;re really building when we build AI. That philosophical lens never left me. It just found a new home in my work.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.2}>
          <p>
            Today I thrive on problem-solving, architecture, and finding the moments where AI can genuinely make something better. When I encounter a challenge, my mind naturally maps it — where does intelligence fit here? What would a well-designed system look like? How do we make it useful without losing sight of why it matters?
          </p>
        </BlurReveal>
        <BlurReveal delay={0.3}>
          <p>
            With a mix of curiosity, conviction, and a love for bold ideas, I build systems that are practical, private, and purposeful. From fine-tuned models to agentic workflows — I care about the craft as much as the outcome.
          </p>
        </BlurReveal>
        <BlurReveal delay={0.4}>
          <p>
            If you&apos;re working on something meaningful and think AI belongs in it — let&apos;s connect.
          </p>
        </BlurReveal>
      </div>

      <div className="mt-16 flex justify-end">
        <BlurReveal delay={0.5}>
          <span className="font-serif italic text-4xl font-light tracking-widest text-foreground">
            Harsh
          </span>
        </BlurReveal>
      </div>
    </motion.div>
  );
}
