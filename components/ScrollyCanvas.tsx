"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { FRAME_PATHS, TOTAL_FRAMES } from "@/lib/frames";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  onLoaded?: () => void;
}

export default function ScrollyCanvas({ onLoaded }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Framer Motion useScroll bound to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth fade out at the very end of 500vh to seamlessly blend into content
  const canvasOpacity = useTransform(scrollYProgress, [0.88, 0.98, 1], [1, 0.6, 0.2]);

  // Render a specific frame on canvas with object-fit: cover
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Cover math
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const scale = Math.max(width / imgWidth, height / imgHeight);

    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Subtle cinematic vignette
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      Math.min(width, height) * 0.35,
      width / 2,
      height / 2,
      Math.max(width, height) * 0.75
    );
    gradient.addColorStop(0, "rgba(8, 12, 22, 0)");
    gradient.addColorStop(0.7, "rgba(8, 12, 22, 0.35)");
    gradient.addColorStop(1, "rgba(8, 12, 22, 0.85)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, []);

  const lastWidthRef = useRef<number>(0);
  const lastHeightRef = useRef<number>(0);

  // Update canvas dimensions on resize (stabilized for mobile address bar collapse)
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const widthChanged = Math.abs(displayWidth - lastWidthRef.current) > 2;
    const heightChanged = Math.abs(displayHeight - lastHeightRef.current) > 100;

    if (widthChanged || heightChanged || canvas.width === 0) {
      lastWidthRef.current = displayWidth;
      lastHeightRef.current = displayHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
    }

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Image preloading effect
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const onImageLoaded = () => {
      if (!isMounted) return;
      loadedCount++;
      const progress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      setLoadingProgress(progress);

      // Render first frame as soon as frame 0 loads to eliminate white flash
      if (loadedCount === 1 && images[0]?.complete) {
        handleResize();
        renderFrame(0);
      }

      if (loadedCount >= Math.min(30, TOTAL_FRAMES)) {
        setIsReady(true);
        if (onLoaded) onLoaded();
      }
    };

    // Preload each frame sequentially/parallel with high priority
    FRAME_PATHS.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = onImageLoaded;
      img.onerror = () => {
        // Fallback gracefully if any frame fails
        onImageLoaded();
      };
      images[idx] = img;
    });

    imagesRef.current = images;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize, onLoaded, renderFrame]);

  // Scroll listener via MotionValue change subscription
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const clamped = Math.min(Math.max(progress, 0), 1);
      const targetFrame = Math.min(
        Math.floor(clamped * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          renderFrame(targetFrame);
        });
      }
    });

    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, renderFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#080c16]"
      id="hero-scroll-container"
    >
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden">
        {/* Preloader if sequence is downloading */}
        {!isReady && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#080c16] text-white">
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t-2 border-electric-400 animate-spin" />
              <div className="absolute inset-2 rounded-full border-r-2 border-warm-500 animate-spin [animation-duration:1.5s]" />
              <span className="font-mono text-xs text-electric-400">
                {loadingProgress}%
              </span>
            </div>
            <p className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              Initializing Cinematic Experience
            </p>
          </div>
        )}

        <motion.canvas
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 w-full h-full object-cover block pointer-events-none select-none"
        />

        {/* Cinematic ambient background glow overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080c16] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#080c16]/70 via-transparent to-transparent" />

        {/* Scroll Overlay with Storytelling stages */}
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Scroll indicator at the bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
            Scroll to Explore
          </span>
          <div className="w-5 h-9 rounded-full border border-slate-600/60 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-electric-400 shadow-[0_0_8px_#38bdf8]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
