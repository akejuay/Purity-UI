import { Destinations } from "@/components/LandingPageComponents/Destination";
import { FinalCTA } from "@/components/LandingPageComponents/FinalCTA";
import { Footer } from "@/components/LandingPageComponents/Footer";
import { Hero } from "@/components/LandingPageComponents/Hero";
import { Navbar } from "@/components/LandingPageComponents/NavBar";
import { Preloader } from "@/components/LandingPageComponents/Preloader";
import { WhyTravelHub } from "@/components/LandingPageComponents/WhyTravelHub";

export function Index() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <WhyTravelHub />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
