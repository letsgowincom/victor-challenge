# Victor Challenge — Opt-In Page
**win.letsgowin.com/victor-challenge**
*GHL Funnel Builder Spec — Ready to Build*

---

## Meta

| Field | Value |
|---|---|
| URL slug | `/victor-challenge` |
| Page title | "Free 7-Day Victor Challenge — Let's Go Win" |
| Form submit tag | `victor-challenge-optin` |
| Redirect on submit | `/victor-challenge-ty` |
| Tracking | GA4 + FB Pixel |

---

## Section 1 — Hero

**Background:** `#161616` (near black, full width)
**Padding:** 80px top / 60px bottom

```
[LGW 3-ring logo — white, centered, 120px wide]

FREE 7-DAY CHALLENGE                          ← small caps, teal #79d3d1, centered

You're Built to Win.                          ← H1, white, bold, 52px desktop / 36px mobile
From Within.

Get the daily playbook JM uses to help        ← sub, white, 22px, lighter weight
leaders upgrade their mindset, their
circle, and their results — in just 7 days.

┌──────────────────────────────────────────┐
│  First Name                              │  ← white card, rounded 12px, max-width 480px
│  Email Address                           │
│  Mobile Number — JM will text you        │
│                                          │
│  [ Send Me the 7-Day Challenge →  ]      │  ← pink #ff5086, white bold text, full width
│                                          │
│  No spam. JM texts personally.           │  ← gray, 13px, centered
│  Unsubscribe anytime.                    │
└──────────────────────────────────────────┘
```

---

## Section 2 — Social Proof Bar

**Background:** `#1a1a1a`
**Padding:** 20px vertical

```
🎙️ 400+ Podcast Appearances  ·  📚 3x Bestselling Author  ·  🏆 20+ Years Coaching CEOs
```

*Inline, centered, white text, ~15px, divider dots between items*

---

## Section 3 — What You're Getting

**Background:** `#f2f2f2` (light gray)
**Padding:** 80px vertical

```
INSIDE THE 7-DAY VICTOR CHALLENGE     ← small caps, pink #ff5086

7 Days. 7 Shifts. One Upgraded        ← H2, #161616, bold, 36px
Version of You.
```

**Day cards** — 7 cards (2-col on desktop, stacked on mobile):

| # | Title | Description |
|---|---|---|
| Day 1 | **CHOOSE** | Victim or Victor — you decide every morning. It starts with a piece of paper and a line down the middle. |
| Day 2 | **RECOGNIZE** | You can't fix what you can't see. Three intentional pauses today to catch yourself in the act. |
| Day 3 | **RELEASE** | What you hold onto, holds you back. Write it. Throw it away. Say it out loud. Done. |
| Day 4 | **RESPOND** | The gap between reaction and response is where your power lives. 10 seconds changes everything. |
| Day 5 | **YOUR CIRCLE** | You are the average of your 5 closest people. Honest list. One encouraging message. Watch what happens. |
| Day 6 | **MIND · BODY · SOUL** | All three. Every day. No exceptions. Small consistent actions compound into massive results. |
| Day 7 | **SHOW UP AS YOU** | Your Victor Declaration. One paragraph. Read it out loud. This is who you actually are. |

*Card style: white background, rounded 8px, pink Day number badge, #161616 title, gray body text*

---

## Section 4 — About JM

**Background:** `#161616`
**Layout:** 2-column (photo left, copy right) → stacked on mobile

**Left:** JM professional headshot (warm, direct eye contact, not corporate)

**Right:**
```
YOUR COACH                                    ← small caps, teal #79d3d1

JM Ryerson                                    ← H3, white, bold, 28px

Executive coach, speaker, and 3x             ← white, 17px
bestselling author. JM has spent
over 20 years helping CEOs, founders,
and senior leaders unlock what's
already inside them. His framework
is simple: stop trying to change.
Start upgrading.

400+ podcasts. Coached on 6 continents.
His community of high performers
chooses to win — every single day.

"Nobody likes change. Everyone loves      ← italic, yellow #ffe048
 to be upgraded." — JM Ryerson
```

---

## Section 5 — Testimonials

**Background:** `#ffffff`
**Padding:** 80px vertical

```
What Leaders Are Saying                       ← H2, #161616, centered, bold
```

3 testimonial cards (pull from Drive `/Testimonials` folder or placeholder):

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ ★★★★★               │  │ ★★★★★               │  │ ★★★★★               │
│                     │  │                     │  │                     │
│ "Quote from client  │  │ "Quote from client  │  │ "Quote from client  │
│  here. 1-2 lines."  │  │  here. 1-2 lines."  │  │  here. 1-2 lines."  │
│                     │  │                     │  │                     │
│ — Name, Title       │  │ — Name, Title       │  │ — Name, Title       │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

*White cards, gray border, rounded 8px, centered text*

---

## Section 6 — Final CTA

**Background:** `#ff5086` (pink, full width)
**Padding:** 80px vertical

```
Ready to Stop Performing                      ← H2, white, bold, 40px, centered
and Start Winning?

Join thousands of leaders who chose           ← white, 20px, centered
to upgrade. It starts with Day 1.

[ Send Me the 7-Day Challenge →  ]           ← white button, dark text #161616, full-width max 480px
                                               OR anchor link back to #hero-form
```

---

## Mobile Notes

- Single column throughout
- H1: 36px
- Form card: full width with 16px padding
- Day cards: stacked, full width
- Optional: sticky CTA button at bottom on scroll

---

## Assets Needed

| Asset | Status |
|---|---|
| LGW 3-ring logo (white SVG) | Source from Drive |
| JM headshot (warm, professional) | Source from Drive |
| Testimonials (3 quotes) | Source from Drive or JM directly |
| FB Pixel ID | Get from JM/ads account |
| GA4 Measurement ID | Get from JM/GA account |
