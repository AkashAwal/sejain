import { getReviews } from "@/lib/reviews";
import Stars from "@/components/Stars";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import Button from "@/components/Button";

export default async function Testimonials() {
  const { reviews, overallRating, totalReviews, isLive, placeId } =
    await getReviews();

  return (
    <section className="mx-auto w-full max-w-7xl px-10 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        (Testimonials)
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        What collectors and students are saying.
      </h2>
      {overallRating != null && totalReviews != null && (
        <div className="mt-4 flex items-center gap-3">
          <Stars rating={overallRating} />
          <p className="text-sm text-zinc-600">
            {overallRating.toFixed(1)} · {totalReviews} Google reviews
          </p>
        </div>
      )}

      <TestimonialsGrid reviews={reviews} />

      {placeId && (
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            href={`https://search.google.com/local/writereview?placeid=${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Review
          </Button>
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
          >
            View Google Profile
          </a>
        </div>
      )}

      {!isLive && (
        <p className="mt-6 text-xs text-zinc-400">
          Showing sample reviews — connect a Google Business Profile to
          display live reviews here.
        </p>
      )}
    </section>
  );
}
