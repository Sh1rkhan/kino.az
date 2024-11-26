import { HeroSection } from "@/components/pages/home/heroSection";
import MoviesCard from "@/components/pages/home/moviesCard";
import { CarouselSize } from "@/components/pages/home/moviesCard/test";
import News from "@/components/pages/home/news/page";
import Subscribe from "@/components/pages/home/Subscribe";

export default function Home() {
  return (
    <>
      <div className=" ">
        <HeroSection></HeroSection>
        
        <CarouselSize></CarouselSize>
        <div className="flex flex-col ">
          <MoviesCard />

          <News />
        </div>

        <div>
          
        </div>
        <div className="flex justify-center">
          <Subscribe />
        </div>
      </div>
    </>
  );
}
