import { api } from "../api";

export async function searchProducts(query: string) {
  const response = await api(`/search/multi?query=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return response.json();
}
