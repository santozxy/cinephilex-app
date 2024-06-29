import React from "react";
import { PersonExternalIdIMDB } from "@/api/persons/personsDTO";
import { resizeImageURL } from "@/utils/imageURLs";
import Image from "next/image";
import Link from "next/link";
import { ImageOff, Text } from "lucide-react";
interface ListKnowForProps {
  data: PersonExternalIdIMDB["person_results"][number]["known_for"];
}

function generateLink(
  item: PersonExternalIdIMDB["person_results"][number]["known_for"][number]
) {
  if (item.media_type === "movie") {
    return `/movies/${item.id}`;
  }
  if (item.media_type === "tv") {
    return `/series/${item.id}`;
  }
  if (item.media_type === "person") {
    return `/persons/${item.id}`;
  }
  return "";
}

export function ListKnowFor({ data }: ListKnowForProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg">
      <div className="flex items-center gap-2 rounded-lg">
        <Text size={24} className="text-primary" />
        <h1 className="text-lg font-semibold">Conhecido por:</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {data?.map((item) => (
          <Link
            href={generateLink(item)}
            key={item.id}
            className="flex flex-col items-center hover:scale-105 bg-zinc-800/40 transition duration-300 ease-in-out  rounded-lg"
          >
            {item.poster_path && (
              <Image
                priority
                src={`${resizeImageURL}${item.poster_path}`}
                alt={""}
                width={192}
                height={256}
                className="w-[9rem] max-sm:h-48 max-sm:w-36 lg:h-[13rem] rounded-md shadow-xl shadow-black/30"
              />
            )}
            {!item.poster_path && (
              <div className="w-[9rem] max-sm:h-48 max-sm:w-36 lg:h-[13rem] rounded-md shadow-xl shadow-black/30">
                <ImageOff size={24} />
              </div>
            )}
          </Link>
        ))}
        {!data && (
          <div className="flex items-center justify-center p-2">
            <h1>Sem informações</h1>
          </div>
        )}
      </div>
    </div>
  );
}
