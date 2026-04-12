"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LeftPanel() {
  const pathname = usePathname();
  const { leftImageUrl, leftImageCaption, leftImageSubCaption } = useLayoutStore();

  return (
    <div className="relative w-full h-full bg-muted rounded-[2rem] overflow-hidden shadow-sm">
      {/* Dynamic Background Image Sequence */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={leftImageUrl}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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


      {/* Internal Overlay / Vignette (Optional, adds readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />

      {/* Bottom Content Area */}
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-20 w-auto">
        <div className="flex flex-col gap-1">
          <AnimatePresence mode="popLayout">
            {leftImageCaption && (
              <motion.h2
                key={leftImageCaption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-white font-bold flex items-center gap-2 text-2xl lg:text-4xl tracking-tight"
              >
                {leftImageCaption}
              </motion.h2>
            )}
            {leftImageSubCaption && (
              <motion.p
                key={leftImageSubCaption}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/90 text-base lg:text-lg font-medium"
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
