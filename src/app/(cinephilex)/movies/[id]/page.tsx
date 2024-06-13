import { BackdropCard } from "@/components/backdrop-card";
import { ListCredits } from "@/components/list-credits";
import {
  getCreditsMovie,
  getImagesMovie,
  getMovieById,
  getRecommendationsMovie,
  getReviewsMovie,
  getTranslationsMovie,
  getVideosMovie,
  getWatchMovieProviders,
} from "@/service/movies/api";
import { imageSize200, resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { RatingStar } from "@/components/rating-star";
import { Text, Video } from "lucide-react";
import { Metadata } from "next";
import { ListCards } from "@/components/list-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListReviews } from "@/components/list-reviews";
import { ListClips } from "@/components/list-clips";
import { ListTransitions } from "@/components/list-translation";
import { ListPosters } from "@/components/list-posters";
import { ListCompanies } from "@/components/list-companies";
import ListProviders from "@/components/list-providers";

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
  const movieReviews = await getReviewsMovie(params.id);
  const movieImages = await getImagesMovie(params.id);
  const watchProviders = await getWatchMovieProviders(params.id);
  const cast = credits.cast;
  const crew = Array.from(
    new Map(credits.crew.map((item) => [item.id, item])).values()
  ).filter((item) => item.known_for_department !== "Acting");
  return (
    <main className="flex flex-col mt-6">
      <section className="fixed w-full  -z-50 opacity-45">
        <BackdropCard item={movie} showCardInfo={false} />
      </section>
      <section className="grid sm:grid-cols-[14rem_1fr] grid-cols-1 gap-8">
        <div className="flex flex-col p-2 gap-2 shadow-lg  shadow-black/30 rounded-lg">
          <h1 className="text-xl text-center font-bold">{movie.title}</h1>
          <div className="flex flex-col items-center">
            {movie.poster_path ? (
              <Image
                src={`${resizeImageURL}${movie.poster_path}`}
                alt={movie.title}
                width={208}
                height={312}
                objectFit="cover"
                className="rounded-md w-[12rem] h-[17.5rem]"
              />
            ) : (
              <div className="bg-zinc-800 rounded-md w-[12rem] h-[17.5rem] flex items-center justify-center">
                <Video size={64} className="text-primary" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 p-2">
            <RatingStar rating={movie.vote_average} />
            <div className="flex gap-2 flex-wrap items-center">
              {movie.genres.map((genre) => (
                <span
                  className="bg-primary/90 p-2 rounded-lg text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <hr className="w-full border-t-2 border-zinc-800" />
            {watchProviders && <ListProviders data={watchProviders} />}

            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-primary font-semibold">Orçamento:</span>
              <span className="text-zinc-50">
                {movie.budget.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                })}
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
          <ListCompanies data={movie.production_companies} />
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
          <TabsContent value="movie" className="flex flex-col gap-6 p-3">
            <div className="flex flex-col gap-3 rounded-lg">
              <div className="flex items-center gap-2 rounded-lg">
                <Text size={24} className="text-primary" />
                <h1 className="text-lg font-semibold">Sinopse</h1>
              </div>
              <span className="p-2">{movie.overview}</span>
            </div>
            {movieVideos.length > 0 && <ListClips data={movieVideos} />}
            {translations.translations && (
              <ListTransitions data={translations} />
            )}

            {movieImages.posters.length > 0 && (
              <ListPosters data={movieImages.posters} />
            )}

            {recommendations.results.length > 0 && (
              <ListCards
                titleSection="Talvez goste de:"
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
            <ListReviews data={movieReviews} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
