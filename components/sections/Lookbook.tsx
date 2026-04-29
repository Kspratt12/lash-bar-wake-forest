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

const AUTOPLAY_MS = 8000;

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

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    let raf = 0;
    const tick = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - (r.top + r.height) / (vh + r.height)));
      const offset = (progress - 0.5) * 60;
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
      className="relative bg-bone text-noir py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.025em] font-medium max-w-2xl">
              Recent work.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] italic text-noir/55 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByOne(-1)}
              disabled={!canPrev}
              className={`w-11 h-11 rounded-full grid place-items-center transition-all ${
                canPrev
                  ? "bg-noir text-bone hover:bg-noir/85"
                  : "bg-noir/8 text-noir/30 cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
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
                  ? "bg-noir text-bone hover:bg-noir/85"
                  : "bg-noir/8 text-noir/30 cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
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
              <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-noir/[0.04]">
                <div data-parallax className="absolute inset-0 will-change-transform">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div className="font-display text-[20px] tracking-[-0.005em] text-noir">
                  {s.caption}
                </div>
                <div className="font-display italic text-noir/40 text-[13px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 mt-10">
        <button
          type="button"
          aria-label="Lookbook progress"
          onClick={() => goTo((active + 1) % SLIDES.length)}
          className="block w-full h-px bg-noir/15 relative overflow-hidden"
        >
          <span
            className="absolute inset-y-0 left-0 bg-noir transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ width: `${((active + 1) / SLIDES.length) * 100}%` }}
          />
        </button>
      </div>
    </section>
  );
}
