// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// export const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   // console.log(products);

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Discover our most popular products that customers love the most.
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-12">

      {/* Heading */}
      <div className="text-center  text-gray-300 py-8 text-3xl mb-5">
        <Title className="text-[#d4a257]" text1={"POPULAR"} text2={"FOOD ITEMS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Explore delicious meals, freshly prepared and loved by everyone.
          freshly prepared and loved Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusamus minus. Commodi, veniam repudiandae consectetur sunt accusamus quos, iusto animi quod hic nemo corporis reprehenderit earum nam cumque assumenda dolores?
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8">

      {latestProducts.length > 0 ? (
  latestProducts.map((item) => (
    <div key={item._id} className="border p-3 rounded-lg">

      {/* Product Card */}
      <ProductItem
        id={item._id}
        image={item.image || ""}
        name={item.name || "Tasty Food"}
        price={item.price || 0}
      />

      {/* PRICE + ORDER BUTTON */}
      <div className="mt-3 flex items-center justify-between">

        {/* PRICE */}
        <p className="font-medium text-lg">
          ${item.price}
        </p>

        {/* ORDER BUTTON */}
        <button
          onClick={() => console.log("Order clicked", item._id)}
          className="bg-[#d4a257] text-black px-4 py-2 text-sm rounded-md hover:bg-gray-800"
        >
          Order
        </button>

      </div>

    </div>
  ))
) : (
  <p className="text-center col-span-full text-[#d4a257]">
    Loading delicious food...
  </p>
)}

      </div>
    </div>
  );
};

export default LatestCollection;



// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// export const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(products) && products.length > 0) {
//       setLatestProducts(products.slice(0, 10));
//     }
//   }, [products]);

//   return (
//     <div className="my-12">

//       {/* Food Heading */}
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"POPULAR"} text2={"FOOD ITEMS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Explore delicious meals, freshly prepared and loved by everyone.
//         </p>
//       </div>

//       {/* Food Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-8">

//         {latestProducts.length > 0 ? (
//           latestProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               id={item._id}
//               image={item.image || ""}
//               name={item.name || "Tasty Food"}
//               price={item.price || 0}
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">
//             Loading delicious food...
//           </p>
//         )}

//         <button>Order Now</button>

//       </div>
//     </div>
//   );
// };

// export default LatestCollection;