"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getSeasonDetails } from "@/service/series/api";

interface SelectSeasonProps {
  quantify: number;
  serieID: string;
}

export default function SelectSeason({ quantify, serieID }: SelectSeasonProps) {
  const seasons = Array.from({ length: quantify }, (_, index) => index + 1);
  const [selectSeason, setSelectSeason] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serieID}/season/${selectSeason}?${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
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
    </div>
  );
}
