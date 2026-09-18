import { createHmac, randomUUID } from "crypto";
import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createDownloadToken(secret: string) {
  const timestamp = Date.now().toString();
  const nonce = randomUUID();
  const value = `${timestamp}.${nonce}`;
  const signature = createHmac("sha256", secret).update(value).digest("hex");
  return `${value}.${signature}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown; website?: unknown };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (body.website) {
      return NextResponse.json({ message: "Unable to process this request." }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;
    const downloadSecret = process.env.LEAD_MAGNET_SECRET;

    if (!apiKey || !groupId || !downloadSecret) {
      console.error("Lead magnet environment variables are not configured.");
      return NextResponse.json({ message: "The signup form is temporarily unavailable. Please try again soon." }, { status: 503 });
    }

    const mailerLiteResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, groups: [groupId] }),
      cache: "no-store",
    });

    if (!mailerLiteResponse.ok) {
      console.error("MailerLite subscription failed:", mailerLiteResponse.status);
      return NextResponse.json({ message: "We couldn't add your email. Please check it and try again." }, { status: 502 });
    }

    const token = createDownloadToken(downloadSecret);
    return NextResponse.json({
      message: "Your meal plan is ready.",
      downloadUrl: `/api/meal-plan?token=${encodeURIComponent(token)}`,
    });
  } catch {
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
