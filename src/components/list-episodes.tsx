import { SeasonDetails } from "@/service/series/seriesDTO";
import React from "react";
import Image from "next/image";
import { resizeImageURL } from "@/utils/imageURLs";
import { ImageOff} from "lucide-react";
import Link from "next/link";

interface ListSeasonsProps {
  episodes?: SeasonDetails;
}

export function ListEpisodes({ episodes }: ListSeasonsProps) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
      {episodes?.episodes.map((episode) => (
        <Link
          href={`/series/${episode.show_id}/episode/${episode.id}`}
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
  );
}
