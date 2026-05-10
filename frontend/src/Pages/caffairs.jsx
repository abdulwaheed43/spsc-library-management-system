import React from "react";

const CAffairs = () => {

 const topics = [
  "Pakistan Current Affairs",
  "International Affairs",
  "Organizations & Summits",
  "Science & Technology",
  "Sports Updates",
  "Environmental Issues",
  "Middle East Affairs",
  "China-US Relations",
  "India-Pakistan Relations",
  "Russia-Ukraine Conflict",
  "Economy & IMF",
  "Defense & Security",
  "Daily Current Affairs",
  "Monthly Current Affairs",
  "Important MCQs",
  "CSS Past Papers"
];

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 py-10">

      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#06B6D4] mb-3 mt-20">
          Current Affairs
        </h1>

        <p className="text-gray-300 text-lg">
          Welcome to Current Affairs (CSS Preparation Page)
        </p>
      </div>

      {/* Shelves / Cards */}
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

export default CAffairs;