import { env } from "@/env";

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = env.NEXT_PUBLIC_API_KEY;
  const url = `${baseUrl}${path}&${apiKey}&language=pt-BR&include_adult=false`;
  return fetch(url, init);
}
