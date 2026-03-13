# Victor Challenge — Vercel Funnel

Let's Go Win — Victor Challenge lead funnel.  
Pages hosted on Vercel. GHL handles CRM, SMS workflows, and community.

---

## Pages

| Route | Description |
|---|---|
| `/victor-challenge` | Opt-in page (name, email, phone) |
| `/victor-challenge-ty` | Thank you page + audio message |
| `/api/optin` | Serverless API — creates GHL contact + fires workflow |

---

## How it works

1. Visitor lands on `/victor-challenge`
2. Fills out form → POST to `/api/optin`
3. API upserts contact in GHL, tags with `victor-challenge-optin`
4. GHL workflow (tag trigger) fires → immediate Day 0 SMS → 7-day drip starts
5. User redirected to `/victor-challenge-ty`

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up env
cp .env.example .env.local
# Fill in GHL_API_TOKEN, GHL_LOCATION_ID

# 3. Run dev server
npm run dev
# → http://localhost:3000/victor-challenge
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GHL_API_TOKEN` | ✅ | GHL Private Integration Token (server-side only) |
| `GHL_LOCATION_ID` | ✅ | GHL Location ID |
| `NEXT_PUBLIC_GA4_ID` | Optional | GA4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Optional | Facebook Pixel ID |
| `NEXT_PUBLIC_GHL_COMMUNITY_URL` | Optional | URL for "Enter the Victor Challenge" CTA buttons |

---

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B — GitHub Integration
1. Push this repo to GitHub
2. Import project at vercel.com
3. Set environment variables in Vercel dashboard
4. Deploy

### Domain setup
Point `win.letsgowin.com` to Vercel:
- Add domain in Vercel project settings
- Update DNS: CNAME `win` → `cname.vercel-dns.com`

---

## Asset Placeholders (swap before launch)

| Placeholder | What to replace with | Location |
|---|---|---|
| `[LGW]` circle badge | Real LGW 3-ring white SVG logo | Both pages, hero section |
| `[JM Headshot]` grey box | JM professional photo (warm, direct) | `/victor-challenge` section 4 |
| `[Testimonial quote]` | Real client quotes | `/victor-challenge` section 5 |
| `/audio/ty_welcome.mp3` | Drop real file here | `/public/audio/ty_welcome.mp3` |

---

## GHL Workflow Setup

The API applies tag `victor-challenge-optin` on every opt-in.
In GHL, create a workflow with:
- **Trigger:** Contact Tag Added → `victor-challenge-optin`
- **Step 1:** Send SMS (Day 0 — immediate welcome text)
- **Steps 2–8:** Wait 1 day → Send SMS (Days 1–7 from SMS_SEQUENCE.md)
- **Final:** Tag `victor-challenge-complete`

---

## Files

```
src/
  app/
    layout.tsx              # Root layout (GA4 + FB Pixel)
    globals.css             # Tailwind base
    victor-challenge/
      page.tsx              # Opt-in page
    victor-challenge-ty/
      page.tsx              # Thank you page
    api/
      optin/
        route.ts            # GHL API integration
public/
  audio/
    ty_welcome.mp3          # Drop generated VO file here
```
