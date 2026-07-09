"use client";

import { useState } from "react";

const inputStyles =
  "w-full rounded-xl border hairline bg-cream px-4 py-3 text-pine placeholder:text-ink-soft/50 outline-none transition-all focus:border-clay focus:ring-2 focus:ring-clay/20";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-pine p-10 text-center text-cream">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-clay text-2xl">
          ✓
        </span>
        <h3 className="mt-5 font-display text-3xl">Request received!</h3>
        <p className="mx-auto mt-3 max-w-sm text-cream/75">
          Thank you — our reception team will call you within one working day
          to confirm your appointment.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border border-cream/25 px-6 py-2.5 text-sm font-semibold transition-colors hover:border-clay hover:text-clay"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to your backend / booking API
        setSent(true);
      }}
      className="rounded-3xl border hairline bg-porcelain p-7 sm:p-9"
    >
      <h2 className="font-display text-3xl">Request an appointment</h2>
      <p className="mt-2 text-sm text-ink-soft">
        Fill this in and we&apos;ll call you back to confirm a time.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Full name</span>
          <input
            required
            name="name"
            placeholder="Jane Doe"
            className={inputStyles}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+44 7700 900000"
            className={inputStyles}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-semibold">Email</span>
        <input
          required
          type="email"
          name="email"
          placeholder="jane@example.com"
          className={inputStyles}
        />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">
            Treatment
          </span>
          <select name="service" className={inputStyles} defaultValue="">
            <option value="" disabled>
              Choose a treatment…
            </option>
            <option>New patient check-up</option>
            <option>Hygiene / cleaning</option>
            <option>Cosmetic consultation</option>
            <option>Invisible orthodontics</option>
            <option>Implants</option>
            <option>Children&apos;s dentistry</option>
            <option>Emergency — I&apos;m in pain</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">
            Preferred date
          </span>
          <input type="date" name="date" className={inputStyles} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-semibold">
          Anything we should know? <span className="font-normal text-ink-soft">(optional)</span>
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Nervous patient, insurance details, questions…"
          className={inputStyles}
        />
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-clay py-4 font-semibold text-porcelain transition-all hover:bg-clay-2 hover:shadow-xl hover:shadow-clay/30"
      >
        Request appointment
      </button>

      <p className="mt-4 text-center text-xs text-ink-soft">
        We&apos;ll never share your details. In pain right now? Call{" "}
        <a href="tel:+442071234567" className="font-semibold text-clay">
          +44 20 7123 4567
        </a>
        .
      </p>
    </form>
  );
}
