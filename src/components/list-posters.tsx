import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import { ImagePlayIcon } from "lucide-react";
import { Images } from "@/service/all/allDTO";

interface ListPostersProps {
  data: Images["posters"];
}

export function ListPosters({ data }: ListPostersProps) {
  return (
    <section>
      <div className="flex gap-2 items-center">
        <ImagePlayIcon size={24} className="text-primary" />
        <h1 className="text-lg font-semibold ">Posters</h1>
      </div>

      <Carousel opts={{ slidesToScroll: 2 }}>
        <CarouselContent className=" py-6">
          {data.map((item) => (
            <CarouselItem
              key={item.file_path}
              className="basis-auto rounded-md group relative hover:z-[999]  hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <Image
                quality={70}
                priority
                src={`${resizeImageURL}${item.file_path}`}
                alt={""}
                width={192}
                height={272}
                className=" object-center w-[12rem] max-sm:h-48 max-sm:w-36 lg:h-[16rem] rounded-md shadow-xl shadow-black/30"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {data.length > 3 && (
          <>
            <CarouselNext />
            <CarouselPrevious />
          </>
        )}
      </Carousel>
    </section>
  );
}
