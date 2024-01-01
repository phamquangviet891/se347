import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import HeaderSeller from "./parts/HeaderSeller";
const SellerLayout = () => {
  return (
    <div className="bg-[#EEF1FC] h-screen overflow-hidden w-screen flex flex-col items-center ">
      <HeaderSeller />
      <div className="flex flex-row w-screen h-[calc(100%-3.5rem)] overflow-y-hidden ">
        <SideBar />
        <div className="w-[calc(100%-15rem)] h-full py-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
