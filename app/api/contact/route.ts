import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "quintileadvisory@quintileadvisory.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Quintile Advisory <onboarding@resend.dev>";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function esc(v: string) {
  return String(v).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bots without doing anything.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const companyName = (body.companyName || "").trim();
  const phone = (body.phone || "").trim();
  const lookingFor = (body.lookingFor || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submission = {
    name, email, companyName, phone, lookingFor, message,
    submittedAt: new Date().toISOString(),
  };

  // --- Optional: store in Supabase (if configured) ---
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(submission),
      });
    } catch (e) {
      console.error("Supabase store failed:", e);
    }
  }

  // --- Optional: email notification via Resend (if configured) ---
  if (process.env.RESEND_API_KEY) {
    const html = `
      <h2 style="font-family:Georgia,serif;color:#042c53">New enquiry — Quintile Advisory</h2>
      <table style="font-family:Arial,sans-serif;font-size:14px;color:#10263f">
        <tr><td style="padding:4px 12px 4px 0"><b>Name</b></td><td>${esc(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><b>Company</b></td><td>${esc(companyName) || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><b>Email</b></td><td>${esc(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><b>Phone</b></td><td>${esc(phone) || "—"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><b>Looking for</b></td><td>${esc(lookingFor) || "—"}</td></tr>
      </table>
      <p style="font-family:Arial,sans-serif;font-size:14px;color:#10263f;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>
    `;
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: email,
          subject: `New enquiry from ${name}${companyName ? ` · ${companyName}` : ""}`,
          html,
        }),
      });
      if (!r.ok) console.error("Resend failed:", await r.text());

      // Automated confirmation to sender
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [email],
          subject: "Thank you for contacting Quintile Advisory",
          html: `<p style="font-family:Georgia,serif;color:#042c53;font-size:18px">Thank you, ${esc(name)}.</p>
          <p style="font-family:Arial,sans-serif;color:#10263f;font-size:14px">We've received your message and typically respond within one business day.</p>
          <p style="font-family:Arial,sans-serif;color:#52657a;font-size:13px">— Quintile Advisory · Chicago, Illinois</p>`,
        }),
      });
    } catch (e) {
      console.error("Email send failed:", e);
    }
  } else {
    // No email provider configured yet — log so submissions aren't lost in dev.
    console.log("[contact] submission received:", submission);
  }

  return NextResponse.json({ ok: true });
}
