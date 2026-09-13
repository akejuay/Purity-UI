import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Logo />
        <p className="text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} TravelHub. Made for people who keep a bag
          half-packed.
        </p>
      </div>
    </footer>
  );
}
