import { NextRequest, NextResponse } from "next/server";

const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.info", "guerrillamail.biz",
  "guerrillamail.de", "guerrillamail.net", "guerrillamail.org", "grr.la",
  "sharklasers.com", "10minutemail.com", "10minutemail.net", "tempmail.com",
  "throwaway.email", "yopmail.com", "spam4.me", "trashmail.com", "trashmail.me",
  "trashmail.net", "fakeinbox.com", "mailnesia.com", "maildrop.cc",
  "dispostable.com", "mailnull.com", "spamgourmet.com", "spamfree24.org",
  "getairmail.com", "filzmail.com", "tempr.email", "discard.email",
  "cfl.fr", "jetable.fr.nf", "spamhereplease.com", "spamthisplease.com",
]);

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.email || typeof body.email !== "string") {
    return NextResponse.json({ valid: false, reason: "Invalid input" });
  }

  const email = body.email.trim().toLowerCase();

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return NextResponse.json({ valid: false, reason: "Invalid email format" });
  }

  const [local, domain] = email.split("@");

  if (DISPOSABLE.has(domain)) {
    return NextResponse.json({
      valid: false,
      reason: "Disposable email addresses are not accepted",
    });
  }

  if (
    /^[a-z]{1,3}[0-9]{5,}$/i.test(local) ||
    /^(.)\1{4,}/.test(local) ||
    /^(asdf|qwerty|test|temp|fake|none|noemail|noreply)/i.test(local)
  ) {
    return NextResponse.json({
      valid: false,
      reason: "Please enter a real email address",
    });
  }

  try {
    const doh = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`,
      { headers: { Accept: "application/dns-json" } },
    );
    const data = await doh.json();
    if (data.Status !== 0 || !data.Answer?.length) {
      return NextResponse.json({
        valid: false,
        reason: "This email domain cannot receive emails",
      });
    }
    return NextResponse.json({ valid: true });
  } catch {
    return NextResponse.json({ valid: true });
  }
}
