import Button from "@/components/Button";

const expertise = ["Original Paintings", "Custom Commissions", "Live Painting Sessions"];

export default function ArtistIntro() {
  return (
    <section className="mx-auto w-full max-w-7xl px-10 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        (Artist)
      </p>
      <h2 className="mt-4 text-left text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        A self-taught painter exploring <br />
        emotion, texture, and the human form <br />
        through contemporary mixed media.
      </h2>

      <div className="mt-16 grid grid-cols-3 gap-x-6 border-b border-black/[.08] pb-4 text-[1.75rem] uppercase tracking-widest">
        <span className="text-primary">Expertise</span>
        <span />
        <span className="text-zinc-500">The Artist</span>
      </div>

      <div className="grid grid-cols-3 gap-x-6 pt-10">
        <ul className="space-y-4 text-[1.75rem] font-semibold uppercase tracking-wide text-black">
          {expertise.map((item) => (
            <li key={item}>&bull; {item}</li>
          ))}
        </ul>

        <div className="aspect-[3/4] w-full max-w-[18rem] justify-self-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950" />

        <div className="max-w-sm">
          <p className="text-[1.6875rem] text-zinc-600">
            From a childhood sketchbook to gallery walls, the work has grown
            into a practice devoted to capturing quiet, unguarded moments
            with sensitivity and bold visual instinct.
          </p>
          <Button href="/contact" className="mt-6 inline-flex">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
