import { resizeImageURL } from "@/lib/imageURLs";
import React from "react";
import Image from "next/image";
import { Result, SearchDTO } from "@/service/search/searchDTO";
import Link from "next/link";

interface CarouselCardsProps {
  data: SearchDTO;
}
export function ListSearchCards({ data }: CarouselCardsProps) {
  const newData = data.results
    .map((item) => {
      if (item.media_type === "person") {
        return {
          ...item,
          poster_path: item.profile_path,
        };
      }
      return item;
    })
    .filter((item) => item.poster_path);

  function generateLink(item: Result) {
    if (item.media_type === "movie") {
      return `/movies/${item.id}`;
    }
    if (item.media_type === "tv") {
      return `/series/${item.id}`;
    }
    if (item.media_type === "person") {
      return `/persons/${item.id}`;
    }
    return "";
  }

  function generateTag(item: Result) {
    if (item.media_type === "movie") {
      return "Filme";
    }
    if (item.media_type === "tv") {
      return "Série";
    }
    if (item.media_type === "person") {
      return "Pessoa";
    }
    return "";
  }

  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {newData.map((item) => (
        <Link
          href={generateLink(item)}
          key={item.id}
          className="hover:transition-transform hover:scale-105 rounded-md relative hover:duration-500 shadow-lg shadow-black/30 hover:ease-in-out"
        >
          <Image
            src={`${resizeImageURL}${item.poster_path}`}
            alt={item.title ?? item.name ?? item.original_name ?? ""}
            width={240}
            height={352}
            className="object-cover object-center w-[12rem] max-sm:h-60 max-sm:w-36 lg:h-[17rem] rounded-md"
          />

          <div className="absolute top-2 -left-1 rounded-sm p-1 w-16 bg-primary bg-opacity-85 text-zinc-50 text-center">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-50" />
              <span className="text-xs text-center">{generateTag(item)}</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
