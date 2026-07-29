import type { Metadata } from "next";
import { Suspense } from "react";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sejain Art Studio & Academy in Malviya Nagar, New Delhi - for commissions, classes, gallery enquiries, or a studio visit.",
  alternates: { canonical: "/contact" },
};

const WA_HREF = `https://wa.me/918287536480?text=${encodeURIComponent(
  "Can I know more about your services?",
)}`;

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 pb-8 pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Let&rsquo;s talk about your next piece.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Commission enquiries, class sign-ups, gallery questions, or just
          want to see the studio - reach out any way that&rsquo;s easiest.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col gap-6">
              <a
                href="tel:+918287536480"
                className="flex items-start gap-4 transition-colors hover:text-primary"
              >
                <FaPhone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Phone
                  </p>
                  <p className="mt-1 text-lg text-black">82875 36480</p>
                  <p className="text-lg text-black">70118 94470</p>
                </div>
              </a>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 transition-colors hover:text-primary"
              >
                <WhatsAppIcon size={16} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-lg text-black">
                    Message us directly
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@sejain.in"
                className="flex items-start gap-4 transition-colors hover:text-primary"
              >
                <FaEnvelope className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 text-lg text-black">contact@sejain.in</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <FaLocationDot className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Studio
                  </p>
                  <p className="mt-1 max-w-xs text-lg text-black">
                    N Block, M73-B, opp. Sant Nirankari School, Block N,
                    Malviya Nagar, New Delhi, Delhi 110017
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Studio Hours
                  </p>
                  <p className="mt-1 text-lg text-black">
                    Tue–Sun, 11 AM–6 PM
                  </p>
                  <p className="text-sm text-zinc-500">Closed Mondays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:col-start-2 lg:row-start-1">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          <div className="order-3 aspect-[4/3] w-full overflow-hidden lg:col-start-1 lg:row-start-2">
            <iframe
              title="Sejain Art Studio & Academy location"
              src="https://www.google.com/maps?q=N+Block,+M73-B,+Malviya+Nagar,+New+Delhi,+Delhi+110017&output=embed"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
