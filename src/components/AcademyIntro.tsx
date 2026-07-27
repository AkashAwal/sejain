import Button from "@/components/Button";

export default function AcademyIntro() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Why Choose Us
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        An academy for all ages.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[480px_1fr]">
        <div className="h-full min-h-[560px] w-full bg-gradient-to-br from-neutral-700 via-neutral-500 to-neutral-300" />

        <div className="flex flex-col gap-6">
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden border border-black/[.08] bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold uppercase tracking-wide text-black">
                Experienced Artist
              </p>
              <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-100">
                01
              </span>
              <p className="mt-16 text-lg text-zinc-700">
                Get practical learning and increase your skills from a
                seasoned artist&rsquo;s expertise.
              </p>
            </div>

            <div className="relative overflow-hidden border border-black/[.08] bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold uppercase tracking-wide text-black">
                Fully Offline
              </p>
              <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-100">
                02
              </span>
              <p className="mt-16 text-lg text-zinc-700">
                Get a one-on-one personal teaching experience and grow your
                skills.
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-between overflow-hidden border border-black/[.08] bg-white p-6 shadow-sm">
            <p className="text-2xl font-bold uppercase tracking-wide text-black">
              Diverse Art Courses
            </p>
            <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-100">
              03
            </span>
            <p className="max-w-2xl text-lg text-zinc-700">
              Choose from fine arts, resin art, clay jewellery making, and
              fabric painting - tailored to your preferences, with flexible
              schedules and certification.
            </p>
          </div>

          <Button href="/art-academy" className="inline-flex self-start">
            View All Classes
          </Button>
        </div>
      </div>
    </section>
  );
}
