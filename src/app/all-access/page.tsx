import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Access — WIN Performance Platform",
  description: "Every course. Every tool. Every new module JM adds. One subscription. $147/month or $997/year.",
};

const config: LanderConfig = {
  slug: "all-access",
  accent: "#00B9C9",
  emoji: "🔓",
  preheadline: "Best Value — WIN Performance Platform",
  headline: "Everything JM Builds.<br /><em style='color:#00B9C9'>All Access</em>. One Price.",
  subheadline: "Every course, every tool, every new module added to the WIN Performance Platform — for one flat subscription.",
  heroStats: [
    { value: "$1,479", label: "À la carte value" },
    { value: "$997/yr", label: "All Access annual" },
    { value: "$147/mo", label: "All Access monthly" },
  ],
  painHeadline: "Why buy one when you need all of them?",
  pains: [
    "You want BYAST but you also know you need the sales course too",
    "You're not sure which course to start with — so you start with none",
    "You buy a course, complete it, and then hit a wall waiting for the next one",
    "You want to give your team access but individual licenses add up fast",
    "You want to be in the platform — not just own a course",
  ],
  solutionStatement: "Champions don't pick one skill to develop. They build the whole game. All Access gives you everything — and everything JM adds going forward.",
  price: "$147/mo",
  priceNote: "or $997/yr — save $776 · under $1,000",
  valueStack: [
    { item: "Building Your All-Star Team ($197 value)", value: "✓ Included" },
    { item: "Nobody Likes To Be Sold ($197 value)", value: "✓ Included" },
    { item: "Show Up As You ($197 value)", value: "✓ Included" },
    { item: "12 Keys to Championship ($297 value)", value: "✓ Included" },
    { item: "Keynote Talks — all 6 ($197 value)", value: "✓ Included" },
    { item: "All tools (Mirror Method, Team Plan, etc.)", value: "✓ Included" },
    { item: "Every new course JM adds", value: "✓ Auto-included" },
    { item: "WIN community access", value: "✓ Included" },
  ],
  totalValue: "$1,479+",
  modules: [
    { title: "Building Your All-Star Team", desc: "5 modules on hiring, developing, and leading A-players." },
    { title: "Nobody Likes To Be Sold", desc: "4 modules on closing through serving, not selling." },
    { title: "Show Up As You", desc: "7 modules on authentic leadership that builds real trust." },
    { title: "12 Keys to Championship", desc: "13 sessions covering every element of a championship life and business." },
    { title: "Keynote Talks (×6)", desc: "JM's most impactful keynote sessions — watch anytime, share with your team." },
    { title: "All Future Content", desc: "Every course, talk, and module JM adds — automatically yours." },
  ],
  outcomes: [
    "Unrestricted access to every framework JM has built — no waiting, no extra purchases",
    "The ability to progress naturally from course to course as your needs evolve",
    "A platform that grows with you — new content added continuously",
    "Team access that makes All Access the best investment per person on your roster",
    "The WIN community — a group of leaders who are actually doing the work",
  ],
  testimonials: [
    { name: "James K.", role: "CEO, 25-person agency", initials: "JK", quote: "I bought BYAST first, finished it in a week, and immediately wanted the rest. Getting All Access upfront would have saved me money and the decision fatigue. Don't make my mistake." },
    { name: "Michelle B.", role: "Regional VP, Insurance", initials: "MB", quote: "I put my whole leadership team on All Access. The ROI on culture alone paid for the first year in 90 days." },
  ],
  ctaLabel: "Get All Access — $147/mo →",
  checkoutUrl: "#checkout",
  guarantee: "30-day satisfaction guarantee. Cancel anytime. No contracts.",
};

export default function AllAccessPage() {
  return <CourseLander config={config} />;
}
