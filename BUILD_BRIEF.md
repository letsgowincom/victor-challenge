# Victor Challenge — Vercel Build Brief

## What We're Building
A Next.js app deployed to Vercel for the Let's Go Win "Victor Challenge" lead generation funnel.
Moving OFF GHL page builder — pages go on Vercel, GHL handles backend (CRM, SMS, workflows).

## Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- Vercel deployment

## Brand Colors
- Pink: #ff5086
- Yellow: #ffe048  
- Teal: #79d3d1
- Dark: #161616
- Dark2: #1a1a1a
- Font: Matter (fallback: Inter / system-sans)

## Pages to Build

### 1. /victor-challenge (opt-in page)
Full spec in OPT_IN_SPEC.md

### 2. /victor-challenge-ty (thank you page)  
Full spec in TY_SPEC.md

## API Route: /api/optin
POST handler that:
1. Receives: { firstName, email, phone }
2. Validates inputs
3. Calls GHL API to create/update contact
4. Tags contact with `victor-challenge-optin`
5. Returns { success: true } or { error: "..." }

GHL API base: https://services.leadconnectorhq.com
GHL endpoints needed:
- POST /contacts/ — create contact
- POST /contacts/{id}/tags — add tag
Auth header: Authorization: Bearer {GHL_API_TOKEN}
Location ID goes in the contact payload: locationId: {GHL_LOCATION_ID}

## Environment Variables (Vercel)
GHL_API_TOKEN=
GHL_LOCATION_ID=
NEXT_PUBLIC_GA4_ID= (placeholder: G-XXXXXXXXXX)
NEXT_PUBLIC_FB_PIXEL_ID= (placeholder: 000000000000)

## Form Behavior
- On submit: show loading state → POST to /api/optin → redirect to /victor-challenge-ty
- Show inline error if API fails (don't lose the user)
- Phone field: US format, required (SMS-based product)

## Assets (use placeholders — real assets coming)
- Logo: white SVG placeholder with "LGW" text (3-ring logo coming)
- JM photo: gray placeholder box (headshot coming)
- Testimonials: 3 placeholder quotes with "[Name, Title]"

## Audio
- TY page embeds: /audio/ty_welcome.mp3 (already generated, will be dropped into /public/audio/)
- Use HTML5 <audio> player with autoplay attempt + manual play button fallback

## Deployment
- Include vercel.json if needed
- Include .env.example
- README with: local setup, env vars needed, deploy steps, how to swap placeholders

When completely done, run:
openclaw system event --text "Done: Victor Challenge Vercel build complete — opt-in page, TY page, API route, README" --mode now
