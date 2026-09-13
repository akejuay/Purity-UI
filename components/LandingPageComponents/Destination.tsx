import { ArrowUpRight } from "lucide-react";
import santorini from "@/public/santorini.jpg";
import dubai from "@/public/dubai.jpg";
import bali from "@/public/bali.jpg";
import capetown from "@/public/capetown.jpg";
import Image from "next/image";
import { Reveal } from "./Reveal";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: santorini,
    alt: "Blue-domed churches above the caldera in Santorini at sunset",
    text: "Cliffside villages, slow sunsets over the caldera, and long dinners above the Aegean.",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: dubai,
    alt: "Dubai skyline reflected in calm water at dusk",
    text: "Desert dunes at dawn, sky-high views at dusk, and a city that never quite settles.",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: bali,
    alt: "Misty green rice terraces and palm trees in Bali",
    text: "Rice terraces in morning mist, warm surf breaks, and temples tucked into the green.",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    image: capetown,
    alt: "Table Mountain above the Atlantic coastline at golden hour",
    text: "Mountain trails that end at the ocean, coastal drives, and vineyards an hour away.",
  },
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Featured
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold">
              Discover Your Next Destination
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Four places our travellers keep coming back to — each one
            hand-picked and worth the flight.
          </p>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d, i) => (
          <li key={d.name}>
            <Reveal delay={i * 90}>
              <article className="group relative h-[26rem] overflow-hidden rounded-3xl shadow-card lg:h-[30rem]">
                <Image
                  src={d.image}
                  alt={d.alt}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.2_0.06_258/0.9),oklch(0.2_0.06_258/0.15)_55%,transparent)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs tracking-[0.2em] text-accent uppercase">
                    {d.country}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-semibold text-primary-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-primary-foreground/80 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-32 group-hover:opacity-100 group-focus-within:max-h-32 group-focus-within:opacity-100">
                    {d.text}
                  </p>
                </div>
                <span className="glass-dark absolute top-5 right-5 grid size-10 place-items-center rounded-full text-primary-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
