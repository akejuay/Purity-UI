"use client";
import { useEffect, useState } from "react";
import { Compass } from "lucide-react";

export function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1500);
    const t2 = setTimeout(() => setGone(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`surface-deep fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-out ${
        leaving ? "-translate-y-3 opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
          <Compass className="size-7" />
        </span>
        <span className="font-display text-3xl font-semibold tracking-tight text-primary-foreground">
          Travel<span className="text-accent">Hub</span>
        </span>
      </div>

      <svg viewBox="0 0 240 60" className="h-14 w-60 overflow-visible">
        <path
          id="th-path"
          d="M10 46 C 70 4, 170 4, 230 40"
          fill="none"
          stroke="currentColor"
          className="text-primary-foreground/25"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M10 46 C 70 4, 170 4, 230 40"
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="2"
          strokeDasharray="260"
          strokeDashoffset="260"
          style={{
            animation: "th-dash 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        />
        <g
          className="text-primary-foreground"
          style={{
            offsetPath: 'path("M10 46 C 70 4, 170 4, 230 40")',
            offsetRotate: "auto",
            animation: "th-fly 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          <path
            d="M-7 0 L7 0 M7 0 L1 -4 M7 0 L1 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>

      <div className="h-px w-48 overflow-hidden bg-primary-foreground/20">
        <div
          className="h-full w-full bg-accent"
          style={{
            animation: "th-bar 1.5s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
        />
      </div>
      <p className="text-xs tracking-[0.35em] text-primary-foreground/60 uppercase">
        Preparing your journey
      </p>
    </div>
  );
}
