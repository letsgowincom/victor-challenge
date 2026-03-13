import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_TOKEN = process.env.GHL_API_TOKEN!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const OPTIN_TAG = "victor-challenge-optin";

interface OptInBody {
  firstName: string;
  email: string;
  phone: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: OptInBody = await req.json();
    const { firstName, email, phone } = body;

    // Basic validation
    if (!firstName || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const headers = {
      Authorization: `Bearer ${GHL_TOKEN}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    };

    // 1. Create or update contact in GHL
    const contactPayload = {
      firstName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      tags: [OPTIN_TAG],
      source: "victor-challenge-optin-page",
    };

    const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify(contactPayload),
    });

    if (!contactRes.ok) {
      const errText = await contactRes.text();
      console.error("GHL contact upsert failed:", contactRes.status, errText);
      return NextResponse.json(
        { error: "Failed to register. Please try again." },
        { status: 502 }
      );
    }

    const contactData = await contactRes.json();
    const contactId: string = contactData?.contact?.id;

    // 2. If we got a contact ID, explicitly add the tag to ensure workflow fires
    if (contactId) {
      await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
        method: "POST",
        headers,
        body: JSON.stringify({ tags: [OPTIN_TAG] }),
      }).catch((err) => {
        // Non-fatal — tag was already set in upsert
        console.warn("Tag add step failed (non-fatal):", err);
      });
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("Opt-in API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
