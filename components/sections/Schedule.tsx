"use client";

import { useState } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type Service = {
  name: string;
  duration: string;
  price: string;
  description?: string;
  category: "Sets" | "Fills" | "Add-ons";
};

const SERVICES: Service[] = [
  {
    name: "Lash Extension Full Set",
    duration: "1 hr",
    price: "$135",
    description: "Custom-mapped Classic, Hybrid, or Volume. With commitment for fill ins.",
    category: "Sets",
  },
  {
    name: "Foreign Fill",
    duration: "1 hr",
    price: "$100",
    description: "Refresh of lashes applied at another studio.",
    category: "Fills",
  },
  {
    name: "Lash Fill — 2 Weeks",
    duration: "45 min",
    price: "$85",
    description: "Two-week fill to keep your set looking full.",
    category: "Fills",
  },
  {
    name: "Lash Fill — 3 Weeks",
    duration: "1 hr",
    price: "$100",
    description: "Three-week fill for a fresh, full look.",
    category: "Fills",
  },
  {
    name: "Lash Removal",
    duration: "30 min",
    price: "$50",
    description: "Safe removal of existing extensions.",
    category: "Add-ons",
  },
  {
    name: "Cluster Lashes",
    duration: "15 min",
    price: "$30",
    description: "Quick cluster application for a special event.",
    category: "Add-ons",
  },
  {
    name: "Lash Cluster Tutorial",
    duration: "10 min",
    price: "$15",
    description:
      "Step-by-step guide on applying lash clusters and your kit.",
    category: "Add-ons",
  },
];

const TABS = ["All", "Sets", "Fills", "Add-ons"] as const;

export default function Schedule() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");

  const filtered =
    tab === "All" ? SERVICES : SERVICES.filter((s) => s.category === tab);

  return (
    <section id="book" className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Online Booking</span>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Reserve your <span className="script-italic">glow.</span>
          </h2>
          <div className="section-divider center" />
          <p className="mt-8 text-ink-soft text-[17px] leading-[1.8] font-light">
            Real-time availability through Square. Slots open weekly — and
            yes, the good ones go fast.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pill ${tab === t ? "is-active" : ""}`}
              type="button"
            >
              {t === "All" ? "All Services" : t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {filtered.map((s) => (
            <article
              key={s.name}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-rule transition-all duration-500 hover:border-copper-300 hover:shadow-[0_30px_70px_-30px_rgba(155,113,72,0.35)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-[22px] sm:text-[26px] tracking-[-0.015em] leading-tight">
                    {s.name}
                  </h3>
                  {s.description && (
                    <p className="mt-2 text-ink-soft text-[14.5px] leading-[1.7] font-light max-w-md">
                      {s.description}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-ink">
                    {s.price}
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink-soft mt-1">
                    {s.duration}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-rule flex items-center justify-between">
                <div className="flex items-center gap-2 text-copper-700 text-[10px] tracking-[0.3em] uppercase font-semibold">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper-500" />
                  Booking open
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Reserve
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
