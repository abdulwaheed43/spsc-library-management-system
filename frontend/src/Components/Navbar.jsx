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

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "MENU", path: "/collection" },
    { title: "ABOUT", path: "/about" },
    { title: "CONTACT", path: "/contact" },
  ];

  const iconStyle =
    "w-5 cursor-pointer transition hover:scale-110 filter brightness-0 invert opacity-70 hover:opacity-100";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-black shadow-md ">
      
      {/* Top Navbar */}
      <div className="flex items-center justify-between  px-6 py-2 font-medium">
        
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-44 sm:w-52 h-auto" alt="logo" />
        </Link>

        {/* Nav Links (Laptop/Desktop only) */}
        <ul className="hidden sm:flex gap-8 text-sm">
          {navLinks.map(({ title, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative font-semibold transition ${
                  isActive ? "text-[#d4a257]" : "text-gray-300"
                }`
              }
            >
              {title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4a257] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-5">

          {/* Search */}
          <img
            src={assets.search_icon}
            className={iconStyle}
            alt=""
            onClick={() => setShowSearch(true)}
          />

          {/* Profile */}
          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className={iconStyle}
              src={assets.profile_icon}
              alt=""
            />

            {token && (
              <div className="hidden group-hover:block absolute right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white text-black shadow-lg rounded-lg text-sm">
                  <p onClick={() => navigate("/profile")} className="hover:text-[#d4a257] cursor-pointer">
                    My Profile
                  </p>
                  <p onClick={() => navigate("/orders")} className="hover:text-[#d4a257] cursor-pointer">
                    Orders
                  </p>
                  <p onClick={logout} className="hover:text-[#d4a257] cursor-pointer">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className={iconStyle} alt="" />
            <span className="absolute -top-2 -right-2 bg-[#d4a257] text-black text-[10px] px-1.5 py-[2px] rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* Menu Icon (ONLY mobile) */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className={`${iconStyle} sm:hidden`}
            alt=""
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transition-all duration-300  ${
          visible ? "w-[75%] sm:w-[40%]" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-5 bg-black h-screen">
          <p
            onClick={() => setVisible(false)}
            className="mb-5 cursor-pointer text-[#d4a257] font-bold"
          >
            Close ✕
          </p>

          {navLinks.map(({ title, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setVisible(false)}
              className="py-3 border-b border-gray-700 text-gray-300 hover:text-[#d4a257]"
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState, useContext } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../Context/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch, getCartCount, navigate, setToken, token, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const navLinks = [
//     { title: "HOME", path: "/" },
//     { title: "MENU", path: "/collection" },   // 👈 rename for food vibe
//     { title: "ABOUT", path: "/about" },
//     { title: "CONTACT", path: "/contact" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 backdrop-blur-md bg-black shadow-md">

//       <div className="flex items-center justify-between px-6 py-4 font-medium">
        
//         {/* Logo */}
//         <Link to="/">
//           <img src={assets.logo} className="w-52 h-20" alt="logo" />
//         </Link>

//         {/* Nav Links */}
//         <ul className="hidden sm:flex gap-8 text-sm">
//           {navLinks.map(({ title, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className={({ isActive }) =>
//                 `relative font-semibold transition ${
//                   isActive ? "text-[#d8a251]" : "text-gray-300"
//                 }`
//               }
//             >
//               {title}
//               {/* underline hover */}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4a257] transition-all duration-300 hover:w-full"></span>
//             </NavLink>
//           ))}
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center gap-5">

//           {/* Search */}
//          <img
//   src={assets.search_icon}
//   className="w-5 cursor-pointer transition hover:scale-110 filter brightness-0 invert opacity-70 hover:opacity-100"
//   alt=""
//   onClick={() => setShowSearch(true)}
// />

//           {/* Profile */}
//           <div className="group relative">
//           <img
//   onClick={() => (token ? null : navigate("/login"))}
//   className="w-5 cursor-pointer hover:scale-110 transition filter brightness-0 invert opacity-70"
//   src={assets.profile_icon}
//   alt=""
// />

//             {token && (
//               <div className="hidden group-hover:block absolute right-0 pt-4">
//                 <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white shadow-lg rounded-lg text-sm">
//                   <p onClick={() => navigate("/profile")} className="hover:text-[#d4a257] cursor-pointer">My Profile</p>
//                   <p onClick={() => navigate("/orders")} className="hover:text-[#d4a257] cursor-pointer">Orders</p>
//                   <p onClick={logout} className="hover:text-[#d4a257] cursor-pointer">Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to="/cart" className="relative">
//         <img
//   src={assets.cart_icon}
//   className="w-5 filter brightness-0 invert opacity-70 hover:opacity-100 transition"
//   alt=""
// />
//             <span className="absolute -top-2 -right-2 bg-[#d4a257] text-black text-[10px] px-1.5 py-[2px] rounded-full">
//               {getCartCount()}
//             </span>
//           </Link>

//           {/* Mobile Menu */}
         
//           <img
//            onClick={() => setVisible(true)}
//   src={assets.menu_icon}
//   className="w-5 filter brightness-0 invert opacity-70 hover:opacity-100 hover:scale-110 transition"
//   alt=""
// />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ${visible ? "w-[70%]" : "w-0 overflow-hidden"}`}>
//         <div className="flex flex-col p-5">
//           <p onClick={() => setVisible(false)} className="mb-5 cursor-pointer text-[#d4a257] font-bold">Close ✕</p>

//           {navLinks.map(({ title, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               onClick={() => setVisible(false)}
//               className="py-3 border-b text-gray-300 hover:text-[#d4a257]"
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