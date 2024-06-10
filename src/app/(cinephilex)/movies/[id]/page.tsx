import { getMovieById } from "@/service/movies/api";
import React from "react";

interface MovieProps {
  params: {
    id: string;
  };
}

export default async function Movie({ params }: MovieProps) {
  const movie = await getMovieById(params.id);
  return (
    <main>
      <h1>{movie.title}</h1>
      
    </main>
  );
}
