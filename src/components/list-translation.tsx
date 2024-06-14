import { Translations } from "@/service/all/allDTO";
import { getTranslationsMovie } from "@/service/movies/api";
import { Languages } from "lucide-react";
import React from "react";

interface ListTransitionsProps {
  data: Translations;
}

export function ListTransitions({ data }: ListTransitionsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <Languages size={24} className="text-primary" />
        <h1 className="text-lg font-semibold">Traduções Disponíveis</h1>
      </div>
      <ul className="flex flex-wrap gap-2">
        {data.translations.map((translation) => (
          <li
            key={translation.name + translation.iso_3166_1}
            className="p-2 bg-zinc-800 shadow-lg shadow-black/30 rounded-lg text-sm"
          >
            {translation.name} - {translation.iso_3166_1}
          </li>
        ))}
      </ul>
    </div>
  );
}
