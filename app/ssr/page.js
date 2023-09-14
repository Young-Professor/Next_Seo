import { getProducts } from "@/lib/getProducts";
import React from "react";

async function ssr() {
  const productsData = getProducts();
  const products = await productsData;

  return (
    <div>
      This page will be rendered from server
      {products.map((product) => (
        <div>
          <a href={`/ssr/${product._id}`}>{product.name}</a>
        </div>
      ))}
    </div>
  );
}

export default ssr;
