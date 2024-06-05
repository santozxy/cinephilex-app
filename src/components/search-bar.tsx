"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const query = data.q;
    if (!query) {
      return null;
    }
    router.push(`/search?q=${query}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full px-5 py-2 border dark:border-zinc-500 shadow-md outline-none "
    >
      <Search className="w-5 h-5 text-primary" />
      <input
        type="text"
        defaultValue={query ?? ""}
        name="q"
        placeholder="Procurar por..."
        className="bg-transparent flex-1 outline-none border-0 ring-0 placeholder:text-zinc-500 "
      />
    </form>
  );
}
