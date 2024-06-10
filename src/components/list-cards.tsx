import { resizeImageURL } from "@/utils/imageURLs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "./ui/carousel";
import { Film, Star, Tv, User } from "lucide-react";
import { MoviesDTO } from "@/service/movies/moviesDTO";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CarouselCardsProps {
  data: MoviesDTO;
  path: string;
  titleSection: string;
  type: string;
}
export default function ListCards({
  data,
  path,
  titleSection,
  type,
}: CarouselCardsProps) {
  function generateIconType(type: string) {
    if (type === "movie") {
      return <Film size={24} className="text-primary" />;
    }
    if (type === "tv") {
      return <Tv size={24} className="text-primary" />;
    }
    if (type === "person") {
      return <User size={24} className="text-primary" />;
    }
  }

  const newData = data.results.filter((item) => item.poster_path !== null);
  return (
    <section className="mx-10">
      <TooltipProvider>
        <div className="flex gap-2 items-center">
          {generateIconType(type)}
          <h1 className="text-lg font-semibold ">{titleSection}</h1>
        </div>
        <div className="flex justify-center">
          <Carousel>
            <CarouselContent className=" py-6">
              {newData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-auto rounded-md group relative hover:z-[999]  hover:scale-105 transition-transform duration-500 ease-in-out"
                >
                  <Link href={`${path}/${item.id}`} scroll={false}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Image
                          priority={true}
                          src={`${resizeImageURL}${item.poster_path}`}
                          alt={item.title ?? ""}
                          width={192}
                          height={272}
                          className=" object-center w-[12rem] max-sm:h-48 max-sm:w-36 lg:h-[16rem] rounded-md shadow-xl"
                        />
                      </TooltipTrigger>
                      <TooltipContent side="right" className="z-[9999]">
                        <div className="w-[20rem] flex flex-col p-2 relative max-sm:h-48 max-sm:w-36 lg:h-[15.5rem] rounded-md shadow-xl">
                          <div className="flex flex-col gap-4 z-50">
                            <div className="flex items-center justify-between">
                              <h1 className="text-xl font-extrabold uppercase">
                                {item.title ?? item.name}
                              </h1>
                              <div className="flex items-center gap-2">
                                <Star size={22} className="text-yellow-400" />
                                <span className="text-lg text-center ">
                                  {item.vote_average?.toFixed(1)}
                                </span>
                              </div>
                            </div>
                            <p className="text-zinc-300 text-justify max-sm:hidden">
                              {item.overview.slice(0, 202) + "..."}
                            </p>
                            <Link
                              href={`${path}/${item.id}`}
                              className="bg-primary bg-opacity-50 duration-300 ease-in-out rounded-full max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-56 max-sm:hidden shadow-lg"
                            >
                              <span className="font-semibold max-sm:text-sm">
                                Ver detalhes
                              </span>
                            </Link>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </Link>

                  <div className=" absolute top-4 left-3 rounded-sm p-1 w-14 bg-primary bg-opacity-85  text-center">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-zinc-50" />
                      <span className="text-xs text-center ">
                        {item.vote_average?.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="invisible group-hover:visible"></div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </TooltipProvider>
    </section>
  );
}
