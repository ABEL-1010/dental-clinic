import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    n: "01",
    title: "Check-ups & hygiene",
    desc: "Gentle routine exams, professional cleaning and honest advice — no upselling, ever.",
  },
  {
    n: "02",
    title: "Cosmetic dentistry",
    desc: "Whitening, veneers and bonding designed around your face, not a catalogue smile.",
  },
  {
    n: "03",
    title: "Invisible orthodontics",
    desc: "Clear aligner treatment with 3D previews, so you see the result before you start.",
  },
  {
    n: "04",
    title: "Implants & restoration",
    desc: "Replace missing teeth with implants placed by our in-house specialist surgeon.",
  },
  {
    n: "05",
    title: "Children's dentistry",
    desc: "First visits that feel like play. We help little ones love the dentist early.",
  },
  {
    n: "06",
    title: "Emergency care",
    desc: "In pain? Same-day appointments held open every morning for urgent cases.",
  },
];

const testimonials = [
  {
    quote:
      "I avoided dentists for ten years out of fear. The team at Alba talked me through every step — I actually look forward to my check-ups now.",
    name: "Sarah M.",
    detail: "Patient for 3 years",
  },
  {
    quote:
      "The aligner treatment was seamless. They showed me a 3D preview of my new smile on day one, and the result matched it exactly.",
    name: "Daniel K.",
    detail: "Orthodontic patient",
  },
  {
    quote:
      "Took my 4-year-old for her first visit and she cried when we had to leave — because she wanted to stay. That says everything.",
    name: "Amira H.",
    detail: "Family patient",
  },
];

const tickerItems = [
  "Same-day emergency care",
  "0% finance available",
  "Open Saturdays",
  "5,000+ smiles treated",
  "Anxiety-friendly clinic",
];

export default function Home() {
  return (
    <>
      {/* ================= HERO — the iceberg ================= */}
      <section className="relative isolate flex min-h-[92svh] flex-col overflow-hidden">
        <Image
          src="/iceberg-tooth.png"
          alt="A tooth-shaped iceberg: the white crown visible above the waterline, its roots reaching deep into the dark water below"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* legibility gradients — warm sky above, deep water below */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[45%] bg-linear-to-b from-cream/80 via-cream/25 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-pine-2/90 via-pine-2/35 to-transparent"
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-16 pt-12 sm:px-8 md:pt-16">
          {/* ---- above the waterline ---- */}
          <div>
            <p className="anim anim-1 inline-flex items-center gap-2 rounded-full border hairline bg-porcelain/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Now welcoming new patients
            </p>

            <h1 className="anim anim-2 mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-pine sm:text-6xl lg:text-7xl">
              What you see is
              <br />
              only <em className="text-clay not-italic">the tip</em>.
            </h1>
          </div>

          {/* ---- below the waterline ---- */}
          <div className="mt-auto max-w-xl pt-24">
            <p className="anim anim-3 text-lg leading-relaxed text-cream/90 sm:text-xl">
              Two thirds of every tooth — and most dental problems — live
              beneath the surface. Our job is caring for the part you
              can&apos;t see.
            </p>

            <div className="anim anim-4 mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-clay px-7 py-3.5 font-semibold text-porcelain transition-all hover:bg-clay-2 hover:shadow-xl hover:shadow-clay/30"
              >
                Book a deeper look
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-cream"
              >
                Meet the team
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <dl className="anim anim-5 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/20 pt-7">
              {[
                ["15+", "years of care"],
                ["5,000+", "happy smiles"],
                ["4.9★", "patient rating"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl text-cream">{num}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* floating badge — adrift on the water */}
          <div className="drift absolute bottom-40 right-8 hidden rounded-2xl bg-porcelain/95 px-5 py-4 shadow-xl shadow-pine-2/40 lg:block">
            <p className="text-xs uppercase tracking-wider text-ink-soft">
              Next available
            </p>
            <p className="mt-1 font-display text-lg text-pine">
              Tomorrow, 9:30
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                What we do
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Care for every stage
                <br />
                of your smile
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-pine"
            >
              Ask about a treatment
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col rounded-3xl border hairline bg-porcelain p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-clay/40 hover:shadow-xl hover:shadow-pine/8">
                <span className="font-display text-sm text-clay">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
                <span className="mt-6 text-clay opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-cream-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Why Alba
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Built for people who
                <br />
                <em className="text-clay not-italic">hate</em> the dentist
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                Half of our patients arrived anxious. We designed every detail —
                from the waiting room to the way we explain treatment — to make
                visits feel human.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {[
              [
                "No surprise bills",
                "Every treatment plan comes with a fixed written quote before we begin.",
              ],
              [
                "Explained in plain words",
                "You'll see your own scans and understand exactly what we recommend — and why.",
              ],
              [
                "Sedation & comfort options",
                "Noise-cancelling headphones, weighted blankets and sedation for nervous patients.",
              ],
              [
                "Evenings & Saturdays",
                "Appointments that fit around real life, not the other way round.",
              ],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="flex gap-5 rounded-2xl bg-porcelain p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pine font-display text-sm text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Kind words
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Patients say it best
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl bg-pine p-8 text-cream">
                <span className="font-display text-6xl leading-none text-clay">
                  “
                </span>
                <blockquote className="mt-2 flex-1 leading-relaxed text-cream/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-cream/15 pt-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-sm text-sage">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-pine-2 px-8 py-20 text-center text-cream sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,111,74,0.35),transparent_70%)]"
            />
            <h2 className="relative font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Your smile deserves
              <br />a <em className="text-clay not-italic">better</em> Tuesday.
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-cream/75">
              Book online in under a minute. New patient exams include a full
              scan, photos and a written plan.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-clay px-8 py-4 font-semibold text-porcelain transition-all hover:bg-clay-2 hover:shadow-xl hover:shadow-clay/40"
              >
                Book your visit
              </Link>
              <a
                href="tel:+442071234567"
                className="rounded-full border border-cream/25 px-8 py-4 font-semibold transition-colors hover:border-clay hover:text-clay"
              >
                Call +44 20 7123 4567
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
