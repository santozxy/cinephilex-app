import { SerieDetails } from "@/service/series/seriesDTO";
import React from "react";
import Image from "next/image";
import { resizeImageURL } from "@/utils/imageURLs";
import { format } from "date-fns";
import { ImageOff, Star, Text } from "lucide-react";
import Link from "next/link";

interface ListSeasonsProps {
  seasons: SerieDetails["seasons"];
  serieID: string;
}

export function ListSeasons({ seasons, serieID }: ListSeasonsProps) {
  const removeSpecialSeasons = seasons.filter(
    (season) => season.season_number !== 0
  );

  return removeSpecialSeasons.map((season) => (
    <div
      key={season.id}
      className="grid grid-cols-[12rem_1fr] gap-4 pb-2 border-b border-zinc-800 "
    >
      {season.poster_path ? (
        <div className="flex flex-col gap-3">
          <Image
            src={`${resizeImageURL}${season.poster_path}`}
            alt={season.name}
            width={208}
            height={312}
            objectFit="cover"
            className="rounded-md w-48 h-[17.5rem]"
          />
          <Link
            href={`/series/${serieID}/season/${season.season_number}`} 
            className="bg-primary bg-opacity-50 duration-300  ease-in-out rounded-lg max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-48 max-sm:hidden shadow-lg"
          >
            <span className=" font-semibold">Ver detalhes</span>
          </Link>
        </div>
      ) : (
        <div className="bg-zinc-800 rounded-md w-48 h-[17.5rem] flex items-center justify-center">
          <ImageOff size={30} className="text-primary" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Text size={24} className="text-primary" />
              <h1 className="text-lg font-semibold">
                {season.season_number + "° Temporada"}
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Star size={24} className="text-yellow-500" />
              <span>{season.vote_average}</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary font-semibold">Episódios:</span>
            <span>{season.episode_count}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary font-semibold">Lançamento:</span>
            <span>
              {season.air_date
                ? format(new Date(season.air_date), "dd/MM/yyyy")
                : "Não informado"}
            </span>
          </div>

          <div className="space-x-1">
            <span className="text-primary font-semibold">Descrição:</span>
            <span>{season.overview ? season.overview : "Não informado"}</span>
          </div>
        </div>
      </div>
    </div>
  ));
}
