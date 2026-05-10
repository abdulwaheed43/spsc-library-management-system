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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const LatestCollection = () => {
  const [view, setView] = useState("compulsory");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // 📘 COMPULSORY SUBJECTS
  const compulsorySubjects = [
    { name: "English Essay", route: "/english" },
    { name: "English (Precis & Composition)", route: "/precis" },
    { name: "General Science & Ability", route: "/general" },
    { name: "Current Affairs", route: "/caffairs" },
    { name: "Pakistan Affairs", route: "/paffairs" },
    { name: "Islamic Studies", route: "/islamic" },
  ];

  // 📗 OPTIONAL SUBJECTS
  const optionalSubjects = [
    { name: "Economics", route: "/economics" },
    { name: "Political Science", route: "/political-science" },
    { name: "International Relations", route: "/ir" },
    { name: "Physics", route: "/physics" },
    { name: "Chemistry", route: "/chemistry" },
    { name: "Mathematics", route: "/mathematics" },
    { name: "Constitutional Law", route: "/law-constitutional" },
    { name: "International Law", route: "/law-international" },
    { name: "Sociology", route: "/sociology" },
    { name: "Crimilogy", route: "/crimilogy" },
    { name: "Psychology", route: "/psychology" },
    { name: "Journalism / Mass Communication", route: "/journalism" },
  ];

  const subjects =
    view === "compulsory" ? compulsorySubjects : optionalSubjects;

  return (
    <div className="min-h-screen bg-[#111827] text-white px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <Title text1="CSS" text2="GUIDANCE SYSTEM" />

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Select your subjects carefully. Each subject opens a dedicated study page for notes, preparation roadmap, and exam guidance.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-5 mb-12">

        <button
          onClick={() => {
            setView("compulsory");
            setSelected(null);
          }}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            view === "compulsory"
              ? "bg-[#06B6D4] text-black"
              : "bg-[#1F2937] text-gray-300"
          }`}
        >
          📘 Compulsory
        </button>

        <button
          onClick={() => {
            setView("optional");
            setSelected(null);
          }}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            view === "optional"
              ? "bg-[#06B6D4] text-black"
              : "bg-[#1F2937] text-gray-300"
          }`}
        >
          📗 Optional
        </button>

      </div>

      {/* SUBJECT GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">

        {subjects.map((subj, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected(subj.name);
              navigate(subj.route); // ✅ ROUTE WORKING
            }}
            className={`px-5 py-4 rounded-lg border transition cursor-pointer ${
              selected === subj.name
                ? "bg-[#06B6D4] text-black border-[#06B6D4]"
                : "bg-[#1F2937] text-gray-300 border-gray-700 hover:border-[#06B6D4] hover:text-white"
            }`}
          >
            {subj.name}
          </div>
        ))}

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