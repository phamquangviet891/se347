import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import HeaderSeller from "./parts/HeaderSeller";
const DeliveryLayout = () => {
  return (
    <div className="bg-[#EEF1FC] h-screen overflow-hidden w-screen flex flex-col items-center ">
      <HeaderSeller />
      <div className="flex flex-row w-screen h-[calc(100%-3.5rem)] overflow-y-hidden ">
        <div className="w-60 h-full bg-main-color" />
        <div className="w-[calc(100%-15rem)] h-[calc(100vh-3.5rem)] overflow-y-hidden relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DeliveryLayout;
