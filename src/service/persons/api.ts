import { api } from "../api";
import { PersonsDTO } from "./personsDTO";

export async function getPopularPersons() {
  const response = await api(`/person/popular?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonsDTO = await response.json();
  return data;
}

export async function getPersonById(id: number) {
  const response = await api(`/person/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonsDTO = await response.json();
  return data;
}

export async function getPersonTrendingDay() {
  const response = await api(`/trending/person/day?page=3`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonsDTO = await response.json();
  return data;
}

export async function getPersonTrendingWeek() {
  const response = await api(`/trending/person/week?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonsDTO = await response.json();
  return data;
}
