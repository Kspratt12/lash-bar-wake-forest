import Image from "next/image";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    title: "Custom mapping",
    body: "Every set is shaped to your eye, not a stencil. We map style, length, and lift to flatter your face.",
  },
  {
    title: "Pro-grade lashes",
    body: "Cruelty-free, weightless lashes paired with lash-safe adhesive. Built to hold, gentle to wear.",
  },
  {
    title: "Quiet hour",
    body: "One client at a time. Soft music, dim lighting, no rush. The studio belongs to you for the hour.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-noir text-bone py-24 sm:py-36 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 85% 15%, rgba(220, 192, 154, 0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        <Reveal className="lg:col-span-5 flex flex-col">
          <h2 className="font-display text-[clamp(2.6rem,5.4vw,5.4rem)] leading-[0.98] tracking-[-0.025em] font-medium">
            A small studio.
            <br />
            A lot of detail.
          </h2>

          <div className="mt-auto pt-12">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-[2px] overflow-hidden">
              <Image
                src="/images/photo-9.png"
                alt="Lashes detail at Lash Bar Wake Forest"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7 lg:pl-8">
          <div className="hidden lg:block h-px bg-gradient-to-r from-bone/25 to-transparent mb-10" />

          <ul className="divide-y divide-bone/10">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className="group py-9 first:pt-0 grid grid-cols-[auto_1fr] gap-7 lg:gap-10 transition-colors duration-500"
              >
                <div className="font-display italic text-cardtan/70 text-[26px] leading-none pt-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.4rem)] tracking-[-0.015em] font-medium leading-tight transition-transform duration-500 group-hover:translate-x-1">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-bone/65 text-[16px] leading-[1.8] font-light max-w-lg">
                    {f.body}
                  </p>
                  <div className="mt-5 h-px w-12 bg-cardtan/40 transition-all duration-500 group-hover:w-24 group-hover:bg-cardtan" />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
