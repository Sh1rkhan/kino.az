import * as React from "react";
import { FaPlay } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Title from "@/components/common/Title";

export function CarouselSize({CategoryTitle}) {
  return (
    <div>
      <Title text={CategoryTitle} />

      <Carousel
        opts={{
          align: "center",
        }}
        className=" mx-16 "
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5 text-white "
            >
              <div className="relative group ">
                <Card className="border-0 border-collapse">
                  <CardContent className="bg-indigo-900 rounded-xl p-0 flex flex-col  justify-between  ">
                    <h4 className="font-bold text-sm p-1 text-center">
                      Le Comte de Monte-Cristo
                    </h4>
                    <div className="mx-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl transition duration-500 ease-in-out group-hover:brightness-50 inset-0 bg-black"
                        src="/movies/movie1.webp"
                        width={270}
                        height={300}
                      />
                      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <FaPlay className="text-white text-4xl " />
                      </div>
                    </div>
                    <div className="flex mx-2">
                      <span className="text-xs font-bold mt-2">
                        Ölkə - Fransa
                      </span>
                      <span className="text-xs ml-auto font-bold mt-2">
                        Janr - Drama
                      </span>
                    </div>

                    <small className="text-end mr-2 mb-1 text-xs">2024</small>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
