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
