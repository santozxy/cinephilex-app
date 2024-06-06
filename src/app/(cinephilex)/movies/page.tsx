import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { originalImageURL } from "@/lib/utils";
import {
  getGenreMovies,
  getTopRatedMovies,
  getTrendingDayMovies,
} from "@/service/movies/api";

import React from "react";
import ListCards from "@/components/list-cards";

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

  return (
    <main className="flex flex-col gap-8 justify-center items-center">
      <ListCards
        path="/movies/"
        titleSection="Em Alta Agora"
        data={trendingMovies}
        type="movie"
      />
      <ListCards
        path="/movies/"
        titleSection="Melhores Avaliados"
        data={topRatedMovies}
        type="movie"
      />
      <ListCards
        path="/movies/"
        titleSection="Terror"
        data={horrorMovies}
        type="movie"
      />
      <ListCards
        path="/movies/"
        titleSection="Animação"
        data={animationMovies}
        type="movie"
      />
      <ListCards
        path="/movies/"
        titleSection="Ação"
        data={actionMovies}
        type="movie"
      />
      <ListCards
        path="/movies/"
        titleSection="Comédia"
        data={comedyMovies}
        type="movie"
      />

      <ListCards
        path="/movies/"
        titleSection="Crime"
        data={crimeMovies}
        type="movie"
      />
    </main>
  );
}
