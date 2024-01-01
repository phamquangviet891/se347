import React, { useRef, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { FaImage, FaCheck } from "react-icons/fa";
import JoditEditor from "jodit-react";
import Switch from "react-custom-checkbox/switch";
import Checkbox from "react-custom-checkbox";

import { useLoaderData } from "react-router-dom";
import Page_404 from "../Page_404";
const DeliveryRegister = () => {
  const key = useLoaderData();

  if (key == 1) return <UserInformation />;
  else if (key == 2) return <CompanyInformation />;
  else if (key == 3) return <DeliveryService />;
  else return <Page_404 />;
};

const UserInformation = () => {
  return (
    <div className=" bg-blue-50 px-32 py-4 flex items-center justify-center w-screen h-full">
      <div className=" bg-white w-full h-[calc(100%-4rem)] flex flex-col  items-center py-8 gap-12">
        <div className="w-full">
          <div className=" flex items-start justify-between w-full px-32">
            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-main-color" />
              {/* <p>User Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Company Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Delivery Service</p> */}
            </div>
          </div>
          <div className="flex items-start justify-between w-full px-32 mt-4">
            <p className=" -translate-x-1/2 ml-2">User Information</p>
            <p>Company Information</p>
            <p className=" translate-x-1/2 mr-2">Delivery Service</p>
          </div>
        </div>
        <div className="w-full flex-col flex gap-8 justify-center">
          <div className=" flex flex-col justify-end px-36 w-full gap-6 ">
            {/* user name */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>User Name
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <p className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-between items-center mr-2 h-full">
                  <span className="  h-3/5 border border-gray-400"></span>
                  <span>0/100</span>
                </p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Email
              </p>
              <div className=" relative w-3/4">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
              </div>
            </div>
            {/* phone */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>PhoneNumber
              </p>
              <div className=" relative w-3/4">
                <input
                  type="number"
                  name=""
                  maxLength={10}
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
              </div>
            </div>
            {/* password */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Password
              </p>
              <div className=" relative w-3/4">
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <div className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-end items-center mr-2 h-full">
                  <BiSolidHide size={25} className=" cursor-pointer" />
                </div>
              </div>
            </div>
            {/* confirm password */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Confirm Password
              </p>
              <div className=" relative w-3/4">
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <div className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-end items-center mr-2 h-full">
                  <BiSolidHide size={25} className=" cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-36 grid grid-cols-12 gap-6">
            <div className=" col-span-6"></div>
            <button className=" col-span-3 py-2 border text-main-color border-gray-300 rounded-lg font-semibold">
              Save
            </button>
            <a
              href="/delivery/register?key=2"
              className=" col-span-3 py-2 bg-main-color text-white font-semibold rounded-lg cursor-pointer text-center"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyInformation = () => {
  const editor = useRef(null);
  const [description, setDescription] = useState("");
  const [imageCompany, setImageCompany] = useState("");
  const [imageRepresentive, setImageRepresentive] = useState("");

  return (
    <div className=" bg-blue-50 px-32 py-12 flex items-center justify-center w-screen h-[calc(screen-3.5rem)]">
      <div className=" bg-white w-full h-fit flex flex-col justify-between items-center py-8 gap-8">
        <div className="w-full h-[5rem]">
          <div className=" flex items-start justify-between w-full px-32">
            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>User Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-main-color" />
              {/* <p>Company Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Delivery Service</p> */}
            </div>
          </div>
          <div className="flex items-start justify-between w-full px-32 mt-4">
            <p className=" -translate-x-1/2 ml-2">User Information</p>
            <p>Company Information</p>
            <p className=" translate-x-1/2 mr-2">Delivery Service</p>
          </div>
        </div>
        <div className="w-full flex-col flex gap-8 justify-end h-[calc(100%-5rem)]  ">
          {/* about company */}
          <div className=" flex flex-col justify-end px-36 w-full gap-6 ">
            <p className=" float-left text-xl text-main-color font-semibold">
              About Company
            </p>
            {/* full name */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Full Name
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <p className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-between items-center mr-2 h-full">
                  <span className="  h-3/5 border border-gray-400"></span>
                  <span>0/100</span>
                </p>
              </div>
            </div>
            {/* company name */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Company Name
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <p className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-between items-center mr-2 h-full">
                  <span className="  h-3/5 border border-gray-400"></span>
                  <span>0/100</span>
                </p>
              </div>
            </div>
            {/* address */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Address
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  name=""
                  id=""
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
                    setImageCompany(e.target.files[0]);
                  }}
                  className="w-full rounded-md outline-none py-2 pl-4 pr-20 hidden"
                />
                {imageCompany === "" && (
                  <label
                    htmlFor="image"
                    className=" w-28 h-28 border border-dashed border-main-color flex flex-col items-center justify-center text-main-color font-semibold cursor-pointer"
                  >
                    Image
                  </label>
                )}

                <img
                  src={
                    imageCompany !== ""
                      ? URL.createObjectURL(imageCompany)
                      : null
                  }
                  alt=""
                  className={
                    imageCompany !== "" ? "w-full aspect-video" : "hidden"
                  }
                  srcSet={
                    imageCompany !== ""
                      ? URL.createObjectURL(imageCompany)
                      : null
                  }
                />
              </div>
            </div>
            {/* payment acc */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Payment Account
              </p>

              <div className=" relative w-3/4">
                <input
                  type="password"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <div className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-end items-center mr-2 h-full">
                  <BiSolidHide size={25} className=" cursor-pointer" />
                </div>
              </div>
            </div>
            {/* description */}
            <div className="flex items-start justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Description
              </p>
              <div className=" relative w-3/4">
                <div className="w-full flex flex-col ">
                  <JoditEditor
                    ref={editor}
                    value={description}
                    tabIndex={1}
                    onChange={(newContent) => setDescription(newContent)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* about representive */}
          <div className=" flex flex-col justify-end px-36 w-full gap-6 ">
            <p className=" float-left text-xl text-main-color font-semibold">
              About Representive
            </p>
            {/* full name */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Full Name
              </p>
              <div className=" relative w-3/4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
                <p className=" text-gray-400 absolute top-1/2 right-0 -translate-y-1/2 w-16 flex justify-between items-center mr-2 h-full">
                  <span className="  h-3/5 border border-gray-400"></span>
                  <span>0/100</span>
                </p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-center justify-end gap-4 w-full">
              <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                <span className=" text-red-500">*</span>Email
              </p>
              <div className=" relative w-3/4">
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-400 py-2 pl-4 pr-20"
                />
              </div>
            </div>
            {/* phonenumber */}
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
                    setImageRepresentive(e.target.files[0]);
                  }}
                  className="w-full rounded-md outline-none py-2 pl-4 pr-20 hidden"
                />
                {imageRepresentive === "" && (
                  <label
                    htmlFor="image"
                    className=" w-28 h-28 border border-dashed border-main-color flex flex-col items-center justify-center text-main-color font-semibold cursor-pointer"
                  >
                    Image
                  </label>
                )}

                <img
                  src={
                    imageRepresentive !== ""
                      ? URL.createObjectURL(imageRepresentive)
                      : null
                  }
                  alt=""
                  className={
                    imageRepresentive !== "" ? "w-full aspect-video" : "hidden"
                  }
                  srcSet={
                    imageRepresentive !== ""
                      ? URL.createObjectURL(imageRepresentive)
                      : null
                  }
                />
              </div>
            </div>
          </div>
          <div className="px-36 grid grid-cols-12 gap-6">
            <div className=" col-span-6"></div>
            <button className=" col-span-3 py-2 border text-main-color border-gray-300 rounded-lg font-semibold">
              Save
            </button>
            <a
              href="/delivery/register?key=3"
              className=" col-span-3 py-2 bg-main-color text-white font-semibold rounded-lg cursor-pointer text-center"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveryService = () => {
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
          <div className=" flex items-start justify-between w-full px-32">
            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>User Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-gray-300" />
              {/* <p>Company Information</p> */}
            </div>

            <div className=" w-96 border-2 border-gray-300 rounded-full mt-2" />

            <div className=" flex flex-col items-center justify-center gap-4">
              <div className=" w-4 h-4 rounded-full bg-main-color" />
              {/* <p>Delivery Service</p> */}
            </div>
          </div>
          <div className="flex items-start justify-between w-full px-32 mt-4">
            <p className=" -translate-x-1/2 ml-2">User Information</p>
            <p>Company Information</p>
            <p className=" translate-x-1/2 mr-2">Delivery Service</p>
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
              <div className="flex items-center justify-between gap-4 w-full">
                <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <span className=" text-red-500">*</span>Price
                </p>
                <div className=" relative w-full">
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
              <div className="flex items-center justify-between gap-4 w-full">
                <p className="flex items-center justify-center gap-2 whitespace-nowrap">
                  <span className=" text-red-500">*</span>Price
                </p>
                <div className=" relative w-full">
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
            </div>
            <div className=" px-8">
              <Checkbox
                icon={<FaCheck color="#9B9B9B" size={14} />}
                name="my-input"
                checked={true}
                onChange={(value, event) => {
                  let p = {
                    isTrue: value,
                  };
                }}
                size={25}
                borderColor="#9B9B9B"
                style={{ cursor: "pointer" }}
                labelStyle={{ marginLeft: 15, userSelect: "none" }}
                label="I agree to Privacy Policy and Term of Service "
              />
            </div>
          </div>

          <div className="px-36 grid grid-cols-12 gap-6">
            <div className=" col-span-6"></div>
            <button className=" col-span-3 py-2 border text-main-color border-gray-300 rounded-lg font-semibold">
              Save
            </button>
            <a
              href="/delivery"
              className=" col-span-3 py-2 bg-main-color text-white font-semibold rounded-lg text-center"
            >
              Done
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryRegister;
