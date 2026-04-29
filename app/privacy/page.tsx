import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { FilmGrain, MagneticInit, ScrollProgress } from "@/components/Atmosphere";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lash Bar Wake Forest handles personal information collected on our website and through bookings.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="mt-12 space-y-8 text-ink-soft text-[16px] leading-[1.85] font-light">
            <p>
              This page explains what information Lash Bar Wake Forest collects
              when you use this website and book an appointment. We keep this
              short on purpose because we collect very little.
            </p>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                What we collect on this website
              </h2>
              <p>
                Nothing personal. The site does not run a contact form, a
                newsletter sign-up, or any other input that captures your data.
                If we add basic visitor analytics in the future, it will only
                count anonymous page views and where visitors came from. No
                personal identifiers are stored by us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                What happens when you book
              </h2>
              <p>
                Bookings are handled by Square. When you tap any &ldquo;Book
                Appointment&rdquo; button you leave this site and complete your
                reservation directly with Square. The information you submit
                during booking, name, contact info, and payment details, is
                received and stored by Square according to{" "}
                <a
                  href="https://squareup.com/us/en/legal/general/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-700 underline underline-offset-4 hover:text-copper-900"
                >
                  Square&rsquo;s privacy policy
                </a>
                . We only receive what we need to confirm your appointment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                If you contact us directly
              </h2>
              <p>
                Emails sent to{" "}
                <a
                  href="mailto:Lashbarwakeforest@gmail.com"
                  className="text-copper-700 underline underline-offset-4 hover:text-copper-900"
                >
                  Lashbarwakeforest@gmail.com
                </a>{" "}
                or texts sent to (720) 402-9075 are stored only in our personal
                inboxes for the purpose of replying. We do not share or sell any
                contact information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Cookies
              </h2>
              <p>
                This site does not set tracking cookies. The map embed in the
                contact section is provided by Google and may set its own
                cookies; you can read{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-700 underline underline-offset-4 hover:text-copper-900"
                >
                  Google&rsquo;s privacy policy
                </a>{" "}
                for details on how those work.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[24px] tracking-[-0.005em] text-copper-900 mb-3 font-medium">
                Updates
              </h2>
              <p>
                If we ever change this policy we will update the date at the
                top of this page. For questions, email{" "}
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
