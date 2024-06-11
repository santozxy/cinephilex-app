import { getReviewsMovie } from "@/service/movies/api";
import React from "react";

import Image from "next/image";
import { User } from "lucide-react";
import { imageSize200 } from "@/utils/imageURLs";
export default async function ListMovieReviews({
  params,
}: {
  params: { id: string };
}) {
  const movieReviews = await getReviewsMovie(params.id);
  return movieReviews.results.map((review) => (
    <div key={review.id} className="flex flex-col gap-2">
      <div className="shadow-lg rounded-lg">
        <div className="flex items-center mb-4">
          {review.author_details.avatar_path ? (
            <Image
              src={`${imageSize200}${review.author_details.avatar_path}`}
              alt={review.author_details.name}
              width={50}
              height={50}
              className="rounded-full mr-4 w-12 h-12"
            />
          ) : (
            <div className="bg-zinc-800 w-12 h-12 rounded-full flex justify-center items-center mr-4">
              <User size={32} className="text-primary" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold">{review.author}</h3>
            <p className="text-sm">@{review.author_details.username}</p>
          </div>
        </div>
        <p className=" mb-4">{review.content}</p>
        <div className="flex justify-between items-center">
          <span className=" text-sm">
            {new Date(review.created_at).toLocaleDateString()}
          </span>
          <span className="bg-primary px-2 py-1 rounded-lg">
            {review.author_details.rating}/10
          </span>
        </div>
      </div>
       {" "}
    </div>
  ));
}
