// ─── Real project data for Harsh Solanki ───────────────────────────────────────

export type ProjectSection = {
  heading: string;
  body: string;
  bullets?: { label: string; detail: string }[];
  quote?: { text: string; author: string };
};

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  isNew: boolean;
  tags: string[];
  image: string;           
  desc: string;            
  overview: string;        
  sections: ProjectSection[];
  whatNext?: {
    title: string;
    items: { label: string; detail: string }[];
  };
};

export const projectsList: Project[] = [
  {
    id: "velora",
    name: "Velora – Cinematic Music Experience",
    category: "Native iOS App",
    year: "2026",
    isNew: true,
    tags: ["Swift", "iOS", "Navidrome", "UI/UX"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74a14262?q=80&w=2574&auto=format&fit=crop",
    desc: "An elegantly designed, native iOS music ecosystem built for a visually stunning listening experience.",
    overview:
      "Velora is a highly polished, native iOS music player designed to transform personal music libraries into a cinematic listening experience. It features dynamic glassmorphism and real-time artist imagery resolution to create immersive visual environments.",
    sections: [
      {
        heading: "Cinematic Glassmorphism",
        body: "A custom-built interface featuring dynamic blur effects and translucent materials that adapt seamlessly across landscape and portrait orientations.",
        quote: {
          text: "Independent music players can rival and exceed commercial platforms in beauty and usability.",
          author: "Design Philosophy",
        },
      },
      {
        heading: "Dynamic Contextual Backdrops",
        body: "Real-time artist imagery resolution via Fanart.tv and MusicBrainz creates immersive, edge-to-edge visual environments based on what you're listening to.",
        bullets: [
          { label: "Native Swift", detail: "Buttery-smooth transitions and fluid navigation engineered natively in Swift." },
          { label: "Navidrome Server", detail: "Deep integration with Navidrome for personal music library streaming." },
        ],
      },
    ],
  },
  {
    id: "personaflow",
    name: "PersonaFlow – AI Wellness Companion",
    category: "Agentic AI & Cloud",
    year: "2025",
    isNew: false,
    tags: ["n8n", "Supabase", "Ollama", "RAG", "Vercel"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    desc: "Empathetic AI companion with long-term memory and privacy-first local orchestration.",
    overview:
      "A full-stack wellness platform featuring an empathetic AI companion powered by hermes3:8b-llama3.1. The system is engineered to provide emotionally intelligent, supportive dialogue through a privacy-first architecture that ensures 100% local data ownership.",
    sections: [
      {
        heading: "Intelligent Memory & RAG",
        body: "Implemented a persistent 'second self' using Supabase to store and retrieve journals, habits, and reflections. This long-term memory enables the AI to understand user evolution over time, delivering context-aware guidance that aligns with the user's emotional state.",
        quote: {
          text: "Privacy isn't a feature; it's the foundation of true vulnerability in AI wellness.",
          author: "Architecture Philosophy",
        },
      },
      {
        heading: "Local Orchestration",
        body: "Built using n8n for multi-step reasoning workflows and Ollama for local model execution, the system supports real-time semantic search without compromising user data to external cloud providers.",
        bullets: [
          { label: "100% Local", detail: "Ensures complete data ownership via Ollama and local embedding models." },
          { label: "Persistent Memory", detail: "Supabase-driven journal and habit tracking for deep user understanding." },
          { label: "n8n Pipelines", detail: "Advanced multi-tool agents for context-aware, empathetic reasoning." },
        ],
      },
    ],
  },
  {
    id: "nutribud",
    name: "NutriBud – AI Nutrition Assistant",
    category: "Vision AI & Fine-Tuning",
    year: "2025",
    isNew: false,
    tags: ["LLAMA 3.2 Vision", "Unsloth", "QLoRA", "n8n", "Hugging Face"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop",
    desc: "Fine-tuned LLAMA 3.2 Vision bot for localized Indian meal analysis with 50% higher accuracy.",
    overview:
      "An end-to-end Telegram Bot for automated meal photo analysis. NutriBud leverages a custom fine-tuned Vision Language Model (VLM) to estimate calories, protein, fat, and carbs from simple photos.",
    sections: [
      {
        heading: "Domain-Specific Fine-Tuning",
        body: "Addressed the inaccuracy of general VLMs in identifying regional cuisines by fine-tuning LLAMA 3.2 Vision 11B on the Indian Food Images Dataset. Utilizing Unsloth and QLoRA, the model was trained on a single 12 GB VRAM GPU, achieving a 50% accuracy boost.",
        quote: {
          text: "General models fail at the edges; fine-tuning is where AI meets culture.",
          author: "Research Insight",
        },
      },
      {
        heading: "Open-Source Impact",
        body: "The fine-tuned weights were open-sourced on Hugging Face, substantially outperforming state-of-the-art general models in region-specific food classification and nutritional estimation.",
        bullets: [
          { label: "50% Accuracy Boost", detail: "Significant improvement in identifying diverse Indian cuisine vs. Base VLMs." },
          { label: "VRAM Optimization", detail: "Memory-optimized training of 11B parameters using Unsloth/QLoRA on 12GB VRAM." },
          { label: "Integrated Bot", detail: "Built with self-hosted n8n for real-time Telegram API interaction." },
        ],
      },
    ],
  },
  {
    id: "ai-rig",
    name: "Self-Hosted AI Infrastructure Rig",
    category: "MLOps & Infrastructure",
    year: "2024",
    isNew: false,
    tags: ["HiveOS", "Salad", "Ubuntu", "Vast.ai", "Hardware"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2670&auto=format&fit=crop",
    desc: "A 4x NVIDIA RTX GPU HomeLab optimized for compute monetization and local AI hosting.",
    overview:
      "A custom-built 4x NVIDIA RTX GPU High-Performance Computing (HPC) rig designed for 24/7 self-hosting of heavy AI/ML workloads and decentralized compute monetization.",
    sections: [
      {
        heading: "Thermal & Power Engineering",
        body: "Engineered a specific power configuration and airflow topology that reduced energy consumption by 15% without throttling GPU throughput. The rig maintains 99.9% uptime while running dense inference and training jobs.",
        quote: {
          text: "Efficient infrastructure is as important as the models it serves.",
          author: "Engineering Motto",
        },
      },
      {
        heading: "Compute Monetization",
        body: "Leveraged HiveOS and Ubuntu for stability, integrating with Vast.ai and Salad to monetize idle GPU cycles during periods of low local demand, creating a self-sustaining AI research environment.",
        bullets: [
          { label: "4x GPU Array", detail: "Enterprise-grade RTX cluster managed via HiveOS and Ubuntu." },
          { label: "15% Energy Saving", detail: "Optimized thermal management and voltage curves for peak efficiency." },
          { label: "24/7 Uptime", detail: "Reliable hosting for local LLM pipelines and remote compute rental." },
        ],
      },
    ],
  },
];
