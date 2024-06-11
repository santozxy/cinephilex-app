import {
  getGenreMovies,
  getMovieWithHighPopularity,
  getTopRatedMovies,
  getTrendingDayMovies,
} from "@/service/movies/api";
import React from "react";
import {ListCards} from "@/components/list-cards";
import {BackdropCard} from "@/components/backdrop-card";
import { genrerListMovies } from "@/utils/genrerList";

export default async function Movies() {
  const trendingMovies = await getTrendingDayMovies();
  const topRatedMovies = await getTopRatedMovies();
  const animationMovies = await getGenreMovies(genrerListMovies.animation);
  const actionMovies = await getGenreMovies(genrerListMovies.action);
  const comedyMovies = await getGenreMovies(genrerListMovies.comedy);
  const horrorMovies = await getGenreMovies(genrerListMovies.horror);
  const crimeMovies = await getGenreMovies(genrerListMovies.crime);
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
      <BackdropCard item={movieHighPopularity} />
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
