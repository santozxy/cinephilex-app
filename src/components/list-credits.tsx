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
  data: Credits["cast"] | Credits["crew"];
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
                      fetchPriority="high"
                      src={`${resizeImageURL}${item.profile_path}`}
                      alt={item.name ?? ""}
                      width={192}
                      height={272}
                      className=" object-center rounded-md shadow-xl w-[7rem] h-[10rem]"
                    />
                  ) : (
                    <div className="bg-zinc-800 w-[7rem] h-[10rem] rounded-md flex justify-center items-center">
                      <User size={32} className="text-primary" />
                    </div>
                  )}
                </Link>
                <span className="absolute bottom-0 text-sm bg-zinc-900/60 shadow-lg shadow-black/30 text-nowrap p-1 ">
                  {item.name.slice(0, 12) + "..."}
                </span>
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
