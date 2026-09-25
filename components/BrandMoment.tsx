"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandMoment() {
  const lines = [
    { text: "I learn by building.", gradient: "text-white" },
    { text: "I build by experimenting.", gradient: "text-gradient-electric" },
    { text: "I experiment to solve real problems.", gradient: "text-gradient-warm" },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-[#080c16] overflow-hidden border-t border-white/5 flex items-center justify-center">
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-electric-400/10 via-transparent to-warm-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase block mb-10"
        >
          // THE CREATIVE IMPERATIVE
        </motion.span>

        <div className="space-y-6 md:space-y-8">
          {lines.map((line, idx) => (
            <motion.h2
              key={idx}
              initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: idx * 0.2 }}
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-tight ${line.gradient}`}
            >
              &ldquo;{line.text}&rdquo;
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}
