import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Bento from "@/components/sections/Bento";
import Owner from "@/components/sections/Owner";
import Calendar from "@/components/sections/Calendar";
import About from "@/components/sections/About";
import Schedule from "@/components/sections/Schedule";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Lookbook from "@/components/sections/Lookbook";
import PullQuote from "@/components/sections/PullQuote";
import Testimonials from "@/components/sections/Testimonials";
import AreasServed from "@/components/sections/AreasServed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Bento />
      <Owner />
      <Calendar />
      <About />
      <Services />
      <Schedule />
      <Pricing />
      <Lookbook />
      <PullQuote />
      <Testimonials />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  );
}
