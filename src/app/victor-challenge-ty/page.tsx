"use client";

import { useEffect, useRef } from "react";

export default function ThankYouPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay; browsers may block — manual button is the fallback
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-[#161616] px-4 py-20 text-center">
        {/* Logo placeholder */}
        <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white/30">
          <span className="text-lg font-bold tracking-widest text-white">LGW</span>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#79d3d1]">
          You&apos;re In 🏆
        </p>

        <h1 className="mx-auto mb-5 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          You Just Made a Victor Move.
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg font-light text-white/80">
          Most people scroll past. You didn&apos;t.
          <br />
          Your 7-Day Victor Challenge is ready — and JM just texted you.
        </p>

        <a
          href={process.env.NEXT_PUBLIC_GHL_COMMUNITY_URL || "#"}
          className="inline-block rounded-lg bg-[#ff5086] px-8 py-4 font-bold text-white transition-opacity hover:opacity-90"
        >
          Access the Victor Challenge →
        </a>

        <p className="mt-4 text-sm italic text-gray-400">
          Check your texts — JM sent you a personal message.
        </p>
      </section>

      {/* ── SECTION 2: VSL / AUDIO MESSAGE ── */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe048]">
          Watch This First
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
          A Message From JM
        </h2>

        {/* Audio player — /public/audio/ty_welcome.mp3 */}
        <div className="mx-auto max-w-lg rounded-xl bg-white/5 p-6">
          <audio
            ref={audioRef}
            controls
            className="w-full"
            src="/audio/ty_welcome.mp3"
          >
            Your browser does not support the audio element.
          </audio>
          <p className="mt-3 text-sm text-white/50">
            🔊 A personal welcome from JM — play this now
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/70">
          <span>📲 JM texted you — reply back</span>
          <span>🔓 Instant community access below</span>
          <span>🏆 7 days to a new standard</span>
        </div>
      </section>

      {/* ── SECTION 3: WHAT HAPPENS NEXT ── */}
      <section className="bg-[#f2f2f2] px-4 py-20 text-center">
        <h2 className="mb-12 text-3xl font-bold text-[#161616] md:text-4xl">
          Here&apos;s Your Game Plan
        </h2>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="mb-3 text-3xl font-bold text-[#ff5086]">1</p>
            <h3 className="mb-2 font-bold text-[#161616]">Check Your Texts</h3>
            <p className="text-sm text-gray-500">
              JM just sent you a message. Reply back — that&apos;s where the real
              conversation happens.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="mb-3 text-3xl font-bold text-[#ff5086]">2</p>
            <h3 className="mb-2 font-bold text-[#161616]">
              Access the Community
            </h3>
            <p className="text-sm text-gray-500">
              Your 7-Day Victor Challenge is live inside the LGW community. Day
              1 unlocks immediately.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="mb-3 text-3xl font-bold text-[#ff5086]">3</p>
            <h3 className="mb-2 font-bold text-[#161616]">Do the Work</h3>
            <p className="text-sm text-gray-500">
              One challenge per day. 10 minutes max. By Day 7, you&apos;ll know
              exactly who you are when you show up as your best self.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: COMMUNITY CTA ── */}
      <section className="bg-[#161616] px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Your Challenge Starts Now.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg font-light text-white/80">
          Don&apos;t wait for tomorrow. Day 1 is already waiting for you inside.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_GHL_COMMUNITY_URL || "#"}
          className="inline-block rounded-lg bg-[#ffe048] px-10 py-4 font-bold text-[#161616] transition-opacity hover:opacity-90"
        >
          Enter the Victor Challenge →
        </a>
        <p className="mt-6 text-sm italic text-[#79d3d1]">
          💬 &quot;You made a decision today. That&apos;s a Victor move. See you
          inside.&quot; — JM
        </p>
      </section>
    </main>
  );
}
