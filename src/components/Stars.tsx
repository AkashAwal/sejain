export default function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1}
          className="h-4 w-4"
        >
          <polygon points="10 1 12.6 6.9 19 7.6 14.2 11.9 15.5 18.3 10 15 4.5 18.3 5.8 11.9 1 7.6 7.4 6.9" />
        </svg>
      ))}
    </div>
  );
}
