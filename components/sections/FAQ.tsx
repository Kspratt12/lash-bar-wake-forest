"use client";

import { useState } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Will it hurt?",
    a: "No. Most clients fall asleep during the appointment. Extensions attach to your existing lash, not your skin, and the adhesive stays well clear of the eye.",
  },
  {
    q: "How long does my appointment take?",
    a: "About an hour for a fill. Plan for around 75 to 90 minutes for your first full set so we can map your eye shape carefully.",
  },
  {
    q: "How long do the lashes last?",
    a: "Lashes shed on their own natural cycle, usually over three to four weeks. Most clients book a fill every two to three weeks to keep the look full.",
  },
  {
    q: "What is the difference between Classic, Hybrid, and Volume?",
    a: "Classic is one extension per natural lash, the most subtle look. Volume uses multiple ultra-fine extensions per lash for a fuller, softer density. Hybrid is a mix of both. I'll recommend the right style for your eye shape and lifestyle.",
  },
  {
    q: "Can I wear mascara?",
    a: "You don't need to, and please don't apply it directly to the extensions. If you want extra drama for an event, a lash-extension-safe mascara on the tips only is fine.",
  },
  {
    q: "What if I have sensitive eyes or allergies?",
    a: "I use a sensitive-formula, lash-safe adhesive. If you have a known sensitivity to adhesive or to past sets, mention it when you book and we'll patch test before the full appointment.",
  },
  {
    q: "How do I take care of them at home?",
    a: "Avoid oil-based products near the eyes, brush them daily with a clean spoolie, sleep on your back when you can, and never pick at them. You'll get a full aftercare guide after your first set.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Lash Bar is by appointment only. You can book online through Square anytime. Same-day appointments are available when the calendar allows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <div className="text-[10px] tracking-[0.4em] uppercase text-copper-700 font-medium mb-4">
            Before you book
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-2xl">
            Questions, <span className="italic font-light">answered.</span>
          </h2>
        </div>

        <ul className="border-t border-rule">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q} className="border-b border-rule">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-[1fr_auto] gap-6 py-7 text-left items-center group"
                >
                  <h3 className="font-display text-copper-900 text-[20px] sm:text-[24px] tracking-[-0.01em] leading-snug font-medium group-hover:text-copper-700 transition-colors">
                    {item.q}
                  </h3>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full grid place-items-center ring-1 ring-copper-400/50 text-copper-700 transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-copper-900 text-cream ring-copper-900" : "group-hover:ring-copper-700"
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-soft text-[15.5px] leading-[1.8] font-light max-w-2xl pb-7 pr-12">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 rounded-[24px] bg-cream2 ring-1 ring-rule px-7 sm:px-10 py-9 sm:py-10">
          <div className="text-[10px] tracking-[0.4em] uppercase text-copper-700 font-medium">
            Booking policy
          </div>
          <h3 className="mt-3 font-display text-copper-900 text-[24px] sm:text-[28px] tracking-[-0.01em] leading-snug font-medium">
            A small studio runs on respect for time.
          </h3>
          <div className="mt-5 grid sm:grid-cols-3 gap-6 text-ink-soft text-[14.5px] leading-[1.75] font-light">
            <div>
              <div className="font-display italic text-copper-700 text-[16px] mb-1">
                24-hour notice
              </div>
              Please cancel or reschedule at least 24 hours before your appointment so the slot can be reopened.
            </div>
            <div>
              <div className="font-display italic text-copper-700 text-[16px] mb-1">
                Late arrivals
              </div>
              Arriving more than 15 minutes late may shorten your service or require a reschedule, depending on the day.
            </div>
            <div>
              <div className="font-display italic text-copper-700 text-[16px] mb-1">
                No-shows
              </div>
              Same-day cancellations and no-shows are charged 50% of the service total before the next booking.
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary magnetic"
            >
              Book Appointment
            </a>
            <a
              href="mailto:Lashbarwakeforest@gmail.com"
              className="text-copper-700 text-[13px] underline underline-offset-4 decoration-copper-400 hover:text-copper-900 transition"
            >
              Still have a question?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
