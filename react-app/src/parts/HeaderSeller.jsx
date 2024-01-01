import React from "react";
import logo from "../assets/pictures/logo.png";
const HeaderSeller = () => {
  return (
    <div className="w-screen flex justify-between items-center px-16 py-2 bg-white shadow-gray-400 shadow-md h-[3.5rem]">
      <div className="flex items-end justify-center gap-4">
        <a href="/">
          <img src={logo} alt="" className="h-[3rem]" />
        </a>
        <h1 className="text-2xl">Seller Center</h1>
      </div>
    </div>
  );
};

export default HeaderSeller;
