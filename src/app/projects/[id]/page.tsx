"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLayoutStore } from "@/store/useLayoutStore";
import { projectsList } from "../data";

// ─── Staggered text reveal ─────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { setLeftContent, clearActiveProject } = useLayoutStore();

  const projectIndex = projectsList.findIndex((p) => p.id === id);
  const project = projectsList[projectIndex];
  const prevProject = projectIndex > 0 ? projectsList[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsList.length - 1 ? projectsList[projectIndex + 1] : null;

  useEffect(() => {
    if (!project) return;
    setLeftContent(project.image, project.name, project.category);
    return () => clearActiveProject();
  }, [project, setLeftContent, clearActiveProject]);

  if (!project) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col pt-28 pb-20 w-full max-w-2xl px-4 md:px-0"
    >
      {/* Back link */}
      <Reveal delay={0.05}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          All projects
        </Link>
      </Reveal>

      {/* Metadata row */}
      <Reveal delay={0.1}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
            {project.category}
          </span>
          <span className="text-muted-foreground/30">·</span>
          <span className="text-xs font-mono text-muted-foreground/40">{project.year}</span>
          {project.isNew && (
            <>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-[11px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                New
              </span>
            </>
          )}
        </div>
      </Reveal>

      {/* Title */}
      <Reveal delay={0.15}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
          {project.name}
        </h1>
      </Reveal>

      {/* Tags */}
      <Reveal delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-muted text-muted-foreground/70 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Overview paragraph */}
      <Reveal delay={0.25}>
        <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed mb-12">
          {project.overview}
        </p>
      </Reveal>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <motion.div
          key={section.heading}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          {/* Section heading */}
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
            {section.heading}
          </h2>

          {/* Body */}
          <p className="text-foreground/75 text-base leading-relaxed mb-6">
            {section.body}
          </p>

          {/* Optional blockquote */}
          {section.quote && (
            <blockquote className="border-l-2 border-border pl-5 my-8">
              <p className="text-foreground/70 text-base italic leading-relaxed mb-1">
                &ldquo;{section.quote.text}&rdquo;
              </p>
              <cite className="text-sm text-muted-foreground/50 not-italic">
                — {section.quote.author}
              </cite>
            </blockquote>
          )}

          {/* Optional bullet list */}
          {section.bullets && (
            <ul className="flex flex-col gap-3 mt-6">
              {section.bullets.map((b) => (
                <li key={b.label} className="flex items-start gap-2 text-base text-foreground/75">
                  <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>
                    <strong className="text-foreground font-semibold">{b.label}</strong>
                    {" — "}
                    {b.detail}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}

      {/* What's Next */}
      <Reveal delay={0.5}>
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">What&apos;s Next?</h2>
          <p className="text-foreground/75 text-base leading-relaxed">{project.whatNext}</p>
        </div>
      </Reveal>

      {/* Divider */}
      <Reveal delay={0.55}>
        <div className="h-px w-full bg-border/50 mb-10" />
      </Reveal>

      {/* Prev / Next navigation */}
      <Reveal delay={0.6}>
        <div className="flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="font-medium">{prevProject.name}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="font-medium">{nextProject.name}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Reveal>
    </motion.div>
  );
}
