# LGW — Thank You Page Spec
# "You're In — Check Your Texts"
# GHL Funnel Builder Ready

---

## PAGE STRUCTURE (top to bottom)

---

### SECTION 1 — Hero (bg #161616, dark)

**Logo:** LGW 3-ring, centered, white, ~100px
**Label (teal #79d3d1, small caps, centered):** YOU'RE IN 🏆

**Headline (white, bold, ~48px, centered):**
> You Just Made a Victor Move.

**Subheadline (white, ~20px, centered, lighter weight):**
> Most people scroll past. You didn't.
> Your 7-Day Victor Challenge is ready — and JM just texted you.

**CTA button (pink #ff5086, white text, bold, centered, ~280px wide):**
**"Access the Victor Challenge →"**
*(links to GHL Community portal)*

**Microcopy (gray, small, centered):**
*"Check your texts — JM sent you a personal message."*

---

### SECTION 2 — VSL Video Block (bg #1a1a1a)

**Label (yellow #ffe048, small caps, centered):** WATCH THIS FIRST

**Headline (white, ~28px, centered):**
> A Message From JM

**Video embed (centered, max-width 720px, 16:9):**
- Placeholder: embed audio player OR video of JM
- Audio file: `ty_welcome.mp3` (JM AI voice — generated ✅)
- Thumbnail: JM headshot with play button

**Below video — 3 trust icons (white, centered, inline):**
- 📲 JM texted you — reply back
- 🔓 Instant community access below
- 🏆 7 days to a new standard

---

### SECTION 3 — What Happens Next (bg white #f2f2f2)

**Headline (dark #161616, bold, ~32px, centered):**
> Here's Your Game Plan

**3 steps (numbered, icon + text, stacked or 3-col):**

**1. Check Your Texts**
> JM just sent you a message. Reply back — that's where the real conversation happens.

**2. Access the Community**
> Your 7-Day Victor Challenge is live inside the LGW community. Day 1 unlocks immediately.

**3. Do the Work**
> One challenge per day. 10 minutes max. By Day 7, you'll know exactly who you are when you show up as your best self.

---

### SECTION 4 — Community Access CTA (bg #161616, dark)

**Headline (white, bold, ~36px, centered):**
> Your Challenge Starts Now.

**Sub (white, ~18px, centered):**
> Don't wait for tomorrow. Day 1 is already waiting for you inside.

**Big CTA button (yellow #ffe048, dark text #161616, bold, ~300px):**
**"Enter the Victor Challenge →"**
*(links to GHL Community URL)*

**SMS reminder (teal #79d3d1, centered, italic, small):**
> 💬 "You made a decision today. That's a Victor move. See you inside." — JM

---

### SECTION 5 — Bonus: Listen Now (bg white, optional)

**If audio player is preferred over video:**
- Embed `ty_welcome.mp3` as audio player
- Label: "A personal message from JM — play this now 👇"

---

## GHL SETTINGS
- Page URL slug: `/victor-challenge-ty`
- No form on this page
- Community portal link: [GHL Community URL — to be added]
- Fire event: `victor-challenge-ty-viewed` (for automation trigger)

## POST-SUBMIT AUTOMATION TRIGGER (from opt-in)
1. Tag: `victor-challenge-optin`
2. Send immediate SMS (Day 0 text from sequence)
3. Add to 7-day SMS drip workflow
4. Send welcome email with community link
5. Enroll in GHL Community: "Let's Go Win — Victor Challenge"
