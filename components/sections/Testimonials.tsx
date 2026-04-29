type Review = {
  name: string;
  body: string;
};

const REVIEWS: Review[] = [
  {
    name: "Brittany R.",
    body:
      "My new go-to. Calming space, detailed work, and lashes that actually look like mine, just better. I leave every appointment feeling polished.",
  },
  {
    name: "Maddie K.",
    body:
      "First time getting extensions and I was nervous. The mapping process is incredible, my lashes feel like nothing, and I get compliments every day.",
  },
  {
    name: "Sara L.",
    body:
      "Switched after one set. Retention is unmatched. My fills last longer, the curl is gorgeous, and the whole vibe is luxe.",
  },
];

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

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-cream2 py-24 sm:py-32">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900 max-w-3xl">
          Words from <span className="script-italic">the chair.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="bg-cream rounded-[24px] p-8"
            >
              <Stars />
              <p className="mt-5 text-ink/85 text-[15.5px] leading-[1.75] font-light">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="mt-7 pt-5 border-t border-rule">
                <div className="font-display text-[18px] tracking-[-0.005em] text-copper-900">
                  {r.name}
                </div>
                <div className="text-ink-soft text-[12px] mt-0.5 font-light">
                  Google Review
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
