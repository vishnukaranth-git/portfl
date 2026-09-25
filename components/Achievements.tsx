"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Award, Building, Sparkles } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36 bg-[#080c16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="06 / RECOGNITION"
          title="BEYOND THE CODE"
          subtitle="Competitive innovation, multi-agent hackathons, and high-intensity engineering."
          accentColor="warm"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Agents Hackathon — TOP 20 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="group relative p-8 rounded-3xl bg-surface-900/60 border border-electric-400/30 hover:border-electric-400/80 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(56,189,248,0.15)] hover:shadow-[0_20px_45px_-10px_rgba(56,189,248,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-electric-400/10 border border-electric-400/30 text-electric-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-electric-400/20 border border-electric-400/40 text-electric-300 font-mono font-bold text-xs tracking-wider">
                  TOP 20
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <Building className="w-3.5 h-3.5 text-electric-400" />
                <span>Google Office</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-electric-300 transition-colors">
                AI Agents Hackathon
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Participated in an intensive AI Agents Hackathon hosted directly at the Google office,
                building collaborative multi-agent architectures and securing a Top 20 finish.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>AGENTIC SYSTEMS</span>
              <span className="text-electric-400">HIGH DISTINCTION</span>
            </div>
          </motion.div>

          {/* HackArena — TOP 15 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative p-8 rounded-3xl bg-surface-900/60 border border-warm-500/30 hover:border-warm-500/80 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] hover:shadow-[0_20px_45px_-10px_rgba(249,115,22,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-warm-500/10 border border-warm-500/30 text-warm-400">
                  <Award className="w-6 h-6" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-warm-500/20 border border-warm-500/40 text-warm-300 font-mono font-bold text-xs tracking-wider">
                  TOP 15
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-warm-400" />
                <span>National-Level Hackathon</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-warm-300 transition-colors">
                HackArena
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Competed in a national-level engineering sprint against top nationwide developer teams,
                reaching the prestigious Top 15 threshold with rapid product execution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>NATIONAL COMPETITION</span>
              <span className="text-warm-400">FINALIST</span>
            </div>
          </motion.div>

          {/* HackBriven & Community Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative p-8 rounded-3xl bg-surface-900/60 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-navy-950/80 border border-white/5 text-slate-300">
                  <Building className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono text-xs">
                  INNOVATION
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <span>Paytm Office & Ecosystem</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-slate-200 transition-colors">
                HackBriven & Hackathons
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Participated in the HackBriven Hackathon hosted at the Paytm office, alongside continuous
                active participation in collegiate engineering sprints solving pressing community challenges.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>CONTINUOUS BUILDER</span>
              <span className="text-slate-300">ACTIVE PARTICIPANT</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
