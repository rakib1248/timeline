import { RelatedProduct } from "@/data/product";
import { StarRating } from "./StarRating";
import Link from "next/link";

export function RelatedProductCard({ product }: { product: RelatedProduct }) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <Link href={`/rokomari/${product.id}`} className="flex gap-3 py-3 cursor-pointer">
      <img
        src={product.imagePath}
        alt={product.title}
        className="h-20 w-14 shrink-0 rounded object-cover"
      />
      <div className="min-w-0">
        <h4 className="truncate text-sm font-medium text-gray-800">
          {product.title}
        </h4>
        <p className="truncate text-xs text-gray-500">{product.subTitle}</p>
        {product.averageRating !== undefined && (
          <div className="mt-1 flex items-center gap-1">
            <StarRating rating={product.averageRating} />
            {product.numberOfReview !== undefined && (
              <span className="text-xs text-gray-500">
                ({product.numberOfReview})
              </span>
            )}
          </div>
        )}
        <div className="mt-1 flex items-center gap-2 text-sm">
          {discount > 0 && (
            <span className="text-gray-400 line-through">
              TK. {product.mrp}
            </span>
          )}
          <span className="font-semibold text-gray-900">
            TK. {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
