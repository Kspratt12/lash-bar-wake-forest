"use client";

import Reveal from "@/components/Reveal";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type Slot = {
  time: string;
  service: string;
  duration: string;
  price: string;
  status: "open" | "few" | "waitlist";
};

const SCHEDULE: Record<string, Slot[]> = {
  "0": [
    { time: "9:00 AM", service: "Full Set", duration: "1 hr", price: "$135", status: "open" },
    { time: "11:00 AM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "few" },
    { time: "1:30 PM", service: "Foreign Fill", duration: "1 hr", price: "$100", status: "open" },
    { time: "4:00 PM", service: "Full Set", duration: "1 hr", price: "$135", status: "waitlist" },
  ],
  "1": [
    { time: "10:00 AM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "open" },
    { time: "12:00 PM", service: "Full Set", duration: "1 hr", price: "$135", status: "open" },
    { time: "3:00 PM", service: "3-Week Fill", duration: "1 hr", price: "$100", status: "few" },
  ],
  "2": [
    { time: "9:30 AM", service: "Full Set", duration: "1 hr", price: "$135", status: "few" },
    { time: "11:30 AM", service: "Foreign Fill", duration: "1 hr", price: "$100", status: "open" },
    { time: "2:00 PM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "open" },
    { time: "5:00 PM", service: "Cluster Lashes", duration: "15 min", price: "$30", status: "open" },
  ],
  "3": [
    { time: "10:00 AM", service: "Full Set", duration: "1 hr", price: "$135", status: "waitlist" },
    { time: "1:00 PM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "open" },
    { time: "3:30 PM", service: "Lash Removal", duration: "30 min", price: "$50", status: "open" },
  ],
  "4": [
    { time: "9:00 AM", service: "Full Set", duration: "1 hr", price: "$135", status: "open" },
    { time: "11:30 AM", service: "Foreign Fill", duration: "1 hr", price: "$100", status: "few" },
    { time: "2:30 PM", service: "3-Week Fill", duration: "1 hr", price: "$100", status: "open" },
    { time: "5:00 PM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "open" },
  ],
  "5": [
    { time: "10:00 AM", service: "Full Set", duration: "1 hr", price: "$135", status: "few" },
    { time: "12:30 PM", service: "2-Week Fill", duration: "45 min", price: "$85", status: "few" },
  ],
  "6": [
    { time: "By request", service: "Sundays open by request", duration: "", price: "", status: "open" },
  ],
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function statusLabel(s: Slot["status"]) {
  if (s === "open") return { label: "Open", color: "text-cardtan", dot: "bg-cardtan", pulse: true };
  if (s === "few") return { label: "A few left", color: "text-cream", dot: "bg-cream", pulse: true };
  return { label: "Waitlist", color: "text-cream/55", dot: "bg-cream/45", pulse: false };
}

export default function Calendar() {
  const week = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        day: DAYS[d.getDay()],
        date: d.getDate(),
        month: MONTHS[d.getMonth()],
        index: i,
      };
    });
  }, []);

  const [selected, setSelected] = useState(0);
  const slots = SCHEDULE[String(selected)] ?? [];

  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const measure = () => {
    const root = tabsRef.current;
    if (!root) return;
    const btn = root.querySelector<HTMLElement>(`[data-day-index="${selected}"]`);
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const rootR = root.getBoundingClientRect();
    setIndicator({
      left: r.left - rootR.left + root.scrollLeft,
      width: r.width,
      opacity: 1,
    });
  };

  useLayoutEffect(measure, [selected]);
  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="book"
      className="relative bg-copper-900 text-cream py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(220, 192, 154, 0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="text-[12px] tracking-[0.32em] uppercase text-cardtan font-medium">
              The Calendar
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.02] tracking-[-0.025em] font-medium max-w-2xl">
              This week at the studio.
            </h2>
            <p className="mt-4 text-cream/70 text-[15.5px] font-light max-w-md">
              A preview of a typical week. Tap any time to reserve live on Square.
            </p>
          </div>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream text-copper-900 font-medium text-[13px] hover:bg-cardtan transition self-start sm:self-end"
          >
            Open Full Calendar
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 no-scrollbar">
            <div ref={tabsRef} className="relative flex gap-2 min-w-max sm:min-w-0 sm:grid sm:grid-cols-7">
              <div
                aria-hidden
                className="absolute top-0 bottom-0 rounded-2xl bg-cream transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] pointer-events-none"
                style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
              />
              {week.map((d) => {
                const active = d.index === selected;
                return (
                  <button
                    key={d.index}
                    type="button"
                    data-day-index={d.index}
                    onClick={() => setSelected(d.index)}
                    className={`relative z-10 px-5 sm:px-3 py-4 rounded-2xl text-center transition-colors duration-500 ${
                      active ? "text-copper-900" : "text-cream hover:bg-cream/5"
                    }`}
                  >
                    <div className={`text-[10px] tracking-[0.28em] uppercase font-medium ${active ? "text-copper-700" : "text-cream/55"}`}>
                      {d.day}
                    </div>
                    <div className="font-display text-[26px] tracking-[-0.01em] mt-1 leading-none">
                      {d.date}
                    </div>
                    <div className={`text-[10px] tracking-[0.18em] uppercase mt-1 ${active ? "text-copper-700" : "text-cream/55"}`}>
                      {d.month}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div key={selected} className="mt-10 grid md:grid-cols-2 gap-3.5">
          {slots.map((s, i) => {
            const st = statusLabel(s.status);
            return (
              <a
                key={`${selected}-${i}`}
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ["--i" as string]: i }}
                className="slot-in group relative bg-cream/[0.06] backdrop-blur-sm rounded-[22px] p-6 flex items-center justify-between gap-5 ring-1 ring-cream/15 transition-all duration-500 hover:bg-cream/[0.12] hover:ring-cream/30 hover:-translate-y-0.5 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(245, 237, 226, 0.08) 50%, transparent 70%)",
                  }}
                />
                <div className="relative min-w-0">
                  <div className="font-display text-[15px] italic text-cardtan">
                    {s.time}
                  </div>
                  <div className="font-display text-[24px] tracking-[-0.01em] text-cream leading-tight mt-0.5">
                    {s.service}
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-cream/65 font-light">
                    {s.duration && <span>{s.duration}</span>}
                    {s.price && (
                      <>
                        <span aria-hidden className="text-cream/25">·</span>
                        <span>{s.price}</span>
                      </>
                    )}
                    <span aria-hidden className="text-cream/25">·</span>
                    <span className={`inline-flex items-center gap-1.5 ${st.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${st.dot} ${st.pulse ? "pulse-dot" : ""}`} />
                      {st.label}
                    </span>
                  </div>
                </div>
                <div className="relative shrink-0 w-11 h-11 rounded-full bg-cream text-copper-900 grid place-items-center transition-transform duration-500 group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
