// import React, { useState, useContext } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../Context/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     setToken,
//     token,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const navLinks = [
//     { title: "HOME", path: "/" },
//     { title: "MENU", path: "/collection" },
//     { title: "ABOUT", path: "/about" },
//     { title: "CONTACT", path: "/contact" },
//   ];

//   const iconStyle =
//     "w-5 cursor-pointer transition hover:scale-110 filter brightness-0 invert opacity-70 hover:opacity-100";

//   return (
//     <div className="sticky top-0 z-50 backdrop-blur-md bg-black shadow-md ">
      
//       {/* Top Navbar */}
//       <div className="flex items-center justify-between  px-6 py-2 font-medium">
        
//         {/* Logo */}
//         <Link to="/">
//           <img src={assets.logo} className="w-44 sm:w-52 h-auto" alt="logo" />
//         </Link>

//         {/* Nav Links (Laptop/Desktop only) */}
//         <ul className="hidden sm:flex gap-8 text-sm">
//           {navLinks.map(({ title, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className={({ isActive }) =>
//                 `relative font-semibold transition ${
//                   isActive ? "text-[#d4a257]" : "text-gray-300"
//                 }`
//               }
//             >
//               {title}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4a257] transition-all duration-300 group-hover:w-full"></span>
//             </NavLink>
//           ))}
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center gap-4 sm:gap-5">

//           {/* Search */}
//           <img
//             src={assets.search_icon}
//             className={iconStyle}
//             alt=""
//             onClick={() => setShowSearch(true)}
//           />

//           {/* Profile */}
//           <div className="group relative">
//             <img
//               onClick={() => (token ? null : navigate("/login"))}
//               className={iconStyle}
//               src={assets.profile_icon}
//               alt=""
//             />

//             {token && (
//               <div className="hidden group-hover:block absolute right-0 pt-4">
//                 <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white text-black shadow-lg rounded-lg text-sm">
//                   <p onClick={() => navigate("/profile")} className="hover:text-[#d4a257] cursor-pointer">
//                     My Profile
//                   </p>
//                   <p onClick={() => navigate("/orders")} className="hover:text-[#d4a257] cursor-pointer">
//                     Orders
//                   </p>
//                   <p onClick={logout} className="hover:text-[#d4a257] cursor-pointer">
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to="/cart" className="relative">
//             <img src={assets.cart_icon} className={iconStyle} alt="" />
//             <span className="absolute -top-2 -right-2 bg-[#d4a257] text-black text-[10px] px-1.5 py-[2px] rounded-full">
//               {getCartCount()}
//             </span>
//           </Link>

//           {/* Menu Icon (ONLY mobile) */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             className={`${iconStyle} sm:hidden`}
//             alt=""
//           />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-black text-white transition-all duration-300  ${
//           visible ? "w-[75%] sm:w-[40%]" : "w-0 overflow-hidden"
//         }`}
//       >
//         <div className="flex flex-col p-5 bg-black h-screen">
//           <p
//             onClick={() => setVisible(false)}
//             className="mb-5 cursor-pointer text-[#d4a257] font-bold"
//           >
//             Close ✕
//           </p>

//           {navLinks.map(({ title, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               onClick={() => setVisible(false)}
//               className="py-3 border-b border-gray-700 text-gray-300 hover:text-[#d4a257]"
//             >
//               {title}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    token,
    setCartItems,
  } = useContext(ShopContext);

  // Logout Function
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  // Navbar Links
  const navLinks = [
    { title: "Overview", path: "/" },
    { title: "Books", path: "/books" },
    { title: "Students", path: "/students" },
    { title: "Issue Books", path: "/issue" },
    { title: "Return Books", path: "/return" },
  ];

  // Icons Styling
  const iconStyle =
    "w-5 cursor-pointer transition duration-300 hover:scale-110 filter brightness-0 invert opacity-80 hover:opacity-100";

  return (
    <>
      {/* Top Navbar */}
   <div className="fixed top-0 left-0 w-screen z-50 bg-[#1E293B] shadow-lg">
  <div className="flex items-center justify-between px-6 py-3 mt-5">
          {/* Left Section */}
          <div className="flex items-center gap-4">

            {/* Menu Icon */}
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className={`${iconStyle} sm:hidden`}
              alt=""
            />

            {/* Logo */}
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#06B6D4]">
                Library MS
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex items-center gap-8">
            {navLinks.map(({ title, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "text-[#06B6D4]"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            {/* Search */}
            {/* <img
              src={assets.search_icon}
              className={iconStyle}
              alt=""
              onClick={() => setShowSearch(true)}
            /> */}

            {/* Profile */}
            <div className="group relative">
              <img
                onClick={() => (token ? null : navigate("/login"))}
                className={iconStyle}
                src={assets.profile_icon}
                alt=""
              />

              {/* Dropdown */}
              {token && (
                <div className="hidden group-hover:block absolute right-0 pt-4 z-50">
                  <div className="flex flex-col gap-2 w-40 py-3 px-4 bg-white text-black rounded-xl shadow-xl text-sm">

                    <p
                      onClick={() => navigate("/profile")}
                      className="cursor-pointer hover:text-[#06B6D4]"
                    >
                      My Profile
                    </p>

                    <p
                      onClick={() => navigate("/orders")}
                      className="cursor-pointer hover:text-[#06B6D4]"
                    >
                      Orders
                    </p>

                    <p
                      onClick={logout}
                      className="cursor-pointer hover:text-red-500"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <img
                src={assets.cart_icon}
                className={iconStyle}
                alt=""
              />

              <span className="absolute -top-2 -right-2 bg-[#06B6D4] text-black text-[10px] px-1.5 py-[2px] rounded-full font-bold">
                {getCartCount()}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#111827] text-white transition-all duration-300 z-50 ${
          visible
            ? "w-[75%] sm:w-[40%] md:w-[25%]"
            : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col h-screen p-5">

          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="text-right text-2xl mb-8 text-[#06B6D4]"
          >
            ✕
          </button>

          {/* Sidebar Title */}
          <h2 className="text-3xl font-bold text-[#06B6D4] mb-10">
            Library Panel
          </h2>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map(({ title, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-xl transition duration-300 font-medium ${
                    isActive
                      ? "bg-[#d4a257] text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </div>

          {/* Bottom Logout */}
          {token && (
            <button
              onClick={logout}
              className="mt-auto bg-red-500 hover:bg-red-600 transition py-3 rounded-xl font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;