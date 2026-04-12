"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";

export default function Contact() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    // Set the left panel image for the Contact page
    setLeftContent(
      "/contact.jpg", 
      "Get in touch", 
      "Let's build something amazing together"
    );
  }, [setLeftContent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 font-medium text-sm w-fit mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        Now booking for 2026
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Let&apos;s talk
      </h1>
      
      <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
        Got a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something beautiful.
      </p>

      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full h-12 rounded-xl border border-border bg-transparent px-4 outline-none focus:border-foreground transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="w-full h-12 rounded-xl border border-border bg-transparent px-4 outline-none focus:border-foreground transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Message</label>
          <textarea 
            placeholder="Tell me about your project..." 
            rows={5}
            className="w-full rounded-xl border border-border bg-transparent p-4 outline-none focus:border-foreground transition-colors resize-none"
          />
        </div>

        <button className="h-12 w-full md:w-auto px-8 mt-4 rounded-full bg-foreground text-background font-medium hover:scale-105 active:scale-95 transition-transform flex items-center justify-center self-start">
          Send Message
        </button>
      </form>

    </motion.div>
  );
}
