import { NextResponse } from "next/server";
import { form } from "@/content/contact";
import { marc } from "@/content/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Bots fill the honeypot. Accept silently so they don't learn they were caught.
  if (String(payload[form.honeypotName] ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const field of form.fields) {
    const value = String(payload[field.name] ?? "").trim();
    values[field.name] = value;
    if (field.required && !value) {
      errors[field.name] = "Required.";
    } else if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
      errors[field.name] = "Invalid email address.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // TODO: send this to marc.email via Resend/SMTP. Needs an API key in env
  // before it will actually deliver — until then submissions are logged only.
  console.log(`[contact] new submission for ${marc.email}`, values);

  return NextResponse.json({ ok: true });
}
