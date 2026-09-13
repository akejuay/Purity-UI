import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import ctaImg from "@/public/cta.jpg";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-card">
          <Image
            src={ctaImg}
            alt="Coastal road winding between turquoise water and sand dunes at twilight"
            loading="lazy"
            width={1920}
            height={900}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.2_0.06_258/0.88),oklch(0.2_0.06_258/0.5))]" />
          <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.03] font-semibold text-primary-foreground">
              Your next adventure starts here.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              Start exploring destinations that will make your next trip
              unforgettable.
            </p>
            <a
              href="#destinations"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-float transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore TravelHub
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
