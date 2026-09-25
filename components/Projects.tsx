"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  ArrowUpRight,
  Bot,
  Globe2,
  Satellite,
  FileText,
  Sparkles,
  Layers,
  Cpu,
  Compass,
} from "lucide-react";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  liveUrl: string;
  technologies: string[];
  features: string[];
  accent: "electric" | "warm" | "ocean";
  icon: React.ReactNode;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: "skillsync",
      number: "01",
      title: "SkillSync AI",
      subtitle: "AI-Powered Career Intelligence Platform",
      description:
        "An AI-powered career guidance platform designed to help students understand their skills, identify gaps and build a personalized path toward their target career.",
      tag: "FLAGSHIP PLATFORM",
      liveUrl: "https://skill-sync-brjv.vercel.app/",
      technologies: ["AI", "Generative AI", "Gemini", "React", "Full Stack"],
      features: [
        "Resume Intelligence",
        "AI Career Guidance",
        "Skill Gap Analysis",
        "Personalized Learning Roadmap",
        "Recommended Projects",
        "Weekly Missions",
        "AI Career Mentor",
        "Career DNA",
        "GitHub Intelligence",
        "Coding Challenges",
        "Achievement Tracking",
      ],
      accent: "electric",
      icon: <Sparkles className="w-6 h-6 text-electric-400" />,
    },
    {
      id: "orca",
      number: "02",
      title: "ORCA",
      subtitle: "Marine Ecosystem Beaconing with Collaborative Agents",
      description:
        "An agentic marine intelligence platform that combines multiple specialized AI agents to analyze marine conditions and provide intelligent insights.",
      tag: "AGENTIC AI SYSTEM",
      liveUrl: "https://orca1-three.vercel.app/",
      technologies: [
        "Multi-Agent AI",
        "Geospatial Intelligence",
        "LLM Orchestration",
        "Python",
        "Full Stack",
      ],
      features: [
        "Multi-Agent Orchestration",
        "Weather Agent",
        "Ocean Agent",
        "Fisheries/PFZ Agent",
        "Geospatial Agent",
        "Risk Agent",
        "Natural Language Marine Queries",
        "Marine Data Integration",
        "Interactive Geospatial Visualization",
        "Evidence-Based Responses",
      ],
      accent: "ocean",
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
    },
    {
      id: "hydra",
      number: "03",
      title: "HYDRA",
      subtitle: "Satellite Image Analysis & Change Detection",
      description:
        "A satellite imagery analysis system designed to identify changes across locations and time periods using geospatial intelligence.",
      tag: "GEOSPATIAL INTELLIGENCE",
      liveUrl: "https://geowatch1.vercel.app/",
      technologies: [
        "Computer Vision",
        "Satellite Imagery",
        "Change Detection",
        "Geospatial AI",
        "Python",
      ],
      features: [
        "Satellite Imagery",
        "Change Detection",
        "Multi-period Image Comparison",
        "Urbanization Monitoring",
        "Infrastructure Analysis",
        "Road Expansion Analysis",
        "Geospatial Intelligence",
      ],
      accent: "warm",
      icon: <Satellite className="w-6 h-6 text-warm-400" />,
    },
    {
      id: "documind",
      number: "04",
      title: "DocuMind",
      subtitle: "AI-Powered Document Intelligence",
      description:
        "An intelligent document processing platform that uses AI to understand documents and make information easier to extract, explore and interact with.",
      tag: "INTELLIGENT PROCESSING",
      liveUrl: "https://documind-430k.onrender.com/",
      technologies: [
        "Generative AI",
        "Natural Language Interaction",
        "Document Parsing",
        "Full Stack",
      ],
      features: [
        "Document Understanding",
        "AI-powered Extraction",
        "Intelligent Document Processing",
        "Natural Language Interaction",
        "Generative AI",
      ],
      accent: "electric",
      icon: <FileText className="w-6 h-6 text-electric-400" />,
    },
  ];

  return (
    <section id="work" className="relative py-28 md:py-40 bg-[#080c16] border-t border-white/5">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-navy-800/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="04 / PORTFOLIO"
          title="SELECTED WORK"
          subtitle="Things I've built: Agentic frameworks, intelligent platforms, and geospatial systems."
          accentColor="dual"
        />

        {/* Project Showcase List */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((proj, idx) => {
            const isElectric = proj.accent === "electric";
            const isOcean = proj.accent === "ocean";
            const isWarm = proj.accent === "warm";

            return (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-surface-900/60 border border-white/10 hover:border-electric-400/50 transition-all duration-500 backdrop-blur-2xl overflow-hidden hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
              >
                {/* Glow accent bar at card top */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${
                    isWarm
                      ? "from-warm-500 to-warm-400"
                      : isOcean
                      ? "from-cyan-500 to-blue-500"
                      : "from-electric-500 to-electric-400"
                  } opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="p-5 sm:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Eyebrow & Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs tracking-widest px-3 py-1 rounded-full border ${
                              isWarm
                                ? "border-warm-500/30 bg-warm-500/10 text-warm-300"
                                : isOcean
                                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                                : "border-electric-400/30 bg-electric-400/10 text-electric-300"
                            }`}
                          >
                            {proj.tag}
                          </span>

                          {/* Live Indicator */}
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] tracking-wider hover:bg-emerald-500/20 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>LIVE</span>
                          </a>
                        </div>
                        <span className="font-mono text-sm font-bold text-slate-500 group-hover:text-white transition-colors">
                          {proj.number}
                        </span>
                      </div>

                      {/* Main Title with link */}
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 group/link mb-2"
                      >
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight group-hover/link:text-electric-300 transition-colors">
                          {proj.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover/link:text-electric-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                      </a>

                      {/* Subtitle */}
                      <p className="text-base sm:text-lg font-medium text-slate-300 mb-6">
                        {proj.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Launch Button & Tech Pills */}
                      <div className="flex flex-wrap items-center gap-3 mb-8">
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md ${
                            isWarm
                              ? "bg-warm-500 hover:bg-warm-400 text-white shadow-warm-500/20 hover:shadow-warm-500/40"
                              : isOcean
                              ? "bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold shadow-cyan-500/20 hover:shadow-cyan-500/40"
                              : "bg-electric-500 hover:bg-electric-400 text-white shadow-electric-500/20 hover:shadow-electric-500/40"
                          }`}
                        >
                          <span>LAUNCH PLATFORM</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {proj.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-2 rounded-lg bg-navy-950/80 border border-white/5 font-mono text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="pt-6 border-t border-white/5">
                      <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase block mb-3">
                        Key Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {proj.features.slice(0, 6).map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-light"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isWarm
                                  ? "bg-warm-400"
                                  : isOcean
                                  ? "bg-cyan-400"
                                  : "bg-electric-400"
                              }`}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-tech Visual Display & Architecture Showcase */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl border border-white/10 bg-navy-950/90 p-6 md:p-8 backdrop-blur-xl overflow-hidden group-hover:border-electric-400/40 transition-all duration-500 shadow-inner">
                      {/* Background Visual Graphics */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          {proj.icon}
                          <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">
                            {proj.title} System Matrix
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-600" />
                          <span className="w-2 h-2 rounded-full bg-slate-600" />
                          <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
                        </div>
                      </div>

                      {/* Interactive Visual Element */}
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-400">Architecture:</span>
                          <span className="text-electric-300 font-medium">
                            {isOcean ? "Multi-Agent Swarm" : "Neural Pipeline"}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-400">Execution:</span>
                          <span className="text-warm-400 font-medium">Real-Time Autonomous</span>
                        </div>

                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                          <span className="text-slate-400">Core Engine:</span>
                          <span className="text-slate-200">
                            {proj.technologies.slice(0, 2).join(" · ")}
                          </span>
                        </div>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className="mt-6 pt-6 border-t border-white/5 flex flex-col items-center justify-center py-6 relative">
                        {isOcean ? (
                          <div className="relative w-full h-28 flex items-center justify-center">
                            {/* Orbital marine circles */}
                            <div className="absolute w-24 h-24 rounded-full border border-cyan-500/20 animate-ping [animation-duration:3s]" />
                            <div className="absolute w-32 h-32 rounded-full border border-cyan-400/30" />
                            <div className="absolute w-40 h-40 rounded-full border border-cyan-400/10" />
                            <div className="p-4 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                              <Compass className="w-8 h-8 animate-spin [animation-duration:12s]" />
                            </div>
                          </div>
                        ) : isWarm ? (
                          <div className="relative w-full h-28 flex items-center justify-center">
                            {/* Satellite orbital radar */}
                            <div className="absolute w-32 h-16 rounded-full border-t-2 border-warm-400/60 rotate-12" />
                            <div className="absolute w-24 h-24 rounded-full border border-warm-500/20" />
                            <div className="p-4 rounded-full bg-warm-950/80 border border-warm-500/40 text-warm-300">
                              <Satellite className="w-8 h-8" />
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-28 flex items-center justify-center">
                            {/* Neural connection node */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4">
                              <div className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
                              <div className="h-[1px] w-16 bg-gradient-to-r from-electric-400 to-warm-500" />
                              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
                              <div className="h-[1px] w-16 bg-gradient-to-r from-warm-500 to-electric-400" />
                              <div className="w-2 h-2 rounded-full bg-warm-400 animate-pulse" />
                            </div>
                          </div>
                        )}

                        <span className="font-mono text-[10px] text-slate-500 tracking-widest mt-2 uppercase">
                          System Active & Operational
                        </span>

                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 w-full py-2.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 font-mono text-xs text-slate-200 flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                        >
                          <span>Explore Live Interface</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
