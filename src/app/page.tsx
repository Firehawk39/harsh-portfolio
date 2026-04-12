"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

export default function Home() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    // Set the left panel image and text for the Home page
    setLeftContent("/neon.jpg", "Harsh Solanki", "AI Engineer");
  }, [setLeftContent]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add smoothing springs with higher stiffness for "concise" and responsive feel
  const springX = useSpring(mouseX, { stiffness: 250, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 30 });

  useEffect(() => {
    // Only add listener if user is not on a touch device
    if (window.matchMedia("(hover: hover)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background Glow Spell - More bright and responsive */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-60 hidden md:block"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.18), transparent 70%)`
          ),
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
      >

      {/* Main Heading Text */}
      <h1 className="text-5xl md:text-6xl/tight font-bold tracking-tight mb-10">
        On a journey to bring AI from 
        <br />
        concept to <span className="font-serif font-bold text-muted-foreground">Reality.</span>
      </h1>

      {/* Call to Actions - Brighter and more concise shadows */}
      <div className="flex flex-col sm:flex-row gap-4 mb-24">
        <Magnetic>
          <Link 
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-foreground text-background px-8 font-medium transition-all hover:bg-accent hover:shadow-[0_0_30px_var(--accent)] active:scale-95"
          >
            Book a call
          </Link>
        </Magnetic>
        <Magnetic>
          <Link 
            href="/projects"
            className="flex h-12 items-center justify-center rounded-full bg-muted text-foreground px-8 font-medium transition-all hover:bg-accent hover:text-background hover:shadow-[0_0_30px_var(--accent)] active:scale-95"
          >
            View projects
          </Link>
        </Magnetic>
      </div>
    </motion.div>
    </>
  );
}
