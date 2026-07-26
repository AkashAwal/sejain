export default function AcademyIntro() {
  return (
    <section className="mx-auto w-full max-w-7xl px-10 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        (Why Choose Us)
      </p>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
        Our teaching philosophy and mentorship.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[480px_1fr]">
        <div className="h-full min-h-[560px] w-full bg-gradient-to-br from-neutral-700 via-neutral-500 to-neutral-300" />

        <div className="flex flex-col gap-6">
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden bg-zinc-300 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-black">
                Beginner to Advanced
              </p>
              <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-400">
                01
              </span>
              <p className="mt-16 text-sm text-zinc-700">
                List with course previews, skill level, instructor, and a
                button linking to the full course page.
              </p>
            </div>

            <div className="relative overflow-hidden bg-zinc-300 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-black">
                Tradition and Technique
              </p>
              <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-400">
                02
              </span>
              <p className="mt-16 text-sm text-zinc-700">
                Curriculum list including technique previews, instructor
                bios, and a button linking directly to course info.
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-center gap-2 overflow-hidden bg-zinc-300 p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              Mentorship and Community
            </p>
            <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-400">
              03
            </span>
            <p className="max-w-2xl text-sm text-zinc-700">
              Student showcase featuring artwork previews, course title,
              instructor info, session dates and full class details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
