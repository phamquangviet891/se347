import React, { useState } from "react";
import { SlNote } from "react-icons/sl";
import { FaCamera } from "react-icons/fa6";
import SwitchInput from "../../components/SwitchInput";
import { convertPrice, convertNumber } from "../../utils/price";

const DeliveryProfile = () => {
  const [avatarcompany, setAvatarconpany] = useState(
    "data:image/png;base64,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"
  );

  const [avartuser, setAvataruser] = useState(
    "data:image/jpeg;base64,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"
  );

  const [switchEconomy, setSwitchEconomy] = useState(false);

  const [switchStandard, setSwitchStandard] = useState(false);

  const [switchExpress, setSwitchExpress] = useState(false);

  const [standard, setstandard] = useState("10000");
  const [economy, setEconomy] = useState("0");
  const [express, setExpress] = useState("10000");

  return (
    <div className="h-full no-scrollbar w-full flex flex-col gap-8 py-4 px-8">
      <div className=" container px-8 py-4 flex flex-col gap-3 bg-white shadow-md shadow-[rgba(0,0,0,0.5)]">
        <p className=" text-gray-600 tracking-wide  text-lg">
          Delivery / <span className=" text-black ">Company Profile</span>
        </p>
        <p className=" text-2xl text-main-color font-medium">Company Profile</p>
      </div>
      <div className=" bg-white px-8 py-4 flex flex-col gap-4 h-full overflow-y-auto no-scrollbar">
        {/* company */}
        <div className="flex flex-col">
          <div className="px-3 py-4 flex justify-start items-center gap-6 border-b-2 border-gray-400">
            <p className=" text-xl text-main-color font-semibold">Company</p>
            <SlNote className=" cursor-pointer opacity-80" size={22} />
          </div>
          <div className="grid grid-cols-3 py-4 px-6">
            <div className=" col-span-2 flex flex-col gap-6 py-4">
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Full Name</h3>
                <p className="col-span-4 font-semibold">Nguyen Van A</p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Company Name</h3>
                <p className="col-span-4 font-semibold">
                  Grab Delivery Company{" "}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Address</h3>
                <p className="col-span-4 font-semibold">
                  District 1, Ho Chi Minh City{" "}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Payment Acount</h3>
                <p className="col-span-4 font-semibold">123456789</p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Description</h3>
                <p className=" col-span-4 font-semibold">
                  Grab started out as a taxi-hailing app, and has extended its
                  products to include ride-hailing, food, grocery and package
                  delivery, and financial services. The Grab app assigns taxis
                  and private hire cars to nearby commuters through a
                  location-sharing system.
                </p>
              </div>
            </div>
            <div className=" flex justify-end items-start p-4">
              <div className="flex flex-col gap-3 items-center">
                <div className=" rounded-full w-28 h-28  relative">
                  <img
                    className=" aspect-square rounded-full w-full border-2 border-gray-400"
                    src={avatarcompany}
                    alt=""
                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    className="hidden"
                    onChange={(e) => {
                      setAvatarconpany(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  <label
                    htmlFor="avatar"
                    className=" absolute bottom-0 right-0 flex items-center justify-center bg-gray-300 p-2 rounded-full text-gray-600 cursor-pointer"
                  >
                    <FaCamera />
                  </label>
                </div>

                <p className=" text-xl font-semibold">Grap</p>
              </div>
            </div>
          </div>
        </div>
        {/* Representative */}
        <div className="flex flex-col">
          <div className="px-3 py-4 flex justify-start items-center gap-6 border-b-2 border-gray-400">
            <p className=" text-xl text-main-color font-semibold">
              Representative
            </p>
            <SlNote className=" cursor-pointer opacity-80" size={22} />
          </div>
          <div className="grid grid-cols-3 py-4 px-6">
            <div className=" col-span-2 flex flex-col gap-6 py-4">
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Full Name</h3>
                <p className="col-span-4 font-semibold">Nguyen Van A</p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">Email</h3>
                <p className="col-span-4 font-semibold">nguyenvana@gmail.com</p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <h3 className=" text-gray-600 text-end">phone Number</h3>
                <p className="col-span-4 font-semibold">01212345678</p>
              </div>
            </div>
            <div className=" flex justify-end items-start p-4">
              <div className="flex flex-col gap-3 items-center">
                <div className=" rounded-full w-28 h-28  relative">
                  <img
                    className=" aspect-square rounded-full w-full border-2 border-gray-400"
                    src={avartuser}
                    alt=""
                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="avataruser"
                    className="hidden"
                    onChange={(e) => {
                      setAvataruser(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  <label
                    htmlFor="avataruser"
                    className=" absolute bottom-0 right-0 flex items-center justify-center bg-gray-300 p-2 rounded-full text-gray-600 cursor-pointer"
                  >
                    <FaCamera />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delivery Service */}
        <div className="flex flex-col">
          <div className="px-3 py-4 flex justify-start items-center gap-6 border-b-2 border-gray-400">
            <p className=" text-xl text-main-color font-semibold">
              Delivery Service
            </p>
            <SlNote className=" cursor-pointer opacity-80" size={22} />
          </div>
          <div className="flex flex-col py-4 px-16 gap-6">
            {/* economy */}
            <div className="grid grid-cols-7 rounded-xl border-2 border-green-400 py-6 px-8">
              <div className=" col-span-5 flex items-center justify-between gap-8">
                <div className=" flex flex-col gap-4 items-start justify-between">
                  <h1 className="text-xl font-semibold">ECONOMY</h1>
                  <p>
                    Shopee supported shipping options, buyers will be notified
                    by Shopee of the latest tracking information of their
                    packages.
                  </p>
                </div>
                <div className=" whitespace-nowrap font-semibold text-lg">
                  <input
                    dir="rtl"
                    type="number"
                    value={convertPrice(economy)}
                    onChange={(e) => {
                      setEconomy(convertNumber(e.target.value));
                    }}
                    className="max-w-[7rem] px-2 py-1"
                  />{" "}
                  VND / km
                </div>
              </div>
              <div className=" col-span-2 flex items-center justify-end">
                <SwitchInput
                  check={switchEconomy}
                  setCheck={setSwitchEconomy}
                />
              </div>
            </div>
            {/* STANDARD */}
            <div className="grid grid-cols-7 rounded-xl border-2 border-indigo-500 py-6 px-8">
              <div className=" col-span-5 flex items-center justify-between gap-8">
                <div className=" flex flex-col gap-4 items-start justify-between">
                  <h1 className="text-xl font-semibold">STANDARD</h1>
                  <p>
                    Enjoy seamless logistics services where the most suitable
                    shipping channels will be identified for your orders.
                  </p>
                </div>
                <div className=" whitespace-nowrap font-semibold text-lg">
                  <input
                    dir="rtl"
                    type="number"
                    value={convertPrice(standard)}
                    onChange={(e) => {
                      setstandard(convertNumber(e.target.value));
                    }}
                    className="max-w-[7rem] px-2 py-1"
                  />{" "}
                  VND / km
                </div>
              </div>
              <div className=" col-span-2 flex items-center justify-end">
                <SwitchInput
                  check={switchStandard}
                  setCheck={setSwitchStandard}
                />
              </div>
            </div>
            {/* express */}
            <div className="grid grid-cols-7 rounded-xl border-2 border-red-400 py-6 px-8">
              <div className=" col-span-5 flex items-center justify-between gap-8">
                <div className=" flex flex-col gap-4 items-start justify-between">
                  <h1 className="text-xl font-semibold">EXPRESS</h1>
                  <p>Shipping method with the fastest delivery speed.</p>
                </div>
                <div className=" whitespace-nowrap font-semibold text-lg">
                  <input
                    dir="rtl"
                    type="number"
                    value={convertPrice(express)}
                    onChange={(e) => {
                      setExpress(convertNumber(e.target.value));
                    }}
                    className="max-w-[7rem] px-2 py-1"
                  />{" "}
                  VND / km
                </div>
              </div>
              <div className=" col-span-2 flex items-center justify-end">
                <SwitchInput
                  check={switchExpress}
                  setCheck={setSwitchExpress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProfile;
