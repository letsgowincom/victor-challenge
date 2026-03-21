"use client";

import { useEffect, useRef } from "react";

export default function ThankYouPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <main>
      {/* ── NAV ── */}
      <nav className="bg-white px-6 py-4 border-b border-gray-100 border-t-4 border-t-[#0F4951]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lgw-logo-color.png"
          alt="Let's Go Win"
          className="h-[48px] w-auto"
        />
      </nav>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="bg-[#0F4951] px-4 py-5 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <span>🎙️ 400+ Podcast Appearances</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>📚 3x Bestselling Author</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>🏆 20+ Years Coaching CEOs</span>
        </div>
      </section>

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-white px-4 py-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00B9C9]">
          You&apos;re In 🏆
        </p>

        <h1 className="mx-auto mb-5 max-w-2xl text-4xl font-extrabold text-[#191919] md:text-5xl">
          You Just Made a{" "}
          <span className="text-[#FF3B30]">Victor Move.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">
          Most people scroll past. You didn&apos;t.
          <br />
          Your 7-Day Victor Challenge is ready — and JM just texted you.
        </p>

        <a
          href={process.env.NEXT_PUBLIC_GHL_COMMUNITY_URL || "#"}
          className="inline-block rounded-lg bg-[#FF3B30] px-8 py-4 font-bold text-white transition-opacity hover:opacity-90"
        >
          Access the Victor Challenge →
        </a>

        <p className="mt-4 text-sm italic text-gray-400">
          Check your texts — JM sent you a personal message.
        </p>
      </section>

      {/* ── SECTION 2: AUDIO MESSAGE ── */}
      <section className="bg-[#f7f7f7] px-4 py-16 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00B9C9]">
          Watch This First
        </p>
        <h2 className="mb-8 text-2xl font-extrabold text-[#191919] md:text-3xl">
          A Message From JM
        </h2>

        <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <audio
            ref={audioRef}
            controls
            className="w-full"
            src="/audio/ty_welcome.mp3"
          >
            Your browser does not support the audio element.
          </audio>
          <p className="mt-3 text-sm text-gray-400">
            🔊 A personal welcome from JM — play this now
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>📲 JM texted you — reply back</span>
          <span>🔓 Instant community access below</span>
          <span>🏆 7 days to a new standard</span>
        </div>
      </section>

      {/* ── SECTION 3: WHAT HAPPENS NEXT ── */}
      <section className="bg-white px-4 py-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F4951]">
          Your Next Steps
        </p>
        <h2 className="mb-12 text-3xl font-extrabold text-[#191919] md:text-4xl">
          Here&apos;s Your Game Plan
        </h2>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm border-t-4 border-t-[#FF3B30]">
            <p className="mb-3 text-3xl font-extrabold text-[#FF3B30]">1</p>
            <h3 className="mb-2 font-bold text-[#191919]">Check Your Texts</h3>
            <p className="text-sm text-gray-500">
              JM just sent you a message. Reply back — that&apos;s where the real
              conversation happens.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm border-t-4 border-t-[#FFD700]">
            <p className="mb-3 text-3xl font-extrabold text-[#FFD700]">2</p>
            <h3 className="mb-2 font-bold text-[#191919]">Access the Community</h3>
            <p className="text-sm text-gray-500">
              Your 7-Day Victor Challenge is live inside the LGW community. Day
              1 unlocks immediately.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm border-t-4 border-t-[#00B9C9]">
            <p className="mb-3 text-3xl font-extrabold text-[#00B9C9]">3</p>
            <h3 className="mb-2 font-bold text-[#191919]">Do the Work</h3>
            <p className="text-sm text-gray-500">
              One challenge per day. 10 minutes max. By Day 7, you&apos;ll know
              exactly who you are when you show up as your best self.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: COMMUNITY CTA ── */}
      <section className="bg-[#FF3B30] px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
          Your Challenge Starts Now.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg text-white/90">
          Don&apos;t wait for tomorrow. Day 1 is already waiting for you inside.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_GHL_COMMUNITY_URL || "#"}
          className="inline-block rounded-lg bg-[#FFD700] px-10 py-4 font-bold text-[#191919] transition-opacity hover:opacity-90"
        >
          Enter the Victor Challenge →
        </a>
        <p className="mt-6 text-sm italic text-white/80">
          💬 &quot;You made a decision today. That&apos;s a Victor move. See you
          inside.&quot; — JM
        </p>
      </section>
    </main>
  );
}
