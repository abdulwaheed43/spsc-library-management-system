import React from "react";

const General = () => {

  const topics = [
    "Everyday Science Basics",
    "Physics Fundamentals",
    "Chemistry Basics",
    "Biology Essentials",
    "Space & Astronomy",
    "Environmental Science",
    "Scientific Instruments",
    "Health & Human Body",
    "Computer Basics",
    "Internet & Technology",
    "Current Scientific Discoveries",
    "General Science MCQs",

    "Basic Arithmetic",
    "Percentages & Ratios",
    "Speed, Distance & Time",
    "Averages & Problems",
    "Logical Reasoning",
    "Analytical Reasoning",
    "Series Completion",
    "Pattern Recognition",
    "Problem Solving Techniques",
    "Data Interpretation",
    "Math MCQs Practice",
    "Mental Ability Tests"
  ];

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 py-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#06B6D4] mb-3 mt-20">
          General Science & Abilities
        </h1>

        <p className="text-gray-300 text-lg">
          CSS / Competitive Exams Preparation Section
        </p>
      </div>

      {/* Shelves */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#1F2937] border border-gray-700 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-white">
              {topic}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
};

export default General;