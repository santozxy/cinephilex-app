import { Credits } from "@/service/all/allDTO";
import Link from "next/link";
import React from "react";
import { Text } from "lucide-react";

interface ListCrewProps {
  crew: Credits["crew"];
}

export default function ListCrew({ crew }: ListCrewProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 items-center">
        <Text size={24} className="text-primary" />
        <h1 className="text-lg font-semibold">Equipe</h1>
      </div>
      <div className="flex flex-wrap gap-2 items-center py-4">
        {crew.map((item) => (
          <Link
            href={`/persons/${item.id}`}
            className="p-2 w-48 bg-zinc-800/70 rounded-lg hover:bg-zinc-800 transition-all duration-300 ease-in-out  hover:scale-105 shadow-lg shadow-black/30"
            key={item.id}
          >
            <h1 className="font-semibold text-sm">{item.name}</h1>
            <h1 className="text-xs">{item.known_for_department}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
