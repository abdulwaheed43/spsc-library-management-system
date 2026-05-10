import React from "react";

const PrecisComposition = () => {

  const topics = [
    "Precis Writing Basics",
    "Rules of Precis Writing",
    "How to Summarize Passage",
    "Comprehension Practice",
    "Title Writing Techniques",
    "Note Making",
    "Report Writing",
    "Formal Letter Writing",
    "Application Writing",
    "Paragraph Writing",
    "Essay Outline Making",
    "Sentence Transformation",
    "Grammar for Composition",
    "Punctuation Practice",
    "CSS Past Papers (Precis)",
    "Solved Precis Examples",
    "Practice Passages",
    "Time Management in Exam",
    "Common Mistakes in Precis",
    "Improving Writing Skills"
  ];

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 py-10">

      {/* Heading */}
      <div className="text-center mb-10 mt-28">
        <h1 className="text-4xl font-bold text-[#06B6D4] mb-3">
          Precis & Composition
        </h1>

        <p className="text-gray-300 text-lg">
          CSS English Paper Preparation Section
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

export default PrecisComposition;