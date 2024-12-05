import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-[url(https://i.pinimg.com/736x/a9/dd/9f/a9dd9f92dd2f30bc80e1335b6a8a2373.jpg)] flex justify-center items-center h-[80vh] w-full bg-no-repeat bg-cover flex-col gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-600 text-3xl font-bold">A MINIMAL, CLEAR</h1>
        <h1 className=" text-3xl font-thin tracking-widest">
          LAYOUT WEB DESIGN
        </h1>
      </div>
      <button className="bg-gray-700 py-2 px-4 text-white rounded-md">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
