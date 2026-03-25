import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Your All-Star Team — Let's Go Win",
  description: "Stop carrying your team. Learn JM Ryerson's proven system for hiring, developing, and leading A-players who make you better.",
};

const config: LanderConfig = {
  slug: "all-star-team",
  accent: "#00B9C9",
  emoji: "🏆",
  preheadline: "New Course — Let's Go Win",
  headline: "Stop Carrying Your Team.<br />Start <em style='color:#00B9C9'>Building</em> One.",
  subheadline: "JM Ryerson's proven 5-module system for hiring right, developing fast, and leading a team that actually wins.",
  heroStats: [
    { value: "5", label: "Modules" },
    { value: "~45 min", label: "Total runtime" },
    { value: "$197", label: "One-time" },
  ],
  painHeadline: "Sound familiar?",
  pains: [
    "You're doing your job AND picking up everyone else's slack",
    "You hired someone promising and they're not performing — again",
    "Your team meetings feel like status updates, not strategy sessions",
    "You know something is off with the culture but you can't name it",
    "You're the hardest worker in the building and it's exhausting",
  ],
  solutionStatement: "The problem isn't your team. It's the system — or the lack of one. Once you know how to find, develop, and lead A-players, you'll never go back to carrying people.",
  price: "$197",
  valueStack: [
    { item: "Building Your All-Star Team course (5 modules)", value: "$297" },
    { item: "Interactive workbook — apply every module", value: "$97" },
    { item: "Mirror Method goal-setting tool", value: "$47" },
    { item: "Winning Team Game Plan builder", value: "$47" },
    { item: "Lifetime access + all future updates", value: "Priceless" },
  ],
  totalValue: "$488+",
  modules: [
    { title: "The Mirror Method", desc: "Start with you. JM's morning practice that forces radical self-honesty before you can lead anyone else." },
    { title: "Attitude & Activity", desc: "The two things that determine every outcome on your team — and how to audit both in under 10 minutes." },
    { title: "Momentum", desc: "How winning teams build streaks, celebrate progress, and make it hard to stop showing up." },
    { title: "Resources", desc: "Develop your people with intention. The tools JM uses to grow leaders inside his clients' organizations." },
    { title: "Leadership Magic", desc: "The intangibles that separate good managers from championship coaches. This is the whole game." },
  ],
  outcomes: [
    "A clear picture of where your team is strong and exactly where it's leaking",
    "A repeatable hiring framework so you stop making expensive mistakes",
    "Your personal leadership game plan — written, specific, and ready to run",
    "Tools your team can use immediately (not theory — actual practice)",
    "The confidence to have the hard conversations that change everything",
  ],
  testimonials: [
    { name: "Sarah K.", role: "VP of Sales, SaaS company", initials: "SK", quote: "I went through this course in a weekend and immediately rewrote how we run our weekly team meetings. Three months later, two people who were underperforming are now our top closers. The system works." },
    { name: "Marcus R.", role: "CEO, 40-person agency", initials: "MR", quote: "JM doesn't give you fluff. This is the actual playbook. I've done leadership training that cost 10x more and delivered a fraction of this value." },
  ],
  ctaLabel: "Get Instant Access — $197 →",
  checkoutUrl: "#checkout",
  guarantee: "30-day satisfaction guarantee. If you go through the course and don't get value — we'll make it right.",
};

export default function AllStarTeamPage() {
  return <CourseLander config={config} />;
}
