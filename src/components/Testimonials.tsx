import TrustindexWidget from "@/components/TrustindexWidget";
import Button from "@/components/Button";

const PLACE_ID = "ChIJfx5JdSmQTKMRRoN-9PfxMtU";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-7xl px-10 py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        (Testimonials)
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        What collectors and students are saying.
      </h2>

      <TrustindexWidget />

      <div className="mt-10">
        <Button
          href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add a Review
        </Button>
      </div>
    </section>
  );
}
