import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "./ui/carousel";
import { ListVideo } from "lucide-react";
import { Videos } from "@/service/all/allDTO";

interface ListClipsProps {
  data: Videos["results"];
}
export function ListClips({ data }: ListClipsProps) {
  return (
    <section>
      <div className="flex gap-2 items-center">
        <ListVideo size={24} className="text-primary" />
        <h1 className="text-lg font-semibold ">Trailers</h1>
      </div>

      <Carousel opts={{ slidesToScroll: 3 }}>
        <CarouselContent className="py-6 ">
          {data.map((video) => (
            <CarouselItem key={video.id} className="basis-auto w-1/2 xl:w-1/3 h-72 ">
              <iframe
                key={video.key}
                className="rounded-lg w-full h-full"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
}
