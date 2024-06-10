import {
  getBrazilianPopularMovies,
  getPopularMovies,
} from "@/service/movies/api";
import React from "react";
import ListCards from "@/components/list-cards";
import { getTopRatedSeries, getTrendingDaySeries } from "@/service/series/api";
import { getTrendingWithHighPopularityWeek } from "@/service/all/api";
import BackdropCard from "@/components/backdrop-card";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const brazilianPopularMovies = await getBrazilianPopularMovies();
  const TopRatedSeries = await getTopRatedSeries();
  const trendingSeries = await getTrendingDaySeries();
  const trendingHighPopularity = await getTrendingWithHighPopularityWeek();
  const ListsCards = [
    {
      title: "Em Alta Agora",
      data: trendingSeries,
      type: "tv",
      path: "/series/",
    },
    {
      title: "Filmes Populares",
      data: popularMovies,
      type: "movie",
      path: "/movies/",
    },
    {
      title: "Filmes Populares no Brasil",
      data: brazilianPopularMovies,
      type: "movie",
      path: "/movies/",
    },
    {
      title: "Séries Melhor Avaliadas",
      data: TopRatedSeries,
      type: "tv",
      path: "/series/",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center">
      <BackdropCard itemHighPopularity={trendingHighPopularity} />
      <section className=" flex flex-col gap-8 ">
        {ListsCards.map((list) => (
          <ListCards
            key={list.title}
            path={list.path}
            titleSection={list.title}
            data={list.data}
            type={list.type}
          />
        ))}
      </section>
    </main>
  );
}
