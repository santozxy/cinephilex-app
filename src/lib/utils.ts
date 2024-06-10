import { type ClassValue, clsx } from "clsx";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


