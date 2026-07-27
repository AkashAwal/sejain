import type { Metadata } from "next";
import { Suspense } from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission an original painting from Sejain Art Studio & Academy - a guided process from first conversation to a finished piece made for your space.",
  alternates: { canonical: "/commissions" },
};

const commitments = [
  {
    title: "Experienced Artist",
    body: "Work with an award-winning artist with decades of expertise.",
  },
  {
    title: "Unique Creations",
    body: "Receive custom-designed artwork tailored to your specific vision and needs.",
  },
  {
    title: "Variety of Mediums",
    body: "Choose from oil, acrylic, watercolors, resin, clay, and many more for your commissioned piece.",
  },
  {
    title: "Personalized Service",
    body: "Enjoy a collaborative process where your ideas and preferences guide the creation.",
  },
  {
    title: "Proven Satisfaction",
    body: "Join our many satisfied clients who have transformed their spaces with our art.",
  },
  {
    title: "Passion and Quality",
    body: "Expect meticulous attention to detail and a commitment to excellence in every piece.",
  },
];

const faqs = [
  {
    q: "How long does a commission take?",
    a: "Most single-canvas commissions take two to six weeks from approved sketch to delivery, depending on size, detail, and current queue. Rush timelines can sometimes be accommodated - ask when you enquire.",
  },
  {
    q: "Can I request changes after the sketch is approved?",
    a: "Small adjustments are fine early in the painting process. Because oil and mixed media build up in layers, major composition changes after painting has begun may affect timeline and cost - this is why the sketch stage matters.",
  },
  {
    q: "Do you work from photos?",
    a: "Yes, for portraits and pet commissions, a clear, well-lit reference photo works well. We'll let you know if a photo isn't quite usable before starting.",
  },
  {
    q: "Do you ship outside Delhi?",
    a: "Yes, finished pieces are packed and shipped across India. Shipping cost depends on size and destination and is quoted separately from the piece itself.",
  },
];

export default function CommissionsPage() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 pb-8 pt-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Commissions
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Have something in mind? Let&rsquo;s paint it.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          From a single portrait to a multi-panel piece built for a specific
          wall, every commission starts as a conversation and moves through a
          clear, guided process - no surprises at delivery.
        </p>
        <Button href="#request" className="mt-8 inline-flex">
          Start a Commission
        </Button>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Commitment to Excellence
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          What every commission includes.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item) => (
            <div key={item.title} className="border border-black/[.08] bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold uppercase tracking-wide text-black">
                {item.title}
              </p>
              <p className="mt-3 text-lg text-zinc-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="request" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 scroll-mt-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get a Quote
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
              Tell us what you have in mind.
            </h2>
            <p className="mt-6 max-w-md text-lg text-zinc-600">
              Share a few details and, if you have one, a reference photo or
              inspiration image - we&rsquo;ll follow up with questions and a
              rough estimate before anything is confirmed.
            </p>
          </div>

          <Suspense>
            <CommissionForm />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          FAQ
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Common questions.
        </h2>

        <div className="mt-10 flex flex-col divide-y divide-black/[.08] border-t border-black/[.08]">
          {faqs.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-black">
                {item.q}
                <span className="shrink-0 text-2xl text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
