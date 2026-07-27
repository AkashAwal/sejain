import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse original paintings from Sejain Art Studio & Academy - each piece one of a kind, ready to ship or collect in person from New Delhi.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 pb-8 pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Gallery
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Original artwork, ready to collect.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-zinc-600">
          Every piece here is one of a kind - no prints, no editions. Once a
          painting sells, it's gone for good. Don't see what you're looking
          for?{" "}
          <Link
            href="/commissions"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Commission one instead.
          </Link>
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-16">
        <GalleryGrid />
      </section>

      <CTASection />
    </main>
  );
}
