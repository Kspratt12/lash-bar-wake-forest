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
            Come <span className="script-italic">say hi.</span>
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
              <a
                href="https://www.instagram.com/lashbarwakeforest/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 font-display text-[22px] tracking-[-0.005em] text-copper-900 hover:text-copper-700"
              >
                @lashbarwakeforest
              </a>
            </div>

            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              Book Appointment
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[5/4] rounded-[28px] overflow-hidden">
            <iframe
              title="Map of Lash Bar Wake Forest"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
