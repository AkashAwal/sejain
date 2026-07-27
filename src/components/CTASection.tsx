import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          (Get Started)
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
          Ready to bring your vision to canvas?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Whether you&rsquo;re commissioning a piece, joining a class, or just
          want to see the studio in person, we&rsquo;d love to hear from you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Button href="/contact">Get in Touch</Button>
          <a
            href="/gallery"
            className="text-sm font-semibold uppercase tracking-wide text-white underline-offset-4 hover:underline"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
