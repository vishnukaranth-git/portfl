"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-electric-400 mix-blend-difference"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.05 }}
        style={{ width: 6, height: 6 }}
      />
      {/* Outer trailing aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-electric-400/40"
        animate={{
          x: position.x - (isPointer ? 22 : 14),
          y: position.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          borderColor: isPointer ? "rgba(249, 115, 22, 0.7)" : "rgba(56, 189, 248, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.1 }}
      />
    </>
  );
}
