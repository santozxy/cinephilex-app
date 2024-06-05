import { type ClassValue, clsx } from "clsx";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const originalImageURL = process.env.NEXT_PUBLIC_IMG_BASE_URL;
export const resizeImageURL = process.env.NEXT_PUBLIC_IMG_JPG_BASE_URL;
