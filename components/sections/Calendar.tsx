"use client";

import Reveal from "@/components/Reveal";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function Calendar() {
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
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(220, 192, 154, 0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8">
        <Reveal className="text-center">
          <Petal className="text-cardtan mx-auto" />
          <div className="mt-5 text-[11px] tracking-[0.4em] uppercase text-cardtan font-medium">
            Live Booking · Square
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,5.6vw,5.4rem)] leading-[1] tracking-[-0.025em] font-medium">
            Book your
            <br />
            appointment.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-cream/70 text-[16px] sm:text-[17px] leading-[1.85] font-light max-w-xl mx-auto text-center">
            Real-time availability lives on Square. Pick a service, pick a time
            that fits, get an automatic confirmation. The studio will see you
            from there.
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-12 flex justify-center">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-cream text-copper-900 font-medium text-[13px] tracking-[0.02em] hover:bg-cardtan transition-all"
          >
            Open Full Calendar
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={320} className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-cardtan/85 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-medium">
          <span>Same-Day Confirmation</span>
          <Petal className="!w-2 !h-2" />
          <span>Text Reminders</span>
          <Petal className="!w-2 !h-2" />
          <span>Cancel or Reschedule Anytime</span>
        </Reveal>
      </div>
    </section>
  );
}
