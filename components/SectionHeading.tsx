"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accentColor?: "electric" | "warm" | "dual";
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  accentColor = "electric",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : align === "right"
      ? "items-end text-right ml-auto"
      : "items-start text-left";

  const accentBorder =
    accentColor === "warm"
      ? "bg-warm-500"
      : accentColor === "dual"
      ? "bg-gradient-to-r from-electric-400 to-warm-500"
      : "bg-electric-400";

  return (
    <div className={`flex flex-col ${alignClass} mb-14 md:mb-20 max-w-3xl`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className={`w-2 h-2 rounded-full ${accentBorder}`} />
          <span className="font-mono text-xs tracking-[0.25em] text-slate-400 uppercase">
            {tag}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
