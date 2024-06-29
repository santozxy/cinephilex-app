import { api } from "../api";

export async function searchProducts(query: string, page: number = 1) {
  const response = await api(
    `/search/multi?query=${query}&include_adult=false&page=${page}`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  return response.json();
}
