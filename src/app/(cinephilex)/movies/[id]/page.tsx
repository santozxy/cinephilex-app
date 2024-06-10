import BackdropCard from "@/components/backdrop-card";
import ListCast from "@/components/list-cast";
import { getCreditsMovie, getMovieById } from "@/service/movies/api";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import RatingStar from "@/components/rating-star";

interface MovieProps {
  params: {
    id: string;
  };
}

export default async function Movie({ params }: MovieProps) {
  const movie = await getMovieById(params.id);
  const credits = await getCreditsMovie(params.id);
  const cast = credits.cast.filter((item) => item.profile_path !== null);
  return (
    <main className="flex flex-col relative mt-6">
      <section className="sticky top-20 -z-50 opacity-45">
        <BackdropCard item={movie} showCardInfo={false} />
      </section>
      <section className="grid grid-cols-[14rem_1fr] gap-8 absolute">
        <div className="flex flex-col items-center p-2 gap-2 shadow-lg shadow-black/30 rounded-lg">
          <Image
            src={`${resizeImageURL}${movie.poster_path}`}
            alt={movie.title}
            width={208}
            height={312}
            objectFit="cover"
            className="rounded-md w-[12rem] h-[17.5rem]"
          />
          <div className="flex flex-col gap-4 p-2">
            <RatingStar rating={movie.vote_average} />
            <div className="flex gap-4 flex-wrap items-center">
              {movie.genres.map((genre) => (
                <span
                  className="bg-primary/90 p-1.5 rounded-full text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-primary font-semibold">Avaliação:</span>
              <span className="text-zinc-50">
                {movie.vote_average.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-primary font-semibold">Lançamento:</span>
              <span className="text-zinc-50">
                {format(new Date(movie.release_date), "dd/MM/yyyy")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-primary font-semibold">Duração:</span>
              <span className="text-zinc-50">{movie.runtime} min</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-lg">
            <h1 className="text-xl font-bold">{movie.title}</h1>
          </div>

          <div className="flex flex-col p-2 rounded-lg">
            <span className="text-lg font-semibold">Descrição:</span>
            <span>{movie.overview}</span>
          </div>

          <ListCast data={cast} path="/persons" />
        </div>
      </section>
    </main>
  );
}
