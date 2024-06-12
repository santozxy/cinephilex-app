import { BackdropCard } from "@/components/backdrop-card";
import { ListCredits } from "@/components/list-credits";
import {
  getCreditsMovie,
  getMovieById,
  getRecommendationsMovie,
  getTranslationsMovie,
  getVideosMovie,
} from "@/service/movies/api";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { RatingStar } from "@/components/rating-star";
import { Text } from "lucide-react";
import { Metadata } from "next";
import { ListCards } from "@/components/list-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListMovieReviews from "@/components/list-movie-reviews";
import { ListClips } from "@/components/list-clips";
import ListTransitions from "@/components/list-translation";

interface MovieProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: MovieProps): Promise<Metadata> {
  const movie = await getMovieById(params.id);
  return { title: `${movie.title}` };
}

export default async function Movie({ params }: MovieProps) {
  const movie = await getMovieById(params.id);
  const credits = await getCreditsMovie(params.id);
  const translations = await getTranslationsMovie(params.id);
  const recommendations = await getRecommendationsMovie(params.id);
  const movieVideos = await getVideosMovie(params.id);
  const cast = credits.cast;
  const crew = Array.from(
    new Map(credits.crew.map((item) => [item.id, item])).values()
  );
  return (
    <main className="flex flex-col mt-6">
      <section className="fixed w-full  -z-50 opacity-45">
        <BackdropCard item={movie} showCardInfo={false} />
      </section>
      <section className="grid sm:grid-cols-[14rem_1fr] grid-cols-1 gap-8">
        <div className="flex flex-col p-2 gap-2 shadow-lg  shadow-black/30 rounded-lg">
          <h1 className="text-xl text-center font-bold">{movie.title}</h1>
          <div className="flex flex-col items-center">
            <Image
              src={`${resizeImageURL}${movie.poster_path}`}
              alt={movie.title}
              width={208}
              height={312}
              objectFit="cover"
              className="rounded-md w-[12rem] h-[17.5rem]"
            />
          </div>
          <div className="flex flex-col gap-4 p-2">
            <RatingStar rating={movie.vote_average} />
            <div className="flex gap-2 flex-wrap items-center">
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

          <hr className="w-full border-t-2 border-zinc-800" />
          <div className="flex-col flex gap-2 ">
            <h1 className="font-semibold">Produzido por:</h1>
            <div className="flex flex-wrap gap-2 items-center">
              {movie.production_companies.map((company) => (
                <Image
                  key={company.id}
                  src={`${resizeImageURL}${company.logo_path ?? "/notFound"}`}
                  alt={company.name}
                  width={64}
                  height={40}
                  className="object-contain w-16 h-10 p-2 bg-zinc-800 shadow-lg rounded-md"
                />
              ))}
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="movie"
          className="flex flex-col shadow-lg shadow-black/30"
        >
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="movie">Filme</TabsTrigger>
            <TabsTrigger value="credits">Créditos</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="movie" className="flex flex-col gap-2 p-3">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 rounded-lg">
                <div className="flex items-center gap-2 rounded-lg">
                  <Text size={24} className="text-primary" />
                  <h1 className="text-lg font-semibold">Sinopse</h1>
                </div>
                <span>{movie.overview}</span>
              </div>
              <ListTransitions data={translations} />
              {movieVideos && <ListClips data={movieVideos} />}
            </div>
            {recommendations.results.length > 0 && (
              <ListCards
                titleSection="Recomendações"
                data={recommendations}
                path="/movies"
                type="movie"
              />
            )}
          </TabsContent>
          <TabsContent value="credits" className="flex flex-col gap-2 p-3">
            <ListCredits title="Atores" data={cast} path="/persons" />
            <ListCredits title="Equipe" data={crew} path="/persons" />
          </TabsContent>
          <TabsContent value="reviews" className="flex flex-col gap-2 p-3">
            <ListMovieReviews params={{ id: String(movie.id) }} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
