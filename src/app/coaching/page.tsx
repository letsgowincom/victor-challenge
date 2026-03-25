import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Coaching with JM Ryerson — Let's Go Win",
  description: "Live coaching with JM. Small cohort. Real outcomes. Book a single session or lock in a block for compounding results.",
};

const config: LanderConfig = {
  slug: "coaching",
  accent: "#FF3B30",
  emoji: "🎯",
  preheadline: "Live Coaching — Let's Go Win",
  headline: "Stop Figuring It Out Alone.<br />Coach <em style='color:#FF3B30'>Live</em> with JM.",
  subheadline: "Small cohort. Real conversations. JM in the room — challenging you, pushing you, and making sure you leave with something you can use the next day.",
  heroStats: [
    { value: "Max 12", label: "Per cohort" },
    { value: "60 min", label: "Per session" },
    { value: "$597", label: "Single session" },
  ],
  painHeadline: "Courses are great. But sometimes you need someone in the room.",
  pains: [
    "You know what you need to do — but accountability is the missing piece",
    "You've been stuck on the same problem for months and you need a fresh perspective",
    "Your team has a specific challenge that a generic course won't solve",
    "You want direct feedback on YOUR situation — not someone else's case study",
    "You've outgrown your current peer group and you need to be in the room with serious leaders",
  ],
  solutionStatement: "Information is everywhere. What's rare is a coach who listens to your specific situation, challenges your thinking, and gives you a clear next step. That's what Group Coaching with JM is.",
  price: "$597",
  priceNote: "or $1,997 for 4-session block · $3,497 for 8-session block",
  valueStack: [
    { item: "60-minute live session with JM", value: "$597" },
    { item: "Small cohort (max 12 — real airtime for everyone)", value: "Included" },
    { item: "Session recording + notes", value: "Included" },
    { item: "Hot seat access — bring your real problem", value: "Included" },
    { item: "4-session block — $1,997 (save $391)", value: "Best value" },
    { item: "8-session block — $3,497 (save $1,279)", value: "Maximum ROI" },
  ],
  totalValue: "$597/session",
  modules: [
    { title: "Single Session — $597", desc: "Book one session. Bring your biggest current challenge. Leave with a clear next move." },
    { title: "4-Session Block — $1,997", desc: "Four consecutive sessions over 4–8 weeks. Build momentum, track progress, go deeper." },
    { title: "8-Session Block — $3,497", desc: "The full engagement. Real transformation happens over time with consistent coaching." },
  ],
  outcomes: [
    "Clarity on your biggest current bottleneck — in the first session",
    "Direct, unfiltered feedback from JM on your actual situation",
    "A peer group of serious leaders who are doing the real work",
    "Specific action items you can implement between every session",
    "Compounding results as each session builds on the last",
  ],
  testimonials: [
    { name: "Paul S.", role: "Founder, Healthcare company", initials: "PS", quote: "One session with JM solved a leadership problem I'd been carrying for 8 months. The cohort format was a bonus — hearing how other CEOs tackle similar issues was almost as valuable as JM's direct coaching." },
    { name: "Renee T.", role: "Director of Operations", initials: "RT", quote: "I did the 4-session block and by session 3 my team could see the difference. Highly recommend the block over single sessions — the continuity is where the real work happens." },
  ],
  ctaLabel: "Book a Session — $597 →",
  checkoutUrl: "#checkout",
  guarantee: "If you attend the session and don't find value, JM will personally make it right.",
};

export default function CoachingPage() {
  return <CourseLander config={config} />;
}
