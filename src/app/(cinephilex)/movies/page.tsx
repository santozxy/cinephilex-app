import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { originalImageURL } from "@/lib/utils";
import {
  getBrazilianPopularMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTrendingDayMovies,
} from "@/service/movies/api";
import Image from "next/image";
import React from "react";
import { CarouselAutoplay } from "../../../components/carousel-autoplay";
import ListCards from "@/components/list-cards";
import Link from "next/link";
import { getTopRatedSeries, getTrendingDaySeries } from "@/service/series/api";

export default async function Movies() {
  const trendingMovies = await getTrendingDayMovies();

  return (
    <main className="flex flex-col gap-8 justify-center items-center">
      <ListCards
        path="/movies/"
        titleSection="Em Alta Agora"
        data={trendingMovies}
        type="movie"
      />
    </main>
  );
}
