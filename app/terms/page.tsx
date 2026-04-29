import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { FilmGrain, MagneticInit, ScrollProgress } from "@/components/Atmosphere";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the Lash Bar Wake Forest website and the services booked through it.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <FilmGrain />
      <MagneticInit />
      <Header />

      <section className="bg-cream pt-40 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-[11px] tracking-[0.4em] uppercase text-copper-700 font-medium">
            Last updated · April 2026
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.04] tracking-[-0.02em] font-medium text-copper-900">
            Terms of Service
          </h1>

          <div className="mt-12 space-y-8 text-ink-soft text-[16px] leading-[1.85] font-light">
            <p>
              These terms cover how you can use this website and the
              relationship between Lash Bar Wake Forest and our clients. Booking
              an appointment means you agree to what&rsquo;s here.
            </p>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                The website
              </h2>
              <p>
                This website is informational. Service descriptions and prices
                shown are accurate at the time of publication and may be updated
                without notice. The pricing in your Square confirmation is what
                applies to your appointment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Booking, cancellations, and reschedules
              </h2>
              <p>
                Appointments are reserved through Square. You can reschedule or
                cancel through the link in your Square confirmation email up
                until 24 hours before your appointment. Cancellations within 24
                hours, or no-shows, may incur a fee at our discretion. Late
                arrivals over 15 minutes may need to be rebooked.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Lash services
              </h2>
              <p>
                Lash extension results vary based on lash health, lifestyle, and
                aftercare. We use high-grade adhesives and cruelty-free
                products, and we offer modifications based on your eye shape and
                comfort. If anything feels off during your appointment, tell us.
                We want you to leave happy.
              </p>
              <p className="mt-4">
                We reserve the right to refuse service if we observe a condition
                that makes lash application unsafe for you or for us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Photos
              </h2>
              <p>
                We may take close-up photos of finished work for our portfolio
                and social media. These never include faces or identifying
                features unless you explicitly tell us it&rsquo;s okay.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Limitations
              </h2>
              <p>
                The site and our services are provided as-is. We&rsquo;re not
                responsible for outcomes outside our control, including allergic
                reactions to disclosed materials, results affected by improper
                aftercare, or third-party services such as Square or Google
                Maps.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Questions
              </h2>
              <p>
                Email{" "}
                <a
                  href="mailto:Lashbarwakeforest@gmail.com"
                  className="text-copper-700 underline underline-offset-4 hover:text-copper-900"
                >
                  Lashbarwakeforest@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
