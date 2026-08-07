"use client";

import { useEffect, useRef, useCallback } from "react";

interface NetworkHeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  proofItems: string[];
  children?: React.ReactNode;
}

const DESKTOP_NODES = 56;
const MOBILE_NODES = 40;
const LINK_DISTANCE = 132;
const DPR_CAP = 2;

export function NetworkHero({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  proofItems,
  children,
}: NetworkHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; r: number; accent: boolean }>>([]);
  const rafRef = useRef<number>(0);
  const dimsRef = useRef({ w: 0, h: 0 });

  const initNodes = useCallback((w: number, h: number, count: number) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() < 0.1 ? 2.5 : 1.5,
        accent: Math.random() < 0.08,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, DPR_CAP);
    let animating = true;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      dimsRef.current = { w, h };
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      const { w, h } = dimsRef.current;
      const count = w < 768 ? MOBILE_NODES : DESKTOP_NODES;
      nodesRef.current = initNodes(w, h, count);
    }

    function draw() {
      if (!animating) return;
      if (document.visibilityState !== "visible") {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const { w, h } = dimsRef.current;
      ctx!.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DISTANCE) {
            const a = 1 - d / LINK_DISTANCE;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(94,234,212,${(a * 0.15).toFixed(3)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = n.accent
          ? "rgba(249,115,22,0.55)"
          : "rgba(94,234,212,0.3)";
        ctx!.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    seed();
    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      seed();
    });
    ro.observe(canvas.parentElement!);

    return () => {
      animating = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [initNodes]);

  return (
    <section className="relative min-h-[clamp(620px,78vh,820px)] flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-ink to-ink isolation">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-[7fr_5fr] gap-8 lg:gap-12 items-center">
          <div className="max-w-[600px]">
            {badge && (
              <span className="inline-block px-3 py-1 mb-5 text-[13px] text-network bg-network/10 border border-network/20 rounded-full tracking-wide">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-5 max-w-[14ch]">
              {title}
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-[460px]">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={primaryCTA.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-ink font-semibold rounded-[10px] hover:bg-[#FF8A3D] transition-colors text-[15px]"
              >
                {primaryCTA.label} →
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white font-medium rounded-[10px] hover:bg-white/5 transition-colors text-[15px]"
              >
                {secondaryCTA.label}
              </a>
            </div>
            {proofItems.length > 0 && (
              <div className="flex flex-wrap gap-5">
                {proofItems.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-white/40 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-network" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="hidden lg:flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
