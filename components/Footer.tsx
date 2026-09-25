"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const email = "karanthvishnu1@gmail.com";
  const github = "https://github.com/vishnukaranth-git";
  const linkedin = "https://www.linkedin.com/in/vishnu-karanth-a-a25a32238";

  return (
    <footer className="relative py-16 bg-[#050810] border-t border-white/5 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-display font-bold text-white text-base tracking-widest">
            VISHNU KARANTH
          </span>
          <p className="font-mono text-xs text-slate-400">
            AI/ML Student · Full Stack Developer · Builder
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-mono text-xs tracking-wider">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Portfolio Inquiry — Vishnu Karanth")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="Compose in Gmail"
          >
            Email
          </a>
        </div>

        {/* Built with line & Back to top */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-slate-400 text-center md:text-right">
            Built with Next.js, Framer Motion &amp; curiosity.
          </span>
          <button
            onClick={scrollToTop}
            type="button"
            className="p-2.5 rounded-full bg-surface-900 border border-white/10 hover:border-electric-400/50 hover:text-white transition-colors text-slate-400"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
