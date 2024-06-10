import { originalImageURL } from "@/utils/imageURLs";
import {
  getBrazilianPopularMovies,
  getMovieWithHighPopularity,
  getPopularMovies,
} from "@/service/movies/api";
import Image from "next/image";
import React from "react";
import ListCards from "@/components/list-cards";
import { getTopRatedSeries, getTrendingDaySeries } from "@/service/series/api";
import Link from "next/link";
import { Popcorn } from "lucide-react";
import { getTrendingWithHighPopularityWeek } from "@/service/all/api";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const brazilianPopularMovies = await getBrazilianPopularMovies();
  const TopRatedSeries = await getTopRatedSeries();
  const trendingSeries = await getTrendingDaySeries();
  const trendingHighPopularity = await getTrendingWithHighPopularityWeek();

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full h-[40rem] max-sm:h-64 relative">
        <Image
          priority
          src={originalImageURL + trendingHighPopularity.backdrop_path}
          width={1280}
          height={720}
          alt={
            trendingHighPopularity.title ?? trendingHighPopularity.name ?? ""
          }
          className="object-fill object-center w-full h-full"
        />

        <Link className="z-[99]" href={`/movies/${trendingHighPopularity.id}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-zinc-900"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-zinc-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900"></div>
        </Link>
        <div className="absolute sm:top-28 top-4 max-sm:left-0 left-10 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:w-96 p-2 rounded-lg">
            <div className="flex sm:flex-col items-start gap-4">
              <Popcorn size={24} className="text-primary" />
              <h1 className="sm:text-xl uppercase font-extrabold">
                {trendingHighPopularity.title}
              </h1>
            </div>
            <p className="text-zinc-300 text-justify max-sm:hidden">
              {" "}
              {trendingHighPopularity.overview.slice(0, 202) + "..."}
            </p>
            <Link
              className="bg-primary bg-opacity-50 duration-300 ease-in-out rounded-full max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-56 max-sm:hidden shadow-lg"
              href={`/movies/${trendingHighPopularity.id}`}
            >
              <span className="font-semibold max-sm:text-sm">Ver detalhes</span>
            </Link>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-8 ">
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
      </section>
    </main>
  );
}
