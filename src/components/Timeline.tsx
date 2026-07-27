"use client";

import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  title: string;
  body: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      const lastNode = lastNodeRef.current;
      if (!container || !lastNode) return;
      const containerRect = container.getBoundingClientRect();
      const nodeRect = lastNode.getBoundingClientRect();
      setLineHeight(nodeRect.top + nodeRect.height / 2 - containerRect.top);
    }

    function onScroll() {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.4;
      const total = rect.height + start - end;
      const covered = start - rect.top;
      const p = Math.min(Math.max(covered / total, 0), 1);
      setProgress(p);
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-16 pl-10 sm:pl-14">
      <div
        className="absolute left-0 top-0 w-0.5 bg-black/[.08]"
        style={{ height: lineHeight }}
      />
      <div
        className="absolute left-0 top-0 w-0.5 bg-primary"
        style={{ height: lineHeight * progress }}
      />

      {items.map((item, i) => {
        const nodeProgress = items.length <= 1 ? 0 : i / (items.length - 1);
        const active = progress >= nodeProgress - 0.015;
        const isLast = i === items.length - 1;

        return (
          <div key={item.title} className="relative pb-16 last:pb-0">
            <span
              ref={isLast ? lastNodeRef : undefined}
              className={`absolute -left-[3.875rem] top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full text-base font-bold transition-colors duration-500 ease-out sm:-left-[5.25rem] sm:h-14 sm:w-14 sm:text-lg ${
                active ? "bg-primary text-white" : "bg-zinc-200 text-zinc-400"
              }`}
            >
              {i + 1}
            </span>
            <p
              className={`text-2xl font-bold uppercase leading-tight sm:text-3xl transition-colors duration-500 ${
                active ? "text-black" : "text-zinc-400"
              }`}
            >
              {item.title}
            </p>
            <p className="mt-3 max-w-xl text-lg text-zinc-600">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
