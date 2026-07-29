import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquireButton from "@/components/EnquireButton";
import { ADVISORY, SHIPPING_AND_RETURN, artworks } from "@/data/artworks";

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
    title: artwork.name,
    description: artwork.description,
    alternates: { canonical: `/gallery/${artwork.slug}` },
    openGraph: {
      title: artwork.name,
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
        >
          {artwork.image && (
            <Image
              src={artwork.image}
              alt={artwork.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {artwork.categories.join(", ")}
          </p>
          <h1 className="mt-2 text-4xl font-bold uppercase leading-tight text-black">
            {artwork.name}
          </h1>
          <p className="mt-4 text-2xl text-zinc-700">{artwork.price}</p>
          <p className="mt-6 text-lg text-zinc-600">{artwork.description}</p>

          <dl className="mt-6 space-y-2 text-sm text-zinc-600">
            <div className="flex gap-2">
              <dt className="font-semibold text-black">Medium:</dt>
              <dd>{artwork.medium}</dd>
            </div>
            {artwork.dimensions && (
              <div className="flex gap-2">
                <dt className="font-semibold text-black">Dimensions:</dt>
                <dd>{artwork.dimensions}</dd>
              </div>
            )}
          </dl>

          <EnquireButton
            subject={artwork.name}
            message={`I'd like to enquire about "${artwork.name}" (${artwork.price}).`}
            reason="Gallery / purchase enquiry"
            className="mt-8 inline-flex"
          >
            Enquire
          </EnquireButton>

          <div className="mt-10 space-y-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
            <div>
              <p className="font-semibold uppercase tracking-widest text-zinc-600">
                Shipping &amp; Return
              </p>
              <p className="mt-1">{SHIPPING_AND_RETURN}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-widest text-zinc-600">
                Advisory
              </p>
              <p className="mt-1">{ADVISORY}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
