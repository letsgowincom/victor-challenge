"use client";

import { useState } from "react";
import Image from "next/image";

export type LanderModule = { title: string; desc: string };
export type LanderTestimonial = { name: string; role: string; quote: string; initials: string };

export type LanderConfig = {
  // Identity
  slug: string;
  accent: string;           // primary accent color
  emoji: string;

  // SEO / meta (set in page's metadata export)
  metaTitle?: string;

  // Hero
  preheadline: string;      // small uppercase label above headline
  headline: string;         // main hook headline
  subheadline: string;      // clarifying sentence
  heroStats: { value: string; label: string }[];

  // Pain → Solution
  painHeadline: string;
  pains: string[];
  solutionStatement: string;

  // Offer
  price: string;
  priceNote?: string;       // e.g. "or $997/yr — save $776"
  valueStack: { item: string; value: string }[];
  totalValue: string;

  // Modules / What's inside
  modules: LanderModule[];

  // Outcomes
  outcomes: string[];

  // Testimonials
  testimonials: LanderTestimonial[];

  // CTA
  ctaLabel: string;
  checkoutUrl: string;       // GHL checkout URL — fill in once products are live
  guarantee?: string;
};

export default function CourseLander({ config }: { config: LanderConfig }) {
  const [hover, setHover] = useState(false);
  const { accent } = config;
  const isPending = config.checkoutUrl === "#checkout";

  const CTAButton = ({ size = "full" }: { size?: "full" | "inline" }) => (
    <a
      href={isPending ? undefined : config.checkoutUrl}
      onClick={isPending ? (e) => e.preventDefault() : undefined}
      style={{ textDecoration: "none", display: size === "full" ? "block" : "inline-block", cursor: isPending ? "default" : "pointer" }}
    >
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: size === "full" ? "100%" : "auto",
          background: hover && !isPending ? "#d92e24" : "#FF3B30",
          color: "#fff", fontWeight: 900, fontSize: size === "full" ? 18 : 15,
          border: "none", borderRadius: 16, padding: size === "full" ? "20px 24px" : "13px 24px",
          cursor: isPending ? "not-allowed" : "pointer",
          transition: "background 0.15s",
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? "⚙️ Checkout coming soon" : config.ctaLabel}
      </button>
    </a>
  );

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif", background: "#f0f2f5", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#0F4951", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Image src="/lgw-logo-white.png" alt="Let's Go Win" width={130} height={44} style={{ height: 36, width: "auto" }} priority />
        <a href={isPending ? undefined : config.checkoutUrl}
          style={{ background: "#FF3B30", color: "#fff", fontWeight: 800, fontSize: 13, borderRadius: 10, padding: "9px 18px", textDecoration: "none", opacity: isPending ? 0.7 : 1 }}>
          {isPending ? "Coming Soon" : "Get Access →"}
        </a>
      </nav>

      {/* HERO */}
      <section style={{ background: "#0F4951", padding: "48px 20px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: accent + "25", border: `1px solid ${accent}60`, borderRadius: 99, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: accent, letterSpacing: "0.12em", textTransform: "uppercase" }}>{config.preheadline}</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(28px, 6vw, 42px)", color: "#fff", margin: "0 0 18px", lineHeight: 1.15 }}
            dangerouslySetInnerHTML={{ __html: config.headline }} />
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
            {config.subheadline}
          </p>

          {/* Stats bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {config.heroStats.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "10px 18px", textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: 22, color: accent }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "24px", maxWidth: 400, margin: "0 auto" }}>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 900, fontSize: 40, color: "#fff" }}>{config.price}</span>
              {config.priceNote && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{config.priceNote}</div>}
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: "0 0 18px" }}>One-time · Lifetime access · All devices</p>
            <CTAButton />
            {config.guarantee && (
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", fontStyle: "italic" }}>{config.guarantee}</p>
            )}
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section style={{ background: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: 26, color: "#191919", margin: "0 0 8px", textAlign: "center" }}>{config.painHeadline}</h2>
          <div style={{ display: "grid", gap: 10, margin: "24px 0" }}>
            {config.pains.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 12, padding: "13px 16px" }}>
                <span style={{ color: "#FF3B30", fontWeight: 900, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✗</span>
                <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#0F4951", borderRadius: 16, padding: "20px 20px", textAlign: "center" }}>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              &ldquo;{config.solutionStatement}&rdquo;
            </p>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 8, fontWeight: 600 }}>— JM Ryerson</div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{ background: "#f0f2f5", padding: "48px 20px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, textAlign: "center", margin: "0 0 10px" }}>What&apos;s Inside</p>
          <h2 style={{ fontWeight: 900, fontSize: 26, color: "#191919", margin: "0 0 28px", textAlign: "center" }}>
            {config.modules.length} Modules. {config.modules.length} Transformations.
          </h2>
          <div style={{ display: "grid", gap: 10 }}>
            {config.modules.map((m, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "16px", display: "flex", gap: 14, alignItems: "flex-start", borderLeft: `4px solid ${accent}` }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: accent + "18", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, color: accent, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "#191919", marginBottom: 3 }}>{m.title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={{ background: "#fff", padding: "48px 20px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, textAlign: "center", margin: "0 0 10px" }}>What You&apos;ll Walk Away With</p>
          <h2 style={{ fontWeight: 900, fontSize: 26, color: "#191919", margin: "0 0 24px", textAlign: "center" }}>The outcomes that matter</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {config.outcomes.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "4px 0" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg>
                </div>
                <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.55 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section style={{ background: "#0F4951", padding: "48px 20px" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, textAlign: "center", margin: "0 0 10px" }}>Everything You Get</p>
          <h2 style={{ fontWeight: 900, fontSize: 24, color: "#fff", margin: "0 0 24px", textAlign: "center" }}>What this is worth</h2>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
            {config.valueStack.map((v, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "13px 18px", borderBottom: i < config.valueStack.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{v.item}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{v.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px", marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "line-through", marginBottom: 2 }}>Total value: {config.totalValue}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Your investment today:</div>
            </div>
            <div style={{ fontWeight: 900, fontSize: 32, color: "#fff" }}>{config.price}</div>
          </div>
          <CTAButton />
          {config.guarantee && (
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "12px 0 0", textAlign: "center", fontStyle: "italic" }}>{config.guarantee}</p>
          )}
        </div>
      </section>

      {/* JM AUTHORITY */}
      <section style={{ background: "#f0f2f5", padding: "48px 20px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#0F4951", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 32 }}>👨‍💼</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, margin: "0 0 6px" }}>Your Coach</p>
            <h3 style={{ fontWeight: 900, fontSize: 20, color: "#191919", margin: "0 0 8px" }}>JM Ryerson</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: "0 0 12px" }}>
              Executive coach, keynote speaker, and author of <em>Let&apos;s Go Win</em>, <em>Champion&apos;s Daily Playbook</em>, and <em>Upgrade</em>. JM has coached hundreds of CEOs, founders, and senior leaders to build championship-caliber teams and lives.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["65+ Podcast Appearances", "3 Books Published", "100s of CEOs Coached"].map((b, i) => (
                <span key={i} style={{ fontSize: 11, fontWeight: 700, color: "#0F4951", background: "#0F49510f", border: "1px solid #0F495130", borderRadius: 8, padding: "4px 10px" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {config.testimonials.length > 0 && (
        <section style={{ background: "#fff", padding: "48px 20px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, textAlign: "center", margin: "0 0 10px" }}>Results</p>
            <h2 style={{ fontWeight: 900, fontSize: 24, color: "#191919", margin: "0 0 24px", textAlign: "center" }}>What leaders are saying</h2>
            <div style={{ display: "grid", gap: 14 }}>
              {config.testimonials.map((t, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 16, padding: "18px" }}>
                  <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px" }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, color: "#fff" }}>{t.initials}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#191919" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section style={{ background: "#0F4951", padding: "56px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏆</div>
          <h2 style={{ fontWeight: 900, fontSize: 28, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Ready to go win?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: "0 0 28px", lineHeight: 1.6 }}>
            Join the platform and start building the team, the life, and the results you actually want.
          </p>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 6 }}>{config.price}</div>
          {config.priceNote && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>{config.priceNote}</div>}
          <CTAButton />
          {config.guarantee && (
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: "14px 0 0", fontStyle: "italic" }}>{config.guarantee}</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a2f35", padding: "20px 24px", textAlign: "center" }}>
        <Image src="/lgw-logo-white.png" alt="Let's Go Win" width={100} height={34} style={{ height: 28, width: "auto", opacity: 0.6, marginBottom: 10 }} />
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0 }}>
          © {new Date().getFullYear()} Let&apos;s Go Win · <a href="https://win.letsgowin.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>WIN Platform</a>
        </p>
      </footer>
    </main>
  );
}
