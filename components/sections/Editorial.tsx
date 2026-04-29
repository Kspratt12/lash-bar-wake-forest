"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Editorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    let raf = 0;
    const photo = sec.querySelector<HTMLElement>("[data-bg]");
    const tick = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - (r.top + r.height) / (vh + r.height)));
      if (photo) photo.style.transform = `translate3d(0, ${(progress - 0.5) * 80}px, 0) scale(1.08)`;
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80svh] sm:h-[90svh] overflow-hidden"
    >
      <div data-bg className="absolute inset-[-6%] will-change-transform">
        <Image
          src="/images/cool-1.png"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A130C]/30 via-[#1A130C]/15 to-[#1A130C]/55" />

      <div className="relative h-full flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <div className="text-[11px] tracking-[0.4em] uppercase text-cardtan font-medium">
            Wake Forest, NC · By Appointment
          </div>
          <p className="mt-7 font-display italic text-cream text-[clamp(2.2rem,5.5vw,5.2rem)] leading-[1.08] tracking-[-0.015em] font-light">
            Soft life starts with effortless beauty.
          </p>
        </div>
      </div>
    </section>
  );
}
