import { Skeleton } from "@/components/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Film, Popcorn, Tv } from "lucide-react";
import React from "react";

export default function HomeLoading() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center mx-10">
      <div className="flex flex-col mx-10 w-full">
        <div className="flex gap-2 items-center">
          <Popcorn size={24} className="text-primary" />
          <h1 className="text-lg font-bold my-6 ">Em Cartaz</h1>
        </div>
        <Skeleton className="max-sm:h-64 h-[35rem] w-full rounded-md shadow-lg" />
      </div>
      <div className="flex gap-2 items-center">
        <Film size={24} className="text-primary" />
        <h1 className="text-2xl font-bold my-6 ">Filmes Populares</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {[1, 2].map((item) => (
              <CarouselItem
                key={item}
                className="basis-auto shadow-xl shadow-black/40"
              >
                <Skeleton className="max-sm:h-64 h-[35rem] bg-center w-[60rem] max-sm:w-full rounded-md shadow-lg" />
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
