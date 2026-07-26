"use client";

import { useEffect, useState } from "react";
import type { Review } from "@/lib/reviews";
import Stars from "@/components/Stars";

const CELLS = 3;
const ROTATE_MS = 4000;

export default function TestimonialsGrid({ reviews }: { reviews: Review[] }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return;
    const id = setInterval(() => {
      setOffset((o) => (o + 1) % reviews.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reviews.length]);

  if (reviews.length === 0) return null;

  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: CELLS }).map((_, cell) => {
        const review = reviews[(offset + cell) % reviews.length];
        return (
          <div
            key={cell}
            className="min-h-[220px] overflow-hidden bg-zinc-100 p-6"
          >
            <div
              key={`${offset}-${cell}`}
              className="flex h-full flex-col gap-4 animate-fade-in"
            >
              <Stars rating={review.rating} />
              <p className="text-sm text-zinc-700">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-black">
                  {review.author}
                </p>
                <p className="text-xs text-zinc-500">{review.relativeTime}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
