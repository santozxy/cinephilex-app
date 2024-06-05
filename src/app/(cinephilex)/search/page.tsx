import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import ListCards from "@/components/list-search-cards";
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
    <div className="flex flex-col">
      <h1 className="text-2xl font-medium mb-10">
        Resultado da busca por: <strong> {query}</strong>
      </h1>
      <ListCards data={data} />
    </div>
  );
}
