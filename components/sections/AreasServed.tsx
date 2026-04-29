import Image from "next/image";

const AREAS = [
  "Wake Forest",
  "Rolesville",
  "Youngsville",
  "North Raleigh",
  "Wakefield",
  "Heritage",
  "Forestville",
];

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg className={`inline-block w-3 h-3 align-middle text-copper-500 mx-3 ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2c1.5 3 3 4.5 6 6-3 1.5-4.5 3-6 6-1.5-3-3-4.5-6-6 3-1.5 4.5-3 6-6z" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function AreasServed() {
  return (
    <section id="areas" className="relative bg-cream py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900">
            Clients from all over the north end.
          </h2>
          <p className="mt-7 text-ink-soft text-[16.5px] leading-[1.85] font-light max-w-md">
            The studio is on S Main Street in Wake Forest, easy off Capital
            Boulevard. Easy parking, by appointment only.
          </p>

          <p className="mt-10 font-display italic text-copper-800 text-[clamp(1.4rem,2.2vw,1.85rem)] leading-[1.6] tracking-[-0.005em] max-w-lg">
            {AREAS.map((a, i) => (
              <span key={a}>
                {a}
                {i < AREAS.length - 1 && <Petal />}
              </span>
            ))}
          </p>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative aspect-[5/6] w-full rounded-[28px] overflow-hidden">
            <Image
              src="/images/cool-1.png"
              alt="Lash extensions close-up"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
