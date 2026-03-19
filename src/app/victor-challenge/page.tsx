"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Brand palette: Gold #FFD700 | Red #FF3B30 | Aqua #00B9C9
const DAYS = [
  {
    day: "Day 1",
    title: "CHOOSE",
    desc: "Victim or Victor — you decide every morning. It starts with a piece of paper and a line down the middle.",
    color: "#FF3B30",
  },
  {
    day: "Day 2",
    title: "RECOGNIZE",
    desc: "You can't fix what you can't see. Three intentional pauses today to catch yourself in the act.",
    color: "#FFD700",
  },
  {
    day: "Day 3",
    title: "RELEASE",
    desc: "What you hold onto, holds you back. Write it. Throw it away. Say it out loud. Done.",
    color: "#00B9C9",
  },
  {
    day: "Day 4",
    title: "RESPOND",
    desc: "The gap between reaction and response is where your power lives. 10 seconds changes everything.",
    color: "#FF3B30",
  },
  {
    day: "Day 5",
    title: "YOUR CIRCLE",
    desc: "You are the average of your 5 closest people. Honest list. One encouraging message. Watch what happens.",
    color: "#FFD700",
  },
  {
    day: "Day 6",
    title: "MIND · BODY · SOUL",
    desc: "All three. Every day. No exceptions. Small consistent actions compound into massive results.",
    color: "#00B9C9",
  },
  {
    day: "Day 7",
    title: "SHOW UP AS YOU",
    desc: "Your Victor Declaration. One paragraph. Read it out loud. This is who you actually are.",
    color: "#FF3B30",
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
      {/* ── NAV ── */}
      <nav className="bg-white px-6 py-4 border-b border-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lgw-logo-black.png"
          alt="Let's Go Win"
          className="h-[48px] w-auto"
        />
      </nav>

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-white px-4 py-8 text-center md:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00B9C9]">
          Free 7-Day Challenge
        </p>

        <h1 className="mx-auto mb-3 max-w-2xl text-3xl font-extrabold leading-tight text-[#191919] md:text-5xl md:mb-4">
          You&apos;re Built to Win.{" "}
          <span className="text-[#FF3B30]">From Within.</span>
        </h1>

        {/* Subtitle — hidden on mobile to keep CTA above fold */}
        <p className="mx-auto mb-6 hidden max-w-xl text-lg text-gray-600 md:block md:mb-10 md:text-xl">
          Get the daily playbook JM uses to help leaders upgrade their mindset,
          their circle, and their results — in just 7 days.
        </p>

        {/* OPT-IN FORM */}
        <div
          id="optin-form"
          className="mx-auto max-w-[480px] rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 focus:border-[#FF3B30] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 focus:border-[#FF3B30] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number — JM will text you"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[#191919] placeholder-gray-400 focus:border-[#FF3B30] focus:outline-none"
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#FF3B30] py-4 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
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
      <section className="bg-[#191919] px-4 py-5 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <span>🎙️ 400+ Podcast Appearances</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>📚 3x Bestselling Author</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>🏆 20+ Years Coaching CEOs</span>
        </div>
      </section>

      {/* ── SECTION 3: WHAT YOU'RE GETTING ── */}
      <section className="bg-[#f7f7f7] px-4 py-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B30]">
          Inside the 7-Day Victor Challenge
        </p>
        <h2 className="mx-auto mb-12 max-w-lg text-3xl font-extrabold text-[#191919] md:text-4xl">
          7 Days. 7 Shifts. One Upgraded Version of You.
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="rounded-xl bg-white p-5 text-left shadow-sm border border-gray-100"
            >
              <span
                className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: d.color }}
              >
                {d.day}
              </span>
              <h3 className="mb-1 font-bold text-[#191919]">{d.title}</h3>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: ABOUT JM ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jm-headshot.jpg"
            alt="JM Ryerson"
            className="w-full max-w-[288px] flex-shrink-0 rounded-2xl object-cover object-top shadow-xl md:h-72 md:w-72"
          />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00B9C9]">
              Your Coach
            </p>
            <h3 className="mb-4 text-3xl font-extrabold text-[#191919]">JM Ryerson</h3>
            <p className="mb-4 text-base leading-relaxed text-gray-600">
              Executive coach, speaker, and 3x bestselling author. JM has spent
              over 20 years helping CEOs, founders, and senior leaders unlock
              what&apos;s already inside them. His framework is simple: stop trying
              to change. Start upgrading.
            </p>
            <p className="mb-4 text-sm text-gray-400">
              400+ podcasts. Coached on 6 continents. His community of high
              performers chooses to win — every single day.
            </p>
            <p className="text-base font-semibold italic text-[#FF3B30]">
              &quot;Nobody likes change. Everyone loves to be upgraded.&quot; — JM Ryerson
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section className="bg-[#f7f7f7] px-4 py-20 text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-[#191919] md:text-4xl">
          What Leaders Are Saying
        </h2>

        {/* Written testimonials */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              quote: "He's an excellent listener and helps you discover what you really want, on your own. JM has a real gift — it's in his communication style.",
              name: "Andy Davis",
              title: "",
            },
            {
              quote: "JM showed me I can improve myself every day by taking small steps at a time which lead to bigger strides in life. I am so thankful to have JM in my life!",
              name: "Koki Arai",
              title: "HR Manager, Mikuni Restaurant Group",
            },
            {
              quote: "JM Ryerson is a winning proposition. He helped me build my leadership skills and gave me the tools I was lacking to achieve the goals I aspired to. The man energizes and is the real deal!",
              name: "Joy Eber",
              title: "Owner, Inside Out",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="mb-2 text-[#FFD700]">★★★★★</p>
              <p className="mb-4 text-sm italic text-gray-600">
                &quot;{t.quote}&quot;
              </p>
              <p className="text-sm font-semibold text-[#191919]">— {t.name}</p>
              {t.title && <p className="text-xs text-gray-400">{t.title}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: FINAL CTA ── */}
      <section className="bg-[#FF3B30] px-4 py-20 text-center">
        <h2 className="mx-auto mb-4 max-w-xl text-4xl font-extrabold text-white">
          Ready to Upgrade Your Game and Win From Within?
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg text-white/90">
          Join thousands of leaders who chose to perform at their best — every single day. It starts with Day 1.
        </p>
        <a
          href="#optin-form"
          className="inline-block rounded-lg bg-[#FFD700] px-10 py-4 font-bold text-[#191919] transition-opacity hover:opacity-90"
        >
          Send Me the 7-Day Challenge →
        </a>
      </section>
    </main>
  );
}
