import { resizeImageURL } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Result, SearchDTO } from "@/service/search/searchDTO";
import Link from "next/link";

interface CarouselCardsProps {
  data: SearchDTO;
}
export default function ListCards({ data }: CarouselCardsProps) {
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

  const generateLink = (item: Result) => {
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
  };
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {newData.map((item) => (
        <Link
          href={generateLink(item)}
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
            className="object-cover object-center w-[12rem] lg:h-[17rem] rounded-md"
          />

          <div className="absolute top-2 -left-1 rounded-sm  p-1 w-14 bg-primary bg-opacity-85 text-zinc-50 text-center">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-50" />
              <span className="text-xs text-center">
                {item.media_type.charAt(0).toUpperCase() +
                  item.media_type.substring(1)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
