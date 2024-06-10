import BackdropCard from "@/components/backdrop-card";
import ListCast from "@/components/list-cast";
import { getCreditsMovie, getMovieById } from "@/service/movies/api";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <main className="flex flex-col relative">
      <section className="sticky top-20 -z-50 opacity-45">
        <BackdropCard item={movie} showCardInfo={false} />
      </section>
      <section className="flex flex-col gap-8 absolute">
        <div className="grid grid-cols-[13rem_1fr] gap-4">
          <div className="relative w-[13rem] h-[19.5rem]">
            <Image
              src={`${resizeImageURL}${movie.poster_path}`}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <span>{movie.tagline}</span>
            <div className="flex gap-2 bg-zinc-800 p-2 rounded-lg">
              <span>Lançamento: {movie.release_date}</span>
            </div>
            <div className="flex gap-2 bg-zinc-800 p-2 rounded-lg">
              <span>Avaliação: {movie.vote_average.toFixed(2)}</span>
              <span>{movie.vote_count} votos</span>
            </div>
            <div className="flex flex-col bg-zinc-800 p-2 rounded-lg">
              <span className="text-lg font-semibold">Descrição:</span>
              <span>{movie.overview}</span>
            </div>
            <div className="flex gap-4 items-center">
              {movie.genres.map((genre) => (
                <Link
                  href={""}
                  className="bg-primary/60 hover:bg-primary p-2 rounded-full"
                  key={genre.id}
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <ListCast data={cast} path="/persons" />
      </section>
    </main>
  );
}
