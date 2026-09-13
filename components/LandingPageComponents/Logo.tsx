import { Compass, Plane } from "lucide-react";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-xl ${
          tone === "light"
            ? "bg-accent text-accent-foreground"
            : "surface-deep text-primary-foreground"
        }`}
      >
        <Plane className="size-5" aria-hidden="true" />
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          tone === "light" ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        Travel<span className="text-accent">Hub</span>
      </span>
    </span>
  );
}
