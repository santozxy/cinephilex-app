import { CarouselAutoplay } from "@/components/carousel-autoplay";
import { Skeleton } from "@/components/skeleton";
import { CarouselItem } from "@/components/ui/carousel";
import React from "react";

export default function HomeLoading() {
  return (
    <main className="flex justify-center items-center">
      <div className="mx-10">
        <Skeleton className="w-full md:h-[32rem] lg:h-[40rem] max-sm:h-64" />
      </div>
    </main>
  );
}
