import { ListCards } from "@/components/list-cards";
import { ListPosters } from "@/components/list-posters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Movie, MoviesDTO } from "@/api/movies/moviesDTO";
import { getPersonById, getPersonIDforIMDB } from "@/api/persons/api";
import { resizeImageURL } from "@/utils/imageURLs";
import { format } from "date-fns";
import { ImageOff, Text, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ListKnowFor } from "./list-knowfor";
import Link from "next/link";

interface PersonProps {
  params: {
    id: string;
  };
}

export default async function Person({ params }: PersonProps) {
  const person = await getPersonById(params.id);
  const personID = await getPersonIDforIMDB(person.imdb_id);
  const job = person.known_for_department;
  console.log(person.known_for_department);

  return (
    <main className="flex flex-col mt-6">
      <section className="grid sm:grid-cols-[14rem_1fr] grid-cols-1 gap-8">
        <div className="flex flex-col p-2 gap-2 shadow-lg  shadow-black/30 rounded-lg">
          <h1 className="text-xl text-center font-semibold">{person.name}</h1>

          <div className="flex flex-col items-center">
            {person.profile_path ? (
              <Image
                src={`${resizeImageURL}${person.profile_path}`}
                alt={person.name}
                width={208}
                height={312}
                className="rounded-md w-[12rem] h-[17.5rem]"
              />
            ) : (
              <div className="w-[12rem] h-[17.5rem] bg-gray-300 rounded-md flex items-center justify-center">
                <ImageOff size={48} />
              </div>
            )}
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-primary font-semibold">Conhecido por:</span>
            {person.known_for_department}
          </div>

          <div className="flex  gap-1 items-center">
            {person.deathday && (
              <>
                <span className="text-primary font-semibold">Falecimento:</span>
                <span className="text-sm p-1.5 shadow-lg shadow-black/20 rounded-lg bg-zinc-800/40">
                  {format(new Date(person.deathday), "dd/MM/yyyy")}
                </span>
              </>
            )}
          </div>

          <hr className="w-full border-t-2 border-zinc-700" />

          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-primary font-semibold">
              Também conhecido como:
            </span>
            {person.also_known_as.map((name) => (
              <span
                key={name}
                className="text-sm p-1.5 shadow-lg shadow-black/20 rounded-lg bg-zinc-800/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <Tabs
          defaultValue="biography"
          className="flex flex-col shadow-lg shadow-black/30"
        >
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="biography">Biografia</TabsTrigger>
            <TabsTrigger value="movies">Filmes</TabsTrigger>
            <TabsTrigger value="series">Séries</TabsTrigger>
          </TabsList>
          <TabsContent value="biography" className="flex flex-col gap-6 p-3">
            <div className="flex flex-col gap-3 rounded-lg">
              <div className="flex items-center gap-2 rounded-lg">
                <Text size={24} className="text-primary" />
                <h1 className="text-lg font-semibold">Biografia</h1>
              </div>
              <span className="p-2">
                {person.biography
                  ? person.biography
                  : "Informação não encontrada!"}
              </span>
            </div>
            <ListKnowFor data={personID.person_results[0].known_for} />
            <ListPosters data={person.images.profiles} />
          </TabsContent>
          <TabsContent value="movies" className="flex flex-col gap-4 p-3">
            {person.movie_credits.cast.length != 0 && (
              <>
                <div className="flex items-center gap-2 rounded-lg">
                  <Text size={24} className="text-primary" />
                  <h1 className="text-lg font-semibold">
                    Participação nos filmes:
                  </h1>
                </div>
                <div className="flex flex-wrap gap-4">
                  {person.movie_credits.cast.map((item) => (
                    <Link
                      href={`/movies/${item.id}`}
                      key={item.id}
                      className="flex flex-col relative items-center hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out  rounded-lg"
                    >
                      {item.poster_path && (
                        <Image
                          src={`${resizeImageURL}${item.poster_path}`}
                          alt={item.title}
                          width={92}
                          height={138}
                          className="rounded-md w-28 h-40"
                        />
                      )}
                      {!item.poster_path && (
                        <div className="w-28 h-40 rounded-md flex items-center justify-center">
                          <ImageOff size={24} />
                        </div>
                      )}
                      <div className="flex  gap-1 bg-zinc-800/70 w-full px-2 py-1 absolute rounded-b-md bottom-0 items-center">
                        <User size={14} className="text-primary" />
                        <h3 className="text-sm font-semibold">
                          {item.character.split(" " || "-").slice(0, 1)}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {person.movie_credits.crew.length != 0 && (
              <>
                <div className="flex items-center gap-2 rounded-lg">
                  <Text size={24} className="text-primary" />
                  <h1 className="text-lg font-semibold">Trabalhou em:</h1>
                </div>
                <div className="flex flex-wrap gap-4">
                  {person.movie_credits.crew.map((item) => (
                    <Link
                      href={`/movies/${item.id}`}
                      key={item.id}
                      className="flex flex-col relative items-center hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out  rounded-lg"
                    >
                      {item.poster_path && (
                        <Image
                          src={`${resizeImageURL}${item.poster_path}`}
                          alt={item.title}
                          width={92}
                          height={138}
                          className="rounded-md w-28 h-40"
                        />
                      )}
                      {!item.poster_path && (
                        <div className="w-28 h-40 rounded-md flex flex-col items-center justify-center">
                          <ImageOff size={20} />
                          <span className="text-sm"> {item.title}</span>
                        </div>
                      )}
                      <div className="flex  gap-1 bg-zinc-800/70 w-full px-2 py-1 absolute rounded-b-md bottom-0 items-center">
                        <User size={14} className="text-primary" />
                        <h3 className="text-sm font-semibold">
                          {item.job.split(" " || "-").slice(0, 1)}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </TabsContent>
          <TabsContent value="series" className="flex flex-col gap-2 p-3">
            {person.tv_credits.cast.length != 0 && (
              <>
                <div className="flex items-center gap-2 rounded-lg">
                  <Text size={24} className="text-primary" />
                  <h1 className="text-lg font-semibold">
                    Participação em séries e programas de TV:
                  </h1>
                </div>
                <div className="flex flex-wrap gap-4">
                  {person.tv_credits.cast.map((serie) => (
                    <Link
                      href={`/series/${serie.id}`}
                      key={serie.id}
                      className="flex flex-col relative items-center hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out  rounded-lg"
                    >
                      {serie.poster_path && (
                        <Image
                          src={`${resizeImageURL}${serie.poster_path}`}
                          alt={serie.name}
                          width={92}
                          height={138}
                          className="rounded-md w-28 h-40"
                        />
                      )}
                      {!serie.poster_path && (
                        <div className="w-28 h-40 rounded-md flex items-center justify-center">
                          <ImageOff size={24} />
                        </div>
                      )}
                      <div className="flex  gap-1 bg-zinc-800/70 w-full px-2 py-1 absolute rounded-b-md bottom-0 items-center">
                        <User size={14} className="text-primary" />
                        <h3 className="text-sm font-semibold">
                          {serie.character.split(" " || "-").slice(0, 1)}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {person.tv_credits.crew.length != 0 && (
              <>
                <div className="flex items-center gap-2 rounded-lg">
                  <Text size={24} className="text-primary" />
                  <h1 className="text-lg font-semibold">Trabalhou em:</h1>
                </div>
                <div className="flex flex-wrap gap-4">
                  {person.tv_credits.crew.map((serie) => (
                    <Link
                      href={`/series/${serie.id}`}
                      key={serie.id}
                      className="flex flex-col relative items-center hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out  rounded-lg"
                    >
                      {serie.poster_path && (
                        <Image
                          src={`${resizeImageURL}${serie.poster_path}`}
                          alt={serie.title}
                          width={92}
                          height={138}
                          className="rounded-md w-28 h-40"
                        />
                      )}
                      {!serie.poster_path && (
                        <div className="w-28 h-40 rounded-md flex flex-col items-center justify-center">
                          <ImageOff size={20} />
                          <span className="text-sm"> {serie.title}</span>
                        </div>
                      )}
                      <div className="flex  gap-1 bg-zinc-800/70 w-full px-2 py-1 absolute rounded-b-md bottom-0 items-center">
                        <User size={14} className="text-primary" />
                        <h3 className="text-sm font-semibold">
                          {serie.job.split(" " || "-").slice(0, 1)}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
