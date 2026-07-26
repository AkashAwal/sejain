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

// row height (w-48 at aspect-[3/4] = 256px) + the mt-10 gap (40px) between rows
const SWAP_DISTANCE = 296;

export default function HeroGallery() {
  const [swapped, setSwapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="flex h-[calc(100vh-5rem)] w-full items-center justify-center px-20"
    >
      <div className="w-fit">
        <div
          className="flex gap-x-72 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(${swapped ? SWAP_DISTANCE : 0}px)` }}
        >
          {rowOne.map((gradient, i) => (
            <div
              key={`row1-${i}`}
              className={`aspect-[3/4] w-48 shrink-0 bg-gradient-to-br ${gradient}`}
            />
          ))}
        </div>
        <div
          className="ml-60 mt-10 flex gap-x-72 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(${swapped ? -SWAP_DISTANCE : 0}px)` }}
        >
          {rowTwo.map((gradient, i) => (
            <div
              key={`row2-${i}`}
              className={`aspect-[3/4] w-48 shrink-0 bg-gradient-to-br ${gradient}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
