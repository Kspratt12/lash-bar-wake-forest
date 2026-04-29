import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

export default function Owner() {
  return (
    <section className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="text-[12px] tracking-[0.32em] uppercase text-copper-700 font-medium">
            The owner
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900">
            Hi, I&rsquo;m Julia.
          </h2>
          <p className="mt-7 text-ink-soft text-[16.5px] leading-[1.85] font-light max-w-md">
            I opened Lash Bar Wake Forest because I wanted a quieter space.
            Not a salon. Not a chain. Just one chair, one client, and the kind
            of attention that gives you lashes you don&rsquo;t have to fix
            between fills.
          </p>
          <p className="mt-5 text-ink-soft text-[16.5px] leading-[1.85] font-light max-w-md">
            Every set I do is mapped to your eye shape, your face, and the way
            you actually live. I would love to do yours.
          </p>

          <div className="mt-9 flex items-center gap-5">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary magnetic"
            >
              Book With Julia
            </a>
            <a
              href="https://www.instagram.com/lashbarwakeforest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper-700 text-[13px] underline underline-offset-4 decoration-copper-400 hover:text-copper-900 transition"
            >
              Follow my work
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden">
              <Image
                src="/images/Julia-Ross.png"
                alt="Julia, owner and lash artist at Lash Bar Wake Forest"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-7 -left-7 bg-copper-900 text-cream rounded-2xl px-7 py-5">
              <div className="text-[10px] tracking-[0.32em] uppercase text-cream/55 font-medium">
                Owner &amp; Lash Artist
              </div>
              <div className="font-display italic text-[28px] tracking-[-0.005em] mt-1">
                Julia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
