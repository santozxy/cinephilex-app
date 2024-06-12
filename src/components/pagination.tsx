"use client";
import {
  ArrowLeftIcon,
  ArrowLeftSquareIcon,
  ArrowRightIcon,
  ArrowRightSquareIcon,
} from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import { toast } from "react-toastify";

interface PaginationProps {
  page: number;
  total_pages: number;
  query: string;
}

export default function Pagination({
  page,
  total_pages,
  query,
}: PaginationProps) {
  const router = useRouter();

  if (isNaN(page) || page === 0) {
    toast("Página inválida", {
      type: "error",
      toastId: "page-error",
      theme: "dark",
      onClose: () => {
        router.replace(`/search?q=${query}&page=1`);
      },
    });
  }

  return (
    <div className="flex gap-4 items-center justify-end max-sm:justify-center w-full">
      <button
        className="bg-zinc-800 enabled:hover:bg-zinc-700 active: disabled:text-zinc-500 font-bold p-2 rounded-lg"
        onClick={() => router.push(`/search?q=${query}&page=${page - 1}`)}
        disabled={page <= 1 || isNaN(page)}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <span className="">
        Página {page} de {total_pages}
      </span>
      <button
        className="bg-zinc-800 enabled:hover:bg-zinc-700 font-bold p-2 rounded-lg"
        onClick={() => router.push(`/search?q=${query}&page=${page + 1}`)}
        disabled={page === total_pages}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
