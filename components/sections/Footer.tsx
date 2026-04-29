import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Footer() {
  return (
    <footer className="bg-copper-900 text-cream/80">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/lash-bar-wake-forest-logo.png"
              alt="Lash Bar Wake Forest"
              width={80}
              height={80}
              className="w-14 h-14 object-contain"
            />
            <div className="font-display text-[24px] tracking-[-0.01em] text-cream">
              Lash Bar
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-[1.75] font-light text-cream/65 max-w-sm">
            A small lash studio in Wake Forest. Custom-mapped sets, retention
            that holds, an hour you actually look forward to.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[11px] tracking-[0.32em] font-medium uppercase text-cream/45">
            Studio
          </div>
          <ul className="mt-5 space-y-2.5 text-[15px] font-light">
            <li><a href="#about" className="hover:text-cream transition">About</a></li>
            <li><a href="#book" className="hover:text-cream transition">Book</a></li>
            <li><a href="#pricing" className="hover:text-cream transition">Pricing</a></li>
            <li><a href="#lookbook" className="hover:text-cream transition">Lookbook</a></li>
            <li><a href="#contact" className="hover:text-cream transition">Visit</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-[11px] tracking-[0.32em] font-medium uppercase text-cream/45">
            Reach Out
          </div>
          <ul className="mt-5 space-y-2.5 text-[15px] font-light">
            <li>2000 S Main Street, Wake Forest, NC 27587</li>
            <li><a href="tel:+17204029075" className="hover:text-cream transition">(720) 402-9075</a></li>
            <li><a href="mailto:Lashbarwakeforest@gmail.com" className="hover:text-cream transition">Lashbarwakeforest@gmail.com</a></li>
            <li><a href="https://www.instagram.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">Instagram</a></li>
            <li><a href="https://www.facebook.com/lashbarwakeforest/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition">Facebook</a></li>
          </ul>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary magnetic mt-7">
            Book Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-[12px] text-cream/45 font-light">
          <div>© {new Date().getFullYear()} Lash Bar Wake Forest. All rights reserved.</div>
          <div>Wake Forest, NC</div>
        </div>
      </div>
    </footer>
  );
}
