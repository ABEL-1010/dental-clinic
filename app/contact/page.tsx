import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact & booking — Sket Dental Studio",
  description:
    "Book an appointment at Sket Dental Studio. Find our address, opening hours and contact details.",
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(201,111,74,0.14),transparent_65%)]"
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 md:pt-24">
        <p className="anim anim-1 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          Contact & booking
        </p>
        <h1 className="anim anim-2 mt-4 max-w-2xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl">
          Let&apos;s find a time
          <em className="text-clay not-italic"> that suits you</em>.
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* ---------- info column ---------- */}
          <div className="anim anim-3 space-y-5">
            <div className="rounded-3xl bg-pine p-8 text-cream">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Visit us
              </p>
              <address className="mt-4 font-display text-2xl not-italic leading-snug">
                Kebelle 11
                <br />
                Mekelle, Tigray
              </address>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                Two minutes from Kedamay weyane. Step-free access and
                on-street parking after 6:30pm.
              </p>
            </div>

            <div className="rounded-3xl border hairline bg-porcelain p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Opening hours
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["Monday – Friday", "8:00 – 19:00"],
                  ["Saturday", "9:00 – 15:00"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <li
                    key={day}
                    className="flex items-center justify-between border-b hairline pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-ink-soft">{day}</span>
                    <span className="font-semibold">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border hairline bg-porcelain p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Reach us directly
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="tel:+251 928820425"
                  className="block font-display text-2xl transition-colors hover:text-clay"
                >
                  +251 928820425
                </a>
                <a
                  href="mailto:hello@sketdental.com"
                  className="block font-semibold text-clay hover:underline"
                >
                  hello@sketdental.com
                </a>
              </div>
            </div>
          </div>

          {/* ---------- form column ---------- */}
          <div className="anim anim-4">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
