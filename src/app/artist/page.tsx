import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "The Artist",
  description:
    "Meet Seema Jabin Husain, the award-winning artist and mentor behind Sejain Art Studio & Academy in Malviya Nagar, New Delhi - 25+ years of experience across painting, illustration, and teaching.",
  alternates: { canonical: "/artist" },
};

const bio = [
  "From her earliest days, Seema Jabin Husain has been captivated by the world of art. A childhood filled with sketches, doodles, and experiments with colors saw her explore her innate passion for creativity under the guidance of her father, who was also a very successful and renowned artist of Lucknow in his time. At the age of just 13, Seema took her first steps toward sharing her love for art with others - she was selected by the Swatantra Bharat Lucknow newspaper publisher to sketch their weekly painting competition, and organized local art competitions through newspaper advertisements, connecting with fellow budding artists and sparking a sense of community and companionship. As she progressed through school, her exceptional talent was recognized with 12 state-level awards, a remarkable achievement that highlights her dedication to her craft from a young age.",
  "Her passion and dedication led her to pursue a Bachelor's degree in Fine Arts from Lucknow College of Arts, laying the foundation for her illustrious career as an artist. Throughout her academic journey, she honed her skills under the guidance of seasoned mentors, delving deep into the principles of art and exploring various techniques and mediums - equipping her with technical proficiency while nurturing her creative vision. She was so accomplished in her subject that she maintained the top position in her class throughout all five years of the degree.",
  "Upon completing her education, Seema turned her passion into a profession, starting her career as an illustrator and collaborating with renowned organizations and authors to bring stories to life through her art. She has worked with prestigious organizations such as NCERT, NBT India, Room To Read, S. Chand, and many others. Her exceptional skills were showcased in the NCERT book \"Yoga: A Healthy Way of Living,\" inaugurated by Prime Minister Narendra Modi on India's first Yoga Day, 21st June 2015. She also collaborated with celebrated Hindi writer Prakash Manu on \"Prakash Manu Ki Chuninda Bal Kahaniya,\" published by NBT. With a portfolio of more than 50 illustrated books, she established herself as a renowned name in educational and book illustration.",
  "After her successful career in illustration, Seema stepped into teaching, sharing her passion and skills with budding artists. For four years, she taught illustration, still life, and life study to diploma and bachelor students, serving as a lecturer at Kasturba Institute of Technology (affiliated with Delhi Skill and Entrepreneurship University) and Meerabai Institute of Technology (affiliated with the Delhi Government). Her dedication to teaching helped students develop their artistic abilities and shaped the artistic journeys of many aspiring talents.",
  "Seema works across a striking range of materials - painting in oils, acrylics, and watercolors, and sculpting 3D clay paintings and sculptures. She is skilled in making intricate designs with raisins and crafting with polymer clay, always eager to experiment with new techniques and materials to express her artistic vision. She has actively participated in numerous art exhibitions at the state, national, and international levels, with her captivating artworks garnering attention - and successful sales - from audiences around the world.",
  "Seema's diverse skills have allowed her to bring joy to many individuals and businesses alike through commissioned artwork, creating custom pieces tailored to their specific preferences and needs - from residential homes to commercial establishments. Through Sejain Creations, she has built more than just an art studio; it's a dynamic space for art enthusiasts to explore, learn, and create, whether through teaching, commissioning artwork, participating in exhibitions, or collecting her work.",
];

const earlyMilestones = [
  {
    title: "Early Recognition",
    body: "At 13, selected by the Swatantra Bharat Lucknow newspaper publisher to sketch their weekly painting competition. Went on to organize local art competitions and earn 12 state-level awards during school.",
  },
  {
    title: "Bachelor's in Fine Arts",
    body: "Graduated from Lucknow College of Arts, maintaining the top position in her class throughout all five years of the degree.",
  },
  {
    title: "Illustration Career",
    body: "Illustrated 50+ books for NCERT, NBT India, Room To Read, S. Chand, and more - including the NCERT title inaugurated by Prime Minister Narendra Modi on India's first Yoga Day.",
  },
];

const careerMilestones = [
  {
    title: "Teaching Career",
    body: "Four years as a lecturer in illustration, still life, and life study at Kasturba Institute of Technology and Meerabai Institute of Technology, New Delhi.",
  },
  {
    title: "Multi-Medium Practice",
    body: "Works across oils, acrylics, watercolors, 3D clay painting and sculpture, raisin art, and polymer clay - exhibited at state, national, and international levels.",
  },
  {
    title: "Sejain Creations",
    body: "Founded Sejain Creations, bringing commissioned artwork, gallery pieces, and hands-on teaching together under one studio.",
  },
];

export default function ArtistPage() {
  return (
    <main className="w-full">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Artist
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
            A lifelong painter, illustrator, and mentor.
          </h1>
          <p className="mt-6 text-lg text-zinc-600">
            An award-winning artist with 25+ years of experience across
            painting, illustration, and teaching, Seema Jabin Husain leads
            Sejain Art Studio & Academy - a welcoming space for anyone who
            loves art, whether you&rsquo;re commissioning a custom piece, joining a
            class, or exploring the gallery.
          </p>
          <Button href="/contact" className="mt-8 inline-flex">
            Get in Touch
          </Button>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-xs justify-self-center overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950 lg:justify-self-end">
          <Image
            src="/artist.webp"
            alt="Seema Jabin Husain"
            fill
            sizes="20rem"
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          The Journey
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          From sketchbook to Sejain Creations.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-12">
          {bio.map((paragraph, i) => (
            <p key={i} className="text-lg text-zinc-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Early Years
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          From sketchbook to fine arts degree.
        </h2>

        <Timeline items={earlyMilestones} />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Career Milestones
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
          Illustration, teaching, and Sejain Creations.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {careerMilestones.map((item, i) => (
            <div
              key={item.title}
              className="relative overflow-hidden border border-black/[.08] bg-white p-6 shadow-sm"
            >
              <span className="absolute right-4 top-0 text-7xl font-bold text-zinc-100">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="relative mt-2 text-2xl font-bold uppercase tracking-wide text-black">
                {item.title}
              </p>
              <p className="relative mt-16 text-lg text-zinc-700">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
