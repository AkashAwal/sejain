"use client";

import { useEffect, useState } from "react";

/** Detects the visitor's calling code from their IP - no manual country picker. */
export function useCountryCode(defaultCode = "+91") {
  const [countryCode, setCountryCode] = useState(defaultCode);

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.calling_code) setCountryCode(`+${d.calling_code}`);
      })
      .catch(() => {});
  }, []);

  return countryCode;
}

/** Digits-only, 10-character phone field. */
export function usePhoneField() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    setError(digits.length > 0 && digits.length < 10 ? "Must be 10 digits" : "");
  }

  function validate() {
    if (phone.length !== 10) {
      setError("Must be 10 digits");
      return false;
    }
    return true;
  }

  return { phone, error, handleChange, validate };
}

/**
 * Invisible honeypot field - real visitors never see or fill it, so any
 * submission with it filled in is a bot and should be silently dropped.
 */
export function useHoneypot() {
  const [honeypot, setHoneypot] = useState("");

  const fieldProps = {
    type: "text" as const,
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": true,
    value: honeypot,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value),
    style: {
      position: "absolute" as const,
      left: "-9999px",
      opacity: 0,
      height: 0,
      pointerEvents: "none" as const,
    },
  };

  return { isBot: honeypot.length > 0, fieldProps };
}

type EmailState = "idle" | "checking" | "valid" | "invalid";

/** Validates format, blocks disposable/gibberish addresses, and confirms the domain has MX records. */
export function useEmailValidation() {
  const [state, setState] = useState<EmailState>("idle");
  const [error, setError] = useState("");

  async function check(email: string) {
    if (!email) return false;
    setState("checking");
    setError("");
    try {
      const res = await fetch("/api/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.valid) {
        setState("valid");
        return true;
      }
      setState("invalid");
      setError(data.reason ?? "Invalid email address");
      return false;
    } catch {
      setState("idle");
      return true;
    }
  }

  function reset() {
    setState("idle");
    setError("");
  }

  return { state, error, check, reset };
}
