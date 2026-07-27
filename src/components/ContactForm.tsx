"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCountryCode, useEmailValidation, useHoneypot, usePhoneField } from "@/lib/formHooks";

const inputClass =
  "w-full border border-black/[.15] bg-transparent px-4 py-3 text-base text-black placeholder:text-zinc-400 focus:border-primary focus:outline-none";

const reasons = [
  "Commission enquiry",
  "Gallery / purchase enquiry",
  "Art Academy classes",
  "Studio visit",
  "Something else",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledMessage = searchParams.get("message") ?? "";
  const prefilledReason = searchParams.get("reason");

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(
    prefilledReason && reasons.includes(prefilledReason)
      ? prefilledReason
      : reasons[0],
  );
  const [message, setMessage] = useState(prefilledMessage);

  const countryCode = useCountryCode();
  const { phone, error: phoneError, handleChange: handlePhoneChange, validate: validatePhone } = usePhoneField();
  const email_ = useEmailValidation();
  const honeypot = useHoneypot();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (honeypot.isBot) return;
    if (!validatePhone()) return;

    if (email_.state !== "valid") {
      const ok = await email_.check(email);
      if (!ok) return;
    }

    setStatus("sending");

    const formData = new FormData();
    formData.set("source", "Contact Enquiry");
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("countryCode", countryCode);
    formData.set("reason", reason);
    formData.set("message", message);

    const result = await fetch("/api/contact", { method: "POST", body: formData })
      .then((r) => r.json())
      .catch(() => ({ ok: false }));

    if (!result.ok) {
      setStatus("idle");
      alert("Something went wrong sending your message. Please try WhatsApp or email us directly.");
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 border border-black/[.08] bg-white p-10 shadow-sm">
        <p className="text-2xl font-bold uppercase text-black">
          Message sent.
        </p>
        <p className="text-zinc-700">
          Thanks for reaching out - we&rsquo;ll get back to you within a day
          or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input {...honeypot.fieldProps} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />

        <div>
          <div className="flex">
            <span className="flex shrink-0 items-center justify-center border border-r-0 border-black/[.15] px-3 text-base font-medium text-zinc-600">
              {countryCode}
            </span>
            <input
              type="tel"
              inputMode="numeric"
              required
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={10}
              placeholder="Phone number"
              className={`${inputClass} ${phoneError ? "border-red-400" : ""}`}
            />
          </div>
          {phoneError && <p className="mt-1 text-xs text-red-500">{phoneError}</p>}
        </div>
      </div>

      <div>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            email_.reset();
          }}
          onBlur={(e) => e.target.value && email_.check(e.target.value)}
          placeholder="Email address"
          className={`${inputClass} ${email_.state === "invalid" ? "border-red-400" : ""}`}
        />
        {email_.error && <p className="mt-1 text-xs text-red-500">{email_.error}</p>}
      </div>

      <select
        name="reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className={`${inputClass} appearance-none`}
      >
        {reasons.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>

      <textarea
        required
        name="message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us a little about what you're looking for"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative inline-flex w-fit items-center justify-center overflow-hidden bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-60"
      >
        <span className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:translate-x-0" />
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : "Send Message"}
        </span>
      </button>
    </form>
  );
}
