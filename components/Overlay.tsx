"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Stage 1: 0% - 15% (Center Hero)
  const opacity1 = useTransform(scrollYProgress, [0, 0.03, 0.12, 0.16], [1, 1, 0.8, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.16], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.16], [1, 0.95]);
  const filter1 = useTransform(
    scrollYProgress,
    [0, 0.12, 0.16],
    ["blur(0px)", "blur(0px)", "blur(8px)"]
  );

  // Stage 2: 18% - 35% (Left Aligned: "I build digital experiences.")
  const opacity2 = useTransform(
    scrollYProgress,
    [0.17, 0.22, 0.32, 0.37],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.17, 0.22, 0.37], [50, 0, -40]);

  // Stage 3: 39% - 58% (Center / Accent: "AI. Software. Ideas.")
  const opacity3 = useTransform(
    scrollYProgress,
    [0.39, 0.44, 0.54, 0.6],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.39, 0.44, 0.6], [50, 0, -40]);

  // Stage 4: 62% - 80% (Right Aligned: "Bridging AI, design and engineering.")
  const opacity4 = useTransform(
    scrollYProgress,
    [0.62, 0.67, 0.77, 0.82],
    [0, 1, 1, 0]
  );
  const y4 = useTransform(scrollYProgress, [0.62, 0.67, 0.82], [50, 0, -40]);

  // Stage 5: 84% - 100% (Final Message: "Let's build what comes next.")
  const opacity5 = useTransform(
    scrollYProgress,
    [0.84, 0.89, 0.96, 1],
    [0, 1, 1, 0.4]
  );
  const y5 = useTransform(scrollYProgress, [0.84, 0.89, 1], [40, 0, -20]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
      {/* 0% - 15%: HERO TITLE */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1, filter: filter1 }}
        className="absolute flex flex-col items-center text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-400/30 bg-navy-900/60 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.28em] text-electric-300 font-medium uppercase">
            VISHNU KARANTH
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] font-display text-white mb-6">
          <span className="block text-gradient-electric">AI/ML STUDENT.</span>
          <span className="block text-white">FULL STACK DEVELOPER.</span>
          <span className="block text-gradient-warm">BUILDER.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
          I build intelligent digital experiences at the intersection of AI,
          software, and emerging technology.
        </p>

        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 tracking-wider">
          <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5">
            AI / ML
          </span>
          <span className="text-electric-400">·</span>
          <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5">
            FULL STACK
          </span>
          <span className="text-warm-500">·</span>
          <span className="px-2.5 py-1 rounded border border-white/10 bg-white/5">
            GENERATIVE AI
          </span>
        </div>
      </motion.div>

      {/* 18% - 35%: LEFT ALIGNED */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-6 md:left-16 max-w-xl text-left"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-electric-400 uppercase block mb-3">
          ENGINEERING & INTELLIGENCE
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight leading-tight mb-4">
          I build digital experiences.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          From AI-powered products to full-stack applications, I turn ideas into
          real-world solutions.
        </p>
      </motion.div>

      {/* 39% - 58%: CENTER ACCENT */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute text-center max-w-2xl"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-warm-400 uppercase block mb-3">
          CORE PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-4">
          <span className="text-gradient-electric">AI.</span>{" "}
          <span className="text-white">Software.</span>{" "}
          <span className="text-gradient-warm">Ideas.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Creating autonomous multi-agent systems, responsive full-stack
          interfaces, and applied intelligence that solves concrete problems.
        </p>
      </motion.div>

      {/* 62% - 80%: RIGHT ALIGNED */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute right-6 md:right-16 max-w-xl text-right"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-electric-400 uppercase block mb-3">
          SYSTEM DESIGN
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight leading-tight mb-4">
          Bridging AI, design and engineering.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed ml-auto">
          Exploring artificial intelligence, generative AI, agentic systems,
          software development and emerging technologies.
        </p>
      </motion.div>

      {/* 84% - 100%: FINAL SCROLL MESSAGE */}
      <motion.div
        style={{ opacity: opacity5, y: y5 }}
        className="absolute text-center max-w-2xl"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-slate-400 uppercase block mb-3">
          HORIZON
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-white tracking-tight mb-4">
          Let&apos;s build what comes next.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-mono tracking-wider">
          Explore portfolio & engineering archives ↓
        </p>
      </motion.div>
    </div>
  );
}
