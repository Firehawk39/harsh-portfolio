"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLayoutStore } from "@/store/useLayoutStore";
import {
  Brain,
  Network,
  MessageSquare,
  Cpu,
  Layers,
  Sparkles,
  BotMessageSquare,
  Server,
  Database,
  Home,
  Lightbulb,
  Users,
  Mic2,
  Puzzle,
  Workflow,
  Waypoints,
} from "lucide-react";

const DEFAULT_IMAGE = "/skills.jpg";
const DEFAULT_TITLE = "Skills";
const DEFAULT_DESC = "A comprehensive overview of my technical expertise.";

// Category images (High-quality cinematic unique assets - text removed, color matched)
const CAT_IMAGES = {
  lang: "/images/skills/cat_prog_v2.png",
  aiml: "/images/skills/cat_aiml_v2.png",
  genai: "/images/skills/cat_genai_v2.png",
  agentic: "/images/skills/cat_agentic_v2.png",
  vector: "/images/skills/cat_vector_v2.png",
  deploy: "/images/skills/cat_deploy_v2.png",
};

type SkillItem = {
  label: string;
  icon?: string;
  iconInvert?: boolean; // invert white icons for visibility
  lucide?: React.ElementType;
  image: string;
  desc: string;
  iconClass?: string;
};

const skillCategories: { title: string; catImage: string; catDesc: string; items: SkillItem[] }[] = [


  {
    title: "Generative AI & LLM",
    catImage: CAT_IMAGES.genai,
    catDesc: "My core generative AI capabilities and techniques.",
    items: [
      { label: "LLM Fine-tuning", icon: "/images/skills-icons/llmfinetuning.png", image: CAT_IMAGES.genai, desc: "Efficient fine-tuning of large language models using QLoRA." },
      { label: "RAG", lucide: Database, image: CAT_IMAGES.genai, desc: "Retrieval-Augmented Generation for knowledge-grounded responses." },
      { label: "Prompt Engineering", lucide: MessageSquare, image: CAT_IMAGES.genai, desc: "Crafting precise prompts to steer model behavior." },
      { label: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface", image: CAT_IMAGES.genai, desc: "Accessing, fine-tuning and deploying open-source models." },
      { label: "Transformers", lucide: Layers, image: CAT_IMAGES.genai, desc: "Working with transformer-based model architectures." },
      { label: "Diffusion Models", lucide: Cpu, image: CAT_IMAGES.genai, desc: "Image synthesis and creative AI using diffusion." },
      { label: "Local LLM Deploy", lucide: Server, image: CAT_IMAGES.genai, desc: "Running LLMs privately on local hardware." },
      { label: "NLP", lucide: Puzzle, image: CAT_IMAGES.genai, desc: "Natural language processing and text understanding." },
    ],
  },
  {
    title: "Agentic AI & Automation",
    catImage: CAT_IMAGES.agentic,
    catDesc: "Tools I use to build autonomous AI agents and workflows.",
    items: [
      { label: "n8n", icon: "https://cdn.simpleicons.org/n8n", image: CAT_IMAGES.agentic, desc: "Designing complex AI-driven workflow automations." },
      { label: "Claude Code", icon: "/images/skills-icons/claudecode.png", image: CAT_IMAGES.agentic, desc: "Autonomous development using advanced AI coding agents." },
      { label: "OpenClaw", lucide: BotMessageSquare, image: CAT_IMAGES.agentic, desc: "Orchestrating multi-agent pipelines at scale." },
      { label: "MCP", lucide: Workflow, image: CAT_IMAGES.agentic, desc: "Model Context Protocol for structured agent communication." },
      { label: "Google Antigravity", icon: "/images/skills-icons/google-antigravity-orig.png", iconInvert: true, image: CAT_IMAGES.agentic, desc: "AI coordination using Google's Antigravity platform." },
      { label: "Lovable", icon: "/images/skills-icons/lovable.png", image: CAT_IMAGES.agentic, desc: "AI-powered rapid web app generation." },
      { label: "Ollama", icon: "/images/skills-icons/ollama.png", image: CAT_IMAGES.agentic, desc: "Running and testing LLMs locally with ease." },
      { label: "ComfyUI", icon: "/images/skills-icons/comfyui.png", image: CAT_IMAGES.agentic, desc: "Node-based UI for visual AI generation pipelines." },
      { label: "Wan2GP", icon: "/images/skills-icons/wan-905x613.png", image: CAT_IMAGES.agentic, desc: "Generating and editing video using AI models." },
    ],
  },
  {
    title: "AI/ML Frameworks",
    catImage: CAT_IMAGES.aiml,
    catDesc: "Core frameworks I use to build and train ML models.",
    items: [
      { label: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch", image: CAT_IMAGES.aiml, desc: "Building and fine-tuning deep learning models." },
      { label: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow", image: CAT_IMAGES.aiml, desc: "Scalable ML pipelines and neural networks." },
      { label: "LangGraph", lucide: Waypoints, image: CAT_IMAGES.aiml, desc: "Orchestrating complex multi-agent LLM graph workflows." },
      { label: "LangChain", icon: "https://cdn.simpleicons.org/langchain", image: CAT_IMAGES.aiml, desc: "Building modular LLM applications and chains." },
      { label: "Unsloth", icon: "/images/skills-icons/unsloth.png", image: CAT_IMAGES.aiml, desc: "Accelerated LLM fine-tuning with Unsloth Studio." },
      { label: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn", image: CAT_IMAGES.aiml, desc: "Classical ML algorithms for data analysis and predictions." },
      { label: "NumPy", icon: "https://cdn.simpleicons.org/numpy", image: CAT_IMAGES.aiml, desc: "High-performance numerical computation and arrays." },
      { label: "Pandas", icon: "/images/skills-icons/pandas_1.png", image: CAT_IMAGES.aiml, desc: "Data manipulation, cleaning, and analysis." },
    ],
  },
  {
    title: "Vector & Database",
    catImage: CAT_IMAGES.vector,
    catDesc: "My database and vector store expertise.",
    items: [
      { label: "Pinecone", lucide: Database, image: CAT_IMAGES.vector, desc: "Managed vector database for large-scale semantic search." },
      { label: "FAISS", lucide: Network, image: CAT_IMAGES.vector, desc: "Fast in-memory similarity search for embeddings." },
      { label: "Chroma", lucide: Database, image: CAT_IMAGES.vector, desc: "Open-source embedding database for LLM apps." },
      { label: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql", image: CAT_IMAGES.vector, desc: "Reliable high-performance relational database." },
      { label: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", image: CAT_IMAGES.vector, desc: "Flexible NoSQL document database for modern apps." },
      { label: "Supabase", icon: "https://cdn.simpleicons.org/supabase/white", iconClass: "scale-[0.65]", image: CAT_IMAGES.vector, desc: "Real-time Postgres backend with auth and storage." },
    ],
  },
  {
    title: "Programming Languages",
    catImage: CAT_IMAGES.lang,
    catDesc: "Core programming languages I work with daily.",
    items: [
      { label: "Python", icon: "https://cdn.simpleicons.org/python", image: CAT_IMAGES.lang, desc: "Primary language for AI, data science, and scripting." },
      { label: "C", icon: "https://cdn.simpleicons.org/c", image: CAT_IMAGES.lang, desc: "Low-level systems and embedded programming." },
      { label: "HTML", icon: "https://cdn.simpleicons.org/html5", image: CAT_IMAGES.lang, desc: "Building structured, semantic web pages." },
    ],
  },
  {
    title: "Deployment & Cloud",
    catImage: CAT_IMAGES.deploy,
    catDesc: "Infrastructure, cloud, and dev tooling.",
    items: [
      { label: "Microsoft Azure", icon: "/images/skills-icons/Microsoft_Azure.svg.png", iconClass: "scale-90", image: CAT_IMAGES.deploy, desc: "Enterprise cloud infrastructure for AI workloads." },
      { label: "Docker", icon: "https://cdn.simpleicons.org/docker", image: CAT_IMAGES.deploy, desc: "Containerizing AI models and web services." },
      { label: "Git", icon: "https://cdn.simpleicons.org/git", image: CAT_IMAGES.deploy, desc: "Version control and collaborative development workflow." },
      { label: "Linux", icon: "https://cdn.simpleicons.org/linux", image: CAT_IMAGES.deploy, desc: "Systems administration and homelab server management." },
      { label: "HomeLab", lucide: Home, image: CAT_IMAGES.deploy, desc: "Self-hosted private infrastructure and local AI experiments." },
    ],
  },
];

// --- Sub-components (Composed for better maintainability and performance) ---

const SkillItemCard = React.memo(({ item, catIndex, itemIndex }: { item: SkillItem; catIndex: number; itemIndex: number }) => {
  const LucideIcon = item.lucide;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + catIndex * 0.08 + itemIndex * 0.04, duration: 0.4 }}
      className="flex flex-col items-center gap-2.5 group cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Skill: ${item.label}`}
    >
      <div className="h-11 w-11 relative flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
        {item.icon ? (
          <Image
            src={item.icon}
            alt={item.label}
            fill
            unoptimized
            className={`object-contain drop-shadow-sm ${
              item.iconClass || (item.icon?.includes('skills-icons') ? 'scale-[1.4]' : '')
            } ${
              item.iconInvert ? 'invert' : ''
            }`}
          />
        ) : LucideIcon ? (
          <LucideIcon
            className="w-8 h-8 text-foreground/60 group-hover:text-[var(--accent)] transition-colors duration-300"
            strokeWidth={1.5}
          />
        ) : null}
      </div>
      <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
        {item.label}
      </span>
    </motion.div>
  );
});

SkillItemCard.displayName = "SkillItemCard";

const SkillSection = ({ category, catIndex }: { category: typeof skillCategories[0]; catIndex: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + catIndex * 0.08, duration: 0.6 }}
    className="mb-14"
  >
    {/* Section Header */}
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1 bg-border/60" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] whitespace-nowrap">
        {category.title}
      </h2>
      <div className="h-px flex-1 bg-border/60" />
    </div>

    {/* Icons Grid */}
    <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8">
      {category.items.map((item, itemIndex) => (
        <SkillItemCard 
          key={item.label} 
          item={item} 
          catIndex={catIndex} 
          itemIndex={itemIndex} 
        />
      ))}
    </div>
  </motion.section>
);

export default function Skills() {
  const { setLeftContent } = useLayoutStore();

  useEffect(() => {
    setLeftContent(DEFAULT_IMAGE, DEFAULT_TITLE, DEFAULT_DESC);
  }, [setLeftContent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-32 pb-12 w-full max-w-2xl px-4 md:px-0"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Technical Arsenal
      </h1>
      <p className="text-foreground/90 text-lg mb-16 leading-relaxed font-medium">
        The architectural backbone behind my work. A highly specialized stack engineered for orchestrating autonomous multi-agent pipelines, fine-tuned generative models, and planet-scale deployments.
      </p>

      {/* Categorized Skill Sections */}
      {skillCategories.map((category, catIndex) => (
        <SkillSection 
          key={category.title} 
          category={category} 
          catIndex={catIndex} 
        />
      ))}

      {/* Bottom spacer */}
      <div className="h-24 md:h-32 w-full shrink-0" />
    </motion.div>
  );
}
