
import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import { assets } from "../assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  // Filter states
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("filter");
  const [isOpen, setIsOpen] = useState(false);

  const selectOptions = [
    {title:"Sort by: relevant",value:"relevant"},
    {title:"Sort by: low-high",value:"low-high"},
    {title:"Sort by: high-low",value:"high-low"},
  ]


useEffect(() => {
  let filtered = products;

  // 🔍 SEARCH FILTER
  if (showSearch && search) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category filter
  if (category.length > 0) {
    filtered = filtered.filter(
      (item) => item.category && category.includes(item.category)
    );
  }

  // Subcategory filter
  if (subCategory.length > 0) {
    filtered = filtered.filter((item) => {
      if (!item.subCategory) return false;
      return subCategory.some(
        (s) => s.toLowerCase() === item.subCategory.toLowerCase()
      );
    });
  }

  // Sorting
  if (sortOption === "low-high") {
    filtered = filtered.slice().sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filtered = filtered.slice().sort((a, b) => b.price - a.price);
  }

  setFilterProducts(filtered);
}, [products, category, subCategory, sortOption, search, showSearch]);


  // Initialize filtered products
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Toggle category
  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  // Toggle subcategory / type
  const togglesubCategory = (value) => {
    setsubCategory((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  // Apply filters
  useEffect(() => {
    let filtered = products;

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter(
        (item) => item.category && category.includes(item.category)
      );
    }

    // Subcategory filter (safe + case-insensitive)
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => {
        if (!item.subCategory) return false;
        const itemSub = item.subCategory.toLowerCase();
        return subCategory.some((s) => s.toLowerCase() === itemSub);
      });
    }

    setFilterProducts(filtered);
  }, [category, subCategory, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t">
      {/* Filter Section */}
  

      {/* Right Side */}
      <div className="flex-1">
        <Title text1={"ALL"} text2={"Food"} className="text-[#d4a257] " />
       <div className="relative flex justify-between text-base sm:text-2xl mb-4">
      <div className="absolute right-0 bottom-4">

        {/* Sort Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 border-2 border-[#d4a257]  text-[#d4a257]  px-3 py-1 text-sm flex items-center gap-2"
        >
          {sortOption || "Sort"}
          <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            <IoMdArrowDropdown/>
          </span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-1 w-48 border border-gray-400 bg-white shadow-md text-sm z-50">
            {selectOptions.map((option, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSortOption(option.value);
                  setIsOpen(false);
                }}
                className="px-3 py-2 cursor-pointer hover:bg-gray-600"
              >
                {option.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   mb-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
