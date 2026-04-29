"use client";

import { useMemo, useState } from "react";

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
  if (s === "open") return { label: "Open", color: "text-copper-700", dot: "bg-copper-500" };
  if (s === "few") return { label: "A few left", color: "text-copper-800", dot: "bg-copper-700" };
  return { label: "Waitlist", color: "text-ink-soft", dot: "bg-ink-soft" };
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

  return (
    <section id="book" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-2xl">
              This week at <span className="script-italic">Lash Bar.</span>
            </h2>
            <p className="mt-4 text-ink-soft text-[15.5px] font-light max-w-md">
              Slots are pulled from Square. Tap a time to reserve in real time.
            </p>
          </div>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start sm:self-end"
          >
            Open Full Calendar
          </a>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 no-scrollbar">
          <div className="flex gap-2 min-w-max sm:min-w-0 sm:grid sm:grid-cols-7">
            {week.map((d) => {
              const active = d.index === selected;
              return (
                <button
                  key={d.index}
                  type="button"
                  onClick={() => setSelected(d.index)}
                  className={`px-5 sm:px-3 py-4 rounded-2xl text-center transition-all ${
                    active
                      ? "bg-copper-900 text-cream"
                      : "bg-cardcream text-copper-900 hover:bg-cardtan"
                  }`}
                >
                  <div className={`text-[10px] tracking-[0.28em] uppercase font-medium ${active ? "text-cream/70" : "text-ink-soft"}`}>
                    {d.day}
                  </div>
                  <div className="font-display text-[24px] tracking-[-0.01em] mt-1 leading-none">
                    {d.date}
                  </div>
                  <div className={`text-[10px] tracking-[0.18em] uppercase mt-1 ${active ? "text-cream/70" : "text-ink-soft"}`}>
                    {d.month}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-3.5">
          {slots.map((s, i) => {
            const st = statusLabel(s.status);
            return (
              <a
                key={`${selected}-${i}`}
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cardcream rounded-[20px] p-6 flex items-center justify-between gap-5 hover:bg-cardtan transition-colors"
              >
                <div className="min-w-0">
                  <div className="font-display text-[15px] italic text-copper-700">
                    {s.time}
                  </div>
                  <div className="font-display text-[24px] tracking-[-0.01em] text-copper-900 leading-tight mt-0.5">
                    {s.service}
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[12.5px] text-ink-soft font-light">
                    {s.duration && <span>{s.duration}</span>}
                    {s.price && (
                      <>
                        <span aria-hidden className="text-rule">·</span>
                        <span>{s.price}</span>
                      </>
                    )}
                    <span aria-hidden className="text-rule">·</span>
                    <span className={`inline-flex items-center gap-1.5 ${st.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                      {st.label}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-copper-900 text-cream grid place-items-center group-hover:bg-copper-800 transition-colors">
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
