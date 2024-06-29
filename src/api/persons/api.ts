import { api } from "../api";
import { PersonDetails, PersonExternalIdIMDB } from "./personsDTO";

export async function getPersonById(id: string) {
  const response = await api(
    `/person/${id}?append_to_response=movie_credits%2Ctv_credits%2Cimages`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  const data: PersonDetails = await response.json();
  return data;
}

export async function getPersonIDforIMDB(id: string) {
  const response = await api(`/find/${id}?external_source=imdb_id`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonExternalIdIMDB = await response.json();
  return data;
}
