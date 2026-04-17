"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import { usePathname } from "next/navigation";

export function LeftPanel() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  const {
    leftImageUrl,
    leftImageCaption,
    leftImageSubCaption,
    activeProjectIndex,
    totalProjects,
  } = useLayoutStore();

  return (
    <div className="relative w-full h-full bg-muted rounded-[2rem] overflow-hidden shadow-sm">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={leftImageUrl}
          initial={{ opacity: 0, scale: 1.06, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.97, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={leftImageUrl}
            alt={leftImageCaption || "Showcase Image"}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay — stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-10" />

      {/* Bottom Content Area */}
      <div className="absolute bottom-7 left-7 right-7 z-20 flex flex-col gap-4">
        {/* Dot indicators — bottom center, only on projects page */}
        {isProjectsPage && totalProjects > 0 && (
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: totalProjects }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: i === activeProjectIndex ? 1 : 0.35,
                  scale: i === activeProjectIndex ? 1.2 : 0.8,
                  backgroundColor:
                    i === activeProjectIndex
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.55)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
            ))}
          </div>
        )}

        {/* Caption stack */}
        <div className="flex flex-col gap-1.5">
          <AnimatePresence mode="popLayout">
            {leftImageCaption && (
              <motion.h2
                key={leftImageCaption}
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-bold text-2xl lg:text-3xl tracking-tight leading-tight"
              >
                {leftImageCaption}
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            {leftImageSubCaption && (
              <motion.p
                key={leftImageSubCaption}
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="text-white/70 text-sm lg:text-[15px] font-medium leading-snug line-clamp-2"
              >
                {leftImageSubCaption}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
