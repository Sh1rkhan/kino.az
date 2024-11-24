import MoviesCard from "@/components/pages/home/moviesCard";
import News from "@/components/pages/home/news/page";
import Subscribe from "@/components/pages/home/Subscribe";

export default function Home() {
  return (
    <>
      <div className=" ">
        <div className="flex flex-col ">
          <MoviesCard />

          <News />
        </div>
        <div className="flex justify-center">
          <Subscribe />
        </div>
      </div>
    </>
  );
}
