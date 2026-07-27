"use client";

import { useEffect, useRef, useState } from "react";

const rowOne = [
  "from-slate-800 via-blue-900 to-slate-950",
  "from-neutral-800 via-neutral-600 to-neutral-300",
  "from-sky-900 via-slate-200 to-white",
];

const rowTwo = [
  "from-lime-100 via-neutral-500 to-neutral-900",
  "from-teal-500 via-cyan-400 to-fuchsia-600",
];

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
      className="flex h-[calc(100vh-5rem)] w-full items-center justify-center px-6 sm:px-10 md:px-20"
    >
      <div className="w-fit">
        <div
          ref={rowOneRef}
          className="flex gap-x-4 transition-transform duration-700 ease-in-out sm:gap-x-10 md:gap-x-24 lg:gap-x-72"
          style={{ transform: `translateY(${swapped ? swapDistance : 0}px)` }}
        >
          {rowOne.map((gradient, i) => (
            <div
              key={`row1-${i}`}
              className={`aspect-[3/4] w-16 shrink-0 bg-gradient-to-br sm:w-24 md:w-32 lg:w-48 ${gradient}`}
            />
          ))}
        </div>
        <div
          className="ml-8 mt-6 flex gap-x-4 transition-transform duration-700 ease-in-out sm:ml-20 sm:mt-10 sm:gap-x-10 md:ml-28 md:gap-x-24 lg:ml-60 lg:gap-x-72"
          style={{ transform: `translateY(${swapped ? -swapDistance : 0}px)` }}
        >
          {rowTwo.map((gradient, i) => (
            <div
              key={`row2-${i}`}
              className={`aspect-[3/4] w-16 shrink-0 bg-gradient-to-br sm:w-24 md:w-32 lg:w-48 ${gradient}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
