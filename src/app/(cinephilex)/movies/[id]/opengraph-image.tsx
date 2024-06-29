/* eslint-disable @next/next/no-img-element */

import { env } from "@/env";
import colors from "tailwindcss/colors";
import { ImageResponse } from "next/og";
import { resizeImageURL } from "@/utils/imageURLs";
import { getMovieById } from "@/api/movies/api";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 450,
  height: 600,
};

export const contentType = "image/png";

export default async function OgImage({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id);
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.zinc[900],
        }}
      >
        <img
          src={`${resizeImageURL}${movie.poster_path}`}
          alt={movie.title}
          width={size.width}
          height={size.height}
        />
        <h1 className="text-white text-lg">{movie.title}</h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
