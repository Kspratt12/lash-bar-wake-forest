"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  { src: "/images/photo-2.png", alt: "Soft classic lash extension look", caption: "Classic" },
  { src: "/images/photo-4.png", alt: "Hybrid lash set", caption: "Hybrid" },
  { src: "/images/photo-5.png", alt: "Volume lash set", caption: "Volume" },
  { src: "/images/photo-6.png", alt: "Wispy lash set", caption: "Wispy" },
  { src: "/images/photo-8.png", alt: "Doll-eye lash set", caption: "Doll Eye" },
  { src: "/images/side.png", alt: "Close-up of a finished set", caption: "Up Close" },
  { src: "/images/photo-10.png", alt: "Studio detail", caption: "Studio" },
  { src: "/images/photo-11.png", alt: "Cat-eye lash set", caption: "Cat Eye" },
  { src: "/images/photo-13.png", alt: "Studio detail", caption: "Atelier" },
  { src: "/images/photo-14.png", alt: "Volume glam set", caption: "Glam" },
  { src: "/images/photo-15.png", alt: "Inside the studio", caption: "Wake Forest" },
];

const AUTOPLAY_MS = 4500;

export default function Lookbook() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const getSlideStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const slideEl = el.querySelector<HTMLElement>("[data-slide]");
    if (!slideEl) return el.clientWidth;
    return slideEl.offsetWidth + 16;
  }, []);

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getSlideStep();
    const idx = Math.round(el.scrollLeft / step);
    setActive(Math.min(SLIDES.length - 1, Math.max(0, idx)));
  }, [getSlideStep]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateActive();
    const onScroll = () => updateActive();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const step = getSlideStep();
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, getSlideStep]);

  // Vertical parallax on photos as the section scrolls through the viewport
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    let raf = 0;
    const tick = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - (r.top + r.height) / (vh + r.height)));
      const offset = (progress - 0.5) * 60; // -30..+30 px
      sec.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
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

  const scrollByOne = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * getSlideStep(), behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * getSlideStep(), behavior: "smooth" });
  };

  const canPrev = active > 0;
  const canNext = active < SLIDES.length - 1;

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="relative bg-copper-900 text-cream py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="text-[12px] tracking-[0.32em] uppercase text-cardtan font-medium">
              The Lookbook
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium max-w-2xl">
              Recent work.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] italic text-cardtan tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByOne(-1)}
              disabled={!canPrev}
              className={`w-11 h-11 rounded-full grid place-items-center transition-all ${
                canPrev
                  ? "bg-cream text-copper-900 hover:bg-cardtan"
                  : "bg-cream/15 text-cream/40 cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByOne(1)}
              disabled={!canNext}
              className={`w-11 h-11 rounded-full grid place-items-center transition-all ${
                canNext
                  ? "bg-cream text-copper-900 hover:bg-cardtan"
                  : "bg-cream/15 text-cream/40 cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="flex gap-4 pb-2 lookbook-rail">
          {SLIDES.map((s, i) => (
            <article
              key={s.src}
              data-slide
              className="snap-start shrink-0 w-[78vw] sm:w-[58vw] md:w-[44vw] lg:w-[32vw] xl:w-[28vw] max-w-[460px] group"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-cream/[0.06]">
                <div data-parallax className="absolute inset-0 will-change-transform">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="font-display italic text-cream text-[22px] tracking-[-0.005em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                    {s.caption}
                  </div>
                  <div className="font-display text-cream/70 text-[12px] tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 mt-8 flex items-center justify-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all ${
              i === active ? "w-8 bg-cream" : "w-3 bg-cream/30 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
