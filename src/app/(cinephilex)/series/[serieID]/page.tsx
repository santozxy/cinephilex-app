import { BackdropCard } from "@/components/backdrop-card";
import { ListCards } from "@/components/list-cards";
import { ListClips } from "@/components/list-clips";
import { ListCast } from "@/components/list-cast";
import { ListPosters } from "@/components/list-posters";
import { ListReviews } from "@/components/list-reviews";
import { ListTransitions } from "@/components/list-translation";
import { RatingStar } from "@/components/rating-star";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getCreditsSerie,
  getImagesSerie,
  getRecommendationsSerie,
  getReviewsSerie,
  getSeriesById,
  getTranslationsSerie,
  getVideosSerie,
  getWatchSerieProviders,
} from "@/service/series/api";
import { resizeImageURL } from "@/utils/imageURLs";
import { format } from "date-fns";
import { Video, Text } from "lucide-react";
import React, { Suspense } from "react";
import Image from "next/image";
import { ListCompanies } from "@/components/list-companies";
import ListProviders from "@/components/list-providers";
import { Metadata } from "next";
import ListCrew from "@/components/list-crew";
import Link from "next/link";
import Season from "@/components/season";

export async function generateMetadata({
  params,
}: {
  params: { serieID: string };
}): Promise<Metadata> {
  const serie = await getSeriesById(params.serieID);
  return {
    title: `${serie.name}`,
    description: serie.overview,
    openGraph: {
      images: [
        {
          url: `${resizeImageURL}${serie.poster_path}`,
          width: 450,
          height: 600,
          alt: serie.name,
        },
      ],
    },
  };
}

export default async function Serie({
  params,
}: {
  params: { serieID: string };
}) {
  const serie = await getSeriesById(params.serieID);
  const watchProviders = await getWatchSerieProviders(params.serieID);
  const serieVideos = await getVideosSerie(params.serieID);
  const serieReviews = await getReviewsSerie(params.serieID);
  const serieImages = await getImagesSerie(params.serieID);
  const translations = await getTranslationsSerie(params.serieID);
  const recommendations = await getRecommendationsSerie(params.serieID);
  const credits = await getCreditsSerie(params.serieID);
  const cast = credits.cast;
  const crew = Array.from(
    new Map(credits.crew.map((item) => [item.id, item])).values()
  ).filter((item) => item.known_for_department !== "Acting");

  return (
    <main className="flex flex-col mt-6">
      <section className="fixed w-full -z-50 opacity-45">
        <BackdropCard item={serie} showCardInfo={false} />
      </section>
      <section className="grid sm:grid-cols-[14rem_1fr] grid-cols-1 gap-8">
        <div className="flex flex-col p-2 gap-2 shadow-lg  shadow-black/30 rounded-lg">
          <h1 className="text-xl text-center font-bold">{serie.name}</h1>
          <div className="flex flex-col items-center">
            {serie.poster_path ? (
              <Image
                src={`${resizeImageURL}${serie.poster_path}`}
                alt={serie.name}
                width={208}
                height={312}
                className="rounded-md w-[12rem] h-[17.5rem]"
              />
            ) : (
              <div className="bg-zinc-800 rounded-md w-[12rem] h-[17.5rem] flex items-center justify-center">
                <Video size={64} className="text-primary" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 p-2">
            <RatingStar rating={serie.vote_average} />
            <div className="flex gap-2 flex-wrap items-center">
              {serie.genres.map((genre) => (
                <span
                  className="bg-primary/90 p-2 rounded-lg text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <hr className="w-full border-t-2 border-zinc-800" />
          {watchProviders && <ListProviders data={watchProviders} />}

          <div className="flex gap-1 items-center">
            <h1 className="text-primary font-semibold">Lançamento:</h1>
            <span>{format(new Date(serie.first_air_date), "dd/MM/yyyy")}</span>
          </div>

          <div className="flex gap-1 items-center">
            <h1 className="text-primary font-semibold">Temporadas:</h1>
            <span>{serie.number_of_seasons}</span>
          </div>

          <div className="flex gap-1 items-center">
            <h1 className="text-primary font-semibold">Episódios:</h1>
            <span>{serie.number_of_episodes}</span>
          </div>

          <hr className="w-full border-t-2 border-zinc-800" />
          <ListCompanies data={serie.production_companies} />
        </div>

        <Tabs
          defaultValue="serie"
          className="flex flex-col shadow-lg shadow-black/30"
        >
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="serie">Série | TV</TabsTrigger>
            <TabsTrigger value="seasons">Temporadas</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="credits">Créditos</TabsTrigger>
          </TabsList>
          <TabsContent value="serie" className="flex flex-col gap-6 p-3">
            <div className="flex flex-col gap-3 rounded-lg">
              <div className="flex items-center gap-2 rounded-lg">
                <Text size={24} className="text-primary" />
                <h1 className="text-lg font-semibold">Sinopse</h1>
              </div>
              <span className="p-2">{serie.overview}</span>
            </div>
            {serieVideos.length > 0 && <ListClips data={serieVideos} />}
            {translations.translations && (
              <ListTransitions data={translations} />
            )}

            {serieImages.posters.length > 0 && (
              <ListPosters data={serieImages.posters.slice(0, 40)} />
            )}

            {recommendations.results.length > 0 && (
              <ListCards
                titleSection="Talvez goste de:"
                data={recommendations}
                path="/series"
                type="tv"
              />
            )}
          </TabsContent>
          <TabsContent value="seasons" className="flex flex-col gap-2 p-3">
            <Suspense fallback={<div>Carregando...</div>}>
              <Season
                quantify={serie.number_of_seasons}
                serieID={params.serieID}
              />
            </Suspense>
          </TabsContent>
          <TabsContent value="credits" className="flex flex-col gap-2 p-3">
            <ListCast title="Atores" cast={cast} path="/persons" />
            <ListCrew crew={crew} />
          </TabsContent>
          <TabsContent value="reviews" className="flex flex-col gap-2 p-3">
            <ListReviews data={serieReviews} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
