import { api } from "../api";
import { Movie, MoviesDTO } from "./moviesDTO";

export async function getNowPlayingMovies() {
  const response = await api(`/movie/now_playing?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getMovieById(id: number) {
  const response = await api(`/movie/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: Movie = await response.json();
  return data;
}

export async function getPopularMovies() {
  const response = await api(`/movie/popular?page=2`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getTopRatedMovies() {
  const response = await api(`/movie/top_rated?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getBrazilianPopularMovies() {
  const response = await api(
    `/discover/movie?sort_by=popularity.desc&with_origin_country=BR`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getTrendingDayMovies() {
  const response = await api(`/trending/movie/day?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getGenreMovies(id: string) {
  const response = await api(`/discover/movie?with_genres=${id}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}