import { Star } from "lucide-react";
import React from "react";

export default function RatingStar({ rating }: { rating: number }) {
  const totalStars = 5;
  const filledStars = Math.floor((rating / 10) * totalStars);
  const halfStar = (rating / 10) * totalStars - filledStars >= 0.5;

  return (
    <div className="flex space-x-1">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} className="h-6 w-6 text-yellow-400" />
      ))}
      {halfStar && (
        <div className="relative">
          <Star className="h-6 w-6 text-yellow-400" />
          <Star
            className="h-6 w-6 text-gray-300 absolute top-0 left-0"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          />
        </div>
      )}
      {[...Array(totalStars - filledStars - (halfStar ? 1 : 0))].map(
        (_, index) => (
          <Star
            key={index + filledStars + 1}
            className="h-6 w-6 text-gray-300"
          />
        )
      )}
    </div>
  );
}
