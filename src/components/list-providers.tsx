import { WatchProviders } from "@/service/all/allDTO";
import React from "react";
import Image from "next/image";
import { imageSize200 } from "@/utils/imageURLs";

interface ListProvidersProps {
  data: WatchProviders["results"]["BR"];
}

export default function ListProviders({ data }: ListProvidersProps) {
  return (
    <div className="flex flex-col gap-4 p-2">
      {data.buy && (
        <div className="flex-col flex gap-2 ">
          <h1 className="font-semibold">Onde comprar:</h1>
          <div className="flex flex-wrap gap-2 items-center">
            {data.buy.map((provider) => (
              <Image
                key={provider.provider_id}
                src={`${imageSize200}${provider.logo_path}`}
                alt={provider.provider_name}
                width={40}
                height={40}
                className="w-10 h-10  shadow-lg rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
      {data.flatrate && (
        <div className="flex-col flex gap-2 ">
          <h1 className="font-semibold">Onde assistir:</h1>
          <div className="flex flex-wrap gap-2 items-center">
            {data.flatrate.map((provider) => (
              <Image
                key={provider.provider_id}
                src={`${imageSize200}${provider.logo_path}`}
                alt={provider.provider_name}
                width={40}
                height={40}
                className="w-10 h-10  shadow-lg rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
