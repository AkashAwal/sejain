"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { FaPhone, FaRegFileLines, FaXmark } from "react-icons/fa6";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const PHONE = "+918287536480";
const WA_BASE = "https://wa.me/918287536480";

function EnquireModal({
  subject,
  message,
  formHref,
  onClose,
}: {
  subject: string;
  message: string;
  formHref: string;
  onClose: () => void;
}) {
  const waUrl = `${WA_BASE}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-zinc-500 hover:text-black"
        >
          <FaXmark size={18} />
        </button>

        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Enquire About
        </p>
        <p className="mt-2 text-xl font-bold text-black">{subject}</p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366] px-5 py-5 text-white"
          >
            <WhatsAppIcon size={26} />
            <span className="text-lg font-semibold">WhatsApp Us</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-4 bg-primary px-5 py-5 text-white"
          >
            <FaPhone size={24} />
            <span className="text-lg font-semibold">Call Us</span>
          </a>

          <Link
            href={formHref}
            onClick={onClose}
            className="flex items-center gap-4 border border-black/[.12] px-5 py-5 text-black"
          >
            <FaRegFileLines size={24} />
            <span className="text-lg font-semibold">Contact Form</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Drop-in replacement for a Button-styled Link to /contact - opens a
 * WhatsApp / Call / Contact form popup instead of navigating straight there.
 */
export default function EnquireButton({
  subject,
  message,
  reason,
  children,
  className = "",
}: {
  /** Shown in the modal (e.g. artwork name or course title). */
  subject: string;
  /** Pre-filled WhatsApp message and contact form message. */
  message: string;
  /** Pre-filled contact form "reason" field. */
  reason: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const formHref = `/contact?reason=${encodeURIComponent(reason)}&message=${encodeURIComponent(message)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 ${className}`}
      >
        <span className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:translate-x-0" />
        <span className="relative z-10">{children}</span>
      </button>
      {open && (
        <EnquireModal
          subject={subject}
          message={message}
          formHref={formHref}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
