import { CarouselItem } from "@/components/ui/carousel";
import { originalImageURL } from "@/lib/utils";
import {
  getBrazilianPopularMovies,
  getNowPlayingMovies,
  getPopularMovies,
} from "@/service/movies/api";
import Image from "next/image";
import React from "react";
import { CarouselAutoplay } from "../../../components/carousel-autoplay";
import ListCards from "@/components/list-cards";
import Link from "next/link";
import { getTopRatedSeries, getTrendingDaySeries } from "@/service/series/api";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const popularMovies = await getPopularMovies();
  const brazilianPopularMovies = await getBrazilianPopularMovies();
  const TopRatedSeries = await getTopRatedSeries();
  const trendingSeries = await getTrendingDaySeries();

  return (
    <main className="flex flex-col gap-8 justify-center items-center">
      <CarouselAutoplay titleSection="Em Cartaz">
        {nowPlayingMovies.results.map((movie) => {
          if (!movie.backdrop_path) {
            return null;
          }
          return (
            <CarouselItem
              key={movie.id}
              className="basis-auto shadow-xl shadow-black/40"
            >
              <Link href={`/movies/${movie.id}`}>
                <Image
                  src={`${originalImageURL}${movie.backdrop_path}`}
                  alt={movie.title}
                  width={960}
                  height={560}
                  quality={70}
                  priority
                  className=" max-sm:h-64 h-[35rem] bg-center w-[60rem] max-sm:w-full rounded-md shadow-lg"
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselAutoplay>
      <ListCards
        path="/movies/"
        titleSection="Filmes Populares"
        data={popularMovies}
        type="movie"
      />
      <ListCards
        path="/series/"
        titleSection="Em Alta Agora"
        data={trendingSeries}
        type="tv"
      />
      <ListCards
        path="/movies/"
        titleSection="Filmes Populares no Brasil"
        data={brazilianPopularMovies}
        type="movie"
      />
      <ListCards
        path="/series/"
        titleSection="Séries Melhor Avaliadas"
        data={TopRatedSeries}
        type="tv"
      />
    </main>
  );
}
