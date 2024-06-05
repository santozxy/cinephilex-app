import { resizeImageURL } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Result, SearchDTO } from "@/service/search/searchDTO";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "./ui/carousel";
import { Star } from "lucide-react";
import { MoviesDTO } from "@/service/movies/moviesDTO";

interface CarouselCardsProps {
  data: MoviesDTO;
  path: string;
  titleSection: string;
}
export default function ListCards({
  data,
  path,
  titleSection,
}: CarouselCardsProps) {
  return (
    <section className="mx-10">
      <h1 className="text-2xl font-bold my-6 ">{titleSection}</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        <Carousel>
          <CarouselContent>
            {data.results.map((item) => (
              <CarouselItem key={item.id} className="basis-auto">
                <Link
                  href={`${path} + ${item.id}`}
                  key={item.id}
                  className="hover:transition-transform hover:scale-105 rounded-md relative hover:duration-500 shadow-lg shadow-black/30 hover:ease-in-out"
                >
                  <Image
                    priority={true}
                    unoptimized
                    src={`${resizeImageURL}${item.poster_path}`}
                    alt={item.title ?? ""}
                    width={240}
                    height={352}
                    className="object-cover object-center w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md"
                  />

                  <div className="absolute top-2 -left-1 rounded-sm  p-1 w-14 bg-primary bg-opacity-85 text-zinc-50 text-center">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-zinc-50" />
                      <span className="text-xs text-center">
                        {item.vote_average?.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
