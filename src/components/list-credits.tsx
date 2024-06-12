import { Credits } from "@/service/movies/moviesDTO";
import { User, Users } from "lucide-react";
import React from "react";
import { resizeImageURL } from "@/utils/imageURLs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface ListCreditsProps {
  data: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id?: string;
    department?: string;
    job?: string;
    cast_id?: number;
    character?: string;
  }[];
  path: string;
  title: string;
}
export function ListCredits({
  data,
  path = "/persons",
  title,
}: ListCreditsProps) {
  
  return (
    <section>
      <div className="flex gap-2 items-center">
        <Users size={24} className="text-primary" />
        <h1 className="text-lg font-semibold ">{title}</h1>
      </div>
      <div className="flex">
        <Carousel opts={{ slidesToScroll: 6 }}>
          <CarouselContent className=" py-6 flex h-96 gap-y-4 w-full flex-col flex-wrap">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-auto rounded-md  relative hover:z-[999] hover:scale-105 transition-transform duration-500 ease-in-out "
              >
                <Link href={`${path}/${item.id}`} scroll={false}>
                  {item.profile_path ? (
                    <Image
                      priority
                      src={`${resizeImageURL}${item.profile_path}`}
                      alt={item.name ?? ""}
                      width={112}
                      height={160}
                      className=" object-center rounded-md shadow-xl w-[7rem] h-[10rem]"
                    />
                  ) : (
                    <div className="bg-zinc-800/80 w-[7rem] h-[10rem] rounded-md flex justify-center items-center">
                      <User size={32} className="text-primary" />
                    </div>
                  )}
                </Link>
                <div className="absolute top-0 text-xs bg-zinc-900/60 shadow-lg shadow-black/30 rounded-br-md p-1 ">
                  <span>{item.character || item.known_for_department}</span>
                </div>
                <div className="absolute bottom-0 text-xs bg-zinc-900/60 shadow-lg shadow-black/30 rounded-tr-md text-nowrap p-1 ">
                  <span>
                    {item.name.length > 15
                      ? item.name.slice(0, 15) + "..."
                      : item.name}{" "}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
