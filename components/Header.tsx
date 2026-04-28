"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/92 backdrop-blur-xl shadow-[0_1px_0_0_rgba(229,217,197,0.7)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-20 sm:h-24 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3.5 group" aria-label="Lash Bar Wake Forest home">
          <Image
            src="/images/lash-bar-wake-forest-logo.png"
            alt="Lash Bar Wake Forest"
            width={120}
            height={120}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
            priority
          />
          <span className="hidden sm:inline-block text-[10px] tracking-[0.42em] font-medium uppercase text-copper-700">
            Wake&nbsp;Forest, NC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.3em] font-medium text-ink/75 hover:text-copper-700 uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Now
          </a>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-rule text-ink hover:border-copper-500 transition"
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
                className="text-[12px] tracking-[0.3em] font-medium uppercase text-ink/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
