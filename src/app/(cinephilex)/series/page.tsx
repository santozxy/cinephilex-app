import {
  getPopularSeries,
  getSerieWithHighPopularity,
  getSeriesByGenre,
  getTopRatedSeries,
  getTrendingDaySeries,
} from "@/service/series/api";
import Image from "next/image";
import React from "react";
import ListCards from "@/components/list-cards";
import { originalImageURL } from "@/utils/imageURLs";
import Link from "next/link";
import { Popcorn } from "lucide-react";

const genres = {
  action: "28",
  animation: "16",
  comedy: "35",
  crime: "80",
  mystery: "9648",
  horror: "27",
};

export default async function Series() {
  const trendingSeries = await getTrendingDaySeries();
  const topRatedSeries = await getTopRatedSeries();
  const animationSeries = await getSeriesByGenre(genres.animation);
  const mysterySeries = await getSeriesByGenre(genres.mystery);
  const serieHighPopularity = await getSerieWithHighPopularity();
  const comedySeries = await getSeriesByGenre(genres.comedy);

  const ListsCards = [
    { title: "Comédia", data: comedySeries },
    { title: "Em Alta Agora", data: trendingSeries },
    { title: "Mistério", data: mysterySeries },
    { title: "Melhor Avaliados", data: topRatedSeries },
    { title: "Animações", data: animationSeries },
  ];

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full h-[40rem] max-sm:h-64 relative">
        <Image
          priority
          src={originalImageURL + serieHighPopularity.backdrop_path}
          width={1280}
          height={720}
          alt={serieHighPopularity.title}
          className="object-fill object-center w-full h-full"
        />

        <Link className="z-[99]" href={`/movies/${serieHighPopularity.id}`}>
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
                {serieHighPopularity.name}
              </h1>
            </div>
            <p className="text-zinc-300 text-justify max-sm:hidden">
              {" "}
              {serieHighPopularity.overview.slice(0, 202) + "..."}
            </p>
            <Link
              className="bg-primary bg-opacity-50 duration-300 ease-in-out rounded-full max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-56 max-sm:hidden shadow-lg"
              href={`/movies/${serieHighPopularity.id}`}
            >
              <span className="font-semibold max-sm:text-sm">Ver detalhes</span>
            </Link>
          </div>
        </div>
      </section>
      {ListsCards.map((list) => (
        <ListCards
          key={list.title}
          path="/series/"
          titleSection={list.title}
          data={list.data}
          type={"tv"}
        />
      ))}
    </main>
  );
}
