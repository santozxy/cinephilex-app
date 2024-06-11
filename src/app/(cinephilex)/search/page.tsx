import { redirect } from "next/navigation";
import React from "react";
import { ListSearchCards } from "@/components/list-search-cards";
import { SearchDTO } from "@/service/search/searchDTO";
import { searchProducts } from "@/service/search/api";

interface SearchProps {
  searchParams: {
    q: string;
  };
}
export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams;
  if (!query) {
    redirect("/");
  }
  const data: SearchDTO = await searchProducts(query);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl text-left font-medium my-6">
        Resultado da busca por: <strong> {query}</strong>
      </h1>
      <ListSearchCards data={data} />
    </div>
  );
}
