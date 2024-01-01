import React, { useEffect, useRef, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaImage, FaCheck } from "react-icons/fa";
import JoditEditor from "jodit-react";
import Switch from "react-custom-checkbox/switch";
import Checkbox from "react-custom-checkbox";
import PropTypes from "prop-types";

import { useLoaderData } from "react-router-dom";
import Page_404 from "../Page_404";
const SellerRegister = () => {
  const key = useLoaderData();

  if (key == 1) return <ShopInformation />;
  else if (key == 2) return <DeliveryInformation />;
  else return <Page_404 />;
};

const ShopInformation = () => {
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    setAdd(false);
  }, [address]);
  return (
    <div className=" bg-blue-50 px-32 py-4 flex items-center justify-center w-screen h-full">
      <div className=" bg-white w-full h-[calc(100%-4rem)] flex flex-col  items-center py-8 gap-12 relative">
        {add && <ProductAddress setAddress={setAddress} />}
        <div className="w-full">
          <div className=" flex items-center justify-center w-full px-32 gap-2">
            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-main-color" />
              {/* <p>Shop Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full " />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Delivery Information</p> */}
            </div>
          </div>
          <div className="flex items-start justify-center w-full px-32 mt-4">
            <p className=" -translate-x-full mr-2">Shop Information</p>

            <p className=" translate-x-full ml-2">Delivery Information</p>
          </div>
        </div>
        <div className="w-full flex-col flex gap-8 justify-center">
          <div className=" flex flex-col justify-end px-36 w-full gap-6 ">
            {/* shop name */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Shop Name
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  placeholder="Input"
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <p className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-between items-center mr-2 h-full">
                  <span className="  h-3/5 border border-gray-400"></span>
                  <span>0/100</span>
                </p>
              </div>
            </div>
            {/* product address */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Product Address
              </p>
              <div className=" relative w-3/4 flex gap-4 ">
                {address === "" ? (
                  <button
                    onClick={() => setAdd(true)}
                    className=" text-center w-fit px-6 text-white font-semibold bg-main-color py-2 rounded"
                  >
                    + Add
                  </button>
                ) : (
                  <div className="flex gap-4 justify-start w-full">
                    <input
                      type="text"
                      value={address}
                      className="py-2 px-4 w-full border border-gray-400 rounded-md"
                      readOnly
                    />
                    <button
                      onClick={() => {
                        setAdd(true);
                      }}
                      className="px-8 py-2 bg-main-color rounded-md text-white font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* phone */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Phone Number
              </p>
              <div className=" relative w-3/4">
                <input
                  type="number"
                  maxLength={10}
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
              </div>
            </div>
            {/* image */}
            <div className="flex items-start justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Image
              </p>
              <div className=" relative w-3/4">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  className="w-full rounded-md outline-none py-2 pl-4 pr-20 hidden"
                />
                {image === "" && (
                  <label
                    htmlFor="image"
                    className=" w-28 h-28 border border-dashed border-main-color flex flex-col items-center justify-center text-main-color font-semibold cursor-pointer"
                  >
                    <span>
                      <FaImage size={25} />
                    </span>
                    Image
                  </label>
                )}

                <img
                  src={image !== "" ? URL.createObjectURL(image) : null}
                  alt=""
                  className={
                    image !== "" ? "max-h-[8rem] aspect-video" : "hidden"
                  }
                  srcSet={image !== "" ? URL.createObjectURL(image) : null}
                />
              </div>
            </div>
          </div>
          <div className="px-36 grid grid-cols-12 gap-6">
            <button
              href="/delivery/register?key=2"
              className=" col-span-2 py-2 bg-white text-main-color font-semibold rounded-lg cursor-pointer text-center border border-gray-400"
            >
              Back
            </button>
            <div className=" col-span-8"></div>
            <a
              href="/seller/register?key=2"
              className=" col-span-2 py-2 bg-main-color text-white font-semibold rounded-lg cursor-pointer text-center"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveryInformation = () => {
  const [switchOneCheck, setSwitchOneCheck] = useState(false);
  const checkedTrackStyle = {
    opacity: 1,
    transition: "all 0.25s ease-in-out",
  };

  const checkedIndicatorStyle = {
    background: "#fff",
    transform: "translateX(30px)",
  };

  const checkedIconStyle = {
    opacity: 1,
    transition: "all 0.25s ease-in-out",
  };

  const indicatorStyle = {
    alignItems: "center",
    background: "#fff",
    borderRadius: 24,
    bottom: 2,
    display: "flex",
    height: 24,
    justifyContent: "center",
    left: 2,
    outline: "solid 2px transparent",
    position: "absolute",
    transition: "0.25s",
    width: 24,
  };

  const trackStyle = {
    background: switchOneCheck ? "#1A88F7" : "#9B9B9B",
    border: "1px solid #e6e6e6",
    borderRadius: 15,
    cursor: "pointer",
    display: "flex",
    height: 30,
    position: "relative",
    width: 60,
  };
  return (
    <div className=" bg-blue-50 px-32 py-12 flex items-center justify-center w-screen  h-[calc(screen-3.5rem)]">
      <div className=" bg-white w-full min-h-full flex flex-col justify-between items-center py-8 gap-8">
        <div className="w-full h-[5rem]">
          <div className=" flex items-center justify-center w-full px-32 gap-2">
            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Shop Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full " />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-main-color" />
              {/* <p>Delivery Information</p> */}
            </div>
          </div>
          <div className="flex items-start justify-center w-full px-32 mt-4">
            <p className=" -translate-x-full mr-2">Shop Information</p>

            <p className=" translate-x-full ml-2">Delivery Information</p>
          </div>
        </div>
        <div className="w-full flex-col flex gap-8 justify-end h-[calc(100%-5rem)]  ">
          <div className="px-36 flex flex-col gap-8">
            {/* express */}
            <div className="w-full py-4 px-8 border-y-2 border-gray-300 rounded-lg">
              <div className="flex items-center justify-between">
                <div className=" flex flex-col justify-between items-start gap-3">
                  <h1 className=" uppercase text-xl font-semibold">express</h1>
                  <p className=" opacity-80">
                    Shipping method with the fastest delivery speed.
                  </p>
                </div>
                <div className="h-fit flex items-center switch">
                  <Switch
                    checked={switchOneCheck}
                    onChange={setSwitchOneCheck}
                    indicatorStyle={indicatorStyle}
                    trackStyle={trackStyle}
                    checkedIconStyle={checkedIconStyle}
                    checkedIndicatorStyle={checkedIndicatorStyle}
                    checkedTrackStyle={checkedTrackStyle}
                  />
                </div>
              </div>
            </div>
            {/* STANDARD */}
            <div className="w-full py-4 px-8 border-y-2 border-gray-300 rounded-lg flex flex-col gap-4">
              <div className="flex items-center justify-between gap-36">
                <div className=" flex flex-col justify-between items-start gap-3">
                  <h1 className="uppercase text-xl font-semibold">STANDARD</h1>
                  <p className=" opacity-80">
                    Enjoy seamless logistics services where the most suitable
                    shipping channels will be identified for your orders.
                  </p>
                </div>
                <div className="h-fit flex items-center switch">
                  <Switch
                    checked={switchOneCheck}
                    onChange={setSwitchOneCheck}
                    indicatorStyle={indicatorStyle}
                    trackStyle={trackStyle}
                    checkedIconStyle={checkedIconStyle}
                    checkedIndicatorStyle={checkedIndicatorStyle}
                    checkedTrackStyle={checkedTrackStyle}
                  />
                </div>
              </div>
            </div>
            {/* ECONOMY */}
            <div className="w-full py-4 px-8 border-y-2 border-gray-300 rounded-lg flex flex-col gap-4">
              <div className="flex items-center justify-between gap-36">
                <div className=" flex flex-col justify-between items-start gap-3">
                  <h1 className="uppercase text-xl font-semibold">ECONOMY</h1>
                  <p className=" opacity-80">
                    Shopee supported shipping options, buyers will be notified
                    by Shopee of the latest tracking information of their
                    packages.
                  </p>
                </div>
                <div className="h-fit flex items-center switch">
                  <Switch
                    checked={switchOneCheck}
                    onChange={setSwitchOneCheck}
                    indicatorStyle={indicatorStyle}
                    trackStyle={trackStyle}
                    checkedIconStyle={checkedIconStyle}
                    checkedIndicatorStyle={checkedIndicatorStyle}
                    checkedTrackStyle={checkedTrackStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-36 grid grid-cols-12 gap-6">
            <div className=" col-span-10"></div>

            <a
              href="/seller"
              className=" col-span-2 py-2 bg-main-color text-white font-semibold rounded-lg text-center"
            >
              Done
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductAddress = ({ setAddress }) => {

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] px-20 py-12 flex z-[99]">
      <div className="w-full h-full bg-white rounded-md flex flex-col px-16 py-4">
        <div className="w-full flex justify-between border-b border-black pb-4">
          <h1 className="text-2xl font-semibold">Address</h1>
          <button className="py-2 px-8 rounded bg-main-color">
            + New address
          </button>
        </div>
        <div className="h-full overflow-y-scroll no-scrollbar mt-4 flex flex-col gap-0 py-4">
          <div className="flex justify-between items-center border-b border-gray-300 py-6 last:border-none">
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-center text-xl">
                <h3 className="pr-8 border-r-2 h-fit border-black">
                  Le Tuan Anh
                </h3>
                <span className="pl-8">0999999999</span>
                <span className="ml-12 text-base px-8 py-1 rounded border-2 border-red-600 text-red-600 font-semibold">
                  Defaut
                </span>
              </div>
              <p>
                Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh,
                Việt Nam
              </p>
            </div>
            <button
              onClick={() =>
                setAddress(
                  "Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
                )
              }
              className="border-2 border-gray-300 rounded-md px-12 py-2 font-semibold text-lg"
            >
              ADD
            </button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-6 last:border-none">
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-center text-xl">
                <h3 className="pr-8 border-r-2 h-fit border-black">
                  Le Tuan Anh
                </h3>
                <span className="pl-8">0999999999</span>
              </div>
              <p>
                Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh
              </p>
            </div>
            <button
              onClick={() =>
                setAddress(
                  "Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
                )
              }
              className="border-2 border-gray-300 rounded-md px-12 py-2 font-semibold text-lg"
            >
              ADD
            </button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-6 last:border-none">
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-center text-xl">
                <h3 className="pr-8 border-r-2 h-fit border-black">
                  Le Tuan Anh
                </h3>
                <span className="pl-8">0999999999</span>
              </div>
              <p>
                Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh,
                Việt Nam
              </p>
            </div>
            <button
              onClick={() =>
                setAddress(
                  "Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
                )
              }
              className="border-2 border-gray-300 rounded-md px-12 py-2 font-semibold text-lg"
            >
              ADD
            </button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 py-6 last:border-none">
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-center text-xl">
                <h3 className="pr-8 border-r-2 h-fit border-black">
                  Le Tuan Anh
                </h3>
                <span className="pl-8">0999999999</span>
              </div>
              <p>
                Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh,
                Việt Nam
              </p>
            </div>
            <button
              onClick={() =>
                setAddress(
                  "Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
                )
              }
              className="border-2 border-gray-300 rounded-md px-12 py-2 font-semibold text-lg"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductAddress.prototype = {
  setAddress: PropTypes.func.isRequired,
};

export default SellerRegister;
