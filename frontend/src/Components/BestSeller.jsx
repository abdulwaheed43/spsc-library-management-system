import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center  text-gray-300 py-8 text-3xl">
       <Title text1={"VIP"} text2={"FOOD"} className="text-[#d4a257]" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base ">
          Discover our most popular products that customers love the most.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates dolor iure corporis nam sapiente vel architecto optio minus hic cupiditate aspernatur provident, temporibus aliquid ut, iste eveniet labore veniam?
        </p>
      </div>

      {/* GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {bestSeller.map((item) => (
    <div key={item._id} className="border p-3 rounded-lg">

      {/* PRODUCT CARD */}
      <ProductItem
        id={item._id}
        image={item.image}
        name={item.name}
        price={item.price}
      />

      {/* PRICE + ORDER BUTTON */}
      <div className="mt-3 flex items-center justify-between">

        <p className="font-medium text-lg">${item.price}</p>

        <button
          onClick={() => console.log("Order clicked:", item._id)}
          className="bg-[#d4a257] text-black px-3 py-1 text-sm rounded-md hover:bg-[#b4853f]"
        >
          Order
        </button>

      </div>

    </div>
  ))}
</div>
    </div>
  );
};

export default BestSeller;