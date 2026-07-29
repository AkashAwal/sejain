import type { Metadata } from "next";
import Image from "next/image";
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

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Visit Us
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Step into the gallery.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Photos only tell half the story. Come see the brushwork, scale, and
          texture in person at our studio in Malviya Nagar, New Delhi.
        </p>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/studio/gallery-wall-wide.webp"
            alt="Wall of framed original paintings at Sejain Art Studio & Academy"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/studio/gallery-wall-detail.webp"
              alt="Detail of paintings displayed on the gallery wall"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/studio/sculptures-display.webp"
              alt="Clay sculptures and mixed-media pieces on display at the studio"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
