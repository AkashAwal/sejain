import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { artworks } from "@/data/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);
  if (!artwork) return {};

  return {
    title: `${artwork.name} | Sejain Gallery`,
    description: artwork.description,
    openGraph: {
      title: `${artwork.name} | Sejain Gallery`,
      description: artwork.description,
    },
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) {
    notFound();
  }

  const enquireHref = `/contact?reason=${encodeURIComponent("Gallery / purchase enquiry")}&message=${encodeURIComponent(
    `I'd like to enquire about "${artwork.name}" (${artwork.price}).`,
  )}`;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10">
      <Link
        href="/gallery"
        className="text-sm font-semibold uppercase tracking-widest text-primary"
      >
        ← Back to Gallery
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div
          className={`relative w-full overflow-hidden bg-gradient-to-br aspect-[4/5] ${artwork.gradient}`}
        />

        <div>
          <h1 className="text-4xl font-bold uppercase leading-tight text-black">
            {artwork.name}
          </h1>
          <p className="mt-4 text-2xl text-zinc-700">{artwork.price}</p>
          <p className="mt-6 text-lg text-zinc-600">{artwork.description}</p>
          <Button href={enquireHref} className="mt-8 inline-flex">
            Enquire
          </Button>
        </div>
      </div>
    </main>
  );
}
