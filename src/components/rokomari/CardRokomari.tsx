/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Star } from "lucide-react";
import { BookCardProps } from "@/data/product";
import Link from "next/link";

function BookCard(props: BookCardProps) {
  const {
    id,
    imagePath,
    title,
    averageRating,
    numberOfReview,
    price,
    priceWithCurrency,
    isGrayedOut = false,
  } = props;
  const subtitle = (props as any).subtitle;
  return (
    <Link
      href={`/rokomari/${id}`}
      className={`w-44 shrink-0 cursor-pointer rounded-lg p-2 transition hover:shadow-md ${
        isGrayedOut ? "border border-gray-200" : ""
      }`}>
      {/* Cover */}
      <div className="mb-3 aspect-[3/4] w-full overflow-hidden rounded-md bg-gray-100">
        <img
          src={imagePath}
          alt={title}
          className={`h-full w-full object-cover ${
            isGrayedOut ? "opacity-40 grayscale" : ""
          }`}
        />
      </div>

      {/* Title */}
      <h3
        className={`mb-1 line-clamp-2 text-sm font-medium leading-snug ${
          isGrayedOut ? "text-gray-400" : "text-gray-900"
        }`}>
        {title}
      </h3>

      {/* Author */}
      <p
        className={`mb-1 truncate text-xs ${
          isGrayedOut ? "text-gray-300" : "text-gray-500"
        }`}>
        {subtitle}
      </p>

      {/* Rating */}
      {averageRating !== undefined && (
        <div className="mb-1 flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < Math.round(averageRating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          {numberOfReview !== undefined && (
            <span className="text-xs text-gray-500">({numberOfReview})</span>
          )}
        </div>
      )}

      {/* Price */}
      <p
        className={`text-sm font-bold ${
          isGrayedOut ? "text-gray-300" : "text-gray-900"
        }`}>
        {priceWithCurrency}
        {price.toFixed(2)}
      </p>
    </Link>
  );
}

export default BookCard;
