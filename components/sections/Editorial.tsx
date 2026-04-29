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
      if (photo) photo.style.transform = `translate3d(0, ${(progress - 0.5) * 90}px, 0) scale(1.1)`;
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
      className="relative h-[88svh] sm:h-[96svh] overflow-hidden bg-noir"
    >
      <div data-bg className="absolute inset-[-8%] will-change-transform">
        <Image
          src="/images/process.png"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-noir/65 via-noir/15 to-noir/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-noir/30" />

      <div className="relative h-full max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-rows-[auto_1fr_auto] py-12 sm:py-16">
        <div className="flex items-center justify-between text-bone/65 text-[10px] tracking-[0.4em] uppercase font-medium">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-bone/55" />
            <span>Lash Bar Wake Forest</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>Volume Two</span>
            <span className="w-6 h-px bg-bone/55" />
          </div>
        </div>

        <div className="self-end max-w-3xl">
          <div className="text-[10px] tracking-[0.4em] uppercase text-bone/55 font-medium">
            Issue · 01
          </div>
          <p className="mt-5 font-display text-bone text-[clamp(2.2rem,5.4vw,5.4rem)] leading-[1.06] tracking-[-0.018em] font-light">
            <span className="italic">Soft life</span> starts with
            <br />
            effortless <span className="italic">beauty.</span>
          </p>
        </div>

        <div className="flex items-end justify-between text-bone/55 text-[10px] tracking-[0.4em] uppercase font-medium">
          <div>2000 S Main St · Wake Forest, NC</div>
          <div className="hidden sm:block tabular-nums">02 / Editorial</div>
        </div>
      </div>
    </section>
  );
}
