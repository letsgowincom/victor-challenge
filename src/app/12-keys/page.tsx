import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12 Keys to Championship — Let's Go Win",
  description: "The complete championship framework. 12 live sessions with JM Ryerson covering every element of building a winning life and business.",
};

const config: LanderConfig = {
  slug: "12-keys",
  accent: "#FFD700",
  emoji: "🔑",
  preheadline: "Complete Framework — Let's Go Win",
  headline: "12 Keys.<br />One <em style='color:#FFD700'>Championship</em> Life.",
  subheadline: "The most comprehensive program JM Ryerson has ever built. 13 sessions. Every element of winning — covered, applied, and locked in.",
  heroStats: [
    { value: "13", label: "Sessions" },
    { value: "~12 hrs", label: "Total content" },
    { value: "$297", label: "One-time" },
  ],
  painHeadline: "You've tried the pieces. You want the whole picture.",
  pains: [
    "You've read the books, taken the courses, hired the coaches — but it hasn't clicked together yet",
    "Your business is doing fine but something about how you're living feels unaligned",
    "You keep achieving goals that don't make you feel the way you thought they would",
    "You know what you want but you can't articulate a clear path to get there",
    "You're building a career but not sure you're building a life",
  ],
  solutionStatement: "A championship isn't one skill. It's a system. When you have all 12 keys — mindset, health, relationships, leadership, finances, purpose — and they're working together, that's when everything changes.",
  price: "$297",
  valueStack: [
    { item: "12 Keys to Championship (13 sessions)", value: "$697" },
    { item: "All 3 standalone courses (BYAST, NLBS, SUAY)", value: "$591" },
    { item: "Full interactive workbook library", value: "$97" },
    { item: "Complete tools suite (Mirror Method, Team Plan, etc.)", value: "$147" },
    { item: "Lifetime access + all future updates", value: "Priceless" },
  ],
  totalValue: "$1,532+",
  modules: [
    { title: "Key 1: Foundation", desc: "Every championship starts here. Your non-negotiables, your values, your WHY. Without this, everything else is built on sand." },
    { title: "Key 2: Mindset", desc: "The operating system. JM's framework for choosing Victor over Victim, every single day." },
    { title: "Key 3: Health & Energy", desc: "You cannot perform at your peak if your body is working against you. The non-negotiable physical practices of champions." },
    { title: "Key 4: Vision", desc: "Where are you actually going? The clarity exercise that separates people who achieve from people who drift." },
    { title: "Key 5: Goals", desc: "Not goal-setting theory. The system JM has used personally for 20 years. It works." },
    { title: "Key 6: Relationships", desc: "Your circle is your future. How to audit it, protect it, and intentionally build it." },
    { title: "Key 7: Leadership", desc: "Everyone leads someone. The principles that make you someone people want to follow." },
    { title: "Key 8: Communication", desc: "How to say what you mean, mean what you say, and make it land every time." },
    { title: "Key 9: Sales & Influence", desc: "Selling is serving. The framework that removes pressure and creates results." },
    { title: "Key 10: Finances", desc: "Financial clarity isn't about wealth — it's about freedom. JM's practical approach to building yours." },
    { title: "Key 11: Resilience", desc: "Champions don't avoid adversity. They build the capacity to use it. How to bounce forward, not back." },
    { title: "Key 12: Legacy", desc: "The question that changes how you show up every day: what do you want to be remembered for?" },
    { title: "Integration Session", desc: "Putting all 12 keys together. Your personal championship blueprint — complete, coherent, and ready to run." },
  ],
  outcomes: [
    "A complete, integrated life framework that actually fits who you are",
    "Clarity on what a championship life looks like for you specifically",
    "Practical systems for every major area — health, relationships, business, finances",
    "A written legacy statement that guides every major decision you make",
    "The confidence that comes from knowing exactly where you're going and how you'll get there",
  ],
  testimonials: [
    { name: "Robert C.", role: "Founder, $8M construction firm", initials: "RC", quote: "This is the program I wish existed 10 years ago. JM doesn't just give you frameworks — he makes you apply them to your actual life. By session 6 I had already changed three things that were quietly killing my business." },
    { name: "Lisa T.", role: "Executive Director, Nonprofit", initials: "LT", quote: "I was skeptical of another 'big framework' course. But this is different. JM is talking to you, not at you. And the integration session at the end is worth every penny on its own." },
  ],
  ctaLabel: "Get Instant Access — $297 →",
  checkoutUrl: "#checkout",
  guarantee: "30-day satisfaction guarantee. If you go through the course and don't get value — we'll make it right.",
};

export default function TwelveKeysPage() {
  return <CourseLander config={config} />;
}
