"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`petal-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.4], rootMargin: "-96px 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/92 backdrop-blur-xl shadow-[0_1px_0_0_rgba(220,201,172,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 h-20 sm:h-24 grid grid-cols-[auto_1fr_auto] sm:grid-cols-3 items-center gap-4">
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                active === item.href
                  ? "bg-cardtan text-copper-700"
                  : "text-ink-soft hover:text-copper-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link href="#home" className="flex items-center justify-self-start lg:justify-self-center gap-2.5" aria-label="Lash Bar Wake Forest home">
          <Image
            src="/images/lash-bar-wake-forest-logo.png"
            alt="Lash Bar Wake Forest"
            width={120}
            height={120}
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
            priority
          />
          <span className="font-display text-[20px] sm:text-[24px] tracking-[-0.01em] text-copper-800 leading-tight">
            Lash Bar
            <span className="hidden sm:inline"> Wake Forest</span>
          </span>
        </Link>

        <div className="hidden lg:block justify-self-end">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            <span className="petal-bg">
              <Petal />
            </span>
            Book Appointment
          </a>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="lg:hidden justify-self-end w-11 h-11 grid place-items-center rounded-full border border-rule text-ink hover:border-copper-500 transition"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-xl border-t border-rule">
          <div className="px-7 py-7 flex flex-col gap-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-ink/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full justify-start"
              onClick={() => setOpen(false)}
            >
              <span className="petal-bg">
                <Petal />
              </span>
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
