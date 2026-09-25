"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ExpItem {
  period: string;
  badgeType: "current" | "future" | "previous";
  title: string;
  company: string;
  workType?: string;
  description: string;
  tags?: string[];
}

export default function Experience() {
  const experiences: ExpItem[] = [
    {
      period: "CURRENT",
      badgeType: "current",
      title: "Full Stack Developer Intern",
      company: "Elevance Skills",
      description:
        "Currently working as a Full Stack Developer Intern, building practical digital products and working across modern frontend, backend and AI-integrated applications.",
      tags: [
        "Full Stack Development",
        "Frontend",
        "Backend",
        "AI-integrated applications",
      ],
    },
    {
      period: "2026",
      badgeType: "future",
      title: "Google Student Ambassador",
      company: "Google",
      workType: "Part-time",
      description:
        "Working as a Google Student Ambassador 2026, engaging with the student technology ecosystem and exploring Google technologies.",
      tags: [
        "Google Technologies",
        "Developer Ecosystem",
        "Student Community",
        "Technology Awareness",
      ],
    },
    {
      period: "PREVIOUS",
      badgeType: "previous",
      title: "AR/VR Intern",
      company: "EBTS Technologies",
      workType: "Remote",
      description:
        "Worked as an AR/VR Intern, gaining practical experience with immersive technologies and development.",
      tags: ["Immersive Technologies", "AR / VR Development"],
    },
  ];

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-[#080c16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="03 / CAREER"
          title="EXPERIENCE"
          subtitle="Hands-on industry engineering, student leadership, and emerging tech innovation."
          accentColor="electric"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Central timeline line for desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-electric-400 via-warm-500 to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative md:pl-24"
              >
                {/* Node icon */}
                <div className="hidden md:flex absolute left-8 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080c16] border-2 border-electric-400 items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] z-10">
                  <Briefcase className="w-3.5 h-3.5 text-electric-300" />
                </div>

                {/* Card */}
                <div className="p-8 sm:p-10 rounded-2xl bg-surface-900/60 border border-white/10 hover:border-electric-400/40 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full font-mono text-xs tracking-wider font-medium ${
                          exp.badgeType === "current"
                            ? "border border-electric-400/40 bg-electric-400/10 text-electric-300"
                            : exp.badgeType === "future"
                            ? "border border-warm-500/40 bg-warm-500/10 text-warm-300"
                            : "border border-slate-700 bg-slate-800/40 text-slate-300"
                        }`}
                      >
                        {exp.period}
                      </span>
                      {exp.workType && (
                        <span className="font-mono text-xs text-slate-400">
                          {exp.workType}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500 group-hover:text-electric-400 transition-colors">
                      <span>0{idx + 1}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-electric-300 transition-colors mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-warm-400 mb-4">
                    {exp.company}
                  </p>

                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                    &ldquo;{exp.description}&rdquo;
                  </p>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-950/60 border border-white/5 text-xs font-mono text-slate-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-electric-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
