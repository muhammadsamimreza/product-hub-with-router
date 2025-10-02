import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1 className="text-blue-600 font-bold">
        Total Product: {products.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
