"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

// Already featured in the hero section, or excluded per request.
const EXCLUDED_SLUGS = [
  "the-gateway",
  "chishtis-tomb",
  "gate-of-serenity",
  "gateways-of-glory",
  "golden-jharokha",
  "stone-and-sky",
  "puddle",
];

const carouselArtworks = artworks.filter(
  (art) => !EXCLUDED_SLUGS.includes(art.slug),
);

const COUNT = carouselArtworks.length;
const SLIDE_MS = 3000;

function useVisibleCount() {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(4);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

export default function ArtworkCarousel() {
  const visible = useVisibleCount();
  const [pos, setPos] = useState(visible);
  const [instant, setInstant] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const extended = useMemo(
    () => [
      ...carouselArtworks.slice(-visible),
      ...carouselArtworks,
      ...carouselArtworks.slice(0, visible),
    ],
    [visible],
  );
  const itemPercent = 100 / extended.length;

  // Re-anchor the position whenever the visible slide count changes
  // (breakpoint change), since the clone-array math depends on it.
  useEffect(() => {
    setInstant(true);
    setPos(visible);
  }, [visible]);

  const activeDot = ((pos - visible) % COUNT + COUNT) % COUNT;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setInstant(false);
      setPos((p) => p + 1);
    }, SLIDE_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pos]);

  function handleTransitionEnd() {
    if (pos >= visible + COUNT) {
      setInstant(true);
      setPos(visible);
    } else if (pos < visible) {
      setInstant(true);
      setPos(visible + COUNT - 1);
    }
  }

  function goTo(next: number) {
    setInstant(false);
    setPos(next);
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-24">
      <div className="relative overflow-hidden">
        <div
          className={`flex ${instant ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{
            width: `${(extended.length / visible) * 100}%`,
            transform: `translateX(-${pos * itemPercent}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((art, i) => (
            <div
              key={`${art.slug}-${i}`}
              className="shrink-0 px-3"
              style={{ width: `${100 / extended.length}%` }}
            >
              <Link
                href={`/gallery/${art.slug}`}
                className={`relative block aspect-[3/4] w-full overflow-hidden bg-gradient-to-br ${art.gradient}`}
              >
                {art.image && (
                  <Image
                    src={art.image}
                    alt={art.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(pos - 1)}
          aria-label="Previous artwork"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => goTo(pos + 1)}
          aria-label="Next artwork"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {carouselArtworks.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goTo(visible + i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative h-2 overflow-hidden rounded-full bg-black/15 transition-[width] duration-300 ${
              i === activeDot ? "w-10" : "w-2"
            }`}
          >
            {i === activeDot && (
              <span
                key={pos}
                className="absolute inset-0 origin-left animate-dot-fill rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
