"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          {/* tooth-arc mark */}
          <span className="grid h-9 w-9 place-items-center rounded-full bg-pine text-cream transition-colors group-hover:bg-clay">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 14c0-5 3.5-9 8-9s8 4 8 9"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="17" r="2.2" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-xl tracking-tight">
            Alba<span className="text-clay">.</span>dental
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-clay ${
                pathname === l.href ? "text-clay" : "text-pine"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-clay hover:shadow-lg hover:shadow-clay/25"
          >
            Book a visit
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-pine transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-pine transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t hairline bg-cream px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-3 text-lg ${
                pathname === l.href ? "text-clay" : "text-pine"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-pine px-5 py-3 text-center font-semibold text-cream"
          >
            Book a visit
          </Link>
        </nav>
      )}
    </header>
  );
}
