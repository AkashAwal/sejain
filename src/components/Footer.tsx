import Image from "next/image";
import Link from "next/link";
import RequestCallForm from "@/components/RequestCallForm";

const linkGroups = [
  {
    heading: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/artist" },
      { label: "Gallery", href: "/gallery" },
      { label: "Shop Art", href: "/gallery" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Academy Classes", href: "/art-academy" },
      { label: "Commissions", href: "/commissions" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Mail Us", href: "mailto:hello@sejain.com" },
      { label: "Reviews", href: "/#testimonials" },
    ],
  },
];

function InstagramIcon() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <rect x={3} y={3} width={18} height={18} rx={5} />
        <circle cx={12} cy={12} r={4} />
        <circle cx={17.4} cy={6.6} r={1} fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}

function FacebookIcon() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2A19 19 0 0 0 14.2 5c-2.1 0-3.6 1.3-3.6 3.7V11H8.2v2.8h2.4V21h2.9Z" />
      </svg>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 21h-3.38v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.39V21h-3.38V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21Z" />
      </svg>
    </a>
  );
}

function GoogleIcon() {
  return (
    <a
      href="https://www.google.com/maps/place/?q=place_id:ChIJfx5JdSmQTKMRRoN-9PfxMtU"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Google Business Profile"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] bg-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 48 48" className="h-5 w-5">
        <path
          fill="#4285F4"
          d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17Z"
        />
        <path
          fill="#34A853"
          d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46Z"
        />
        <path
          fill="#FBBC05"
          d="M11.69 28.18A13.9 13.9 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A22 22 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7Z"
        />
        <path
          fill="#EA4335"
          d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07Z"
        />
      </svg>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.6c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm2.2.2 6.8 5.5 6.8-5.5H5.2ZM19 8.4l-6.4 5.2a1 1 0 0 1-1.2 0L5 8.4V18h14V8.4Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.8A2.8 2.8 0 1 1 12 6.2a2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] bg-background">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-10 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:items-start">
        <div className="flex flex-col gap-6 lg:row-span-2">
          <Image
            src="/sejain-logo.png"
            alt="Sejain"
            width={1436}
            height={484}
            className="h-14 w-auto"
          />
          <p className="max-w-xs text-sm text-zinc-600">
            Original paintings, commissions, and hands-on art education from
            our studio in Malviya Nagar, New Delhi.
          </p>

          <div className="flex flex-col gap-3 text-sm text-zinc-600">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <PhoneIcon />
              +91 00000 00000
            </a>
            <a
              href="mailto:hello@sejain.com"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MailIcon />
              hello@sejain.com
            </a>
            <p className="flex items-start gap-2">
              <PinIcon />
              N Block, M73-B, opp. Sant Nirankari School, Malviya Nagar, New
              Delhi, Delhi 110017
            </p>
          </div>

          <div className="flex items-center gap-4">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <GoogleIcon />
          </div>
        </div>

        {linkGroups.map((group) => (
          <nav key={group.heading} className="flex flex-col gap-5">
            <p className="text-base font-semibold uppercase tracking-widest text-primary">
              {group.heading}
            </p>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-zinc-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="text-center lg:col-start-2 lg:col-span-3 lg:row-start-2">
          <RequestCallForm />
        </div>
      </div>

      <div className="border-t border-black/[.08]">
        <p className="mx-auto max-w-7xl px-10 py-6 text-xs text-zinc-500">
          {`© ${new Date().getFullYear()} Sejain Art Studio & Academy. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
