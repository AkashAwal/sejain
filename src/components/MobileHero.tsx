import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { artworks } from "@/data/artworks";

const ganges = artworks.find((a) => a.slug === "ganges")!;
const petalsOne = artworks.find((a) => a.slug === "petals-of-tranquility-part-1")!;
const petalsTwo = artworks.find((a) => a.slug === "petals-of-tranquility-part-2")!;

function ArtworkCard({ art }: { art: (typeof artworks)[number] }) {
  return (
    <Link href={`/gallery/${art.slug}`} className="block">
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${art.gradient}`}
      >
        {art.image && (
          <Image
            src={art.image}
            alt={art.name}
            fill
            sizes="50vw"
            className="object-cover"
          />
        )}
      </div>
    </Link>
  );
}

/**
 * Text-only hero shown on mobile in place of the two scroll/animation-driven
 * desktop hero sections (HeroGallery, SplitLogoReveal), which don't translate
 * well to small screens - followed by a small artwork preview.
 */
export default function MobileHero() {
  return (
    <div className="w-full px-6 pb-8 pt-10 sm:hidden">
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-sm text-zinc-500">(25+ Years of Fine Art)</p>
        <h1 className="text-3xl font-bold uppercase leading-tight text-black">
          Original Art &amp; Academy in the Heart of Delhi
        </h1>
        <Button href="/gallery">View Gallery</Button>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <ArtworkCard art={ganges} />
        <div className="grid grid-cols-2 gap-3">
          <ArtworkCard art={petalsOne} />
          <ArtworkCard art={petalsTwo} />
        </div>
      </div>
    </div>
  );
}
