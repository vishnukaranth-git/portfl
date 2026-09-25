"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Terminal, Cpu, Sparkles, Code2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Terminal className="w-5 h-5 text-electric-400" />,
      label: "CURRENT ROLE",
      value: "Full Stack Developer Intern",
      sub: "Elevance Skills",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-warm-400" />,
      label: "AMBASSADOR",
      value: "Google Student Ambassador 2026",
      sub: "Part-time · Google Ecosystem",
    },
    {
      icon: <Cpu className="w-5 h-5 text-electric-400" />,
      label: "ACADEMICS",
      value: "B.E. in AI & Machine Learning",
      sub: "BMSIT&M, Bengaluru",
    },
    {
      icon: <Code2 className="w-5 h-5 text-warm-400" />,
      label: "CORE FOCUS",
      value: "Agentic AI & Full Stack",
      sub: "Real-world Product Engineering",
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#080c16] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-navy-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-warm-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="01 / PROFILE"
          title="ABOUT ME"
          subtitle="Engineering practical intelligence with modern systems and purposeful design."
          accentColor="electric"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
              <p>
                I&apos;m <span className="font-semibold text-white">Vishnu Karanth</span>, an{" "}
                <span className="text-electric-300 font-medium">Artificial Intelligence and Machine Learning</span> student
                and developer passionate about building real-world technology.
              </p>
              <p className="text-slate-300">
                I currently work as a <span className="text-white font-medium">Full Stack Developer Intern</span> at{" "}
                <span className="text-white underline decoration-electric-400/50 underline-offset-4">
                  Elevance Skills
                </span>{" "}
                and also work part-time as a{" "}
                <span className="text-warm-400 font-medium">Google Student Ambassador 2026</span>.
              </p>
              <p className="text-slate-400 text-base sm:text-lg">
                I enjoy working across AI, Generative AI, machine learning, software development and
                modern web technologies, constantly experimenting with new ideas and turning them into
                working products.
              </p>
            </div>

            {/* Quick terminal-like block */}
            <div className="mt-6 rounded-xl border border-white/10 bg-navy-950/70 p-5 font-mono text-xs text-slate-300 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[10px] text-slate-400">vishnu@system:~/identity</span>
              </div>
              <p className="text-slate-300">
                <span className="text-electric-400">$</span> status --active
              </p>
              <p className="text-slate-400 mt-1 pl-4">
                → Building agentic frameworks, multi-agent pipelines & robust web systems.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-surface-900/60 border border-white/5 hover:border-electric-400/40 transition-all duration-300 backdrop-blur-md hover:bg-surface-800/70 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-white/5 group-hover:border-electric-400/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] tracking-widest text-slate-400 block mb-1 uppercase">
                      {item.label}
                    </span>
                    <h3 className="text-white font-medium text-base group-hover:text-electric-300 transition-colors">
                      {item.value}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 font-light">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
