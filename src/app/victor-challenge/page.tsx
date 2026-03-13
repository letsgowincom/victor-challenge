"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DAYS = [
  {
    day: "Day 1",
    title: "CHOOSE",
    desc: "Victim or Victor — you decide every morning. It starts with a piece of paper and a line down the middle.",
  },
  {
    day: "Day 2",
    title: "RECOGNIZE",
    desc: "You can't fix what you can't see. Three intentional pauses today to catch yourself in the act.",
  },
  {
    day: "Day 3",
    title: "RELEASE",
    desc: "What you hold onto, holds you back. Write it. Throw it away. Say it out loud. Done.",
  },
  {
    day: "Day 4",
    title: "RESPOND",
    desc: "The gap between reaction and response is where your power lives. 10 seconds changes everything.",
  },
  {
    day: "Day 5",
    title: "YOUR CIRCLE",
    desc: "You are the average of your 5 closest people. Honest list. One encouraging message. Watch what happens.",
  },
  {
    day: "Day 6",
    title: "MIND · BODY · SOUL",
    desc: "All three. Every day. No exceptions. Small consistent actions compound into massive results.",
  },
  {
    day: "Day 7",
    title: "SHOW UP AS YOU",
    desc: "Your Victor Declaration. One paragraph. Read it out loud. This is who you actually are.",
  },
];

export default function OptInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/optin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      // FB Pixel lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      router.push("/victor-challenge-ty");
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section
        id="hero"
        className="bg-[#161616] px-4 py-20 text-center"
      >
        {/* Logo placeholder — swap with real SVG */}
        <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white/30">
          <span className="text-lg font-bold tracking-widest text-white">LGW</span>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#79d3d1]">
          Free 7-Day Challenge
        </p>

        <h1 className="mx-auto mb-6 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
          You&apos;re Built to Win.
          <br />
          From Within.
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg font-light text-white/80 md:text-xl">
          Get the daily playbook JM uses to help leaders upgrade their mindset,
          their circle, and their results — in just 7 days.
        </p>

        {/* OPT-IN FORM */}
        <div
          id="optin-form"
          className="mx-auto max-w-[480px] rounded-xl bg-white p-6 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#161616] placeholder-gray-400 focus:border-[#ff5086] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#161616] placeholder-gray-400 focus:border-[#ff5086] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number — JM will text you"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#161616] placeholder-gray-400 focus:border-[#ff5086] focus:outline-none"
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#ff5086] py-4 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Me the 7-Day Challenge →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              No spam. JM texts personally. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* ── SECTION 2: SOCIAL PROOF BAR ── */}
      <section className="bg-[#1a1a1a] px-4 py-5 text-center">
        <p className="text-sm text-white/80">
          🎙️ 400+ Podcast Appearances&nbsp;&nbsp;·&nbsp;&nbsp;📚 3x Bestselling
          Author&nbsp;&nbsp;·&nbsp;&nbsp;🏆 20+ Years Coaching CEOs
        </p>
      </section>

      {/* ── SECTION 3: WHAT YOU'RE GETTING ── */}
      <section className="bg-[#f2f2f2] px-4 py-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5086]">
          Inside the 7-Day Victor Challenge
        </p>
        <h2 className="mx-auto mb-12 max-w-lg text-3xl font-bold text-[#161616] md:text-4xl">
          7 Days. 7 Shifts. One Upgraded Version of You.
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="rounded-lg bg-white p-5 text-left shadow-sm"
            >
              <span className="mb-2 inline-block rounded-full bg-[#ff5086] px-3 py-1 text-xs font-bold text-white">
                {d.day}
              </span>
              <h3 className="mb-1 font-bold text-[#161616]">{d.title}</h3>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: ABOUT JM ── */}
      <section className="bg-[#161616] px-4 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Photo placeholder */}
          <div className="flex h-64 w-64 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white/30">
            <span className="text-sm">[JM Headshot]</span>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#79d3d1]">
              Your Coach
            </p>
            <h3 className="mb-4 text-3xl font-bold text-white">JM Ryerson</h3>
            <p className="mb-4 text-base font-light leading-relaxed text-white/80">
              Executive coach, speaker, and 3x bestselling author. JM has spent
              over 20 years helping CEOs, founders, and senior leaders unlock
              what&apos;s already inside them. His framework is simple: stop trying
              to change. Start upgrading.
            </p>
            <p className="mb-4 text-sm text-white/60">
              400+ podcasts. Coached on 6 continents. His community of high
              performers chooses to win — every single day.
            </p>
            <p className="text-base italic text-[#ffe048]">
              &quot;Nobody likes change. Everyone loves to be upgraded.&quot; — JM Ryerson
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section className="bg-white px-4 py-20 text-center">
        <h2 className="mb-12 text-3xl font-bold text-[#161616] md:text-4xl">
          What Leaders Are Saying
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 p-6 text-center"
            >
              <p className="mb-2 text-[#ffe048]">★★★★★</p>
              <p className="mb-4 text-sm italic text-gray-600">
                &quot;[Testimonial quote from a leader or CEO — 1–2 lines.]&quot;
              </p>
              <p className="text-sm font-semibold text-[#161616]">
                — [Name, Title]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA ── */}
      <section className="bg-[#ff5086] px-4 py-20 text-center">
        <h2 className="mx-auto mb-4 max-w-xl text-4xl font-bold text-white">
          Ready to Stop Performing and Start Winning?
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg text-white/90">
          Join thousands of leaders who chose to upgrade. It starts with Day 1.
        </p>
        <a
          href="#optin-form"
          className="inline-block rounded-lg bg-white px-10 py-4 font-bold text-[#161616] transition-opacity hover:opacity-90"
        >
          Send Me the 7-Day Challenge →
        </a>
      </section>
    </main>
  );
}
