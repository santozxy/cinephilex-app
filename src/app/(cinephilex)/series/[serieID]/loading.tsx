import { Skeleton } from "@/components/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Languages } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <main className="flex flex-col mt-6">
      <section className="grid sm:grid-cols-[14rem_1fr] grid-cols-1 gap-8">
        <Skeleton className="flex flex-col h-full p-2 gap-2 shadow-lg  shadow-black/30 rounded-lg" />
        <Tabs
          defaultValue="movie"
          className="flex flex-col shadow-lg shadow-black/30"
        >
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="movie">Série | TV</TabsTrigger>
            <TabsTrigger value="seasons">Temporadas</TabsTrigger>
            <TabsTrigger value="credits">Créditos</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="movie" className="flex flex-col gap-6 p-3">
            <div className="flex flex-col gap-3 rounded-lg">
              <div className="flex items-center gap-2 rounded-lg">
                <Skeleton className="w-6 h-6 rounded-lg" />
                <h1 className="text-lg font-semibold">Sinopse</h1>
              </div>
              <Skeleton className="h-10 rounded-lg" />
            </div>

            <Skeleton className="h-60 w-full rounded-lg" />

            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <Languages size={24} className="text-primary" />
                <h1 className="text-lg font-semibold">Traduções Disponíveis</h1>
              </div>
              <ul className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, index) => (
                  <li
                    key={index}
                    className="p-2 bg-zinc-800 shadow-lg shadow-black/30 rounded-lg text-sm"
                  >
                    <Skeleton className="w-10 h-4 rounded-lg" />
                  </li>
                ))}
              </ul>
            </div>
            <Skeleton className="h-60 rounded-lg" />
          </TabsContent>
          <TabsContent
            value="seasons"
            className="flex flex-col gap-2 p-3"
          ></TabsContent>
          <TabsContent
            value="reviews"
            className="flex flex-col gap-2 p-3"
          ></TabsContent>
          <TabsContent
            value="credits"
            className="flex flex-col gap-2 p-3"
          ></TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
