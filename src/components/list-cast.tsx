import { Credits } from "@/service/movies/moviesDTO";
import { Star, Users } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
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

interface ListCastProps {
  data: Credits["cast"];
  path: string;
}
export default function ListCast({ data, path = "/persons" }: ListCastProps) {
  return (
    <section >
      <TooltipProvider>
        <div className="flex gap-2 items-center">
          <Users size={24} className="text-primary" />
          <h1 className="text-lg font-semibold ">Elenco</h1>
        </div>
        <div className="flex justify-center mx-10">
          <Carousel opts={{ slidesToScroll: 2 }}>
            <CarouselContent className=" py-6">
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-auto rounded-md group relative hover:z-[999]  hover:scale-105 transition-transform duration-500 ease-in-out"
                >
                  <Link href={`${path}/${item.id}`} scroll={false}>
                    <Image
                      priority={true}
                      src={`${resizeImageURL}${item.profile_path}`}
                      alt={item.name ?? ""}
                      width={192}
                      height={272}
                      className=" object-center w-[10rem] max-sm:h-48 max-sm:w-36 lg:h-[14rem] rounded-md shadow-xl"
                    />
                  </Link>
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
