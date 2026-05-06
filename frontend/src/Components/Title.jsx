import React from "react";

export const Title = ({ text1, text2,className }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className={` ${className}`}>
        {text1} <span className={` font-medium ${className}`}>{text2}</span>
      </p>
      <p className={`w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#d4a257] `}></p>
    </div>
  );
};

export default Title;
