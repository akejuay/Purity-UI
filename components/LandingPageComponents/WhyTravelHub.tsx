import { Globe2, Sparkles, Route } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: Globe2,
    title: "Discover amazing places",
    text: "Browse destinations chosen by locals and seasoned travellers — not by an algorithm chasing clicks.",
  },
  {
    icon: Sparkles,
    title: "Find unique experiences",
    text: "Sunrise hikes, harbour kitchens, quiet museums. The moments that make a trip worth retelling.",
  },
  {
    icon: Route,
    title: "Plan unforgettable trips",
    text: "Build your route, keep everything in one place, and travel with a plan that still leaves room to wander.",
  },
];

export function WhyTravelHub() {
  return (
    <section id="experiences" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Why TravelHub
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold">
              Built for the way people actually travel
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 110}>
                <div className="group h-full rounded-3xl bg-card p-8 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent-foreground transition-colors duration-500 group-hover:bg-accent">
                    <b.icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
