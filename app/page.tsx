import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Bento from "@/components/sections/Bento";
import About from "@/components/sections/About";
import Calendar from "@/components/sections/Calendar";
import Schedule from "@/components/sections/Schedule";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Lookbook from "@/components/sections/Lookbook";
import Testimonials from "@/components/sections/Testimonials";
import AreasServed from "@/components/sections/AreasServed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Bento />
      <About />
      <Services />
      <Calendar />
      <Schedule />
      <Pricing />
      <Lookbook />
      <Testimonials />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  );
}
