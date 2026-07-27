import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData().catch(() => null);
  if (!formData) return NextResponse.json({ ok: false }, { status: 400 });

  const source = String(formData.get("source") ?? "Enquiry");
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const countryCode = formData.get("countryCode");
  const reason = formData.get("reason");
  const message = formData.get("message");
  const file = formData.get("reference");

  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const lines = [
    `New ${source} - Sejain Art Studio & Academy`,
    ``,
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    phone ? `Phone: ${countryCode ?? "+91"} ${phone}` : null,
    reason ? `Reason: ${reason}` : null,
    message ? `Message:\n${message}` : null,
    ``,
    `${time} IST`,
  ].filter((line) => line !== null);

  const text = lines.join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: "Telegram not configured" },
      { status: 500 },
    );
  }

  try {
    if (file instanceof File && file.size > 0) {
      const tgForm = new FormData();
      tgForm.append("chat_id", chatId);
      tgForm.append("caption", text);
      tgForm.append("photo", file, file.name);

      const tgRes = await fetch(
        `https://api.telegram.org/bot${token}/sendPhoto`,
        { method: "POST", body: tgForm },
      );
      if (!tgRes.ok) throw new Error(await tgRes.text());
    } else {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        },
      );
      if (!tgRes.ok) throw new Error(await tgRes.text());
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 502 });
  }
}
