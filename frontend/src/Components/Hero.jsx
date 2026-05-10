// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="relative w-full h-[90vh]">

//       {/* Background Image */}
//       <img
//         src={assets.hero_img}
//         alt="food"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlay */}
    
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, ClipboardList, ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
 <div className="min-h-[10vh] bg-[#111827] text-white flex items-center justify-center px-2 py-5">

  {/* Main Container */}
  <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  mt-32">
        {/* Left Content */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1F2937] border border-[#D4A257]/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#06B6D4] rounded-full"></span>
            <p className="text-sm text-gray-300">
              Smart Digital Library System
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Modern
            <span className="text-[#06B6D4]"> Library </span>
            Management
            <br />
            System
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Manage books, students, issuing records, and library operations
            with a modern and professional dashboard designed for universities
            and institutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => navigate("/books")}
              className="bg-[#06B6D4] hover:bg-[#06B6D4] transition-all duration-300 text-black font-semibold px-7 py-3 rounded-xl flex items-center gap-2 shadow-lg"
            >
              Explore Books
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/students")}
              className="border border-gray-600 hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-300 px-7 py-3 rounded-xl font-medium"
            >
              Manage Students
            </button>
          </div>

          {/* Stats */}
         
        </div>

        {/* Right Side Cards */}
        <div className="relative flex items-center justify-center">

          {/* Main Card */}
          <div className="bg-[#1F2937] border border-gray-700 rounded-3xl p-8 w-full max-w-md shadow-2xl">

            <h2 className="text-2xl font-bold mb-8">
              Library Overview
            </h2>

            {/* Card Items */}
            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-[#111827] p-5 rounded-2xl">
                <div className="bg-[#D4A257]/20 p-3 rounded-xl">
                  <BookOpen className="text-[#06B6D4]" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Book Collection
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Organize and manage books easily
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#111827] p-5 rounded-2xl">
                <div className="bg-[#D4A257]/20 p-3 rounded-xl">
                  <Users className="text-[#06B6D4]" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Student Records
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Track registered students
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#111827] p-5 rounded-2xl">
                <div className="bg-[#D4A257]/20 p-3 rounded-xl">
                  <ClipboardList className="text-[#06B6D4]" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Issue Management
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Monitor issued and returned books
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -z-10 w-72 h-72 bg-[#D4A257]/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;