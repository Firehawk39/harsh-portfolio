"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";

const guidePosts = [
  {
    id: "post-1",
    title: "Kubernetes in the Homelab: Setting Up a k3s Cluster",
    date: "April 11, 2026",
    category: "Software",
    excerpt: "I don't run Kubernetes in my homelab, and I don't think most of you need to either. But it's worth learning, so let's set up a real k3s cluster on three mini PCs from scratch.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "post-2",
    title: "7 Docker Basics for Beginners",
    date: "March 24, 2026",
    category: "Guides",
    excerpt: "Learn Docker fundamentals including installation, volumes, networking, Docker Compose, and container management for beginners getting started with containerization.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "post-3",
    title: "Self-Hosting NetBird with Pocket ID",
    date: "March 15, 2026",
    category: "Software",
    excerpt: "Set up a self-hosted NetBird zero-trust network on a VPS with Traefik, Pocket ID for passwordless auth, and the built-in reverse proxy feature.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "post-4",
    title: "Building a Raspberry Pi Cluster Setup",
    date: "February 28, 2026",
    category: "Hardware",
    excerpt: "A complete step-by-step tutorial on building your first scalable arm64 cluster computing environment using Raspberry Pi 5 boards.",
    image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?q=80&w=2564&auto=format&fit=crop",
  }
];

const categories = ["All", "Guides", "Software", "Hardware", "Benchmarking"];

export default function Guides() {
  const { setLeftContent } = useLayoutStore();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Set the left panel image for the Guides page
    setLeftContent(
      "/guides.jpg", 
      "Technical Knowledge Base:", 
      "Exploring self-hosted solutions and modern tech stacks"
    );
  }, [setLeftContent]);

  const filteredPosts = activeCategory === "All" 
    ? guidePosts 
    : guidePosts.filter(post => post.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Guides & Tutorials
      </h1>
      
      <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
        Detailed guides, step-by-step tutorials, and unbiased technical articles on hardware, homelabs, and software engineering.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? "bg-foreground text-background" 
                : "bg-muted text-foreground hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Guides List */}
      <div className="flex flex-col gap-16">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div 
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setLeftContent(post.image, post.title, post.category)}
              className="flex flex-col gap-6 cursor-pointer group"
            >
              <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden relative bg-muted">
                {/* Fallback image if next/image needs domains configured, using plain img for now */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-fit px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </motion.div>
  );
}
