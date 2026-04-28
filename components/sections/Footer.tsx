import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <div className="lg:col-span-1">
          <Image
            src="/images/lash-bar-wake-forest-logo.png"
            alt="Lash Bar Wake Forest"
            width={160}
            height={160}
            className="w-24 h-24 object-contain"
          />
          <p className="mt-6 text-[15px] leading-[1.7] font-light text-white/65 max-w-xs">
            A boutique lash studio built around custom mapping, premium
            products, and time well spent.
          </p>
          <p className="mt-6 text-sm text-white/55 leading-relaxed">
            2000 S Main Street
            <br />
            Wake Forest, NC 27587
          </p>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.32em] font-semibold uppercase text-white/40">
            Studio
          </div>
          <ul className="mt-6 space-y-3.5 text-[15px] font-light">
            <li><a href="#book" className="hover:text-white transition">Book a Session</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#lookbook" className="hover:text-white transition">Lookbook</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.32em] font-semibold uppercase text-white/40">
            Connect
          </div>
          <ul className="mt-6 space-y-3.5 text-[15px] font-light">
            <li>
              <a href="https://www.instagram.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:Lashbarwakeforest@gmail.com" className="hover:text-white transition">
                Email
              </a>
            </li>
            <li>
              <a href="tel:+17204029075" className="hover:text-white transition">
                (720) 402-9075
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.32em] font-semibold uppercase text-white/40">
            Ready to glow?
          </div>
          <p className="mt-5 text-[15px] leading-[1.7] font-light text-white/70 max-w-xs">
            Real-time availability is open through Square. Slots fill fast —
            secure yours.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-primary"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/45 font-light">
          <div>© {new Date().getFullYear()} Lash Bar Wake Forest. All rights reserved.</div>
          <div>Wake Forest, North Carolina</div>
        </div>
      </div>
    </footer>
  );
}
