"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#work" },
  { label: "SKILLS", href: "#skills" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#080c16]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Vishnu Karanth Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-400 to-warm-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080c16] rounded-[7px] flex items-center justify-center font-display font-bold text-xs tracking-wider text-white">
                VK
              </div>
            </div>
            <span className="font-display font-bold tracking-[0.2em] text-sm text-white group-hover:text-electric-400 transition-colors">
              VISHNU KARANTH
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs tracking-widest text-slate-300 hover:text-electric-300 transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-electric-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <MagneticButton
              href="#contact"
              variant="outline"
              className="py-2 px-4 text-xs font-mono tracking-wider border-electric-400/40"
              icon={<ArrowUpRight className="w-3.5 h-3.5 text-electric-400" />}
            >
              CONNECT
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#080c16]/98 backdrop-blur-2xl lg:hidden flex flex-col pt-6 px-6 pb-10 overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <span className="font-display font-bold tracking-[0.2em] text-sm text-white">
                VISHNU KARANTH
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-5 my-auto py-4">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-display text-2xl font-bold tracking-wider text-slate-200 hover:text-electric-400 flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-gradient-to-r from-electric-500 to-electric-400 text-white font-medium text-sm tracking-wider"
              >
                LET&apos;S CONNECT
              </a>
              <p className="font-mono text-xs text-center text-slate-500">
                karanthvishnu1@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
