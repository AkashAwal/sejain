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
  return (
    <header className="border-b border-black/[.08]">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-10">
        <Link href="/" className="flex items-center justify-self-start">
          <Image
            src="/Sejain Logo.png"
            alt="Sejain"
            width={140}
            height={93}
            className="h-20 w-auto"
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
