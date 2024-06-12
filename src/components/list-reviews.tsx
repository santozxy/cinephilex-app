import { getReviewsMovie } from "@/service/movies/api";
import React from "react";

import Image from "next/image";
import { CalendarDays, Star, User } from "lucide-react";
import { imageSize200 } from "@/utils/imageURLs";
import { Reviews } from "@/service/all/allDTO";
import { RatingStar } from "./rating-star";

interface ListReviewsProps {
  data: Reviews;
}

export function ListReviews({ data }: ListReviewsProps) {
  return data.results.map((review) => (
    <div key={review.id} className="flex flex-col gap-2">
      <div className="border-b border-zinc-800 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
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
        </div>
        <p className=" mb-4">{review.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <CalendarDays size={20} className="text-primary" />

            <span className="font-medium">
              {new Date(review.created_at).toLocaleDateString()}
            </span>
          </div>
          {review.author_details.rating ? (
            <div className="flex items-center gap-1">
              <Star size={20} className="text-yellow-400" />
              <span className="font-medium">
                {review.author_details.rating.toFixed(2)}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star size={20} className="text-yellow-400" />
              <span className="font-medium">Sem avaliação</span>
            </div>
          )}
        </div>
      </div>
       {" "}
    </div>
  ));
}
