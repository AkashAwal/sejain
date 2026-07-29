"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-24 sm:px-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center">
        <div className="aspect-[4/5] w-full max-w-[16rem] border border-black/[.15] bg-gradient-to-br from-zinc-300 via-zinc-100 to-white shadow-sm" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Something went wrong
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
            This canvas got smudged.
          </h1>
          <p className="mt-6 max-w-md text-lg text-zinc-600">
            Something went wrong on our end. Try again, or head back and
            we&rsquo;ll get it cleaned up.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => reset()}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300"
          >
            <span className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:translate-x-0" />
            <span className="relative z-10">Try Again</span>
          </button>
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
