"use client";

import { useEffect, useRef, useState } from "react";

export function MagneticInit() {
  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const STR = 0.18;
    const RANGE = 80;

    const onMove = (e: PointerEvent) => {
      const els = document.querySelectorAll<HTMLElement>(".magnetic");
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const within =
          e.clientX > r.left - RANGE &&
          e.clientX < r.right + RANGE &&
          e.clientY > r.top - RANGE &&
          e.clientY < r.bottom + RANGE;
        if (within) {
          el.style.transform = `translate(${(e.clientX - cx) * STR}px, ${(e.clientY - cy) * STR}px)`;
        } else if (el.style.transform) {
          el.style.transform = "translate(0, 0)";
        }
      });
    };

    const reset = () => {
      const els = document.querySelectorAll<HTMLElement>(".magnetic");
      els.forEach((el) => (el.style.transform = "translate(0, 0)"));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", reset);
    };
  }, []);
  return null;
}

export function FilmGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "240px 240px",
      }}
    />
  );
}

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setEnabled(true);

    let dx = window.innerWidth / 2;
    let dy = window.innerHeight / 2;
    let rx = dx;
    let ry = dy;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        ringRef.current?.classList.add("is-active");
      }
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        ringRef.current?.classList.remove("is-active");
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    raf = requestAnimationFrame(tick);
    document.body.classList.add("has-cursor");

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 z-[9999] w-9 h-9 rounded-full border border-copper-500/70 mix-blend-difference"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-copper-500"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
    </>
  );
}
