"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const gradients = [
  "from-slate-800 via-blue-900 to-slate-950",
  "from-neutral-800 via-neutral-600 to-neutral-300",
  "from-sky-900 via-slate-200 to-white",
  "from-lime-100 via-neutral-500 to-neutral-900",
  "from-teal-500 via-cyan-400 to-fuchsia-600",
  "from-rose-900 via-rose-500 to-orange-200",
  "from-emerald-900 via-emerald-500 to-lime-200",
  "from-indigo-900 via-indigo-500 to-sky-200",
];

const COUNT = gradients.length;
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
    () => [...gradients.slice(-visible), ...gradients, ...gradients.slice(0, visible)],
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
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-24">
      <div className="relative overflow-hidden">
        <div
          className={`flex ${instant ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{
            width: `${(extended.length / visible) * 100}%`,
            transform: `translateX(-${pos * itemPercent}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((gradient, i) => (
            <div
              key={i}
              className="shrink-0 px-3"
              style={{ width: `${100 / extended.length}%` }}
            >
              <div className={`aspect-[3/4] w-full bg-gradient-to-br ${gradient}`} />
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
        {gradients.map((_, i) => (
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
