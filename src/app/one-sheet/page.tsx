"use client";

import { useState, useRef } from "react";

const BRAND = {
  red: "#FF3B30",
  teal: "#00B9C9",
  darkTeal: "#0F4951",
  gold: "#FFD700",
  dark: "#191919",
};

function Section({
  label,
  color,
  description,
  placeholder,
  rows = 3,
  value,
  onChange,
  subFields,
}: {
  label: string;
  color: string;
  description: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (v: string) => void;
  subFields?: { label: string; value: string; onChange: (v: string) => void }[];
}) {
  return (
    <div className="mb-6 rounded-xl border-2 overflow-hidden" style={{ borderColor: color }}>
      <div className="px-4 py-2 text-white font-bold text-sm uppercase tracking-wider" style={{ backgroundColor: color }}>
        {label}
      </div>
      <div className="bg-white px-4 py-3">
        <p className="text-xs text-gray-400 mb-2 italic print:hidden">{description}</p>
        {subFields ? (
          <div className="flex flex-col gap-2">
            {subFields.map((sf, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-2 text-sm font-bold min-w-[20px]" style={{ color }}>{i + 1}.</span>
                <input
                  type="text"
                  value={sf.value}
                  onChange={(e) => sf.onChange(e.target.value)}
                  placeholder={sf.label}
                  className="w-full border-b border-gray-200 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 print:border-gray-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <textarea
            rows={rows}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="w-full text-sm text-gray-800 placeholder-gray-300 focus:outline-none resize-none leading-relaxed print:min-h-[60px]"
          />
        )}
      </div>
    </div>
  );
}

export default function OneSheetPage() {
  const [companyName, setCompanyName] = useState("");
  const [why, setWhy] = useState("");
  const [whatWeDo, setWhatWeDo] = useState("");
  const [values, setValues] = useState(["", "", ""]);
  const [goals, setGoals] = useState(["", "", ""]);

  const updateValue = (i: number, v: string) => {
    const next = [...values];
    next[i] = v;
    setValues(next);
  };

  const updateGoal = (i: number, v: string) => {
    const next = [...goals];
    next[i] = v;
    setGoals(next);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAV */}
      <nav className="bg-white px-6 py-4 border-b border-gray-100 border-t-4 print:hidden" style={{ borderTopColor: BRAND.darkTeal }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lgw-logo-color.png" alt="Let's Go Win" className="h-[40px] w-auto" />
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND.red }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Save PDF
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8 print:py-0 print:px-0 print:max-w-full">

        {/* HEADER */}
        <div className="mb-6 text-center print:mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: BRAND.teal }}>
            Let&apos;s Go Win
          </p>
          <h1 className="text-2xl font-extrabold mb-1" style={{ color: BRAND.dark }}>
            Winning Team Game Plan
          </h1>
          <p className="text-sm text-gray-400 italic print:hidden">Fill out your one sheet. Post it everywhere.</p>
          <div className="mt-3">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company / Team Name"
              className="text-center text-base font-semibold border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none pb-1 w-full max-w-xs placeholder-gray-300"
              style={{ color: BRAND.dark }}
            />
          </div>
        </div>

        {/* SECTIONS */}
        <Section
          label="Our WHY"
          color={BRAND.darkTeal}
          description='What literally gets you out of bed? Not "make profit" — the deeper reason your company exists.'
          placeholder="We exist to..."
          rows={3}
          value={why}
          onChange={setWhy}
        />

        <Section
          label="What We Do"
          color={BRAND.teal}
          description="One or two sentences. Simple enough for a new hire to repeat on day one."
          placeholder="We help [who] to [what outcome]..."
          rows={2}
          value={whatWeDo}
          onChange={setWhatWeDo}
        />

        <Section
          label="Our 3 Core Values"
          color={BRAND.red}
          description="Three non-negotiables. Everyone on the team must be able to name all three from memory."
          subFields={[
            { label: "Core value #1", value: values[0], onChange: (v) => updateValue(0, v) },
            { label: "Core value #2", value: values[1], onChange: (v) => updateValue(1, v) },
            { label: "Core value #3", value: values[2], onChange: (v) => updateValue(2, v) },
          ]}
        />

        <Section
          label="Our 3 Goals"
          color={BRAND.gold}
          description="Business goals for this period. Memorable, measurable, and short enough to recite in 30 seconds."
          subFields={[
            { label: "Goal #1", value: goals[0], onChange: (v) => updateGoal(0, v) },
            { label: "Goal #2", value: goals[1], onChange: (v) => updateGoal(1, v) },
            { label: "Goal #3", value: goals[2], onChange: (v) => updateGoal(2, v) },
          ]}
        />

        {/* FOOTER */}
        <div className="mt-4 rounded-xl p-4 text-center" style={{ backgroundColor: BRAND.darkTeal }}>
          <p className="text-white text-sm font-bold">Post this everywhere.</p>
          <p className="text-white/70 text-xs mt-1">
            Office wall · Slack · Top of every staff meeting · Onboarding packet
          </p>
          <p className="text-white/50 text-xs mt-2 italic">
            "From your CEO to your newest hire — everyone rows the boat in the same direction." — JM Ryerson
          </p>
        </div>

        <p className="text-center text-xs text-gray-300 mt-4 print:hidden">
          letsgowin.com
        </p>
      </div>

      <style>{`
        @media print {
          nav { display: none !important; }
          body { background: white; }
          .print\\:hidden { display: none !important; }
          textarea { border: none; border-bottom: 1px solid #ddd; }
          input { border-bottom: 1px solid #ddd !important; }
        }
      `}</style>
    </main>
  );
}
