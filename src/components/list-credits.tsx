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
import { Credits } from "@/service/all/allDTO";

interface ListCreditsProps {
  data: Credits["cast"] | Credits["crew"];
  path?: string;
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
      <div className="flex w-full">
        <Carousel opts={{ slidesToScroll: 6 }}>
          <CarouselContent className=" py-6 flex h-[25rem] gap-y-4 w-full flex-wrap">
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
                      className="rounded-md shadow-xl w-[8rem] h-[11rem]"
                    />
                  ) : (
                    <div className="bg-zinc-800/80 w-[8rem] h-[11rem] rounded-md flex justify-center items-center">
                      <User size={32} className="text-primary" />
                    </div>
                  )}
                </Link>
                <div className="absolute text-xs flex flex-col w-[8rem] bottom-0  bg-zinc-900/60 shadow-lg shadow-black/30 rounded-br-md p-1 ">
                  <span className=" font-semibold">
                    {"character" in item
                      ? item.character
                      : item.known_for_department}
                  </span>
                  <span>
                    {item.name.length > 17
                      ? item.name.slice(0, 17) + "..."
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
