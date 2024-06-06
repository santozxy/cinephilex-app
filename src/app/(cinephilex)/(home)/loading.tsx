import { Skeleton } from "@/components/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Film, Tv } from "lucide-react";
import React from "react";

export default function HomeLoading() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center mx-10">
      <Skeleton className="w-full md:h-[32rem] lg:h-[40rem] max-sm:h-64" />
      <div className="flex gap-2 items-center">
        <Film size={24} className="text-primary" />
        <h1 className="text-2xl font-bold my-6 ">Filmes Populares</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <CarouselItem
                key={item}
                className="basis-auto justify-center items-center"
              >
                <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md shadow-lg shadow-black/30 hover:ease-in-out" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="flex gap-2 items-center">
        <Tv size={24} className="text-primary" />
        <h1 className="text-2xl font-bold my-6 ">Em Alta Agora</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <CarouselItem
                key={item}
                className="basis-auto justify-center items-center"
              >
                <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md shadow-lg shadow-black/30 hover:ease-in-out" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="flex gap-2 items-center">
        <Film size={24} className="text-primary" />
        <h1 className="text-2xl font-bold my-6 ">Filmes Populares no Brasil</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <CarouselItem
                key={item}
                className="basis-auto justify-center items-center"
              >
                <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md shadow-lg shadow-black/30 hover:ease-in-out" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      <div className="flex gap-2 items-center">
        <Tv size={24} className="text-primary" />
        <h1 className="text-2xl font-bold my-6 ">Filmes Populares no Brasil</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <CarouselItem
                key={item}
                className="basis-auto justify-center items-center"
              >
                <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md shadow-lg shadow-black/30 hover:ease-in-out" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </main>
  );
}
