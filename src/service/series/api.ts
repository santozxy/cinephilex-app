import { api } from "../api";
import { SeriesDTO } from "./seriesDTO";

export async function getPopularSeries() {
  const response = await api(`/tv/popular?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getTopRatedSeries() {
  const response = await api(`/tv/top_rated?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getTrendingDaySeries() {
  const response = await api(`/trending/tv/day?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getSeriesById(id: number) {
  const response = await api(`/tv/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getSeriesByGenre(genre: string) {
  const response = await api(`/discover/tv?with_genres=${genre}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getSerieWithHighPopularity() {
  const response = await api(`/tv/popular?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: SeriesDTO = await response.json();
  const serieWithOverviews = data.results.filter(
    (serie) => serie.overview.length > 10
  );
  const randomIndex = Math.floor(Math.random() * serieWithOverviews.length);
  const serie = serieWithOverviews[randomIndex];
  return serie;
}
