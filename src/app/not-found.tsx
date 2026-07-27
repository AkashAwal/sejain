import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-24 sm:px-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center">
        <div className="aspect-[4/5] w-full max-w-[16rem] border border-black/[.15] bg-white shadow-sm" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
            This canvas is still blank.
          </h1>
          <p className="mt-6 max-w-md text-lg text-zinc-600">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or
            hasn&rsquo;t been painted yet. Let&rsquo;s get you back to
            something finished.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href="/">Back to Home</Button>
          <a
            href="/gallery"
            className="text-sm font-semibold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
          >
            View Gallery
          </a>
        </div>
      </div>
    </main>
  );
}
