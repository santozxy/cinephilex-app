import { CarouselAutoplay } from "@/components/carousel-autoplay";
import ListCardsPersons from "@/components/list-cards-persons";
import { CarouselItem } from "@/components/ui/carousel";
import {
  getPopularPersons,
  getPersonTrendingDay,
  getPersonTrendingWeek,
} from "@/service/persons/api";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Persons() {
  const popularPersons = await getPopularPersons();
  const trendingPersonsDay = await getPersonTrendingDay();
  const trendingPersonsWeek = await getPersonTrendingWeek();
  return (
    <main className="flex flex-col gap-8">
      <CarouselAutoplay titleSection="Mais Populares">
        {popularPersons.results.map((person) => (
          <CarouselItem
            key={person.id}
            className="basis-auto relative h-96 rounded-lg w-[19rem] object-center  max-sm:h-48 max-sm:w-36 "
          >
            <Link className="flex gap-3 h-full" href={`persons/${person.id}`}>
              <Image
                src={resizeImageURL + person.profile_path}
                alt={person.name}
                width={800}
                height={800}
                className=" object-center w-96 rounded-md shadow-xl"
              />
            </Link>
            <div className="flex flex-col items-center justify-center absolute bottom-0 bg-zinc-900/60 left-0 right-0">
              <h1 className=" font-semibold">{person.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselAutoplay>

      <ListCardsPersons
        data={trendingPersonsWeek}
        path="persons"
        titleSection="Populares da Semana"
      />
      <ListCardsPersons
        data={trendingPersonsDay}
        titleSection="Em Alta Agora"
        path="persons"
      />
    </main>
  );
}
