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
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        Get in touch
      </h1>
      
      <div className="flex flex-col gap-8 mb-16">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            📧 Email
          </span>
          <a 
            href="mailto:harsh.solanki1520@gmail.com" 
            className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors break-all underline-offset-8 hover:underline"
          >
            harsh.solanki1520@gmail.com
          </a>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            🚀 Availability
          </span>
          <p className="text-xl md:text-2xl font-medium text-foreground/90">
            Actively exploring internship, full-time roles, and project collaboration
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            📍 Location
          </span>
          <p className="text-xl md:text-2xl font-medium text-foreground/90">
            Open to remote and in-office opportunities across Delhi NCR
          </p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col gap-6 pt-12 border-t border-border">
        <h3 className="text-lg font-bold">Connect with me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/harsh-solanki-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl bg-muted/50 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase opacity-60">LinkedIn</span>
              <span className="font-bold">Connect</span>
            </div>
            <div className="p-2 bg-background rounded-lg group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Jolly1506" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl bg-muted/50 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase opacity-60">GitHub</span>
              <span className="font-bold">Follow</span>
            </div>
            <div className="p-2 bg-background rounded-lg group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>

          {/* Hugging Face */}
          <a 
            href="https://huggingface.co/harsh-solanki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl bg-muted/50 hover:bg-[#FFD21E] hover:text-black transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase opacity-60">Hugging Face</span>
              <span className="font-bold">Explore</span>
            </div>
            <div className="p-2 bg-background rounded-lg group-hover:bg-white/20 transition-colors text-xl">
              🤗
            </div>
          </a>
        </div>
      </div>

    </motion.div>
  );
}
