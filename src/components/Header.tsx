"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Artist", href: "/artist" },
  { label: "Art Academy", href: "/art-academy" },
  { label: "Commissions", href: "/commissions" },
  { label: "Blog", href: "/blog" },
];

function NavLink({
  href,
  active,
  onClick,
  className,
  children,
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative w-fit transition-colors ${className} ${
        active ? "text-primary" : "text-zinc-600 hover:text-primary"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          active ? "scale-x-100" : ""
        }`}
      />
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {open ? (
        <path d="M6 6l12 12M6 18L18 6" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const lastHidden = useRef(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const next = y < 80 ? false : y > lastY.current;
      lastY.current = y;

      setHidden(next);
      // Close the mobile menu whenever the header's hidden state actually
      // flips, rather than reacting to `hidden` in a separate effect.
      if (next !== lastHidden.current) {
        lastHidden.current = next;
        setMobileOpen(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/[.08] bg-background transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 md:grid md:grid-cols-[auto_1fr_auto]">
        <Link href="/" className="flex items-center justify-self-start">
          <Image
            src="/sejain-logo.png"
            alt="Sejain"
            width={1436}
            height={484}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center justify-self-center gap-8 whitespace-nowrap md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
              className="text-lg font-medium"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <div className="hidden sm:block">
            <Button href="/contact">Contact</Button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-50 flex h-11 w-11 items-center justify-center text-black md:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 top-20 bg-black/40 transition-opacity duration-300 ease-in-out md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Overlay panel - absolutely positioned so it never pushes page content */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-t border-black/[.08] bg-background shadow-lg transition-[max-height] duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 sm:px-10">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-3 sm:hidden">
            <Button href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
