import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCover from "@/components/BlogCover";
import { blogPosts } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: "/blog/cover.webp", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/blog/cover.webp"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Seema Jabin Husain" },
    publisher: { "@type": "Organization", name: "Sejain Art Studio & Academy" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="text-sm font-semibold uppercase tracking-widest text-primary"
      >
        ← Back to Blog
      </Link>

      <BlogCover
        index={postIndex + 1}
        showText={false}
        priority
        className="mt-8 aspect-[16/9] w-full"
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
