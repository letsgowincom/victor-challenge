import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nobody Likes To Be Sold — Let's Go Win",
  description: "Stop selling. Start serving. JM Ryerson's 4-module system for closing more deals by actually caring about the person across from you.",
};

const config: LanderConfig = {
  slug: "nobody-likes-to-be-sold",
  accent: "#FF3B30",
  emoji: "🤝",
  preheadline: "New Course — Let's Go Win",
  headline: "The Best Closers Don't Sell.<br />They <em style='color:#FF3B30'>Serve</em>.",
  subheadline: "JM Ryerson's 4-module framework for turning any sales conversation into a relationship — and closing more as a result.",
  heroStats: [
    { value: "4", label: "Modules" },
    { value: "~18 min", label: "Total runtime" },
    { value: "$197", label: "One-time" },
  ],
  painHeadline: "You know this feeling.",
  pains: [
    "You pitch well but something is missing — prospects go cold after the call",
    "You feel like you're 'doing sales' instead of just having a real conversation",
    "You hate the idea of being pushy but don't know how to close without it",
    "You're leaving deals on the table and you can't figure out why",
    "The 'objection handling' scripts you've learned feel fake and transactional",
  ],
  solutionStatement: "Nobody likes to be sold. But everyone wants to be helped. Once you shift from selling to serving, you'll never need a script again — and your close rate will prove it.",
  price: "$197",
  valueStack: [
    { item: "Nobody Likes To Be Sold course (4 modules)", value: "$297" },
    { item: "Interactive workbook — apply every module", value: "$97" },
    { item: "Connect · Guide · Grow conversation framework", value: "$47" },
    { item: "Caller ID Test — what do people feel when they see your name", value: "$47" },
    { item: "Lifetime access + all future updates", value: "Priceless" },
  ],
  totalValue: "$488+",
  modules: [
    { title: "Practice", desc: "The reps nobody talks about. How champions prepare for sales conversations before they ever open their mouth." },
    { title: "Rapport", desc: "Real connection is not a tactic. It's a practice. JM's framework for building trust fast — and making it last." },
    { title: "Assume the Sale", desc: "The mindset shift that changes everything. Confidence without pressure. Service without desperation." },
    { title: "Post-No Recovery", desc: "No is not the end. JM's exact approach to staying in relationship, staying in the game, and closing later." },
  ],
  outcomes: [
    "A conversation framework you'll use on every sales call from day one",
    "The ability to uncover what a prospect actually needs — not what they say they want",
    "A clear, honest close that feels good to both sides of the table",
    "A system for following up after a 'no' without burning the relationship",
    "Confidence in sales conversations you've never felt before",
  ],
  testimonials: [
    { name: "Tom R.", role: "Financial Advisor", initials: "TR", quote: "I used to dread the close. Now I actually enjoy sales conversations. JM reframed the whole thing for me — I'm not selling, I'm figuring out if I can help. That shift alone doubled my conversion rate." },
    { name: "Amy L.", role: "Business Development, Healthcare", initials: "AL", quote: "The 'Assume the Sale' module broke something open for me. I was subconsciously apologizing for having something worth buying. Not anymore." },
  ],
  ctaLabel: "Get Instant Access — $197 →",
  checkoutUrl: "#checkout",
  guarantee: "30-day satisfaction guarantee. If you go through the course and don't get value — we'll make it right.",
};

export default function NLBSPage() {
  return <CourseLander config={config} />;
}
