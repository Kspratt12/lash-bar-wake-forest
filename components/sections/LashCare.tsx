import Image from "next/image";

const TIPS = [
  {
    title: "Cleanse daily.",
    body:
      "A foaming lash shampoo every morning keeps oil and makeup off the bond. Clean lashes hold longer.",
  },
  {
    title: "Avoid oil-based makeup.",
    body:
      "Mascara, foundation, and remover with oil break down adhesive. Lash-safe products only.",
  },
  {
    title: "No high heat near the lash line.",
    body:
      "Hair dryers and steam can curl extensions. Direct heat away from the eyes.",
  },
  {
    title: "Sleep on your back when you can.",
    body:
      "Friction is the fastest way to lose retention. A silk pillowcase helps.",
  },
];

export default function LashCare() {
  return (
    <section className="relative bg-cream py-28 sm:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">Lash Care</span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] font-medium">
            Did you know
            <br />
            <span className="script-italic">these little things…</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-8 text-ink-soft text-[17px] leading-[1.8] font-light max-w-md">
            Retention is half product, half routine. A few small habits will
            keep your set looking fresh long after you leave the studio.
          </p>

          <ul className="mt-10 space-y-7 max-w-md">
            {TIPS.map((tip, i) => (
              <li key={tip.title} className="flex gap-5">
                <div className="font-display text-2xl text-copper-700 tracking-[-0.02em] w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-lg tracking-[-0.01em]">{tip.title}</div>
                  <p className="mt-1 text-ink-soft text-[15px] leading-[1.7] font-light">
                    {tip.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] w-full rounded-[28px] overflow-hidden bg-white shadow-[0_30px_80px_-40px_rgba(26,19,12,0.4)] ring-1 ring-rule">
              <Image
                src="/images/did-you-know.png"
                alt="Lash care guide — what these products do to your lashes"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
