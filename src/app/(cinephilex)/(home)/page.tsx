import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { originalImageURL } from "@/lib/utils";
import { getNowPlayingMovies } from "@/service/movies/api";
import Image from "next/image";
import React from "react";
import { CarouselAutoplay } from "../../../components/carousel-autoplay";

export default async function Home() {
  const movies = await getNowPlayingMovies();
  return (
    <main className="flex justify-center items-center">
      <CarouselAutoplay>
        {movies.results.map((movie) => (
          <CarouselItem key={movie.id} className="">
            <Image
              unoptimized
              priority
              src={`${originalImageURL}${movie.backdrop_path}`}
              alt={movie.title}
              width={1200}
              height={512}
              quality={70}
              className="object-fill object-center w-full md:h-[32rem] lg:h-[40rem] max-sm:h-64 bg-center rounded-md shadow-lg "
            />
          </CarouselItem>
        ))}
      </CarouselAutoplay>
    </main>
  );
}
