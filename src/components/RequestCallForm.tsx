"use client";

import { useState } from "react";

export default function RequestCallForm() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Request a Call
      </p>

      {submitted ? (
        <p className="text-sm text-zinc-600">
          Thanks! We&rsquo;ll call you back soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            className="w-full border border-black/[.15] bg-transparent px-3 py-2 text-sm text-black placeholder:text-zinc-400 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
