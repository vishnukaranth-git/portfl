"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  title?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
  icon,
  title,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-electric-500 to-electric-400 text-white font-medium shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_0px_rgba(56,189,248,0.6)] border border-electric-300/30";
      case "secondary":
        return "bg-gradient-to-r from-warm-600 to-warm-500 text-white font-medium shadow-[0_0_20px_-3px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_0px_rgba(249,115,22,0.6)] border border-warm-400/30";
      case "outline":
        return "bg-navy-950/60 backdrop-blur-md text-slate-200 border border-slate-700 hover:border-electric-400/80 hover:text-white hover:bg-navy-900/80 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.25)]";
      case "ghost":
        return "text-slate-400 hover:text-white hover:bg-white/5";
      default:
        return "";
    }
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.15 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 cursor-pointer select-none group",
        getVariantStyles(),
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        title={title}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" title={title} className="inline-block bg-transparent p-0 border-0">
      {content}
    </button>
  );
}
