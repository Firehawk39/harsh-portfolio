"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    // Set the left panel image for the Contact page
    setLeftContent(
      "/contact.jpg", 
      "Open for Business", 
      "Seeking high-impact roles and partnerships"
    );
  }, [setLeftContent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
        Hiring? <br />
        <span className="text-muted-foreground font-serif italic">Let&apos;s talk business</span>
      </h1>
      
      <p className="text-muted-foreground text-lg mb-16 leading-relaxed max-w-xl">
        I&apos;m currently open to new opportunities and collaborations. If you have a role or a project that aligns with my expertise in AI and engineering, feel free to reach out.
      </p>

      {/* Contact Information Grid */}
      <div className="flex flex-col gap-10 mb-20">
        <div className="flex items-start gap-6 group">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
            📧
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email me</p>
            <a 
              href="mailto:harsh.solanki1520@gmail.com" 
              className="text-xl md:text-2xl font-semibold hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              harsh.solanki1520@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Availability</p>
            <p className="text-lg md:text-xl font-medium leading-tight">
              Actively exploring internship, full-time roles, and project collaboration
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
            📍
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</p>
            <p className="text-lg md:text-xl font-medium leading-tight">
              Open to remote and in-office opportunities across Delhi NCR 🇮🇳
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col gap-6">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Connect with me</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SocialButton 
            href="https://linkedin.com/in/harsh-solanki-ai" 
            label="LinkedIn" 
            icon={<LinkedInIcon />}
            color="hover:bg-[#0077B5] hover:text-white"
          />
          <SocialButton 
            href="https://github.com/HarshSolanki15" 
            label="GitHub" 
            icon={<GitHubIcon />}
            color="hover:bg-[#24292e] hover:text-white"
          />
          <SocialButton 
            href="https://huggingface.co/HarshSolanki" 
            label="Hugging Face" 
            icon="🤗"
            color="hover:bg-[#FFD21E] hover:text-black"
          />
        </div>
      </div>
    </motion.div>
  );
}

function SocialButton({ href, label, icon, color }: { href: string; label: string; icon: React.ReactNode; color: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 px-6 h-14 rounded-2xl bg-muted font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm",
        color
      )}
    >
      <span className="text-xl flex items-center justify-center w-6">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
