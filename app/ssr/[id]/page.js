import { getProductById } from "@/lib/getProducts";
import React from "react";

export async function generateMetadata({ params }) {
  const productData = getProductById(params.id.split('-')[0]);
  const product = await productData;
  console.log(product[0].product_name);
  if (!product) {
    title: "No product Found";
  } else
  return {
    openGraph: {
      title: product[0].product_name,
      description: `${product[0].description} - Price: Ksh${product[0].price}`,
      images: product[0].image,
    },
  };
}
export default async function SSR({params}) {
    const productData = getProductById(params.id.split('-')[0]);
    const product = await productData;

  return (
  <div className="block md:flex mt-2 md:mt-12 space-x-5 lg:space-x-16">
          <div className="shadow-2xl h-56 w-80 rounded-md bg-white flex flex-col">
              <img
                className="h-full w-full object-contain rounded-md cursor-pointer"
                src={product[0].image}
                alt={product[0].product_name}
              />
              <h1>{product[0].product_name}</h1>
          </div>
    </div>
  );
}