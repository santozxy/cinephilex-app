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
import { BriefcaseBusiness, Film, Star, Tv, User, Video } from "lucide-react";
import { MoviesDTO } from "@/service/movies/moviesDTO";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { PersonsDTO } from "@/service/persons/personsDTO";

interface CarouselCardsProps {
  data: PersonsDTO;
  path: string;
  titleSection: string;
}

function generateDepartament(departament: string) {
  if (departament === "Acting") {
    return "Atuação";
  }
  if (departament === "Directing") {
    return "Direção";
  }
  if (departament === "Writing") {
    return "Roteiro";
  }
  return departament;
}
export default function ListCardsPersons({
  data,
  path,
  titleSection,
}: CarouselCardsProps) {
  const newData = data.results.filter((item) => item.profile_path !== null);
  return (
    <section className="mx-10">
      <div className="flex gap-2 items-center">
        <User size={24} className="text-primary" />
        <h1 className="text-lg font-semibold ">{titleSection}</h1>
      </div>
      <TooltipProvider>
        <div className="flex justify-center">
          <Carousel opts={{ slidesToScroll: 2 }}>
            <CarouselContent className=" py-6">
              {newData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-auto rounded-md group relative hover:z-[999] hover:scale-105 transition-transform duration-500 ease-in-out"
                >
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Link href={`${path}/${item.id}`} scroll={false}>
                        <Image
                          priority={true}
                          src={`${resizeImageURL}${item.profile_path}`}
                          alt={item.name ?? item.original_name ?? ""}
                          width={192}
                          height={272}
                          className=" object-center w-[12rem] max-sm:h-48 max-sm:w-36 lg:h-[16rem] rounded-md shadow-xl"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="z-[9999999] -mx-2">
                      <div className="w-[15rem] flex flex-col p-2 relative max-sm:h-48 max-sm:w-36 lg:h-[15.4rem] shadow-xl">
                        <div className="flex flex-col justify-center gap-4  ">
                          <div className="flex flex-col pb-2 border-b items-center justify-between">
                            <h1 className="text-xl font-extrabold uppercase">
                              {item.name ?? item.original_name}
                            </h1>
                          </div>
                          <div className="flex flex-col gap-3">
                            {item.known_for.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center gap-2"
                              >
                                <Video size={24} className="text-primary" />
                                <h1 className=" font-semibold">
                                  {item.title ?? item.name}
                                </h1>
                              </div>
                            ))}
                          </div>

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
