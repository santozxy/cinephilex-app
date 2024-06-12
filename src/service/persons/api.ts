import { api } from "../api";
import { PersonsDTO } from "./personsDTO";


export async function getPersonById(id: number) {
  const response = await api(`/person/${id}?`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data: PersonsDTO = await response.json();
  return data;
}
