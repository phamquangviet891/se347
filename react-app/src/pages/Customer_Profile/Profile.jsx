import React, { useEffect, useRef, useState, useCallback } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BiCart, BiChat, BiLogOut, BiSearch, BiUser } from "react-icons/bi";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { getUserData, updateUserProfile } from "../../services/UserServices";
import {
  getAddressByUserId,
  setDefaultAddress,
  createNewAddress,
} from "../../services/AddressServices";
import AppTextInput from "../../components/AppTextInput";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { cancelOrderApi, getOrdersBySatus } from "../../services/OrderServices";
import { useNavigate } from "react-router-dom";
import {
  getVouchersByShop,
  listVoucherByShop,
} from "../../services/VoucherServices";
import VoucherScreen from "./VoucherScreen";
import ProfileScreen from "./ProfileScreen";
import AddressScreen from "./AddressScreen";
import OrdersScreen from "./OrderScreen";
export default function Profile() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [image, setImage] = useState(""); // Sample image URL
  const [type, setType] = useState("Profile");
  //user state
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //get user data
    const getUser = async () => {
      const data = await getUserData();
      console.log(">>> check user data:", data);
      if (data) {
        setUserData(data);
      }
    };

    getUser();
  }, []);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#EEF1FC" }}>
      <div className="flex flex-col items-center w-1/5 mt-5">
        <div className="text-xl font-bold text-blue-700 flex items-center mb-4">
          <img
            className="inline-block h-16 w-16 rounded-full ring-4 ring-blue-200 mr-4"
            src={userData.avatar || "https://via.placeholder.com/150"}
            alt="Profile Image"
          />
          <span className="text-lg">{userData.fullName}</span>
        </div>
        <div className="grid gap-4">
          <button
            onClick={toggleProfile}
            className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <BiUser className="mr-3" /> View my profile
          </button>
          {showProfile && (
            <div>
              <button
                onClick={() => setType("Profile")}
                className="flex mb-4 items-center justify-center outline-dashed text-black py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <AiOutlineProfile className="mr-3" /> Profile
              </button>
              <button
                onClick={() => setType("Address")}
                className="flex items-center justify-center outline-dashed text-black py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <MdOutlineLocationOn className="mr-3" /> Address List
              </button>
            </div>
          )}
          <button
            onClick={() => setType("Ticket")}
            className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <BsTicketPerforated className="mr-3" /> Warehouse voucher
          </button>
          <button
            onClick={() => setType("Orders")}
            className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <BiCart className="mr-3" /> Orders
          </button>
          <button
            onClick={() => {
              localStorage.setItem("id-user", "");
              localStorage.setItem("userName", "");
              window.location.reload();
            }}
            className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <BiLogOut className="mr-3" /> Logout
          </button>
        </div>
      </div>
      {type === "Profile" && <ProfileScreen img={image} />}
      {type === "Address" && <AddressScreen />}
      {type === "Ticket" && <VoucherScreen />}
      {type === "Orders" && <OrdersScreen />}
    </div>
  );
}
