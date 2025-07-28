"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number>();
  const dimensionsRef = useRef({ w: 0, h: 0, nt: 0 });
  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);


  const waveColors = useMemo(() => colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ], [colors]);

  const drawWave = useCallback((n: number) => {
    if (!ctxRef.current) return;
    
    dimensionsRef.current.nt += getSpeed();
    const { w, h, nt } = dimensionsRef.current;
    
    for (let i = 0; i < n; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 10) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctxRef.current.lineTo(x, y + h * 0.5);
      }
      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  }, [noise, waveWidth, waveColors, getSpeed]);

  const render = useCallback(() => {
    if (!ctxRef.current) return;
    
    const { w, h } = dimensionsRef.current;
    ctxRef.current.fillStyle = backgroundFill || "black";
    ctxRef.current.globalAlpha = waveOpacity || 0.5;
    ctxRef.current.fillRect(0, 0, w, h);
    drawWave(3);
    animationIdRef.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;
    
    const container = canvas.parentElement;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    dimensionsRef.current.w = ctx.canvas.width = rect.width;
    dimensionsRef.current.h = ctx.canvas.height = rect.height;
    ctx.filter = `blur(${blur}px)`;
    dimensionsRef.current.nt = 0;
    
    let resizeTimeout: NodeJS.Timeout;
    window.onresize = function () {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (container && ctxRef.current) {
          const rect = container.getBoundingClientRect();
          dimensionsRef.current.w = ctxRef.current.canvas.width = rect.width;
          dimensionsRef.current.h = ctxRef.current.canvas.height = rect.height;
          ctxRef.current.filter = `blur(${blur}px)`;
        }
      }, 100);
    };
    render();
  }, [blur, render]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (typeof window !== "undefined") {
        window.onresize = null;
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};