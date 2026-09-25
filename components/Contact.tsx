"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { Mail, Github, Linkedin, Check, Copy, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "karanthvishnu1@gmail.com";
  const github = "https://github.com/vishnukaranth-git";
  const linkedin = "https://www.linkedin.com/in/vishnu-karanth-a-a25a32238";

  // Pre-filled email draft parameters
  const emailSubject = encodeURIComponent("Portfolio Inquiry — Vishnu Karanth");
  const rawBody = `Hi Vishnu,

I came across your portfolio and would like to get in touch with you.

I'd love to discuss a potential opportunity, collaboration, project, or simply connect.

Looking forward to hearing from you.

Best regards,
[Visitor's Name]`;
  const emailBody = encodeURIComponent(rawBody);

  // Direct Gmail web composer URL (opens Gmail compose tab directly)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${emailSubject}&body=${emailBody}`;
  
  // Standard mailto fallback for system client (e.g. Apple Mail, Outlook)
  const mailtoUrl = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-[#080c16] border-t border-white/5 overflow-hidden">
      {/* Background glow pools */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-electric-500/10 via-transparent to-warm-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionHeading
          tag="08 / CONTACT"
          title="LET'S BUILD SOMETHING."
          subtitle="Have an idea, project, collaboration or opportunity? Let's connect."
          align="center"
          accentColor="dual"
        />

        {/* Large Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-5 sm:p-12 md:p-16 rounded-3xl bg-surface-900/70 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
        >
          {/* Email Address Highlight Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-full bg-navy-950/90 border border-white/10 mb-8 sm:mb-10 max-w-full">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-400 ml-1 sm:ml-2" />
            <span className="font-mono text-xs sm:text-base text-white tracking-wider truncate max-w-[200px] sm:max-w-none">
              {email}
            </span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[11px] sm:text-xs font-mono text-slate-200 transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Action Magnetic Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 w-full">
            <MagneticButton
              href={gmailUrl}
              target="_blank"
              variant="primary"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wider"
              icon={<ArrowUpRight className="w-4 h-4" />}
              title="Open pre-filled draft in Gmail"
            >
              EMAIL ME
            </MagneticButton>

            <MagneticButton
              href={github}
              target="_blank"
              variant="outline"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wider"
              icon={<Github className="w-4 h-4" />}
              title="Visit GitHub profile"
            >
              GITHUB
            </MagneticButton>

            <MagneticButton
              href={linkedin}
              target="_blank"
              variant="outline"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wider border-warm-500/30 hover:border-warm-400"
              icon={<Linkedin className="w-4 h-4 text-warm-400" />}
              title="Connect on LinkedIn"
            >
              LINKEDIN
            </MagneticButton>
          </div>

          {/* Micro-interaction hint with fallback client link */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
              <span>Opens Gmail directly with pre-filled draft</span>
            </div>
            <span className="hidden sm:inline text-slate-600">·</span>
            <a
              href={mailtoUrl}
              className="text-slate-400 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors"
              title="Open in system default mail app (Apple Mail, Outlook, etc.)"
            >
              or open in default mail app
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
