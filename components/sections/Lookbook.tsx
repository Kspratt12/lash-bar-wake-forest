"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  meta: string;
};

const SLIDES: Slide[] = [
  { src: "/images/photo-2.png", alt: "Classic lash extension look", caption: "Soft Classic", meta: "Natural · Everyday wear" },
  { src: "/images/photo-4.png", alt: "Hybrid lash set", caption: "Hybrid", meta: "Texture · Definition" },
  { src: "/images/photo-5.png", alt: "Volume lash set", caption: "Volume", meta: "Density · Statement" },
  { src: "/images/photo-6.png", alt: "Soft natural lash set", caption: "Wispy", meta: "Romantic · Light fan" },
  { src: "/images/photo-8.png", alt: "Custom lash mapping", caption: "Custom Mapped", meta: "Doll-eye style" },
  { src: "/images/photo-10.png", alt: "Studio detail", caption: "Studio", meta: "On the chair" },
  { src: "/images/photo-14.png", alt: "Hand-applied volume set", caption: "Volume Glam", meta: "Event-ready" },
  { src: "/images/photo-15.png", alt: "Boutique studio interior", caption: "Inside the Bar", meta: "Wake Forest, NC" },
];

export default function Lookbook() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slideEl = el.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = slideEl ? slideEl.offsetWidth + 16 : el.clientWidth;
    const idx = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(SLIDES.length - 1, Math.max(0, idx)));
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateState();
    const onScroll = () => updateState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slideEl = el.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = slideEl ? slideEl.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: dir * slideWidth, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slideEl = el.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = slideEl ? slideEl.offsetWidth + 16 : el.clientWidth;
    el.scrollTo({ left: i * slideWidth, behavior: "smooth" });
  };

  return (
    <section id="lookbook" className="relative bg-copper-900 text-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="text-[12px] tracking-[0.32em] uppercase text-cardtan font-medium">
              The Lookbook
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium max-w-2xl">
              Recent <span className="script-italic is-light">work.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] italic text-cardtan tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
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
              onClick={() => scrollBy(1)}
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
        style={{ scrollPaddingLeft: "calc((100vw - min(100vw - 32px, 1300px)) / 2 + 20px)" }}
      >
        <div className="flex gap-4 px-5 sm:px-8 pb-2" style={{ paddingLeft: "max(20px, calc((100vw - 1300px) / 2 + 32px))", paddingRight: "max(20px, calc((100vw - 1300px) / 2 + 32px))" }}>
          {SLIDES.map((s, i) => (
            <article
              key={s.src}
              data-slide
              className="snap-start shrink-0 w-[78vw] sm:w-[58vw] md:w-[44vw] lg:w-[32vw] xl:w-[28vw] max-w-[480px] group"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-cardcream">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div className="bg-cream/85 backdrop-blur-md rounded-2xl px-5 py-3.5 max-w-[75%]">
                    <div className="font-display text-[18px] tracking-[-0.005em] text-copper-900 leading-tight">
                      {s.caption}
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-ink-soft mt-1 font-medium">
                      {s.meta}
                    </div>
                  </div>
                  <div className="font-display italic text-cream text-[14px] bg-copper-900/60 backdrop-blur-md px-3 py-1.5 rounded-full tabular-nums">
                    {String(i + 1).padStart(2, "0")}
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
