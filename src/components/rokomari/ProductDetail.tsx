"use client"

import { ProductDetail, RelatedProduct } from "@/data/product";
import { useState } from "react";
import {  Users, Info, Heart, Share2, CheckCircle2, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { StarRating } from "./StarRating";
import { RelatedProductCard } from "./RelatetProduct";

interface ProductDetailPageProps {
  product: ProductDetail;
  relatedProducts?: RelatedProduct[];
}



function ProductDetailPage({ product, relatedProducts = [] }: ProductDetailPageProps) {
  const [wantToReadStatus, setWantToReadStatus] = useState("Want to read");

  const discountAmount = product.mrp - product.price;
  const discountPercent =
    product.discountPercentage ??
    (product.mrp > 0 ? Math.round((discountAmount / product.mrp) * 100) : 0);

  return (
    <div className="bg-gray-100 py-6">
      <div className="mx-auto flex max-w-6xl gap-4 px-4">
        {/* Main card */}
        <div className="flex flex-1 gap-8 rounded-md bg-white p-6 shadow-sm">
          {/* Left: cover image */}
          <div className="w-64 shrink-0">
            <div className="relative rounded-md border border-gray-200 p-3">
              <a
                href="#"
                className="mb-2 flex items-center justify-end gap-1 text-sm font-medium text-red-600 hover:underline"
              >
                একটু পড়ে দেখুন
                <span>↓</span>
              </a>
              <img
                src={product.imagePath}
                alt={product.title}
                className="w-full rounded object-cover"
              />
            </div>

            <div className="relative mt-4">
              <select
                value={wantToReadStatus}
                onChange={(e) => setWantToReadStatus(e.target.value)}
                className="w-full appearance-none rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none"
              >
                <option>Want to read</option>
                <option>Currently reading</option>
                <option>Read</option>
              </select>
            </div>
          </div>

          {/* Middle: details */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">
              {product.title}
              {product.bindingType && (
                <span className="font-normal"> ({product.bindingType})</span>
              )}
            </h1>

            {product.genre && (
              <p className="mt-1 text-sm text-teal-600">{product.genre}</p>
            )}

            {product.averageRating !== undefined && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                <StarRating rating={product.averageRating} />
                <span>
                  {product.numberOfRating ?? 0} Ratings | {product.numberOfReview ?? 0}{" "}
                  Reviews
                </span>
              </div>
            )}

            <p className="mt-2 text-sm text-gray-700">
              by{" "}
              <a href="#" className="text-teal-600 hover:underline">
                {product?.subTitle}
              </a>
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Category:{" "}
              <a href="#" className="text-teal-600 hover:underline">
                {product?.category}
              </a>
            </p>

            {product.wantThisCount !== undefined && (
              <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-700">
                <Users size={16} />
                <span>{product.wantThisCount} user want this item!</span>
                <Info size={14} className="text-gray-400" />
              </div>
            )}

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              {discountAmount > 0 && (
                <span className="text-gray-400 line-through">
                  TK. {product.mrp}
                </span>
              )}
              <span className="text-xl font-bold text-gray-900">
                TK. {product.price}
              </span>
              {discountAmount > 0 && (
                <span className="text-sm font-medium text-green-600">
                  You Save TK. {discountAmount} ({discountPercent}%)
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mt-4 max-w-xl">
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
                {product.description}
              </p>
              <a href="#" className="mt-1 inline-block text-sm text-teal-600 hover:underline">
                Read More
              </a>
            </div>

            {/* eBook box */}
            {product.Price && (
              <div className="mt-4 flex max-w-xl items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-3">
                {product.ebookImagePath && (
                  <img
                    src={product.ebookImagePath}
                    alt="eBook cover"
                    className="h-14 w-10 rounded object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm text-gray-700">Get eBook Version</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {product.Price}
                  </p>
                </div>
                <button className="rounded-md border border-teal-500 px-4 py-1.5 text-sm font-medium text-teal-600 hover:bg-teal-50">
                  Buy eBook
                </button>
              </div>
            )}

            {/* Stock status */}
            <div className="mt-4">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span className="font-medium text-gray-800">In Stock</span>
                  {product.stockLeft !== undefined && (
                    <span className="text-red-500">
                      (only {product.stockLeft} copy left)
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
              <p className="mt-1 text-xs text-gray-600">
                * স্টক আউট হওয়ার আগেই অর্ডার করুন
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex gap-3">
              <button className="rounded-md bg-orange-500 px-8 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">
                Buy Now
              </button>
              <button className="flex items-center gap-2 rounded-md bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            {/* Wishlist / share */}
            <div className="mt-4 flex gap-6 text-sm text-gray-600">
              <button className="flex items-center gap-1.5 hover:text-red-500">
                <Heart size={16} />
                পছন্দের তালিকায় রাখুন
              </button>
              <button className="flex items-center gap-1.5 hover:text-teal-600">
                <Share2 size={16} />
                বন্ধুদের সাথে শেয়ার করুন
              </button>
            </div>
          </div>
        </div>

        {/* Right: Related Products */}
        {relatedProducts.length > 0 && (
          <aside className="w-72 shrink-0 rounded-md bg-white p-5 shadow-sm">
            <h2 className="mb-1 text-lg font-semibold text-gray-900">
              Related Products
            </h2>
            <div className="divide-y divide-gray-100">
              {relatedProducts.map((rp) => (
                <RelatedProductCard key={rp.id} product={rp} />
              ))}
            </div>
            <div className="mt-2 flex justify-end gap-2">
              <button className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;