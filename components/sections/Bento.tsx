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
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Bento() {
  return (
    <section className="relative bg-cream py-20 sm:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="md:row-span-2 card-tan p-3 flex flex-col">
            <div className="relative flex-1 rounded-[22px] overflow-hidden min-h-[460px]">
              <Image
                src="/images/photo-9.png"
                alt="A finished lash set"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 pt-5 pb-3">
              <div className="font-display text-[26px] tracking-[-0.01em] text-copper-900 leading-tight">
                Real lashes,
                <br />
                real clients.
              </div>
            </div>
          </article>

          <article className="card-tan p-7 flex flex-col justify-between min-h-[220px]">
            <div className="font-display text-[64px] sm:text-[72px] leading-[0.95] tracking-[-0.025em] text-copper-900">
              5.0
            </div>
            <div>
              <Stars />
              <div className="mt-2.5 text-copper-700 text-[14px] font-light">
                Google rated by every client
              </div>
            </div>
          </article>

          <article className="card-tan p-7 flex flex-col justify-center text-center min-h-[220px]">
            <div className="relative h-14 w-32 mx-auto">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 w-14 h-14 rounded-full ring-2 ring-cardtan overflow-hidden"
                  style={{ left: `${i * 30}px`, zIndex: 3 - i }}
                >
                  <Image
                    src={`/images/photo-${[2, 4, 6][i]}.png`}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <h3 className="mt-6 font-display text-[22px] tracking-[-0.01em] text-copper-900 leading-tight">
              Custom mapped to you.
            </h3>
          </article>

          <article className="card-tan p-3">
            <div className="relative aspect-[16/9] rounded-[22px] overflow-hidden">
              <Image
                src="/images/photo-7.png"
                alt="Inside the studio"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 pt-5 pb-3 flex items-end justify-between">
              <h3 className="font-display text-[24px] tracking-[-0.01em] text-copper-900 leading-tight">
                Inside the studio.
              </h3>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
              >
                <span className="petal-bg">
                  <Petal />
                </span>
                Book
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
