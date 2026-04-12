"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background Glow Spell */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-50"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 80%)`
          ),
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
      >

      {/* Main Heading Text */}
      <h1 className="text-5xl md:text-6xl/tight font-bold tracking-tight mb-10">
        On a journey to harness 
        <br />
        the power of AI into <span className="font-serif font-bold text-muted-foreground">Reality</span>
      </h1>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-24">
        <Magnetic>
          <Link 
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-foreground text-background px-8 font-medium transition-all hover:bg-accent hover:shadow-[0_0_20px_var(--accent)] active:scale-95"
          >
            Book a call
          </Link>
        </Magnetic>
        <Magnetic>
          <Link 
            href="/projects"
            className="flex h-12 items-center justify-center rounded-full bg-muted text-foreground px-8 font-medium transition-all hover:bg-accent hover:text-background hover:shadow-[0_0_20px_var(--accent)] active:scale-95"
          >
            View projects
          </Link>
        </Magnetic>
      </div>
    </motion.div>
    </>
  );
}
