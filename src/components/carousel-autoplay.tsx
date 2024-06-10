"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { User } from "lucide-react";

export function CarouselAutoplay({
  children,
  titleSection,
}: {
  children: React.ReactNode;
  titleSection: string;
}) {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      waitForTransition: true,
      jump: false,
    })
  );

  return (
    <div className="flex flex-col mx-10">
      <div className="flex gap-2 items-center">
        <User size={24} className="text-primary" />
        <h1 className="text-lg font-bold my-6 ">{titleSection}</h1>
      </div>
      <Carousel plugins={[plugin.current]}>
        <CarouselContent className="gap-5">{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "}
    </div>
  );
}
