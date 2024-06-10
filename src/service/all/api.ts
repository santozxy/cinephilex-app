import { api } from "../api";
import { AllDTO } from "./allDTO";

export async function getAllTrendingDay() {
  const response = await api(`/trending/all/day?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: AllDTO = await response.json();
  return data;
}

export async function getTrendingWithHighPopularityWeek() {
  const response = await api(`/trending/all/week?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: AllDTO = await response.json();
  const dataWithOverviews = data.results.filter((movie) => movie.overview);
  const randomIndex = Math.floor(Math.random() * dataWithOverviews.length);
  const highPopularity = dataWithOverviews[randomIndex];
  return highPopularity;
}
