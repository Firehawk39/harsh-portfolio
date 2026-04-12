"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";

const projectsList = [
  {
    id: "luminous",
    name: "Luminous",
    category: "Visual Design",
    year: "2025",
    isNew: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "nova",
    name: "Nova",
    category: "Product Design",
    year: "2024",
    isNew: false,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "osaka",
    name: "Osaka",
    category: "Branding",
    year: "2023",
    isNew: false,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "atlas",
    name: "Atlas",
    category: "Photography",
    year: "2022",
    isNew: false,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "prism",
    name: "Prism",
    category: "UI/UX Design",
    year: "2021",
    isNew: false,
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2564&auto=format&fit=crop",
  },
];

export default function Projects() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    // Set the default left panel image for the Projects page
    setLeftContent(
      projectsList[0].image, 
      projectsList[0].name, 
      projectsList[0].category
    );
  }, [setLeftContent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Projects
      </h1>
      
      <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
        Here&apos;s a collection of the work I&apos;ve had the privilege to bring to life. Each project tells a unique story, crafted with creativity and attention to detail.
      </p>

      <div className="flex flex-col w-full border-t border-border">
        {projectsList.map((project) => (
          <div 
            key={project.id}
            onMouseEnter={() => setLeftContent(project.image, project.name, project.category)}
            className="group flex items-center justify-between py-6 border-b border-border cursor-pointer transition-colors hover:bg-accent/[0.04] dark:hover:bg-accent/[0.06] -mx-4 px-4 rounded-xl"
          >
            <div className="flex items-center gap-3 w-1/3">
              <h3 className="text-lg font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
                {project.name}
              </h3>
              {project.isNew && (
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 text-xs font-semibold">
                  New
                </span>
              )}
            </div>
            <div className="text-muted-foreground w-1/3 text-left">
              {project.category}
            </div>
            <div className="text-muted-foreground text-right">
              {project.year}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
