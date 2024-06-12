import { Reviews, Translations, Videos } from "../all/allDTO";
import { api } from "../api";
import { Credits, DetailsMovie, MoviesDTO } from "./moviesDTO";

export async function getNowPlayingMovies() {
  const response = await api(`/movie/now_playing?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
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

export async function getMovieWithHighPopularity() {
  const yearActual = new Date().getFullYear();
  const response = await api(
    `/discover/movie?include_adult=false&include_video=false&page=1&primary_release_year=${yearActual}&sort_by=popularity.desc`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  const data: MoviesDTO = await response.json();
  const dataWithOverviews = data.results.filter((movie) => movie.overview);
  const randomIndex = Math.floor(Math.random() * dataWithOverviews.length);
  const movie = dataWithOverviews[randomIndex];
  return movie;
}

export async function getCreditsMovie(id: string) {
  const response = await api(`/movie/${id}/credits?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: Credits = await response.json();
  return data;
}

export async function getMovieById(id: string) {
  const response = await api(`/movie/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: DetailsMovie = await response.json();
  return data;
}

export async function getSimilarsMovie(id: string) {
  const response = await api(`/movie/${id}/similar?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getRecommendationsMovie(id: string) {
  const response = await api(
    `/movie/${id}/recommendations?include_adult=false`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  const data: MoviesDTO = await response.json();
  return data;
}

export async function getReviewsMovie(id: string) {
  const response = await api(`/movie/${id}/reviews?language=`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: Reviews = await response.json();
  return data;
}

export async function getVideosMovie(id: string) {
  const response = await api(`/movie/${id}/videos?language=`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: Videos = await response.json();
  const videos = data.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  const videosBR = videos.filter((video) => video.iso_3166_1 === "BR");
  console.log(videosBR);
  return videos;
}

export async function getWacthProvidersMovie(id: string) {
  const response = await api(`/movie/${id}/watch/providers?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data = await response.json();
  return data;
}

export async function getTranslationsMovie(id: string) {
  const response = await api(`/movie/${id}/translations?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: Translations = await response.json();
  return data;
}
