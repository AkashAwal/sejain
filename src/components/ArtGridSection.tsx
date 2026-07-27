"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { artworks } from "@/data/artworks";

const ROWS = 4;

export default function ArtGridSection() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array(ROWS).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.row,
          );
          setRevealed((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
        });
      },
      { threshold: 0.25 },
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const rows = Array.from({ length: ROWS }, (_, i) =>
    artworks.slice(i * 2, i * 2 + 2),
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Shop
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        Original artwork, ready to collect.
      </h2>

      <div className="mt-12 flex flex-col gap-10">
        {rows.map((row, i) => (
          <div
            key={i}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            data-row={i}
            className={`grid grid-cols-2 gap-3 transition-all duration-700 ease-out sm:gap-8 ${
              revealed[i] ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {row.map((art) => (
              <Link
                key={art.slug}
                href={`/gallery/${art.slug}`}
                className="group block"
              >
                <div
                  className={`relative w-full overflow-hidden bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02] ${art.gradient} ${
                    art.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <div className="mt-3 flex items-baseline justify-between">
                  <p className="font-semibold text-black">{art.name}</p>
                  <p className="text-zinc-600">{art.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button href="/gallery">Explore More</Button>
      </div>
    </section>
  );
}
