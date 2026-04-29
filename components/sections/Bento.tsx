import Image from "next/image";

const BOOK_URL =
  "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services";

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg className={`petal-icon ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-copper-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Bento() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Why Lash Bar</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em] font-medium">
            A boutique studio,
            <br />
            <span className="script-italic">tailored to you.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* CARD 1 — large feature with caption overlay (real result) */}
          <article className="md:row-span-2 card-tan p-3 flex flex-col">
            <div className="relative flex-1 rounded-[22px] overflow-hidden min-h-[420px]">
              <Image
                src="/images/photo-9.png"
                alt="A finished lash set at Lash Bar Wake Forest"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 rounded-full bg-cream/90 text-copper-700 text-[10px] font-medium tracking-[0.18em] uppercase backdrop-blur-sm">
                  Before
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cream/90 text-copper-700 text-[10px] font-medium tracking-[0.18em] uppercase backdrop-blur-sm">
                  After
                </span>
              </div>
            </div>
            <div className="px-4 pt-5 pb-3">
              <div className="font-display text-[24px] tracking-[-0.01em] text-copper-800">
                Real results, real clients
              </div>
              <div className="mt-3 flex items-center gap-4 text-copper-700 text-[12.5px]">
                <span className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  3 weeks
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Petal className="text-copper-600" />
                  Hybrid set
                </span>
              </div>
            </div>
          </article>

          {/* CARD 2 — Seamless client experience */}
          <article className="card-tan p-3">
            <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden">
              <Image
                src="/images/photo-7.png"
                alt="Inside the studio"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 pt-5 pb-3">
              <h3 className="font-display text-[24px] tracking-[-0.01em] text-copper-800 leading-tight">
                A seamless<br />client experience.
              </h3>
            </div>
          </article>

          {/* CARD 3 — stats with watermark */}
          <article className="relative card-tan p-7 overflow-hidden">
            <div className="relative">
              <div className="font-display text-[64px] sm:text-[80px] leading-[0.95] tracking-[-0.025em] text-copper-800">
                5★
              </div>
              <div className="mt-2 text-copper-700 text-[14px] font-light">
                Google rated by every client
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="chip">2,000+ Lashes Set</span>
                <span className="chip">7 Services</span>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-3 right-2 font-display italic text-[64px] sm:text-[80px] leading-none tracking-[-0.025em] text-copper-800/12 select-none pointer-events-none whitespace-nowrap"
            >
              Since day one
            </div>
          </article>

          {/* CARD 4 — tailored to your vision */}
          <article className="card-tan p-7 text-center flex flex-col items-center justify-center">
            <div className="relative h-16 w-32">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 w-16 h-16 rounded-full ring-2 ring-cream overflow-hidden"
                  style={{ left: `${i * 32}px`, zIndex: 3 - i }}
                >
                  <Image
                    src={`/images/photo-${[2, 4, 6][i]}.png`}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <h3 className="mt-7 font-display text-[24px] tracking-[-0.01em] text-copper-800 leading-tight">
              Tailored to your vision.
            </h3>
            <p className="mt-2.5 text-copper-700 text-[14px] leading-[1.65] font-light max-w-xs">
              Custom-mapped lash sets shaped to your eyes, your lifestyle, and
              the way you want to feel.
            </p>
          </article>

          {/* CARD 5 — reviews preview */}
          <article className="card-tan p-6 md:row-span-2 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <Stars />
              <span className="text-copper-800 font-display text-[28px] tracking-[-0.01em]">
                99%
              </span>
            </div>
            <p className="text-center text-copper-700 text-[13px] font-light">
              Recommend us to a friend
            </p>

            <div className="mt-3 bg-cream rounded-2xl p-5">
              <Stars />
              <p className="mt-3 text-ink/85 text-[14px] leading-[1.65] font-light">
                &ldquo;Lash Bar is my new go-to. Calming space, detailed work, and
                lashes that last.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-cardtan grid place-items-center text-copper-700 text-[11px] font-medium">
                  BR
                </div>
                <div className="text-[12px]">
                  <div className="font-medium text-ink">Brittany R.</div>
                  <div className="text-ink-soft">Google Review</div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-5">
              <Stars />
              <p className="mt-3 text-ink/85 text-[14px] leading-[1.65] font-light">
                &ldquo;Switched after one set. Retention is unmatched and the curl
                is gorgeous.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-cardtan grid place-items-center text-copper-700 text-[11px] font-medium">
                  SL
                </div>
                <div className="text-[12px]">
                  <div className="font-medium text-ink">Sara L.</div>
                  <div className="text-ink-soft">Google Review</div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 6 — FREE promo */}
          <article className="card-tan p-7 text-center flex flex-col items-center justify-center">
            <div className="px-3 py-1 rounded-full bg-cream text-copper-800 text-[11px] font-semibold tracking-[0.18em] uppercase">
              First Timer
            </div>
            <h3 className="mt-5 font-display text-[26px] tracking-[-0.01em] text-copper-800 leading-tight">
              Lash consult.
            </h3>
            <p className="mt-2 text-copper-700 text-[13px] leading-[1.65] font-light max-w-xs">
              Tell us your vision before your first set so we map it perfectly.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill mt-6"
            >
              <span className="petal-bg">
                <Petal />
              </span>
              Book Now
            </a>
          </article>

          {/* CARD 7 — large studio shot */}
          <article className="card-tan p-3 md:col-span-1">
            <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden">
              <Image
                src="/images/photo-12.png"
                alt="Studio detail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
