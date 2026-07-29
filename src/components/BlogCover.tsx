import Image from "next/image";

/**
 * Shared OG-style cover: one branded "Sejain's Insights" background with
 * "Blog #N" overlaid just below the wordmark, so every post gets a designed
 * card without needing a bespoke image per post.
 */
export default function BlogCover({
  index,
  showText = true,
  className = "",
  priority = false,
}: {
  /** 1-based position of the post, rendered as "Blog #N". */
  index: number;
  /** Set false when the title is already shown next to the cover (e.g. a featured hero layout). */
  showText?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#f3e6d6] ${className}`}>
      <Image
        src="/blog/cover.webp"
        alt=""
        fill
        priority={priority}
        className="object-cover"
      />
      {showText && (
        <p
          className="absolute inset-x-0 text-center text-lg font-bold uppercase tracking-wide text-black sm:text-xl"
          style={{ top: "62%" }}
        >
          Blog #{index}
        </p>
      )}
    </div>
  );
}
