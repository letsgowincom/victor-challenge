import CourseLander from "@/components/CourseLander";
import type { LanderConfig } from "@/components/CourseLander";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show Up As You — Let's Go Win",
  description: "The most powerful leadership move you can make is being exactly who you are. JM Ryerson's 7-module framework for leading with authenticity.",
};

const config: LanderConfig = {
  slug: "show-up-as-you",
  accent: "#FFD700",
  emoji: "⭐",
  preheadline: "New Course — Let's Go Win",
  headline: "The Leader People Follow<br />Is the <em style='color:#FFD700'>Real</em> One.",
  subheadline: "JM Ryerson's 7-module framework for leading with authenticity — so your team trusts you, follows you, and performs for you.",
  heroStats: [
    { value: "7", label: "Modules" },
    { value: "~62 min", label: "Total runtime" },
    { value: "$197", label: "One-time" },
  ],
  painHeadline: "The leadership mask is heavy.",
  pains: [
    "You perform confidence in meetings that you don't actually feel",
    "You've read all the leadership books but you still feel like an imposter",
    "Your team respects your title but you're not sure they trust the person",
    "You're trying to lead like someone else — and it's exhausting",
    "You want to be more open with your team but don't know where the line is",
  ],
  solutionStatement: "The best leaders aren't the most polished. They're the most real. When you show up as yourself — your actual values, your actual story, your actual WHY — people don't just respect you. They run through walls for you.",
  price: "$197",
  valueStack: [
    { item: "Show Up As You course (7 modules)", value: "$297" },
    { item: "Interactive workbook — apply every module", value: "$97" },
    { item: "Mirror Method personal goal framework", value: "$47" },
    { item: "Connect · Guide · Grow leadership tool", value: "$47" },
    { item: "Lifetime access + all future updates", value: "Priceless" },
  ],
  totalValue: "$488+",
  modules: [
    { title: "Your WHY & Values", desc: "You can't lead authentically until you know why you lead. JM's framework for uncovering your core — and making it visible to your team." },
    { title: "Vulnerability", desc: "The counterintuitive truth: showing weakness makes you stronger. How to open up without oversharing and exactly when it builds trust." },
    { title: "Team Connection", desc: "Connection is not a culture initiative — it's a daily practice. The rituals JM's clients use to build teams that actually like each other." },
    { title: "Communication That Lands", desc: "Most leaders talk. Few communicate. The difference between information transfer and actual influence." },
    { title: "Leadership Mastery", desc: "The advanced moves. How the best leaders in the world continue to grow — and what they do differently than everyone else." },
    { title: "Routines of a Champion", desc: "You are your habits. JM's personal morning framework and how to build yours so consistency becomes your competitive advantage." },
    { title: "Your Development Plan", desc: "Leave with a written, specific, 90-day plan for becoming the leader you already know you're capable of being." },
  ],
  outcomes: [
    "Crystal clarity on your leadership WHY — and how to communicate it to your team",
    "The courage to be vulnerable in ways that build trust, not erode it",
    "A communication style that's entirely yours — no scripts, no performance",
    "A daily routine that makes great leadership the default, not the effort",
    "A written 90-day leadership development plan you'll actually stick to",
  ],
  testimonials: [
    { name: "Derek H.", role: "Managing Director, Financial Services", initials: "DH", quote: "I've been leading teams for 15 years and this course made me feel like a beginner — in the best way. JM strips away everything performative and gets to what actually matters: being real." },
    { name: "Jennifer M.", role: "COO, Healthcare startup", initials: "JM", quote: "The vulnerability module alone was worth 10x the cost. I had a conversation with my team the day after I watched it that changed our entire dynamic. I wish I'd had this 5 years ago." },
  ],
  ctaLabel: "Get Instant Access — $197 →",
  checkoutUrl: "#checkout",
  guarantee: "30-day satisfaction guarantee. If you go through the course and don't get value — we'll make it right.",
};

export default function SUAYPage() {
  return <CourseLander config={config} />;
}
