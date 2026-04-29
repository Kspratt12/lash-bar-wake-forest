const ADDRESS = "2000 S Main Street, Wake Forest, NC";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900">
            Come say hi.
          </h2>

          <div className="mt-10 space-y-7 max-w-sm">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink-soft font-medium">Studio</div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 font-display text-[22px] tracking-[-0.005em] text-copper-900 hover:text-copper-700"
              >
                2000 S Main Street
                <br />
                Wake Forest, NC 27587
              </a>
              <div className="mt-1.5 text-ink-soft text-sm italic">By appointment only</div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink-soft font-medium">Text or Email</div>
              <a href="tel:+17204029075" className="block mt-2 font-display text-[22px] tracking-[-0.005em] text-copper-900 hover:text-copper-700">
                (720) 402-9075
              </a>
              <a href="mailto:Lashbarwakeforest@gmail.com" className="mt-1 block text-ink-soft text-[15px] hover:text-copper-700 break-all">
                Lashbarwakeforest@gmail.com
              </a>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink-soft font-medium">Follow</div>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/lashbarwakeforest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full grid place-items-center bg-cream ring-1 ring-rule text-copper-800 hover:bg-copper-900 hover:text-cream hover:ring-copper-900 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/lashbarwakeforest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full grid place-items-center bg-cream ring-1 ring-rule text-copper-800 hover:bg-copper-900 hover:text-cream hover:ring-copper-900 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.04H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.08 22 12.06z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Directions"
                  className="w-11 h-11 rounded-full grid place-items-center bg-cream ring-1 ring-rule text-copper-800 hover:bg-copper-900 hover:text-cream hover:ring-copper-900 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
                <a
                  href="mailto:Lashbarwakeforest@gmail.com"
                  aria-label="Email"
                  className="w-11 h-11 rounded-full grid place-items-center bg-cream ring-1 ring-rule text-copper-800 hover:bg-copper-900 hover:text-cream hover:ring-copper-900 transition-all"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary magnetic mt-2">
              Book Appointment
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[5/4] rounded-[28px] overflow-hidden ring-1 ring-rule">
            <iframe
              title="Map of Lash Bar Wake Forest"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "sepia(35%) saturate(70%) hue-rotate(-8deg) contrast(0.95) brightness(0.98)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{ background: "linear-gradient(135deg, rgba(155, 113, 72, 0.12), rgba(176, 136, 86, 0.08))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
