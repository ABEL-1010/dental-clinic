import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About us — Sket Dental Clinic",
  description:
    "Meet the team behind Sket Dental Clinic and the philosophy that shapes how we care for every patient.",
};

const values = [
  {
    title: "Honesty first",
    desc: "If you don't need a treatment, we'll tell you. Trust is worth more than any procedure.",
  },
  {
    title: "Gentle by design",
    desc: "From lighting to language, everything in the studio is designed to lower anxiety, not raise it.",
  },
  {
    title: "Craft & precision",
    desc: "Dentistry is a craft. We invest in training and technology so our work lasts decades, not years.",
  },
  {
    title: "Care beyond the chair",
    desc: "We follow up after every major treatment — because care doesn't end when the appointment does.",
  },
];

const team = [
  {
    initials: "EA",
    name: "Dr. Elena Sket",
    role: "Founder & Principal Dentist",
    bio: "20 years in restorative dentistry. Founded Sket to prove dental care could feel human.",
  },
  {
    initials: "JO",
    name: "Dr. James Okafor",
    role: "Implant Surgeon",
    bio: "Specialist in oral surgery and implantology, with over 2,000 successful placements.",
  },
  {
    initials: "MP",
    name: "Dr. Maya Patel",
    role: "Orthodontist",
    bio: "Clear aligner expert. Loves the moment patients see their new smile for the first time.",
  },
  {
    initials: "LS",
    name: "Lucia Santos",
    role: "Lead Hygienist",
    bio: "The gentlest hands in the building — and the reason our patients keep their check-ups.",
  },
];

export default function About() {
  return (
    <>
      {/* ---------- hero statement ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(138,168,149,0.3),transparent_65%)]"
        />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 md:pt-24">
          <p className="anim anim-1 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            About us
          </p>
          <h1 className="anim anim-2 mt-4 max-w-3xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl">
            We started Sket because going to the dentist
            <em className="text-clay not-italic"> shouldn&apos;t feel like a punishment</em>.
          </h1>
          <p className="anim anim-3 mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Founded in 2011 by Dr. Kibrom, our studio began with a simple
            observation: most people don&apos;t fear dentistry — they fear not
            being listened to. So we built a clinic around listening.
          </p>
        </div>
      </section>

      {/* ---------- featured doctor ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-porcelain md:grid-cols-2">
            <div className="relative min-h-[22rem] md:min-h-[28rem]">
              <Image
                src="/dr-elena-sket.jpg"
                alt="Dr. Elena Sket, Founder & Principal Dentist at Sket Dental Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Founder & Principal Dentist
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Dr. Elena Sket
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                20 years in restorative dentistry. Founded Sket to prove
                dental care could feel human — leading every clinician on
                the team by example, one patient at a time.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- stats band ---------- */}
      <section className="border-y hairline bg-porcelain">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
          {[
            ["2011", "founded"],
            ["4", "specialist clinicians"],
            ["5,000+", "patients cared for"],
            ["98%", "would recommend us"],
          ].map(([num, label], i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="text-center">
                <p className="font-display text-4xl text-pine">{num}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink-soft">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            What we believe
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Four promises we make
            <br />
            to every patient
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 90}>
              <div className="flex h-full gap-6 rounded-3xl border hairline bg-porcelain p-8 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-xl hover:shadow-pine/8">
                <span className="font-display text-5xl leading-none text-clay/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  The team
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                  The people behind
                  <br />
                  the smiles
                </h2>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-semibold text-pine"
              >
                Book with the team
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 80}>
                <article className="flex h-full flex-col rounded-3xl bg-porcelain p-7">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-pine font-display text-xl text-cream">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-display text-xl">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-clay">
                    {m.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {m.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing CTA ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Come and see the difference
            <em className="text-clay not-italic"> for yourself</em>.
          </h2>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-clay px-8 py-4 font-semibold text-porcelain transition-all hover:bg-clay-2 hover:shadow-xl hover:shadow-clay/30"
            >
              Book your first visit
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
