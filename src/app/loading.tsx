export default function Loading() {
  return (
    <main className="w-full animate-pulse">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <div className="h-4 w-32 bg-zinc-200" />
        <div className="mt-4 h-12 w-2/3 bg-zinc-200" />
        <div className="mt-3 h-12 w-1/2 bg-zinc-200" />
        <div className="mt-6 h-4 w-full max-w-xl bg-zinc-200" />
        <div className="mt-2 h-4 w-full max-w-md bg-zinc-200" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-[4/3] w-full bg-zinc-200" />
          <div className="aspect-[4/3] w-full bg-zinc-200" />
          <div className="aspect-[4/3] w-full bg-zinc-200" />
        </div>
      </div>
    </main>
  );
}
