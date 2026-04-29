import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Footer() {
  return (
    <footer className="bg-copper-900 text-cream/80">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/lash-bar-wake-forest-logo.png"
            alt="Lash Bar Wake Forest"
            width={120}
            height={120}
            className="w-20 h-20 object-contain"
          />
          <div className="mt-5 font-display text-[26px] tracking-[-0.01em] text-cream">
            Lash Bar Wake Forest
          </div>
          <div className="mt-3 text-[11px] tracking-[0.4em] uppercase text-cream/55 font-medium">
            2000 S Main Street · Wake Forest, NC
          </div>

          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary magnetic mt-9"
            style={{ background: "var(--paper)", color: "var(--coffee-deep)" }}
          >
            Book Appointment
          </a>

          <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[12px] tracking-[0.22em] uppercase font-medium text-cream/65">
            <a href="#about" className="hover:text-cream transition">About</a>
            <a href="#book" className="hover:text-cream transition">Calendar</a>
            <a href="#pricing" className="hover:text-cream transition">Pricing</a>
            <a href="#lookbook" className="hover:text-cream transition">Lookbook</a>
            <a href="#contact" className="hover:text-cream transition">Visit</a>
          </nav>

          <div className="mt-9 flex items-center gap-2.5">
            <a href="https://www.instagram.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full grid place-items-center bg-cream/8 ring-1 ring-cream/20 text-cream/80 hover:bg-cream hover:text-copper-900 hover:ring-cream transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full grid place-items-center bg-cream/8 ring-1 ring-cream/20 text-cream/80 hover:bg-cream hover:text-copper-900 hover:ring-cream transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.04H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
              </svg>
            </a>
            <a href="mailto:Lashbarwakeforest@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full grid place-items-center bg-cream/8 ring-1 ring-cream/20 text-cream/80 hover:bg-cream hover:text-copper-900 hover:ring-cream transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="tel:+17204029075" aria-label="Phone" className="w-10 h-10 rounded-full grid place-items-center bg-cream/8 ring-1 ring-cream/20 text-cream/80 hover:bg-cream hover:text-copper-900 hover:ring-cream transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-[11px] tracking-[0.18em] uppercase text-cream/45 font-light">
          <div>© {new Date().getFullYear()} Lash Bar Wake Forest</div>
          <div>Wake Forest, NC</div>
        </div>
      </div>
    </footer>
  );
}
