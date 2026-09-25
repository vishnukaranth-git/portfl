"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-[#080c16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="02 / ACADEMIC FOUNDATION"
          title="EDUCATION"
          subtitle="Theoretical grounding powering real-world machine learning & engineering."
          accentColor="warm"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl"
        >
          {/* Timeline track line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-400 via-warm-500 to-transparent" />

          {/* Education Card */}
          <div className="relative pl-14 md:pl-20">
            {/* Timeline node */}
            <div className="absolute left-4 md:left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#080c16] border-2 border-electric-400 flex items-center justify-center shadow-[0_0_12px_#38bdf8]">
              <div className="w-1.5 h-1.5 rounded-full bg-electric-300" />
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-surface-900/70 border border-white/10 hover:border-electric-400/40 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-400/30 bg-electric-400/10 text-electric-300 font-mono text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>CURRENTLY PURSUING</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-warm-400" />
                  <span>Bengaluru, India</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 group-hover:text-electric-300 transition-colors">
                B.E. — Artificial Intelligence & Machine Learning
              </h3>

              <div className="flex items-center gap-2 text-slate-300 text-lg font-light mb-6">
                <GraduationCap className="w-5 h-5 text-warm-400 flex-shrink-0" />
                <span className="text-white font-medium">
                  BMS Institute of Technology & Management (BMSIT&M)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-navy-950/60 border border-white/5 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Focused on core computational intelligence, neural networks, machine learning algorithms,
                  data structures, and modern software architectures.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
