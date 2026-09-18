import { createDecipheriv, createHash, createHmac, timingSafeEqual } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const LINK_LIFETIME_MS = 24 * 60 * 60 * 1000;

function isValidToken(token: string, secret: string) {
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [timestamp, nonce, signature] = parts;
  const issuedAt = Number(timestamp);
  if (!Number.isFinite(issuedAt) || Date.now() - issuedAt > LINK_LIFETIME_MS || issuedAt > Date.now()) return false;

  const expected = createHmac("sha256", secret).update(`${timestamp}.${nonce}`).digest("hex");
  if (signature.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function GET(request: Request) {
  const secret = process.env.LEAD_MAGNET_SECRET;
  const token = new URL(request.url).searchParams.get("token") || "";

  if (!secret || !isValidToken(token, secret)) {
    return NextResponse.json({ message: "This download link is invalid or has expired." }, { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), "private", "free-7-day-low-carb-meal-plan.pdf.enc");
    const encrypted = await readFile(filePath);
    const iv = encrypted.subarray(0, 12);
    const authTag = encrypted.subarray(encrypted.length - 16);
    const ciphertext = encrypted.subarray(12, encrypted.length - 16);
    const key = createHash("sha256").update(secret).digest();
    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);
    const pdf = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return new NextResponse(pdf, {
      headers: {
        "Content-Disposition": 'attachment; filename="Keto-After-40-7-Day-Meal-Plan.pdf"',
        "Content-Type": "application/pdf",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ message: "The meal plan could not be loaded." }, { status: 500 });
  }
}
