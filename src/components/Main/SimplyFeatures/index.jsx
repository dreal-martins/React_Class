import React from "react";

const SimplyFeatures = (props) => {
  const img = props.imgSrc;
  return (
    <div className="w-[30%] flex flex-col justify-start items-center gap-2.5">
      <img src={img} alt="test" className="w-[100px] h-[100px] rounded-full" />

      <h1 className="font-bold text-lg text-gray-500">{props.title}</h1>

      <p className="text-center text-gray-500 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsum
        distinctio dolorum beatae pariatur.
      </p>
    </div>
  );
};

export default SimplyFeatures;
