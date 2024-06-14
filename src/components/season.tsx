"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense, useEffect, useState } from "react";
import { getSeasonDetails } from "@/service/series/api";
import { SeasonDetails } from "@/service/series/seriesDTO";
import Image from "next/image";
import { resizeImageURL } from "@/utils/imageURLs";
import { ImageOff } from "lucide-react";

interface SelectSeasonProps {
  quantify: number;
  serieID: string;
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
        <SelectTrigger className="w-[180px]">
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
      <Suspense fallback={<div>Carregando...</div>}>
        <div className="flex gap-3 ">
          <div>
            <h2 className="font-semibold text-primary">Descrição:</h2>
            <p>{data?.overview}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Episódios</h2>
          <div className="grid grid-cols-3 gap-4">
            {data?.episodes.map((episode) => (
              <div
                className="p-2 bg-zinc-800 shadow-lg rounded-lg"
                key={episode.id}
              >
                {episode.still_path && (
                  <Image
                    src={`${resizeImageURL}${episode.still_path}`}
                    alt={episode.name}
                    width={288}
                    height={160}
                    className="rounded-md w-72 h-40"
                  />
                )}
                {!episode.still_path && (
                  <div className="bg-zinc-800 rounded-md w-72 h-40 flex items-center justify-center">
                    <ImageOff size={30} className="text-primary" />
                  </div>
                )}

                <h3 className="text-lg font-semibold">{episode.name}</h3>
                <p>{episode.overview}</p>
                <div className="flex gap-2 items-center">
                  <span className="text-primary font-semibold">
                    Lançamento:
                  </span>
                  <span>{episode.air_date}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-primary font-semibold">Nota:</span>
                  <span>{episode.vote_average}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
