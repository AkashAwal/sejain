import type { Metadata } from "next";
import Link from "next/link";
import BlogCover from "@/components/BlogCover";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/blogPosts";

const description =
  "Notes from Sejain Art Studio & Academy on technique, teaching, and the process behind commissioned work.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    description,
    images: [{ url: "/blog/cover.webp", width: 1200, height: 630, alt: "Sejain's Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description,
    images: ["/blog/cover.webp"],
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 pb-8 pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Blog
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Stories from the studio.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Notes on technique, teaching, and what actually happens between a
          first sketch and a finished piece.
        </p>
      </section>

      {featured && (
        <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-8">
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <BlogCover
              index={1}
              showText={false}
              priority
              className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {featured.category} · {featured.date}
              </p>
              <p className="mt-3 text-3xl font-bold uppercase leading-tight text-black sm:text-4xl">
                {featured.title}
              </p>
              <p className="mt-4 text-lg text-zinc-600">{featured.excerpt}</p>
              <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-primary underline-offset-4 group-hover:underline">
                Read the story →
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 gap-10 border-t border-black/[.08] pt-16 md:grid-cols-3">
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <BlogCover
                index={i + 2}
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">
                {post.category} · {post.date}
              </p>
              <p className="mt-2 text-xl font-bold uppercase leading-tight text-black">
                {post.title}
              </p>
              <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
