"use client";
import Footer from "./components/Footer";
import Hero from "./components/herosection";
import Schedule from "./components/schedule";
import TravelStay from "./components/travelandstay";
import FAQSection from "./components/FAQ";
import Contact from "./components/contact";
import RSVP from "./components/Rsvp";

export default function Home() {
  return (
    <main className='bg-[#FAF8F5] min-h-screen text-[#3b2f2f] w-full overflow-hidden'>
      <Hero />
      <Schedule />
      <TravelStay />
      <FAQSection />
      <Contact />
      <RSVP />
      <Footer />
    </main>
  );
}
