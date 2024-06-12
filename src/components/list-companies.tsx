import { SerieDetails } from "@/service/series/seriesDTO";
import React from "react";
import Image from "next/image";
import { resizeImageURL } from "@/utils/imageURLs";

export interface ListCompaniesProps {
  data: SerieDetails["production_companies"];
}

export function ListCompanies({ data }: ListCompaniesProps) {
  return (
    <div className="flex-col flex gap-2 ">
      <h1 className="font-semibold">Produzido por:</h1>
      <div className="flex flex-wrap gap-2 items-center">
        {data.map((company) => (
          <Image
            key={company.id}
            src={`${resizeImageURL}${company.logo_path ?? "/notFound"}`}
            alt={company.name}
            width={64}
            height={40}
            className="object-contain w-16 h-10 p-2 bg-zinc-800 shadow-lg rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
