import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("bg-zinc-50/40 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
