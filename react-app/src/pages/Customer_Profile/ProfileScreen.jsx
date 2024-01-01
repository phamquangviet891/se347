import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BiCart, BiChat, BiSearch, BiUser } from "react-icons/bi";
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
import {
  getVouchersByShop,
  listVoucherByShop,
} from "../../services/VoucherServices";
const ProfileScreen = ({ img }) => {
  const [image, setImage] = useState(img); // Sample image URL
  const [imgeFile, setImageFile] = useState();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userData, setUserData] = useState({});

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImageFile(selectedImage);
    console.log(">>> check image:", selectedImage);

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };
  const handleUpdateUser = async () => {
    const data = { fullName, userName, email, phoneNumber };
    //console.log(imgeFile)
    const res = await updateUserProfile(data, imgeFile);
    // console.log(">>> check return api: ", res);
  };
  const fileInputRef = useRef(null);
  useLayoutEffect(() => {
    const getUser = async () => {
      const data = await getUserData();
      console.log(">>> check user data:", data);
      if (data) {
        setUserData(data);
        setFullName(data.fullName);
        setUserName(data.userName);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setImage(data.avatar);
      }
    };
    getUser();
  }, []);
  return (
    <div className="w-4/5 h-screen bg-white p-4">
      <h1 className="text-black font-medium text-3xl p-5">User Profile</h1>
      <div className="w-ful bg-gray-300" style={{ height: 0.1 }} />
      <div className="flex-row flex">
        <div className="flex-col justify-center items-center p-4 border-r-2 my-10 w-1/4 flex">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt="Uploaded"
            className="w-48 h-48 mb-4 object-cover rounded-full"
          />
          <button
            onClick={() => {
              fileInputRef.current.click();
              console.log("input click");
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="mb-4 cursor-pointer"
              style={{ display: "none" }}
            />
            <label htmlFor="upload" className=" cursor-pointer">
              Add New Photo
            </label>
          </button>
        </div>
        <div className="p-4 w-full flex-col  justify-center flex mx-15 items-center">
          <div className="flex w-3/4 items-center mb-4">
            <label className="w-1/6 text-gray-700">User name</label>
            <AppTextInput
              id={"username"}
              name={"username"}
              className={"w-full border rounded-md p-2"}
              placeholder={"Enter your user name"}
              setTextValue={setUserName}
              textValue={userName}
            />
          </div>
          <div className="flex w-3/4  items-center mb-4">
            <label htmlFor="name" className="w-1/6 text-gray-700">
              Name
            </label>

            <AppTextInput
              id={"name"}
              name={"name"}
              className={"w-full border rounded-md p-2"}
              placeholder={"Enter your name"}
              setTextValue={setFullName}
              textValue={fullName}
            />
          </div>
          <div className="flex w-3/4  items-center mb-4">
            <label htmlFor="email" className="w-1/6 text-gray-700">
              Email
            </label>

            <AppTextInput
              id={"email"}
              name={"email"}
              className={"w-full border rounded-md p-2"}
              placeholder={"Enter your user email"}
              setTextValue={setEmail}
              textValue={email}
            />
          </div>
          <div className="flex w-3/4 items-center mb-4">
            <label htmlFor="phoneNumber" className="w-1/6 text-gray-700">
              Phone number
            </label>
            <AppTextInput
              id={"phoneNumber"}
              name={"phoneNumber"}
              className={"w-full border rounded-md p-2"}
              placeholder={"Enter your user phone"}
              setTextValue={setPhoneNumber}
              textValue={phoneNumber}
            />
          </div>
          <button
            onClick={() => handleUpdateUser()}
            className="self-end items-center flex  font-semibold  bg-blue-500 text-white py-3 px-12 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
