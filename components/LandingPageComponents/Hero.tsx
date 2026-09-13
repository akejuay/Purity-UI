import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/public/hero.jpg";
// import heroVideo from "@/assets/hero-video.mp4.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="./hero-video.mp4"
        preload="metadata"
        aria-label="Aerial journey over a turquoise Mediterranean bay"
      >
        {/* <source src={"./public/hero-video.mp4"} type="video/mp4" /> */}
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.2_0.06_258/0.72),oklch(0.2_0.06_258/0.35)_45%,oklch(0.2_0.06_258/0.82))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 sm:px-8 sm:pb-24">
        <div className="max-w-3xl">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/90">
            <MapPin className="size-3.5 text-accent" />
            180+ destinations, curated by people who go there
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.98] font-semibold text-primary-foreground">
            Explore the World.
            <br />
            <span className="text-accent">Create Your Story.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Discover unforgettable destinations, unique experiences, and
            beautiful places waiting to be explored.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#destinations"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-float transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Destinations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#experiences"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-white/10"
            >
              Plan Your Trip
            </a>
          </div>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {[
            ["180+", "Destinations"],
            ["2.4M", "Trips planned"],
            ["4.9", "Traveller rating"],
          ].map(([v, k]) => (
            <div key={k}>
              <dt className="sr-only">{k}</dt>
              <dd className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
                {v}
              </dd>
              <p className="mt-1 text-xs tracking-wide text-primary-foreground/60 uppercase">
                {k}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
