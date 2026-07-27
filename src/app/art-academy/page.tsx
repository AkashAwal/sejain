import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Art Academy",
  description:
    "An academy for all ages in Malviya Nagar, New Delhi - fine arts, resin art, clay jewellery, and fabric painting courses taught one-on-one by an award-winning artist.",
  alternates: { canonical: "/art-academy" },
};

const courses = [
  {
    title: "Beginner",
    duration: "3 months",
    points: [
      "Ideal for beginners and hobbyists",
      "3 hours/week",
      "Beginner certification in 3 months",
      "Learn essential fine arts skills and core techniques",
      "Focus on basics and development of visual and aesthetic sense",
      "Flexible schedule",
      "Individual classes",
    ],
  },
  {
    title: "Advance",
    duration: "6 months",
    points: [
      "Ideal for people who want to hone their art skills",
      "3 hours/week",
      "Advance certification in 6 months",
      "In-depth exploration of various art forms and techniques",
      "Advance in a chosen medium and create your own style",
      "Flexible schedule",
      "Individual classes",
    ],
  },
  {
    title: "Expert",
    duration: "12 months",
    points: [
      "Ideal for people who want to excel in their art career",
      "7.5 hours/week",
      "Expert certification",
      "Complete mastery in chosen domains",
      "Work your skills to expert level",
      "Get expert guidance and portfolio building opportunities",
      "Flexible schedule",
      "Individual classes",
    ],
  },
  {
    title: "Clay Jewelry Making Course",
    duration: "3/6 months",
    points: [
      "All the tools will be provided",
      "Learn to make handmade jewelry with clay and other materials",
      "3 hours/week",
      "Minimum 12 hours monthly covered",
      "Certification in 3 months",
      "Guidance on various techniques of jewelry making",
      "Flexible schedule",
      "Individual classes/batch classes",
    ],
  },
  {
    title: "Resin Art",
    duration: "3/6 months",
    points: [
      "Learn to make viral resin art pieces",
      "Guidance on various resin art techniques and products",
      "All the tools will be provided",
      "Certification in 3 months",
      "3 hours/week",
      "Minimum 12 hours monthly covered",
      "Flexible schedule",
      "Individual classes/batch classes",
    ],
  },
  {
    title: "Fabric Painting",
    duration: "3/6 months",
    points: [
      "Learn to paint on different fabrics - leather, silk, cotton, denim, etc.",
      "Guidance on various fabric painting techniques, learn to make designer clothes",
      "Certification in 3 months",
      "3 hours/week",
      "Minimum 12 hours monthly covered",
      "Flexible schedule",
      "Individual classes/batch classes",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Experienced Artist",
    body: "Get practical learning and increase your skills from a seasoned artist's expertise.",
  },
  {
    title: "Fully Offline",
    body: "Get a one-on-one personal teaching experience and grow your skills.",
  },
  {
    title: "Diverse Art Courses",
    body: "Choose from our diverse courses and tailor them according to your preferences.",
  },
  {
    title: "Flexible Schedule",
    body: "Learn at your own pace and make your own class schedule according to your preferences.",
  },
  {
    title: "Certification",
    body: "Master your skills and earn a valuable certificate to validate your skills and enhance opportunities.",
  },
];

const artForms = [
  "Oil Painting",
  "Acrylic Painting",
  "Watercolour Painting",
  "Mix Mediums",
  "Sketching",
  "Landscape",
  "Portrait",
  "Resin Art",
  "Clay Sculpture Art",
  "Handmade Jewelry Making",
  "Fabric Painting",
];

export default function ArtAcademyPage() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-7xl px-6 pb-8 pt-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Art Academy
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          An academy for all ages.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Get practical learning and increase your skills from a seasoned
          artist's expertise - fully offline, one-on-one, in our Malviya
          Nagar studio.
        </p>
        <Button href="#classes" className="mt-8 inline-flex">
          View Classes
        </Button>

        <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-primary">
          Learn different art forms including
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {artForms.map((form) => (
            <span
              key={form}
              className="border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
            >
              {form}
            </span>
          ))}
        </div>
      </section>

      <section id="classes" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 scroll-mt-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Classes
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Beginner to advanced, and more.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col gap-4 border border-black/[.08] bg-white p-8 shadow-sm"
            >
              <div>
                <p className="text-2xl font-bold uppercase text-black">
                  {course.title}
                </p>
                <p className="text-lg font-semibold text-primary">
                  {course.duration}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-1.5 text-lg text-zinc-700">
                {course.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={`/contact?reason=${encodeURIComponent("Art Academy classes")}&message=${encodeURIComponent(
                  `I'd like to enroll in the ${course.title} course.`,
                )}`}
                className="mt-2 inline-flex self-start"
              >
                Enroll
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Why Choose Us
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Fully offline. Fully personal.
        </h2>

        <div className="mt-10 flex flex-col divide-y divide-black/[.08] border-t border-black/[.08]">
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="flex items-start gap-6 py-6 sm:gap-10">
              <span className="w-10 shrink-0 text-3xl font-bold text-primary/40 sm:w-14 sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-2xl font-bold uppercase text-black">
                  {item.title}
                </p>
                <p className="mt-1 text-lg text-zinc-700">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Offline vs Online
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Offline vs. online classes.
        </h2>
        <p className="mt-6 max-w-3xl text-xl text-zinc-600">
          Offline art classes offer a hands-on, one-on-one experience where
          teachers can closely observe, guide, and correct your technique.
          With real-time feedback and an immersive atmosphere, offline
          classes help build confidence, refine skills, and provide a truly
          inspiring art journey that's impossible to match online.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[480px_1fr] lg:items-center">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Your Instructor
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
              Taught by the artist, not a curriculum.
            </h2>
            <p className="mt-6 max-w-xl text-xl text-zinc-600">
              Every class at Sejain is taught directly by Seema Jabin
              Husain, our founding artist and mentor with 25+ years of
              experience - the same hand behind every commission and gallery
              piece, bringing decades of practice into every session.
            </p>
            <Link
              href="/artist"
              className="mt-8 inline-block text-lg font-semibold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
            >
              Meet the Artist →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
