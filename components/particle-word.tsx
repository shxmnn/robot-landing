"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Vibe.", "Instinct.", "Intent.", "Mind."];

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  vx: number;
  vy: number;
};

export function ParticleWord() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const buildParticles = (word: string) => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, rect.width, rect.height);
      context.fillStyle = "#0f172a";
      context.textBaseline = "middle";
      context.font = `700 ${Math.min(rect.width / 4.7, 96)}px Arial, Helvetica, sans-serif`;
      context.fillText(word, 0, rect.height / 2);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const nextParticles: Particle[] = [];
      const gap = Math.max(6, Math.floor(8 * dpr));

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const alpha = imageData.data[(y * canvas.width + x) * 4 + 3];
          if (alpha > 128) {
            nextParticles.push({
              x: x / dpr + (Math.random() - 0.5) * 42,
              y: y / dpr + (Math.random() - 0.5) * 42,
              baseX: x / dpr,
              baseY: y / dpr,
              size: Math.random() * 1.2 + 1,
              vx: 0,
              vy: 0,
            });
          }
        }
      }

      particlesRef.current = nextParticles;
      context.clearRect(0, 0, rect.width, rect.height);
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);

      for (const particle of particlesRef.current) {
        const dx = particle.baseX - particle.x;
        const dy = particle.baseY - particle.y;
        particle.vx += dx * 0.08;
        particle.vy += dy * 0.08;
        particle.vx *= 0.78;
        particle.vy *= 0.78;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.beginPath();
        context.fillStyle = "#111827";
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      if (!mediaQuery.matches) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    const sync = () => {
      buildParticles(WORDS[wordIndex]);
      render();
    };

    sync();
    window.addEventListener("resize", sync);

    return () => {
      window.removeEventListener("resize", sync);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [wordIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % WORDS.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="relative block h-[0.95em] w-full max-w-[8.2em] overflow-hidden align-top">
      <span className="sr-only">{WORDS[wordIndex]}</span>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-hidden="true"
      />
    </span>
  );
}
