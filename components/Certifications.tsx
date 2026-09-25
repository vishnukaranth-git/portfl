"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ShieldCheck, Cloud, Database } from "lucide-react";

interface CertItem {
  title: string;
  issuer: string;
  tag: string;
  icon: React.ReactNode;
  accent: "electric" | "warm" | "neutral";
}

export default function Certifications() {
  const certifications: CertItem[] = [
    {
      title: "Cloud Certified Architect",
      issuer: "Google / Simplilearn",
      tag: "CLOUD INFRASTRUCTURE",
      icon: <Cloud className="w-5 h-5 text-electric-400" />,
      accent: "electric",
    },
    {
      title: "Cloud Architect Program",
      issuer: "Comprehensive Cloud Architecture",
      tag: "DISTRIBUTED SYSTEMS",
      icon: <ShieldCheck className="w-5 h-5 text-warm-400" />,
      accent: "warm",
    },
    {
      title: "Oracle Foundations Program",
      issuer: "Oracle",
      tag: "DATA & ENTERPRISE",
      icon: <Database className="w-5 h-5 text-slate-300" />,
      accent: "neutral",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-[#080c16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          tag="07 / CREDENTIALS"
          title="CERTIFICATIONS & PROGRAMS"
          subtitle="Rigorous foundations across cloud systems, enterprise architecture, and infrastructure."
          accentColor="electric"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 rounded-2xl bg-surface-900/60 border border-white/10 hover:border-electric-400/40 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-navy-950/80 border border-white/5 group-hover:border-electric-400/30 transition-colors">
                  {cert.icon}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-slate-400 px-2.5 py-1 rounded bg-white/5 border border-white/5 uppercase">
                  {cert.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-electric-300 transition-colors">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm font-light">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
