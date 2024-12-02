import { HeroSection } from "@/components/pages/home/heroSection";
import { CarouselSize } from "@/components/pages/home/moviesCarousel";
import NewsCards from "@/components/pages/home/news/page";
import Subscribe from "@/components/pages/home/Subscribe";

export default function Home() {
  return (
    <>
      <div className=" ">
        <HeroSection></HeroSection>

        <CarouselSize CategoryTitle={"Son əlavə olanlar"}/>
        <CarouselSize CategoryTitle={"Azərbaycan filmləri"}/>
        <CarouselSize CategoryTitle={"Ən reytinqli"}/>
        <CarouselSize CategoryTitle={"Komediya"}/>
        <CarouselSize CategoryTitle={"Drama"}/>
        <CarouselSize CategoryTitle={"Detektiv"}/>
        <div className="flex flex-col ">
          <NewsCards />
        </div>

        <div></div>
        <div className="flex justify-center">
          <Subscribe />
        </div>
      </div>
    </>
  );
}
