import Link from "next/link";
import Button from "@/components/Button";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Blog
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        Stories from the studio.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02] ${post.gradient}`}
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

      <div className="mt-14 flex justify-center">
        <Button href="/blog">Explore More</Button>
      </div>
    </section>
  );
}
