"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Artist", href: "/artist" },
  { label: "Commissions", href: "/commissions" },
  { label: "Contact", href: "/contact" },
  { label: "Art Academy", href: "/art-academy" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/[.08] bg-background transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-10">
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
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-zinc-600 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact" className="justify-self-end">
          Contact
        </Button>
      </div>
    </header>
  );
}
