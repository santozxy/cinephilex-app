import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { originalImageURL } from "@/lib/utils";
import { getNowPlayingMovies, getPopularMovies } from "@/service/movies/api";
import Image from "next/image";
import React from "react";
import { CarouselAutoplay } from "../../../components/carousel-autoplay";
import ListCards from "@/components/list-cards";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="flex flex-col gap-8 justify-center items-center">
      <CarouselAutoplay>
        {nowPlayingMovies.results.map((movie) => (
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
      <ListCards path="/movies/" titleSection="Popular Movies" data={popularMovies} />
    </main>
  );
}
