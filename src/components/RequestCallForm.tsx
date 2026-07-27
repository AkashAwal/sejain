"use client";

import { useState } from "react";
import { useCountryCode, useHoneypot, usePhoneField } from "@/lib/formHooks";

export default function RequestCallForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const countryCode = useCountryCode();
  const { phone, error, handleChange, validate } = usePhoneField();
  const honeypot = useHoneypot();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot.isBot) return;
    if (!validate()) return;

    setStatus("sending");

    const formData = new FormData();
    formData.set("source", "Request a Call");
    formData.set("phone", phone);
    formData.set("countryCode", countryCode);

    const result = await fetch("/api/contact", { method: "POST", body: formData })
      .then((r) => r.json())
      .catch(() => ({ ok: false }));

    if (!result.ok) {
      setStatus("idle");
      alert("Something went wrong. Please try WhatsApp or call us directly.");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Request a Call
      </p>

      {status === "sent" ? (
        <p className="text-sm text-zinc-600">
          Thanks! We&rsquo;ll call you back soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input {...honeypot.fieldProps} />

          <div>
            <div className="flex">
              <span className="flex shrink-0 items-center justify-center border border-r-0 border-black/[.15] px-3 text-base font-medium text-zinc-600">
                {countryCode}
              </span>
              <input
                type="tel"
                inputMode="numeric"
                required
                value={phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="Your phone number"
                className={`w-full border bg-transparent px-3 py-2 text-base text-black placeholder:text-zinc-400 focus:border-primary focus:outline-none ${
                  error ? "border-red-400" : "border-black/[.15]"
                }`}
              />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
