import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pine-2 text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">
              Alba<span className="text-clay">.</span>dental
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              A calmer kind of dentistry. Modern care, honest advice and a team
              that remembers your name.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Visit
            </p>
            <address className="mt-4 text-sm not-italic leading-7 text-cream/80">
              12 Meridian Lane
              <br />
              London, W1 4QT
              <br />
              <a href="tel:+442071234567" className="hover:text-clay">
                +44 20 7123 4567
              </a>
              <br />
              <a href="mailto:hello@albadental.co" className="hover:text-clay">
                hello@albadental.co
              </a>
            </address>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>Mon – Fri · 8:00 – 19:00</li>
              <li>Saturday · 9:00 – 15:00</li>
              <li>Sunday · Closed</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Pages
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/" className="hover:text-clay">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-clay">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-clay">
                  Contact & booking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Alba Dental Studio. All rights reserved.</p>
          <p>Registered with the General Dental Council</p>
        </div>
      </div>
    </footer>
  );
}
