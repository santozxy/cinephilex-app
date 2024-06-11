import { originalImageURL } from "@/utils/imageURLs";
import { Popcorn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface BackdropCardProps {
  showCardInfo?: boolean;
  item: {
    title?: string;
    name?: string;
    backdrop_path: string;
    overview: string;
    id: number;
  };
}

export function BackdropCard({ item, showCardInfo = true }: BackdropCardProps) {
  return (
    <section className="w-full h-[40rem] max-sm:h-64 relative">
      <Image
        priority
        src={originalImageURL + item.backdrop_path}
        width={1280}
        height={720}
        alt={item.title || item.name || "Sem título"}
        className="object-fill object-center w-full h-full"
      />

      <Link className="z-[99]" href={`/movies/${item.id}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-zinc-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900"></div>
      </Link>
      {showCardInfo && (
        <div className="absolute sm:top-28 top-4 max-sm:left-0 left-10 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:w-96 p-2 rounded-lg">
            <div className="flex sm:flex-col items-start gap-4">
              <Popcorn size={24} className="text-primary" />
              <h1 className="sm:text-xl uppercase font-extrabold">
                {item.title || item.name || "Sem título"}
              </h1>
            </div>
            <p className="text-zinc-300 text-justify max-sm:hidden">
              {" "}
              {item.overview.slice(0, 202) + "..."}
            </p>
            <Link
              className="bg-primary bg-opacity-50 duration-300 ease-in-out rounded-full max-sm:p-1 p-1.5 flex justify-center items-center hover:bg-opacity-80 w-56 max-sm:hidden shadow-lg"
              href={`/movies/${item.id}`}
            >
              <span className="font-semibold max-sm:text-sm">Ver detalhes</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
