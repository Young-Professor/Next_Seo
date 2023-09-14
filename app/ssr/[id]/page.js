import { getProductById } from "@/lib/getProducts";
import React from "react";

export async function generateMetadata({ params }) {
  const productData = getProductById(params.id);
  const product = await productData;
  if (!product.title) {
    title: "No product Found";
  } else
    return {
      title: product.title,
      description: product.category,
      openGraph: {
        title: product.title,
        
        images: [product.imageUrl[0]],
      },
    };
}
export default function SSR() {
  return <div>SSR</div>;
}
