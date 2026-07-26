import HeroGallery from "@/components/HeroGallery";
import SplitLogoReveal from "@/components/SplitLogoReveal";
import ArtistIntro from "@/components/ArtistIntro";
import ArtworkCarousel from "@/components/ArtworkCarousel";
import AcademyIntro from "@/components/AcademyIntro";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <HeroGallery />
      <SplitLogoReveal />
      <ArtistIntro />
      <ArtworkCarousel />
      <AcademyIntro />
      <Testimonials />
    </main>
  );
}
