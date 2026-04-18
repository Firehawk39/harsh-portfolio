"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLayoutStore } from "@/store/useLayoutStore";
import { projectsList } from "./data";

// ─── Single project row ────────────────────────────────────────────────────────
const ProjectRow = React.memo(({
  project,
  index,
  isHovered,
  onEnter,
  onLeave,
  onClick,
}: {
  project: typeof projectsList[0];
  index: number;
  isHovered: boolean;
  onEnter: (i: number) => void;
  onLeave: () => void;
  onClick: (id: string) => void;
}) => (
  <motion.div
    onMouseEnter={() => onEnter(index)}
    onMouseLeave={onLeave}
    onClick={() => onClick(project.id)}
    onKeyDown={(e) => e.key === "Enter" && onClick(project.id)}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.07 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`group flex items-center gap-4 py-6 border-b border-border/40 cursor-pointer transition-colors duration-200 ${
      isHovered ? "border-border/70" : ""
    }`}
    role="link"
    tabIndex={0}
    aria-label={`View project: ${project.name}`}
  >
    {/* Project name + "New" badge */}
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span
        className={`font-bold text-lg md:text-xl tracking-tight transition-all duration-300 truncate ${
          isHovered ? "text-foreground translate-x-1" : "text-foreground/85"
        }`}
        style={{ transitionProperty: "transform, color" }}
      >
        {project.name}
      </span>

      {project.isNew && (
        <span className="shrink-0 text-[11px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full tracking-wide">
          New
        </span>
      )}
    </div>

    {/* Category */}
    <span className={`hidden sm:block text-sm shrink-0 w-48 text-center transition-colors duration-300 ${isHovered ? "text-muted-foreground/80" : "text-muted-foreground/50"}`}>
      {project.category}
    </span>

    {/* Year */}
    <span className={`text-sm shrink-0 w-12 text-right tabular-nums transition-colors duration-300 ${isHovered ? "text-muted-foreground/70" : "text-muted-foreground/40"}`}>
      {project.year}
    </span>

    {/* Arrow */}
    <motion.span
      animate={{ x: isHovered ? 0 : -6, opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-foreground/50 text-base shrink-0 w-5"
    >
      →
    </motion.span>
  </motion.div>
));

ProjectRow.displayName = "ProjectRow";

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Projects() {
  const { setLeftContent, setActiveProject, clearActiveProject } = useLayoutStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const first = projectsList[0];
    setLeftContent(first.image, first.name, first.desc);
    setActiveProject(0, projectsList.length);
    return () => clearActiveProject();
  }, [setLeftContent, setActiveProject, clearActiveProject]);

  const handleEnter = useCallback(
    (index: number) => {
      const p = projectsList[index];
      setHoveredIndex(index);
      setLeftContent(p.image, p.name, p.desc);
      setActiveProject(index, projectsList.length);
    },
    [setLeftContent, setActiveProject]
  );

  const handleLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const handleClick = useCallback(
    (id: string) => {
      router.push(`/projects/${id}`);
    },
    [router]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-16 w-full max-w-2xl px-4 md:px-0"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
        className="text-muted-foreground text-base mb-14 leading-relaxed max-w-md"
      >
        Here&apos;s a collection of the work I&apos;ve had the privilege to bring to life. Each project tells a unique story, crafted with architectural precision and attention to detail.
      </motion.p>

      <div className="flex flex-col border-t border-border/40">
        {projectsList.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredIndex === index}
            onEnter={handleEnter}
            onLeave={handleLeave}
            onClick={handleClick}
          />
        ))}
      </div>
    </motion.div>
  );
}
