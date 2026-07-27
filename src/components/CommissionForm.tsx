"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaUpload, FaX } from "react-icons/fa6";
import { useCountryCode, useEmailValidation, useHoneypot, usePhoneField } from "@/lib/formHooks";

const inputClass =
  "w-full border border-black/[.15] bg-transparent px-4 py-3 text-base text-black placeholder:text-zinc-400 focus:border-primary focus:outline-none";

const sizes = ["Small Canvas", "Medium Canvas", "Large & Multi-Panel", "Not sure yet"];

export default function CommissionForm() {
  const searchParams = useSearchParams();
  const prefilledMessage = searchParams.get("message") ?? "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState(sizes[0]);
  const [description, setDescription] = useState(prefilledMessage);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const countryCode = useCountryCode();
  const { phone, error: phoneError, handleChange: handlePhoneChange, validate: validatePhone } = usePhoneField();
  const email_ = useEmailValidation();
  const honeypot = useHoneypot();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.files?.[0] ?? null;
    if (preview) URL.revokeObjectURL(preview);
    setFile(next);
    setPreview(next ? URL.createObjectURL(next) : null);
  }

  function removeFile() {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
  }

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
    formData.set("source", "Commission Request");
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("countryCode", countryCode);
    formData.set("reason", size);
    formData.set("message", description);
    if (file) formData.set("reference", file);

    const result = await fetch("/api/contact", { method: "POST", body: formData })
      .then((r) => r.json())
      .catch(() => ({ ok: false }));

    if (!result.ok) {
      setStatus("idle");
      alert("Something went wrong sending your request. Please try WhatsApp or email us directly.");
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 border border-black/[.08] bg-white p-10 shadow-sm">
        <p className="text-2xl font-bold uppercase text-black">
          Request sent.
        </p>
        <p className="text-zinc-700">
          Thanks for the details - we&rsquo;ll follow up with questions and a
          rough estimate within a day or two.
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
        name="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className={`${inputClass} appearance-none`}
      >
        {sizes.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <textarea
        required
        name="description"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Tell us about the subject, space, and mood you're after"
        className={`${inputClass} resize-none`}
      />

      <div>
        <label
          htmlFor="reference"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-black/[.2] px-4 py-8 text-center transition-colors hover:border-primary"
        >
          <FaUpload className="h-5 w-5 text-zinc-400" />
          <span className="text-base font-semibold uppercase tracking-wide text-black">
            Upload a reference image
          </span>
          <span className="text-xs text-zinc-500">
            Optional - a photo, sketch, or inspiration image
          </span>
          <input
            id="reference"
            type="file"
            name="reference"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {preview && file && (
          <div className="mt-3 flex items-center gap-4 border border-black/[.15] p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Reference preview"
              className="h-16 w-16 shrink-0 object-cover"
            />
            <p className="flex-1 truncate text-sm text-zinc-600">
              {file.name}
            </p>
            <button
              type="button"
              onClick={removeFile}
              aria-label="Remove uploaded image"
              className="shrink-0 text-zinc-400 transition-colors hover:text-primary"
            >
              <FaX className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative inline-flex w-fit items-center justify-center overflow-hidden bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-60"
      >
        <span className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:translate-x-0" />
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : "Send Request"}
        </span>
      </button>
    </form>
  );
}
