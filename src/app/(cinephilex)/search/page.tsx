import { redirect } from "next/navigation";
import React from "react";
import { ListSearchCards } from "@/components/list-search-cards";
import { SearchDTO } from "@/service/search/searchDTO";
import { searchProducts } from "@/service/search/api";
import Pagination from "@/components/pagination";

interface SearchProps {
  searchParams: {
    q: string;
    page: number;
  };
}
export default async function Search({ searchParams }: SearchProps) {
  const { q: query, page } = searchParams;

  if (!query) {
    redirect("/");
  }

  const data: SearchDTO = await searchProducts(query, page);

  if (page > data.total_pages) {
    redirect(`/search?q=${query}&page=${data.total_pages}`);
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex w-full mt-6 justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:gap-3">
        <h1 className="text-xl max-sm:text-center font-medium w-full">
          Resultado da busca por: <strong> {query}</strong>
        </h1>
        <Pagination
          page={data.page}
          total_pages={data.total_pages}
          query={query}
        />
      </div>
      {data.results && <ListSearchCards data={data} />}
    </div>
  );
}
