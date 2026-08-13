/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductDetailPage from "@/components/rokomari/ProductDetail";
import { getRandomRelatedProducts } from "@/components/urils/randomproduct";
import { products } from "@/data/product";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function ProductSinglePage({ params }: Props) {
  const { id } = await params;
  const singleProduct = products.find((item) => item.id === Number(id));

      if (!singleProduct) {
        notFound();
      }
    
    
     const relatedProducts = getRandomRelatedProducts(
       products,
       singleProduct.id,
       4,
     );
    
  return (
      <div>
        
      <ProductDetailPage
        product={{
          ...singleProduct,
        }}
        relatedProducts={relatedProducts}
      />
    </div>
  );
}

export default ProductSinglePage;
