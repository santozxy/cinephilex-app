import {
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
import { genrerListSeries } from "@/utils/genrerList";
import BackdropCard from "@/components/backdrop-card";

export default async function Series() {
  const trendingSeries = await getTrendingDaySeries();
  const topRatedSeries = await getTopRatedSeries();
  const animationSeries = await getSeriesByGenre(genrerListSeries.animation);
  const mysterySeries = await getSeriesByGenre(genrerListSeries.mystery);
  const serieHighPopularity = await getSerieWithHighPopularity();
  const comedySeries = await getSeriesByGenre(genrerListSeries.comedy);
  const realitySeries = await getSeriesByGenre(genrerListSeries.reality, 2);

  const ListsCards = [
    { title: "Comédia", data: comedySeries },
    { title: "Em Alta Agora", data: trendingSeries },
    { title: "Realitys Shows", data: realitySeries },
    { title: "Mistério", data: mysterySeries },
    { title: "Melhor Avaliados", data: topRatedSeries },
    { title: "Animações", data: animationSeries },
  ];

  return (
    <main className="flex flex-col justify-center items-center">
      <BackdropCard item={serieHighPopularity} />
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
