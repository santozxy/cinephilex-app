import { SeasonDetails } from "@/service/series/seriesDTO";
import React from "react";
import Image from "next/image";
import { imageSize200, resizeImageURL } from "@/utils/imageURLs";
import { ImageOff, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

interface ListSeasonsProps {
  episodes?: SeasonDetails;
}

export function ListEpisodes({ episodes }: ListSeasonsProps) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
      {episodes?.episodes.map((episode) => (
        <Sheet key={episode.id}>
          <SheetTrigger>
            <div className="p-2 bg-zinc-800 rounded-lg flex gap-2 flex-col hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
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
            </div>
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll border-zinc-700 transition-transform duration-300 translate- ">
            <div className="flex flex-col gap-4">
              <h1 className=" text-lg font-semibold">
                Informações do Episódio
              </h1>
              <SheetHeader>
                <div className="flex gap-2 items-center">
                  <h1 className="font-semibold">
                    {episode.episode_number} - {episode.name}
                  </h1>
                </div>
                <Image
                  src={`${resizeImageURL}${episode.still_path}`}
                  alt={episode.name}
                  width={288}
                  height={160}
                  className="rounded-md w-full h-48"
                />
              </SheetHeader>

              <SheetDescription className="gap-3 flex flex-col">
                <div className="flex flex-col gap-1">
                  <h1 className="text-primary font-semibold">Visão Geral:</h1>
                  <span>{episode.overview}</span>
                </div>

                <hr className="w-full border-t border-zinc-600" />

                <div className="flex flex-col gap-4">
                  <h1 className="text-primary font-semibold">
                    Participações Especiais
                  </h1>

                  <div className="grid grid-cols-2 gap-3">
                    {episode.guest_stars.length === 0 && (
                      <span>Não há participações especiais</span>
                    )}
                    {episode.guest_stars?.map((guest) => (
                      <Link
                        href={`/persons/${guest.id}`}
                        className="flex items-center w-full gap-2 shadow-lg shadow-black/20 hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out p-2 rounded-lg "
                        key={guest.id}
                      >
                        {guest.profile_path && (
                          <Image
                            src={`${imageSize200}${guest.profile_path}`}
                            alt={guest.name}
                            width={64}
                            height={64}
                            className="rounded-lg w-10 h-14"
                          />
                        )}
                        {!guest.profile_path && (
                          <div className="bg-zinc-800 rounded-lg w-10 h-14 flex items-center justify-center">
                            <User size={32} className="text-primary" />
                          </div>
                        )}
                        <div className="flex flex-col ">
                          <h1 className="font-semibold text-sm">
                            {guest.character
                              .split(" " || "-")
                              .slice(0, 2)
                              .join(" ")}
                          </h1>
                          <span className="text-xs">
                            {guest.name
                              .split(" " || "-")
                              .slice(0, 2)
                              .join(" ")}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetDescription>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
