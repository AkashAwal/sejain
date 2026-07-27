import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import RequestCallForm from "@/components/RequestCallForm";
import { DEVELOPER_NAME, DEVELOPER_URL, SOCIAL_LINKS } from "@/lib/constants";

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
      { label: "Mail Us", href: "mailto:contact@sejain.in" },
      { label: "Reviews", href: "/#testimonials" },
    ],
  },
];

const socialIconClass = "flex h-10 w-10 items-center justify-center rounded-full text-white";

function InstagramIcon() {
  return (
    <a
      href={SOCIAL_LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className={`${socialIconClass} bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]`}
    >
      <FaInstagram className="h-4 w-4" />
    </a>
  );
}

function FacebookIcon() {
  return (
    <a
      href={SOCIAL_LINKS.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className={`${socialIconClass} bg-[#1877F2]`}
    >
      <FaFacebookF className="h-4 w-4" />
    </a>
  );
}

function LinkedInIcon() {
  return (
    <a
      href={SOCIAL_LINKS.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className={`${socialIconClass} bg-[#0A66C2]`}
    >
      <FaLinkedinIn className="h-4 w-4" />
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] bg-white"
    >
      <FcGoogle className="h-4 w-4" />
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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:items-start">
        <div className="flex flex-col gap-6 lg:row-span-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/sejain-logo.png"
              alt="Sejain"
              width={1436}
              height={484}
              className="h-14 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm text-zinc-600">
            Original paintings, commissions, and hands-on art education from
            our studio in Malviya Nagar, New Delhi.
          </p>

          <div className="flex flex-col gap-3 text-sm text-zinc-600">
            <a
              href="tel:+918287536480"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <PhoneIcon />
              82875 36480
            </a>
            <a
              href="tel:+917011894470"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <PhoneIcon />
              70118 94470
            </a>
            <a
              href="mailto:contact@sejain.in"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MailIcon />
              contact@sejain.in
            </a>
            <p className="flex items-start gap-2">
              <PinIcon />
              N Block, M73-B, opp. Sant Nirankari School, Block N, Malviya
              Nagar, New Delhi, Delhi 110017
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            {`© ${new Date().getFullYear()} Sejain Art Studio & Academy. All rights reserved.`}
          </p>
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            {`Website developed by ${DEVELOPER_NAME}`}
          </a>
        </div>
      </div>
    </footer>
  );
}
