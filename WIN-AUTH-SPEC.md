# WIN Platform — Auth & Access Spec
_For Andréas to implement. Sequenced in build order._

---

## What's Already Built (Don't Touch)

| File | Status | Notes |
|------|--------|-------|
| `src/middleware.ts` | ✅ Skeleton done | Checks `lgw_session` cookie — redirect to /login if missing |
| `src/app/api/auth/ghl/route.ts` | ✅ Done | GHL contact lookup by email → returns access map |
| `src/app/login/page.tsx` | ✅ UI done | Google OAuth button + email field — just wired wrong |
| `src/app/welcome/page.tsx` | ✅ Done | Onboarding flow |
| GHL tag schema | ✅ Defined in code | See below |

**GHL Tag Schema (already agreed, use as-is):**
```
lgw_free           → Morning Routine + Victor Challenge access
lgw_access_all     → All Access subscriber (all courses + talks)
lgw_course_byast   → Building Your All-Star Team
lgw_course_nlbs    → Nobody Likes To Be Sold
lgw_course_suay    → Show Up As You
lgw_course_12keys  → 12 Keys to Championship
lgw_coaching_group → Group Coaching
lgw_mastermind     → Mastermind (unlocks everything)
```

---

## What's Wrong Right Now

The session cookie is `lgw_session=1` — just the string "1". The middleware lets anyone in who has that cookie. No identity. No access claims. No real auth.

**Fix:** Replace the `"1"` value with a signed JWT containing `{ email, access, exp }`.

---

## Step 1 — Environment Variables

Add to Vercel project (Settings → Environment Variables) AND to `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=<from Google Cloud Console>
JWT_SECRET=<random 32+ char string — generate with: openssl rand -base64 32>
GHL_API_TOKEN=pit-4309b1a2-9570-4d24-9a91-a67d356cc5fc   # already in codebase
GHL_LOCATION_ID=x96j9GfZjhPVf1gbDjfo                     # already in codebase
GHL_WEBHOOK_SECRET=<random string — you'll use this to verify GHL webhook calls>
```

**Google Cloud Console setup:**
1. console.cloud.google.com → create project "WIN Platform" (or use existing LGW project)
2. APIs & Services → Credentials → Create OAuth 2.0 Client ID
3. Application type: Web application
4. Authorised JavaScript origins: `https://win.letsgowin.com`
5. Authorised redirect URIs: `https://win.letsgowin.com/api/auth/callback/google`
6. Copy Client ID → paste as `NEXT_PUBLIC_GOOGLE_CLIENT_ID`

---

## Step 2 — JWT Utility

Create `src/lib/jwt.ts`:

```typescript
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export type SessionPayload = {
  email: string;
  name?: string;
  contactId?: string;
  access: {
    free: boolean;
    allAccess: boolean;
    byast: boolean;
    nlbs: boolean;
    suay: boolean;
    "12keys": boolean;
    coachingGroup: boolean;
    mastermind: boolean;
  };
};

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(secret);
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}
```

Install jose: `npm install jose`

---

## Step 3 — Fix the GHL Auth Route

Update `src/app/api/auth/ghl/route.ts` — add `lgw_free` and `lgw_mastermind` to the access map:

```typescript
function buildAccessMap(tags: string[]) {
  const has = (t: string) => tags.includes(t);
  const all = has("lgw_access_all") || has("lgw_mastermind");
  return {
    free:          true,                          // always — free tier is always accessible
    allAccess:     all,
    byast:         all || has("lgw_course_byast"),
    nlbs:          all || has("lgw_course_nlbs"),
    suay:          all || has("lgw_course_suay"),
    "12keys":      all || has("lgw_course_12keys"),
    coachingGroup: has("lgw_coaching_group"),
    mastermind:    has("lgw_mastermind"),
  };
}
```

---

## Step 4 — Session Cookie Helper

Create `src/lib/session.ts`:

```typescript
import { cookies } from "next/headers";
import { signSession, verifySession, SessionPayload } from "./jwt";

const COOKIE_NAME = "lgw_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function setSessionCookie(payload: SessionPayload) {
  const token = await signSession(payload);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return token;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
```

---

## Step 5 — Fix the Middleware

Update `src/middleware.ts` to validate the JWT (not just check existence):

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

const PUBLIC_PATHS = ["/login", "/onboard", "/_next", "/api", "/lgw-logo", "/favicon", "/legal"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("lgw_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/login", request.url));
    res.cookies.delete("lgw_session");
    return res;
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.ico).*)"],
};
```

---

## Step 6 — Opt-In API Route (Frictionless Landing Page → WIN App)

Create `src/app/api/optin/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/session";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

export async function POST(request: NextRequest) {
  const { email, name, firstName, lastName, redirectTo = "/dashboard" } = await request.json();

  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  // 1. Create or update GHL contact
  const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_TOKEN}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId: GHL_LOCATION,
      email,
      firstName: firstName || name?.split(" ")[0] || "",
      lastName: lastName || name?.split(" ").slice(1).join(" ") || "",
      tags: ["lgw_free"],
    }),
  });

  const contactData = await contactRes.json();
  const contact = contactData.contact || contactData;

  // 2. Build session payload
  const sessionPayload = {
    email,
    name: `${contact.firstName || ""} ${contact.lastName || ""}`.trim() || email,
    contactId: contact.id,
    access: {
      free: true,
      allAccess: false,
      byast: false,
      nlbs: false,
      suay: false,
      "12keys": false,
      coachingGroup: false,
      mastermind: false,
    },
  };

  // 3. Set JWT session cookie
  await setSessionCookie(sessionPayload);

  return NextResponse.json({ success: true, redirectTo });
}
```

**How the landing page uses this:**
```javascript
// On opt-in form submit (join.letsgowin.com/morning-routine):
const res = await fetch("https://win.letsgowin.com/api/optin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, name }),
});
const { redirectTo } = await res.json();
window.location.href = `https://win.letsgowin.com${redirectTo}`;
```

> ⚠️ CORS: Add `win.letsgowin.com` to allow origins since join.letsgowin.com calls this endpoint cross-domain. Add a `next.config.js` CORS header or handle in the route.

---

## Step 7 — Fix Google OAuth Callback

Create `src/app/api/auth/callback/google/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/session";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

function parseGoogleJwt(token: string) {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch { return null; }
}

export async function POST(request: NextRequest) {
  const { credential } = await request.json();
  const payload = parseGoogleJwt(credential);
  if (!payload?.email) return NextResponse.json({ error: "invalid token" }, { status: 400 });

  const { email, given_name, family_name } = payload;

  // Look up GHL contact
  const ghlRes = await fetch(
    `https://services.leadconnectorhq.com/contacts/?email=${encodeURIComponent(email)}&locationId=${GHL_LOCATION}`,
    { headers: { Authorization: `Bearer ${GHL_TOKEN}`, Version: "2021-07-28" } }
  );
  const ghlData = await ghlRes.json();
  const contact = ghlData.contacts?.[0];
  const tags: string[] = contact?.tags || [];

  const has = (t: string) => tags.includes(t);
  const all = has("lgw_access_all") || has("lgw_mastermind");

  await setSessionCookie({
    email,
    name: `${given_name || ""} ${family_name || ""}`.trim(),
    contactId: contact?.id,
    access: {
      free: true,
      allAccess: all,
      byast: all || has("lgw_course_byast"),
      nlbs: all || has("lgw_course_nlbs"),
      suay: all || has("lgw_course_suay"),
      "12keys": all || has("lgw_course_12keys"),
      coachingGroup: has("lgw_coaching_group"),
      mastermind: has("lgw_mastermind"),
    },
  });

  // If new user (not in GHL), create contact with lgw_free tag
  if (!contact) {
    await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: { Authorization: `Bearer ${GHL_TOKEN}`, Version: "2021-07-28", "Content-Type": "application/json" },
      body: JSON.stringify({ locationId: GHL_LOCATION, email, firstName: given_name, lastName: family_name, tags: ["lgw_free"] }),
    });
  }

  return NextResponse.json({ success: true });
}
```

**Update `src/app/login/page.tsx` Google handler:**
```javascript
const handleGoogleSuccess = async (credential: string) => {
  await fetch("/api/auth/callback/google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ credential }),
  });
  const onboarded = localStorage.getItem("lgw_onboarded");
  router.push(onboarded ? "/dashboard" : "/onboard");
};
```

---

## Step 8 — Post-Purchase Webhook

Create `src/app/api/webhooks/ghl-purchase/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;
const WEBHOOK_SECRET = process.env.GHL_WEBHOOK_SECRET!;

// Maps GHL product/plan slug → access tag
const PRODUCT_TAG_MAP: Record<string, string> = {
  "all-access-monthly":  "lgw_access_all",
  "all-access-annual":   "lgw_access_all",
  "course-byast":        "lgw_course_byast",
  "course-nlbs":         "lgw_course_nlbs",
  "course-suay":         "lgw_course_suay",
  "12keys":              "lgw_course_12keys",
  "group-coaching":      "lgw_coaching_group",
  "mastermind":          "lgw_mastermind",
};

export async function POST(request: NextRequest) {
  // Verify secret header (set this in GHL workflow HTTP action)
  const secret = request.headers.get("x-webhook-secret");
  if (secret !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { email, contactId, product } = body;

  if (!email && !contactId) return NextResponse.json({ error: "email or contactId required" }, { status: 400 });
  if (!product) return NextResponse.json({ error: "product required" }, { status: 400 });

  const tag = PRODUCT_TAG_MAP[product];
  if (!tag) return NextResponse.json({ error: `unknown product: ${product}` }, { status: 400 });

  // Add tag to GHL contact
  let id = contactId;
  if (!id && email) {
    const res = await fetch(
      `https://services.leadconnectorhq.com/contacts/?email=${encodeURIComponent(email)}&locationId=${GHL_LOCATION}`,
      { headers: { Authorization: `Bearer ${GHL_TOKEN}`, Version: "2021-07-28" } }
    );
    const data = await res.json();
    id = data.contacts?.[0]?.id;
  }

  if (!id) return NextResponse.json({ error: "contact not found" }, { status: 404 });

  await fetch(`https://services.leadconnectorhq.com/contacts/${id}/tags`, {
    method: "POST",
    headers: { Authorization: `Bearer ${GHL_TOKEN}`, Version: "2021-07-28", "Content-Type": "application/json" },
    body: JSON.stringify({ tags: [tag] }),
  });

  // Note: user's existing session cookie won't auto-update.
  // On next page load, middleware validates JWT — but access claims are from login time.
  // Solution: on /dashboard load, re-fetch /api/auth/ghl?email=xxx and compare tags.
  // If new tags found → call /api/auth/refresh to reissue cookie.
  return NextResponse.json({ success: true, tag });
}
```

**GHL Workflow setup (for each product purchase):**
- Trigger: Order Submitted / Payment Received
- Action: HTTP Request → POST → `https://win.letsgowin.com/api/webhooks/ghl-purchase`
- Headers: `x-webhook-secret: <your GHL_WEBHOOK_SECRET value>`
- Body (JSON):
```json
{
  "email": "{{contact.email}}",
  "contactId": "{{contact.id}}",
  "product": "all-access-monthly"
}
```
(Change `product` value per workflow)

---

## Step 9 — Session Refresh Route

Create `src/app/api/auth/refresh/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getSession, setSessionCookie } from "@/lib/session";

const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "not authenticated" }, { status: 401 });

  const { email } = session;

  const res = await fetch(
    `https://services.leadconnectorhq.com/contacts/?email=${encodeURIComponent(email)}&locationId=${GHL_LOCATION}`,
    { headers: { Authorization: `Bearer ${GHL_TOKEN}`, Version: "2021-07-28" } }
  );
  const data = await res.json();
  const contact = data.contacts?.[0];
  const tags: string[] = contact?.tags || [];

  const has = (t: string) => tags.includes(t);
  const all = has("lgw_access_all") || has("lgw_mastermind");

  const newSession = {
    ...session,
    access: {
      free: true,
      allAccess: all,
      byast: all || has("lgw_course_byast"),
      nlbs: all || has("lgw_course_nlbs"),
      suay: all || has("lgw_course_suay"),
      "12keys": all || has("lgw_course_12keys"),
      coachingGroup: has("lgw_coaching_group"),
      mastermind: has("lgw_mastermind"),
    },
  };

  await setSessionCookie(newSession);
  return NextResponse.json({ success: true, access: newSession.access });
}
```

**How to use this on the dashboard** (call on mount, compare to cached access):
```javascript
// In dashboard — after post-purchase return, refresh claims:
useEffect(() => {
  if (searchParams.get("purchased")) {
    fetch("/api/auth/refresh", { method: "POST" }).then(() => router.refresh());
  }
}, []);
```

---

## Step 10 — Content Gating

Once the JWT is real, gating a page server-side is one function call:

```typescript
// In any server component or layout:
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const session = await getSession();
if (!session?.access.byast) redirect("/products?locked=byast");
```

**Gate map:**
| Route | Required access claim |
|-------|----------------------|
| `/tools/morning-routine` | `free` (always true) |
| `/courses/victor-challenge` | `free` (always true) |
| `/courses/building-your-all-star-team` | `byast` |
| `/courses/nobody-likes-to-be-sold` | `nlbs` |
| `/courses/show-up-as-you` | `suay` |
| `/courses/12-keys` | `12keys` |
| `/talks` | `allAccess` OR purchased individual talk |
| `/tools/*` (all tools) | `free` (Morning Routine tools) |

---

## Checkout Return URL

Set per product in pay.letsgowin.com / GHL checkout:
```
https://win.letsgowin.com/dashboard?purchased=all-access-monthly
https://win.letsgowin.com/courses/building-your-all-star-team?purchased=course-byast
https://win.letsgowin.com/courses/nobody-likes-to-be-sold?purchased=course-nlbs
https://win.letsgowin.com/courses/show-up-as-you?purchased=course-suay
```

The `?purchased=` param triggers the `/api/auth/refresh` call on dashboard load.

---

## Build Order Summary

1. ✅ Install jose: `npm install jose`
2. ✅ Add env vars to Vercel + .env.local
3. ✅ Set up Google Cloud OAuth client
4. ✅ Create `src/lib/jwt.ts`
5. ✅ Create `src/lib/session.ts`
6. ✅ Update `src/middleware.ts`
7. ✅ Create `src/app/api/optin/route.ts`
8. ✅ Create `src/app/api/auth/callback/google/route.ts`
9. ✅ Update Google handler in `src/app/login/page.tsx`
10. ✅ Create `src/app/api/webhooks/ghl-purchase/route.ts`
11. ✅ Create `src/app/api/auth/refresh/route.ts`
12. ✅ Add GHL post-purchase workflows (one per product)
13. ✅ Add content gating to protected routes
14. ✅ Set checkout return URLs in pay.letsgowin.com

---

## What Jason Builds After (Separate Track)

- Opt-in landing page at `join.letsgowin.com/morning-routine` (calls `/api/optin`)
- Morning Routine course page in WIN platform (`/tools/morning-routine`) with Bunny video embeds
