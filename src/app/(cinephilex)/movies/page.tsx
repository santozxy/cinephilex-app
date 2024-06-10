import {
  getGenreMovies,
  getMovieWithHighPopularity,
  getTopRatedMovies,
  getTrendingDayMovies,
} from "@/service/movies/api";

import React from "react";
import ListCards from "@/components/list-cards";
import Link from "next/link";
import { Popcorn } from "lucide-react";
import Image from "next/image";
import { originalImageURL } from "@/utils/imageURLs";

const genres = {
  action: "28",
  animation: "16",
  comedy: "35",
  crime: "80",
  horror: "27",
};

export default async function Movies() {
  const trendingMovies = await getTrendingDayMovies();
  const topRatedMovies = await getTopRatedMovies();
  const animationMovies = await getGenreMovies(genres.animation);
  const actionMovies = await getGenreMovies(genres.action);
  const comedyMovies = await getGenreMovies(genres.comedy);
  const horrorMovies = await getGenreMovies(genres.horror);
  const crimeMovies = await getGenreMovies(genres.crime);
  const movieHighPopularity = await getMovieWithHighPopularity();
  const ListsCards = [
    { title: "Em Alta Agora", data: trendingMovies },
    { title: "Mais Bem Avaliados", data: topRatedMovies },
    { title: "Animações", data: animationMovies },
    { title: "Ação Dobrada", data: actionMovies },
    { title: "Comédia", data: comedyMovies },
    { title: "Terror", data: horrorMovies },
    { title: "Crime", data: crimeMovies },
  ];

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full h-[40rem] max-sm:h-64 relative">
        <Image
          priority
          src={originalImageURL + movieHighPopularity.backdrop_path}
          width={1280}
          height={720}
          alt={movieHighPopularity.title}
          className="object-fill object-center w-full h-full"
        />

        <Link className="z-[99]" href={`/movies/${movieHighPopularity.id}`}>
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
                {movieHighPopularity.title}
              </h1>
            </div>
            <p className="text-zinc-300 text-justify max-sm:hidden">
              {" "}
              {movieHighPopularity.overview.slice(0, 202) + "..."}
            </p>
            <Link
              className="bg-primary bg-opacity-50 duration-300 ease-in-out rounded-full max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-56 max-sm:hidden shadow-lg"
              href={`/movies/${movieHighPopularity.id}`}
            >
              <span className="font-semibold max-sm:text-sm">Ver detalhes</span>
            </Link>
          </div>
        </div>
      </section>
      {ListsCards.map((list) => (
        <ListCards
          key={list.title}
          path="/movies/"
          titleSection={list.title}
          data={list.data}
          type={"movie"}
        />
      ))}
    </main>
  );
}
