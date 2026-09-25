"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Terminal, Layers, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: "electric" | "warm" | "dual";
  skills: { name: string; tag: string }[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "AI / MACHINE LEARNING",
      subtitle: "Applied cognitive modeling & intelligent pipelines",
      icon: <Cpu className="w-5 h-5 text-electric-400" />,
      accent: "electric",
      skills: [
        { name: "Artificial Intelligence", tag: "CORE" },
        { name: "Machine Learning", tag: "FOUNDATIONAL" },
        { name: "Generative AI", tag: "INTELLIGENCE" },
        { name: "Prompt Engineering", tag: "ORCHESTRATION" },
      ],
    },
    {
      title: "PROGRAMMING",
      subtitle: "Algorithmic execution & robust data queries",
      icon: <Terminal className="w-5 h-5 text-warm-400" />,
      accent: "warm",
      skills: [
        { name: "Python", tag: "LANG" },
        { name: "SQL", tag: "DATA" },
      ],
    },
    {
      title: "DEVELOPMENT",
      subtitle: "Full-spectrum user interfaces & backend architectures",
      icon: <Layers className="w-5 h-5 text-electric-300" />,
      accent: "dual",
      skills: [
        { name: "React", tag: "UI ENGINE" },
        { name: "Full Stack Development", tag: "SYSTEMS" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#080c16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="05 / CAPABILITIES"
          title="TECHNICAL ARSENAL"
          subtitle="Focused engineering toolset honed for intelligent systems and real-world deployment."
          accentColor="electric"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group p-8 rounded-3xl bg-surface-900/60 border border-white/10 hover:border-electric-400/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-navy-950/80 border border-white/5 group-hover:border-electric-400/30 transition-colors">
                    {cat.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-electric-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-navy-950/80 border border-white/5 hover:border-white/20 transition-colors flex items-center justify-between group/chip"
                  >
                    <span className="text-sm font-medium text-slate-200 group-hover/chip:text-white">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
