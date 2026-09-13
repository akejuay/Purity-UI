"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass-panel shadow-soft" : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a href="#home" className="shrink-0">
            <Logo tone={scrolled ? "dark" : "light"} />
            <span className="sr-only">TravelHub home</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"} after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Link href={"sign-in"}>
              <button
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${scrolled ? "text-foreground hover:bg-foreground/5" : "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"}`}
              >
                Log in
              </button>
            </Link>
            <Link href={"sign-up"}>
              <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
                Sign up
              </button>
            </Link>
          </div>

          <button
            className={`grid size-10 place-items-center rounded-full md:hidden ${scrolled || open ? "text-foreground" : "text-primary-foreground"}`}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="glass-panel mx-4 mt-2 rounded-2xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <button className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground">
              Log in
            </button>
            <button className="flex-1 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
