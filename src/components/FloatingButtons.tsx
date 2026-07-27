"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_HREF = `https://wa.me/918287536480?text=${encodeURIComponent(
  "Can I know more about your services?"
)}`;

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [waHovered, setWaHovered] = useState(false);
  const [waShown, setWaShown] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 400);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setWaShown(true), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setWaHovered(true)}
        onMouseLeave={() => setWaHovered(false)}
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 50,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: waHovered
            ? "0 8px 24px rgba(37,211,102,0.45), 0 1px 4px rgba(0,0,0,0.15)"
            : "0 4px 16px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.1)",
          opacity: waShown ? 1 : 0,
          transform: waShown ? `scale(${waHovered ? 1.08 : 1})` : "scale(0.6)",
          transition: "opacity 0.4s ease, transform 0.25s ease, box-shadow 0.2s ease",
          pointerEvents: waShown ? "auto" : "none",
        }}
      >
        <WhatsAppIcon size={30} />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 ${
          showBackToTop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
