import React from "react";

const DiscountCard = ({ title, date }) => {
  return (
    <div className="flex relative h-[80px] bg-blue-50 border border-main-color">
      <div className="absolute rounded-full bg-white border border-main-color h-[10px] w-[10px] left-[-5px] top-[3px] "></div>
      <div className="absolute bg-white h-[10px] w-[10px] left-[-10px] top-[3px] "></div>

      <div className="absolute rounded-full bg-white border border-main-color h-[10px] w-[10px] left-[-5px] top-[18px] "></div>
      <div className="absolute bg-white h-[10px] w-[10px] left-[-10px] top-[18px] "></div>

      <div className="absolute rounded-full bg-white border border-main-color h-[10px] w-[10px] left-[-5px] top-[33px] "></div>
      <div className="absolute bg-white h-[10px] w-[10px] left-[-10px] top-[33px] "></div>

      <div className="absolute rounded-full bg-white border border-main-color h-[10px] w-[10px] left-[-5px] top-[48px] "></div>
      <div className="absolute bg-white h-[10px] w-[10px] left-[-10px] top-[48px] "></div>

      <div className="absolute rounded-full bg-white border border-main-color h-[10px] w-[10px] left-[-5px] top-[63px] "></div>
      <div className="absolute bg-white h-[10px] w-[10px] left-[-10px] top-[63px] "></div>

      <div className="flex flex-col px-6 py-3 w-2/3 gap-2">
        <span className="text-main-color text-xl font-medium">{title}</span>
        <span className="text-main-color text-sm">Valid until: {date}</span>
      </div>
      <div className="flex justify-center items-center w-1/3 py-1 px-6 border-l border-dashed border-main-color">
        <button className="w-[80px] h-[30px] px-5 bg-main-color text-white">
          Get
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
