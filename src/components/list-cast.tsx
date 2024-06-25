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

interface ListCastProps {
  cast: Credits["cast"];
  path?: string;
  title: string;
}
export function ListCast({ cast, path = "/persons", title }: ListCastProps) {
  const sizeData = cast.length;
  const listSizeSmall = sizeData < 21;
  const listSizeMedium = sizeData > 21;
  const listSizeLarge = sizeData > 42;
  const listSizeXLarge = sizeData > 63;
  const heightBySize = listSizeSmall
    ? "h-52"
    : listSizeMedium
    ? "h-[40rem]"
    : listSizeLarge
    ? "h-[51rem]"
    : listSizeXLarge
    ? "h-[51rem]"
    : "";

  return (
    <section>
      <div className="flex gap-2 items-center">
        <Users size={24} className="text-primary" />
        <h1 className="text-lg font-semibold ">{title}</h1>
      </div>
      <div className="flex w-full">
        <Carousel opts={{ slidesToScroll: 12 }}>
          <CarouselContent
            className={` py-6 flex w-full flex-wrap flex-col ${heightBySize} gap-y-4`}
          >
            {cast.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-auto rounded-md relative hover:z-[999] hover:scale-105 transition-transform duration-500 ease-in-out "
              >
                <Link href={`${path}/${item.id}`} scroll={false}>
                  {item.profile_path ? (
                    <Image
                      priority
                      src={`${resizeImageURL}${item.profile_path}`}
                      alt={item.name ?? ""}
                      width={112}
                      height={160}
                      className="rounded-md shadow-xl w-[6.5rem] h-[8.3rem]"
                    />
                  ) : (
                    <div className="bg-zinc-800/80 w-[6.5rem] h-[8.3rem] rounded-md flex justify-center items-center">
                      <User size={32} className="text-primary" />
                    </div>
                  )}
                </Link>
                <div className="absolute text-xs flex flex-col w-[6.5rem] bottom-0 bg-zinc-900/50 shadow-lg shadow-black/30 rounded-br-md p-1">
                  <span className="font-semibold">
                    {item.character
                      .split(" " || "-")
                      .slice(0, 2)
                      .join(" ")}
                  </span>
                  <span>
                    {item.name
                      .split(" " || "-")
                      .slice(0, 2)
                      .join(" ")}
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
