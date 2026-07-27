"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

export default function SplitLogoReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealed(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden px-6"
    >
      <div
        className={`flex flex-col items-center gap-8 transition-opacity duration-700 ease-out ${
          revealed ? "opacity-100 delay-500" : "opacity-0"
        }`}
      >
        <p className="max-w-md text-center text-lg text-zinc-600">
          Creating, preserving & teaching the excellence of fine arts for
          more than 25 years.
        </p>
        <Button href="/gallery">View Gallery</Button>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[3.5rem] font-bold leading-none text-black sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem]">
        <span
          className={`transition-transform duration-1000 ease-in-out ${
            revealed ? "-translate-x-[14vw]" : "translate-x-0"
          }`}
        >
          SEJ
        </span>
        <span
          className={`transition-transform duration-1000 ease-in-out ${
            revealed ? "translate-x-[14vw]" : "translate-x-0"
          }`}
        >
          AIN
        </span>
      </div>
    </div>
  );
}
