"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { getSeasonDetails } from "@/service/series/api";
import { SeasonDetails } from "@/service/series/seriesDTO";
import Image from "next/image";
import { resizeImageURL } from "@/utils/imageURLs";
import {
  ImageOff,
  List,
  ListVideo,
  LucideVideotape,
  Text,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Skeleton } from "./skeleton";

interface SelectSeasonProps {
  quantify: number;
  serieID: string;
}

function LoadingEpisodes() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-24" />
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-24" />
      <div className="grid-cols-3 sm:grid-cols-2">
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
      </div>
    </div>
  );
}

export default function Season({ quantify, serieID }: SelectSeasonProps) {
  const seasons = Array.from({ length: quantify }, (_, index) => index + 1);
  const [data, setData] = useState<SeasonDetails>();
  const [selectSeason, setSelectSeason] = useState(1);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/tv/${serieID}/season/${selectSeason}?${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    )
      .then(async (response) => {
        const data: SeasonDetails = await response.json();
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectSeason, serieID]);

  return (
    <div className="flex flex-col gap-4">
      <Select
        defaultValue="1"
        onValueChange={(value) => setSelectSeason(Number(value))}
      >
        <SelectTrigger className="w-80">
          <SelectValue placeholder="Selecione a temporada" />
        </SelectTrigger>
        <SelectContent>
          {seasons.map((season) => (
            <SelectItem
              key={season}
              onClick={() => setSelectSeason(season)}
              value={String(season)}
            >
              Temporada {season}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Suspense fallback={<LoadingEpisodes />}>
        {data?.overview && (
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Text size={24} className="text-primary" />
              <h1 className="text-lg font-semibold ">Descrição</h1>
            </div>
            <p className="p-2">{data?.overview}</p>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Video size={24} className="text-primary" />
            <h1 className="text-lg font-semibold ">Episódios</h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
            {data?.episodes.map((episode) => (
              <Link
                href={`/series/${serieID}/episode/${episode.id}`}
                className="p-2 bg-zinc-800 rounded-lg flex gap-2 flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
                key={episode.id}
              >
                {episode.still_path && (
                  <Image
                    src={`${resizeImageURL}${episode.still_path}`}
                    alt={episode.name}
                    width={288}
                    height={160}
                    className="rounded-md w-full h-48"
                  />
                )}
                {!episode.still_path && (
                  <div className="bg-zinc-800 rounded-md w-72 h-40 flex items-center justify-center">
                    <ImageOff size={30} className="text-primary" />
                  </div>
                )}
                <hr className="w-full border-t border-zinc-600" />
                <div className="flex flex-col gap-1 p-2  items-start">
                  <div className="flex gap-2">
                    <h3 className="text-lg font-semibold">
                      {episode.episode_number} - {episode.name}
                    </h3>
                  </div>
                  <p className="text-sm">{episode.overview}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
