import React from "react";
import Home from "./Pages/Home";

import English from "./Pages/English";

import Login from "./Pages/Login";
import Contact from "./Pages/Contact";



import Navbar from "./Components/Navbar";



import General from "./pages/general";
import CAffairs from "./pages/caffairs";
import PAffairs from "./pages/paffairs";
import Islamic from "./pages/islamic";
import PcEnglish from "./pages/pcenglish";
// import lines
import eco from "./Pages/eco";
import Soco from "./Pages/Soco";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";
import Eco from "./Pages/eco";

const App = () => {

  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup", "/register"];

  return (
    <div className="min-h-screen bg-[#0c1220] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      <ToastContainer />

      {/* Navbar conditional render */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}



      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/english" element={<English />} />
        <Route path="/general" element={<General />} />
        <Route path="/caffairs" element={<CAffairs />} />
        <Route path="/paffairs" element={<PAffairs />} />
        <Route path="/islamic" element={<Islamic />} />
        <Route path="/pc-english" element={<PcEnglish />} />

    
        <Route path="/contact" element={<Contact />} />

       
        // route lines
        <Route path="/economics" element={<Eco/>} />
        <Route path="/sociology" element={<Soco />} />
        <Route path="/login" element={<Login />} />
 
  
      
      </Routes>



    </div>
  );
};

export default App;