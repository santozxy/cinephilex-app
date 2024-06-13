import { getSeasonDetails } from "@/service/series/api";
import React from "react";

interface SeasonProps {
  params: {
    serieID: string;
    seasonID: string;
  };
}

export default async function Season({ params }: SeasonProps) {
  const { serieID, seasonID } = params;
  const seasonDetails = await getSeasonDetails(serieID, seasonID);

  return (
    <div>
      <h1>{seasonDetails.name}</h1>
      <p>{seasonDetails.overview}</p>
      <p>{seasonDetails.air_date}</p>
      <p>{seasonDetails.episodes.length}</p>
      <div>
        {seasonDetails.episodes.map((episode) => (
          <div key={episode.id}>
            <h2>{episode.name}</h2>
            <p>{episode.overview}</p>
            <p>{episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
