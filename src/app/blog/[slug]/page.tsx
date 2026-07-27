import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-10 py-24">
      <Link
        href="/"
        className="text-sm font-semibold uppercase tracking-widest text-primary"
      >
        ← Back
      </Link>

      <div
        className={`relative mt-8 aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${post.gradient}`}
      />

      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">
        {post.category} · {post.date}
      </p>
      <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        {post.title}
      </h1>

      <div className="mt-8 flex flex-col gap-6">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-lg text-zinc-600">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
