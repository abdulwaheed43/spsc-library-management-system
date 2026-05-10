import React from "react";

const English = () => {

  const topics = [
    "Essay Writing",
    "Grammar Rules",
    "Vocabulary Building",
    "Pair of Words",
    "Idioms & Phrases",
    "Sentence Correction",
    "Active & Passive Voice",
    "Direct & Indirect Speech",
    "Paragraph Writing",
    "Letter & Application Writing",
    "Comprehension Practice",
    "Expansion of Ideas",
    "Translation (Urdu to English)",
    "Punctuation Rules",
    "Synonyms & Antonyms",
    "Tenses & Structure",
    "CSS Past Papers",
    "Important Essays",
    "Current Topics Essays",
    "Quotations for Essays",
    "English MCQs",
    "One Word Substitution",
    "Prepositions Practice"
  ];

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-6 py-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#06B6D4] mb-3 mt-20">
          English Preparation
        </h1>

        <p className="text-gray-300 text-lg">
          CSS & Competitive Exams English Preparation
        </p>
      </div>

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

export default English;