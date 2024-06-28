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
import { ListEpisodes } from "./list-episodes";

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
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <Text size={24} className="text-primary" />
          <h1 className="text-lg font-semibold ">Descrição</h1>
        </div>
        <p className="p-2">
          {data?.overview ? data.overview : "Nenhuma descrição encontrada!"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Video size={24} className="text-primary" />
          <h1 className="text-lg font-semibold ">Episódios</h1>
        </div>
        <Suspense fallback={<LoadingEpisodes />}>
          <ListEpisodes episodes={data} />
        </Suspense>
      </div>
    </div>
  );
}
