import "server-only";

export type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type ReviewsResult = {
  reviews: Review[];
  overallRating: number | null;
  totalReviews: number | null;
  isLive: boolean;
  placeId: string | null;
};

const FALLBACK_REVIEWS: Review[] = [
  {
    author: "Amelia H.",
    rating: 5,
    text: "The commissioned portrait exceeded every expectation — the detail and emotion captured is stunning.",
    relativeTime: "2 months ago",
  },
  {
    author: "David R.",
    rating: 5,
    text: "A wonderful gallery visit. The staff were knowledgeable and the collection felt genuinely curated.",
    relativeTime: "3 months ago",
  },
  {
    author: "Priya N.",
    rating: 5,
    text: "Took the beginner painting course and left with real skills and a finished piece I'm proud of.",
    relativeTime: "5 months ago",
  },
];

const FALLBACK_RESULT: ReviewsResult = {
  reviews: FALLBACK_REVIEWS,
  overallRating: null,
  totalReviews: null,
  isLive: false,
  placeId: null,
};

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

// Next.js's fetch `next.revalidate` option only persists the cache when the
// app opts into `cacheComponents` mode (unset here) — without it, every
// request would hit the Google API live. A small in-memory TTL cache avoids
// that instead.
const CACHE_TTL_MS = 1000 * 60 * 60 * 4; // 4 hours
let cache: { data: ReviewsResult; expiresAt: number } | null = null;

export async function getReviews(): Promise<ReviewsResult> {
  if (cache && cache.expiresAt > Date.now()) return cache.data;

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return FALLBACK_RESULT;
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&key=${apiKey}`,
    );
    const data = await res.json();
    const reviews = data.result?.reviews as GoogleReview[] | undefined;

    if (!reviews || reviews.length === 0) {
      return FALLBACK_RESULT;
    }

    const result: ReviewsResult = {
      reviews: reviews.map((review) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        relativeTime: review.relative_time_description,
      })),
      overallRating:
        typeof data.result.rating === "number" ? data.result.rating : null,
      totalReviews:
        typeof data.result.user_ratings_total === "number"
          ? data.result.user_ratings_total
          : null,
      isLive: true,
      placeId,
    };
    cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
    return result;
  } catch {
    return FALLBACK_RESULT;
  }
}
