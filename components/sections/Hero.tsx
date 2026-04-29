"use client";

import { useEffect, useRef } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

function StaggerLine({ text, base = 0 }: { text: string; base?: number }) {
  return (
    <span className="char-stagger inline-block">
      {text.split("").map((c, i) => (
        <span
          key={`${c}-${i}`}
          style={{ ["--ci" as string]: base + i }}
          className="inline-block"
        >
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Cursor spotlight: track mouse over hero, set CSS vars
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  // Magnetic CTA
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };
    const within = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const buf = 80;
      if (
        e.clientX > r.left - buf &&
        e.clientX < r.right + buf &&
        e.clientY > r.top - buf &&
        e.clientY < r.bottom + buf
      ) {
        onMove(e);
      } else {
        onLeave();
      }
    };
    window.addEventListener("pointermove", within);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", within);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative pt-24 sm:pt-28 pb-0 px-3 sm:px-5"
    >
      <div className="relative rounded-[36px] sm:rounded-[40px] overflow-hidden min-h-[88svh] sm:min-h-[92svh] flex flex-col">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/photo-1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A130C]/35 via-[#1A130C]/15 to-[#1A130C]/65" />
        <div className="absolute inset-0 spotlight-mask pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 pt-20 pb-20">
          <h1 className="font-display text-white text-[clamp(2.6rem,7.4vw,6rem)] leading-[1.02] tracking-[-0.02em] font-medium max-w-5xl">
            <StaggerLine text="Wake up," base={0} />
            <br />
            <span className="script-italic is-light font-normal">
              <StaggerLine text="skip the mascara." base={9} />
            </span>
          </h1>

          <p
            className="mt-7 text-white/85 max-w-md text-[15px] sm:text-[17px] leading-[1.7] font-light opacity-0"
            style={{ animation: "lift 1s 1s cubic-bezier(0.2,0.7,0.2,1) both" }}
          >
            Soft life starts with effortless beauty. Classic, Hybrid, and Volume
            lash extensions in Wake Forest, NC.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 opacity-0"
            style={{ animation: "lift 1s 1.15s cubic-bezier(0.2,0.7,0.2,1) both" }}
          >
            <a
              ref={ctaRef}
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary magnetic"
            >
              Book Appointment
            </a>
            <a href="#pricing" className="btn-ghost">
              See Pricing
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5 text-white/75 opacity-0"
          style={{ animation: "lift 1s 1.4s cubic-bezier(0.2,0.7,0.2,1) both" }}
        >
          <svg className="petal-icon text-white/85" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z"
              fill="currentColor"
            />
            <circle cx="12" cy="12" r="1.6" fill="currentColor" />
          </svg>
          <span className="text-[10px] tracking-[0.36em] uppercase font-light">
            Wake Forest, NC
          </span>
        </div>
      </div>
    </section>
  );
}
