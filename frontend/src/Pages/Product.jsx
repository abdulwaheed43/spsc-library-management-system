import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productid } = useParams();
  const { products, currency, addToCartBackend } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((item) => item._id === productid);

      if (product && product.image?.length > 0) {
        setProductData(product);
        setImage(product.image[0]);
      }
    }
  }, [productid, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      <div className="flex gap-12 flex-col sm:flex-row">

        {/* LEFT IMAGES */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="food"
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              className="w-full h-auto rounded-lg"
              alt="food"
            />
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="flex-1">

          {/* FOOD NAME */}
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          {/* RATING */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_icon} className="w-3" />
            <img src={assets.star_dull_icon} className="w-3" />
            <p className="pl-2 text-sm">(122 reviews)</p>
          </div>

          {/* PRICE */}
          <p className="mt-5 text-[#d4a257]  text-3xl font-medium">
            {currency}{productData.price}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[#d4a257] md:w-4/5">
            🍽️ {productData.description}
          </p>

          {/* QUANTITY SELECT */}
          <div className="mt-6">
            <p className="font-medium text-[#d4a257]">🍽️ Select Quantity</p>
            <p className="text-sm text-[#d4a257] mt-1">
              Choose how much food you want to order
            </p>

            <div className="flex gap-2 mt-3">
              {["Half Kg", "1 Kg", "2 Kg", "Full Kg"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setQuantity(item)}
                  className={`border-[2px] py-2 px-4 bg-[#d4a257] ${
                    quantity === item ? "border-gray-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ORDER BUTTON */}
          <button
            onClick={() => {
              if (!quantity) {
                alert("⚠️ Please select quantity first (Half Kg / 1 Kg / 2 Kg / Full Kg)");
                return;
              }
              addToCartBackend(productData._id, quantity);
            }}
            className="bg-[#d4a257] rounded-full text-black px-8 py-3 text-sm mt-6 active:bg-black"
          >
            ORDER NOW
          </button>

          <hr className="mt-6 sm:w-4/5" />

          {/* POLICY */}
          <div className="text-sm text-gray-300 mt-5 flex flex-col gap-1">
            <p>✔ 100% fresh and hygienic food</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Easy return within 7 days</p>
          </div>

        </div>
      </div>

      {/* DESCRIPTION + REVIEWS */}
      <div className="mt-20 mb-20">

        <div className="flex">
          <b className="border border-[#d4a257]  text-gray-300 px-5 py-3 text-sm">Description</b>
          <p className="border border-[#d4a257] px-5 py-3 text-sm text-gray-300">
            Reviews (122)
          </p>
        </div>

        <div className="border border-[#d4a257] px-6 py-6 text-sm text-gray-300 flex flex-col gap-4">
          <p>
            🍕 Freshly prepared food using high-quality ingredients. Every bite
            is made to deliver taste and satisfaction.
          </p>

          <p>
            🥗 We maintain hygiene, quality, and freshness in every order.
            Customize your quantity and enjoy your meal your way.
          </p>
        </div>

      </div>

      {/* RELATED PRODUCTS */}
      <div className="flex items-center mr-2">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;