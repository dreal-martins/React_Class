import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-[10vh]">
      <h1 className="text-2xl font-semibold cursor-pointer">
        Simply<span className="text-green-500 font-bold !text-3xl">.</span>
      </h1>

      <ul className="flex justify-end gap-4 items-center">
        <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
          Portfolio
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
          Contact
        </li>
        <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
          Blog
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
