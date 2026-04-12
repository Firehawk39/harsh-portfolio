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
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
        Let&apos;s build something <span className="text-muted-foreground italic">Extraordinary</span>
      </h1>
      
      {/* Contact Information */}
      <div className="flex flex-col gap-8 mb-16">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-accent/80">📧 Email</span>
          <a 
            href="mailto:harsh.solanki1520@gmail.com" 
            className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors break-all"
          >
            harsh.solanki1520@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-accent/80">🚀 Availability</span>
          <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-tight">
            Actively exploring internship, full-time roles, and project collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-accent/80">📍 Location</span>
          <p className="text-xl md:text-2xl text-foreground/90 font-medium">
            Open to remote and in-office opportunities across Delhi NCR.
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-border mb-16" />

      {/* Social Links Grid / Hype Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* GitHub Card */}
        <a 
          href="https://github.com/Firehawk39" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex flex-col p-6 rounded-3xl bg-[#0d1117] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-24 h-24 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </div>
          <span className="text-white text-lg font-bold mb-1">GitHub</span>
          <span className="text-white/60 text-sm mb-4 group-hover:text-white/80 transition-colors">Contributions & Labs</span>
          <div className="mt-auto flex items-center gap-2">
            <span className="text-xs font-mono text-white/40 tracking-tighter">github.com/Firehawk39</span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/harsh-solanki-b4360b1b1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex flex-col p-6 rounded-3xl bg-[#0077b5] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,119,181,0.3)] overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-20 h-20 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <span className="text-white text-lg font-bold mb-1">LinkedIn</span>
          <span className="text-white/80 text-sm mb-4">Professional Network</span>
          <div className="mt-auto flex items-center gap-2">
             <span className="text-xs font-mono text-white/60 tracking-tighter">Connect with me</span>
          </div>
        </a>

        {/* Hugging Face Card - Extended Design (Dark Mode for White Text) */}
        <a 
          href="https://huggingface.co/Anachronox39" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sm:col-span-2 group relative flex items-center justify-between p-8 rounded-3xl bg-[#1a1a1a] border border-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <span className="text-white text-2xl font-black mb-1 uppercase tracking-tighter">Hugging Face</span>
            <p className="text-white/60 text-base font-medium max-w-[320px] group-hover:text-white/80 transition-colors">
              Exploring the frontier of Open Source AI models & datasets.
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-end">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-accent/30 shadow-inner mb-2 group-hover:bg-accent/30 transition-all">
              <span className="text-3xl filter saturate-150 group-hover:scale-110 transition-transform">🤗</span>
            </div>
            <span className="text-accent/80 text-xs font-mono font-black tracking-widest uppercase">@Anachronox39</span>
          </div>
          {/* Decorative glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 blur-3xl rounded-full" />
        </a>
      </div>
    </motion.div>
  );
}
