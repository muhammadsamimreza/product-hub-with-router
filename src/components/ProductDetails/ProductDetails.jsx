import React from "react";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const ProductDetail = useLoaderData();
  const { title, image, price, category } = ProductDetail;
  return (
    <div>
      <div className="card bg-white shadow-md w-[600px] mx-auto space-y-5 border border-amber-300">
        <figure className="border-2 border-green-200 py-5">
          <img className="h-30 object-cover" src={image} alt="image" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-green-200">{category}</div>
            <div className="badge badge-outline bg-gray-100">{price}</div>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="w-1/2">
              <Link to={`/products`}>
                <button className="btn w-full bg-green-400 hover:bg-green-500 hover:text-white">
                  Back
                </button>
              </Link>
            </div>
            <div className="w-1/2">
              <button className="btn w-full bg-green-400 hover:bg-green-500 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
