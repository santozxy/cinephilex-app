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
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col mx-10 w-full">
        <Skeleton className="max-sm:h-64 h-[40rem] w-full rounded-md shadow-lg" />
      </div>
      <section className="mx-10">
        <div className="flex gap-2 items-center">
          <Film size={24} className="text-primary" />
          <h1 className="text-lg font-bold my-6 ">Em Alta Agora</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto justify-center items-center"
                >
                  <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>
      <section className="mx-10">
        <div className="flex gap-2 items-center">
          <Tv size={24} className="text-primary" />
          <h1 className="text-2xl font-bold my-6 ">Melhores Avaliados</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto justify-center items-center"
                >
                  <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>
      <section className="mx-10">
        <div className="flex gap-2 ">
          <Film size={24} className="text-primary" />
          <h1 className="text-2xl font-bold my-6 ">Terror</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto justify-center items-center"
                >
                  <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>
      <section className="mx-10">
        <div className="flex gap-2 items-center">
          <Tv size={24} className="text-primary" />
          <h1 className="text-2xl font-bold my-6 ">Animação</h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto justify-center items-center"
                >
                  <Skeleton className=" w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
