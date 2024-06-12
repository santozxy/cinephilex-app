import {
  Credits,
  Images,
  Reviews,
  Translations,
  Videos,
  WatchProviders,
} from "../all/allDTO";
import { api } from "../api";
import { SerieDetails, SeriesDTO } from "./seriesDTO";

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

export async function getSeriesById(id: string) {
  const response = await api(`/tv/${id}?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: SerieDetails = await response.json();
  return data;
}

export async function getSeriesByGenre(genre: string, page?: number) {
  const pagination = page ?? 1;
  const response = await api(
    `/discover/tv?with_genres=${genre}&page=${pagination}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data: SeriesDTO = await response.json();
  const seriesWithOverviews = data.results.filter(
    (serie) => serie.overview.length > 0
  );
  const newData = {
    ...data,
    results: seriesWithOverviews,
  };

  return newData;
}

export async function getSerieWithHighPopularity() {
  const response = await api(`/tv/popular?`, {
    next: {
      revalidate: 60 * 60 * 24,
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

export async function getWatchSerieProviders(id: string) {
  const response = await api(`/tv/${id}/watch/providers?language=`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: WatchProviders = await response.json();
  return data.results.BR;
}

export async function getVideosSerie(id: string) {
  const response = await api(`/tv/${id}/videos?language=`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: Videos = await response.json();
  const videos = data.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  const videosBR = videos.filter((video) => video.iso_3166_1 === "BR");
  const videoUS = videos.filter((video) => video.iso_3166_1 === "US");
  const videosTotal = [...videosBR, ...videoUS];
  return videosTotal;
}

export async function getReviewsSerie(id: string) {
  const response = await api(`/tv/${id}/reviews?language=`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: Reviews = await response.json();
  return data;
}

export async function getImagesSerie(id: string) {
  const response = await api(`/tv/${id}/images?include_image_language=pt`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: Images = await response.json();
  return data;
}

export async function getTranslationsSerie(id: string) {
  const response = await api(`/tv/${id}/translations?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: Translations = await response.json();
  return data;
}

export async function getRecommendationsSerie(id: string) {
  const response = await api(`/tv/${id}/recommendations?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: SeriesDTO = await response.json();
  return data;
}

export async function getCreditsSerie(id: string) {
  const response = await api(`/tv/${id}/credits?`, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const data: Credits = await response.json();
  return data;
}
