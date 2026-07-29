"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

const rowOneSlugs = ["chishtis-tomb", "gate-of-serenity", "gateways-of-glory"];
const rowTwoSlugs = ["golden-jharokha", "stone-and-sky"];

const rowOne = rowOneSlugs.map(
  (slug) => artworks.find((a) => a.slug === slug)!,
);
const rowTwo = rowTwoSlugs.map(
  (slug) => artworks.find((a) => a.slug === slug)!,
);

export default function HeroGallery() {
  const [swapped, setSwapped] = useState(false);
  const [swapDistance, setSwapDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      const row = rowOneRef.current;
      if (!row) return;
      // row height + the gap between rows (mt-6/mt-10)
      const gap = window.innerWidth >= 640 ? 40 : 24;
      setSwapDistance(row.offsetHeight + gap);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    function onWheel(e: WheelEvent) {
      const rect = containerRef.current?.getBoundingClientRect();
      const inView = rect && rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.deltaY > 0 && !swapped) {
        e.preventDefault();
        setSwapped(true);
      } else if (e.deltaY < 0 && swapped) {
        e.preventDefault();
        setSwapped(false);
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [swapped]);

  return (
    <div
      ref={containerRef}
      className="hidden h-[calc(100vh-5rem)] w-full items-center justify-center px-6 sm:flex sm:px-10 md:px-20"
    >
      <div className="w-fit">
        <div
          ref={rowOneRef}
          className="flex gap-x-4 transition-transform duration-700 ease-in-out sm:gap-x-10 md:gap-x-24 lg:gap-x-72"
          style={{ transform: `translateY(${swapped ? swapDistance : 0}px)` }}
        >
          {rowOne.map((art) => (
            <Link
              key={art.slug}
              href={`/gallery/${art.slug}`}
              className={`relative aspect-[3/4] w-16 shrink-0 overflow-hidden bg-gradient-to-br sm:w-24 md:w-32 lg:w-48 ${art.gradient}`}
            >
              {art.image && (
                <Image
                  src={art.image}
                  alt={art.name}
                  fill
                  sizes="(min-width: 1024px) 12rem, (min-width: 640px) 6rem, 4rem"
                  className="object-cover"
                />
              )}
            </Link>
          ))}
        </div>
        <div
          className="ml-8 mt-6 flex gap-x-4 transition-transform duration-700 ease-in-out sm:ml-20 sm:mt-10 sm:gap-x-10 md:ml-28 md:gap-x-24 lg:ml-60 lg:gap-x-72"
          style={{ transform: `translateY(${swapped ? -swapDistance : 0}px)` }}
        >
          {rowTwo.map((art) => (
            <Link
              key={art.slug}
              href={`/gallery/${art.slug}`}
              className={`relative aspect-[3/4] w-16 shrink-0 overflow-hidden bg-gradient-to-br sm:w-24 md:w-32 lg:w-48 ${art.gradient}`}
            >
              {art.image && (
                <Image
                  src={art.image}
                  alt={art.name}
                  fill
                  sizes="(min-width: 1024px) 12rem, (min-width: 640px) 6rem, 4rem"
                  className="object-cover"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
