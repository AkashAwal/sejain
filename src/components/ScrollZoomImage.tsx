"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MIN_SCALE = 0.6;
const MAX_SCALE = 1.4;

export default function ScrollZoomImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const p = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      setProgress(p);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scale = MIN_SCALE + progress * (MAX_SCALE - MIN_SCALE);
  const textOpacity = Math.max(0, 1 - progress * 1.6);

  return (
    <div ref={sectionRef} className="relative h-[250vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <p
          className="absolute inset-x-0 top-16 z-0 px-6 text-center text-2xl font-semibold uppercase tracking-wide text-black sm:top-20 sm:text-3xl"
          style={{ opacity: textOpacity }}
        >
          An artist&rsquo;s touch isn&rsquo;t limited to the canvas.
        </p>

        <div
          className="relative z-10 aspect-[1672/941] h-[65vh] max-w-[85vw]"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src="/sejain-scroll.webp"
            alt="Sejain art studio, students, and artwork"
            fill
            unoptimized
            className="object-contain"
            sizes="85vw"
            priority={false}
          />
        </div>

        <p
          className="absolute inset-x-0 bottom-16 z-0 px-6 text-center text-2xl font-semibold uppercase tracking-wide text-black sm:bottom-20 sm:text-3xl"
          style={{ opacity: textOpacity }}
        >
          It touches people, souls, and hearts.
        </p>
      </div>
    </div>
  );
}
