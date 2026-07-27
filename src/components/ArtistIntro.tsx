import Button from "@/components/Button";

const expertise = ["Original Paintings", "Custom Commissions", "Art Academy Classes"];

export default function ArtistIntro() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Artist
      </p>
      <h2 className="mt-4 text-left text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        Led by award-winning artist Seema Jabin Husain.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-x-6 border-b border-black/[.08] pb-4 text-2xl uppercase tracking-widest sm:text-[1.75rem] lg:grid-cols-3">
        <span className="text-primary">Expertise</span>
        <span className="hidden lg:block" />
        <span className="text-zinc-500">The Artist</span>
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 pt-10 lg:grid-cols-3">
        <ul className="space-y-4 text-2xl font-semibold uppercase tracking-wide text-black sm:text-[1.75rem]">
          {expertise.map((item) => (
            <li key={item}>&bull; {item}</li>
          ))}
        </ul>

        <div className="aspect-[3/4] w-full max-w-[18rem] justify-self-start bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950 lg:justify-self-center" />

        <div className="max-w-sm">
          <p className="text-xl text-zinc-600 sm:text-[1.6875rem]">
            25+ years of experience across painting, illustration, and
            teaching - original and commissioned art from a studio built to
            welcome art enthusiasts of every level.
          </p>
          <Button href="/artist" className="mt-6 inline-flex">
            Meet the Artist
          </Button>
        </div>
      </div>
    </section>
  );
}
