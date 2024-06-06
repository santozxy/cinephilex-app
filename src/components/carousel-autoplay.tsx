"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export function CarouselAutoplay({ children }: { children: React.ReactNode }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, waitForTransition: true, },)
  );

  return (
    <Carousel
      className="mx-10"
      plugins={[plugin.current]}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
