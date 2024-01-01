import React, { useEffect, useRef, useState, useCallback } from "react";
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
import Modal from "@mui/material/Modal";
const AddressScreen = () => {
  //address state
  const [addressName, setAddressName] = useState("");
  const [addressPhone, setAddressPhone] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressDistrict, setAddressDistrict] = useState("");
  const [addressWard, setAddressWard] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState([]);
  const [openAddressForm, setOpenAddressForm] = useState(false);
  useEffect(() => {
    //get address data
    const getAddress = async () => {
      const data = await getAddressByUserId();
      console.log(">>> check address data:", data);
      if (data) {
        setAddress(data);
      }
    };
    getAddress();
  }, []);
  const handleSetDefaultAddress = async (id) => {
    await setDefaultAddress(id);
    const res = await getAddressByUserId();
    setAddress(res);
  };
  const handleCreateAddress = async () => {
    const addressData = {
      addressName,
      addressPhone,
      addressCity,
      addressDistrict,
      addressWard,
      addressDetail,
    };
    await createNewAddress(addressData);

    const data = await getAddressByUserId();
    console.log(">>> check address data:", data);
    if (data) {
      setAddress(data);
      setAddressCity("");
      setAddressDetail("");
      setAddressDistrict("");
      setAddressName("");
      setAddressPhone("");
      setAddressWard("");
      setOpenAddressForm(false);
    }
  };
  const AddressForm = () => {
    return (
      <div className="w-1/2 py-10 px-5 bg-white rounded-xl">
        <h1 className="text-4xl">New Address</h1>
        <div className="flex flex-row items-center mt-5">
          <AppTextInput
            id="name"
            name="name"
            className=" border rounded-md p-2  my-3 border-black w-3/4"
            placeholder="Fill your name *"
            setTextValue={setAddressName}
            textValue={addressName}
          />
          <div style={{ width: 20 }} />

          <AppTextInput
            id="phoneNumber"
            name="phoneNumber"
            className="w-1/4 border rounded-md my-3 p-2 border-black"
            placeholder="Phone number *"
            setTextValue={setAddressPhone}
            textValue={addressPhone}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <AppTextInput
            id="address"
            name="address"
            className=" border rounded-md p-2 my-3 border-black w-full"
            placeholder="City, Province * "
            setTextValue={setAddressCity}
            textValue={addressCity}
          />
          <AppTextInput
            id="address"
            name="address"
            className=" border rounded-md p-2 my-3 border-black w-full"
            placeholder="City, Province * "
            setTextValue={setAddressDistrict}
            textValue={addressDistrict}
          />
          <AppTextInput
            id="address"
            name="address"
            className=" border rounded-md p-2 my-3 border-black w-full"
            placeholder="City, Province * "
            setTextValue={setAddressWard}
            textValue={addressWard}
          />
        </div>

        <AppTextInput
          id="detailAddress"
          name="detailAddress"
          className=" border rounded-md p-2 my-3 border-black w-full h-32"
          placeholder="Detail address "
          setTextValue={setAddressDetail}
          textValue={addressDetail}
        />
        <div className="flex flex-row justify-between items-center">
          <button
            onClick={() => setOpenAddressForm(false)}
            className="flex mb-4 items-center justify-center outline-dashed text-black py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenAddressForm(false);
              handleCreateAddress();
            }}
            className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Complete
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="w-4/5 bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-black font-medium text-3xl p-5">Address</h1>
        <button
          onClick={() => setOpenAddressForm(!openAddressForm)}
          className=" font-semibold  bg-blue-500 text-white py-3 px-12 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          + Add New Address
        </button>
      </div>
      <div className="w-ful bg-gray-300" style={{ height: 0.1 }} />
      <div className="flex-col flex p-5">
        {address &&
          address.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-row my-4 flex justify-between items-start w-full"
              >
                <div>
                  <div className="flex-row flex items-center">
                    <h1 className="text-xl ">{item.ho_va_ten}</h1>
                    <div
                      className="mx-11"
                      style={{
                        width: 1,
                        height: 30,
                        backgroundColor: "black",
                      }}
                    />
                    <h1 className="text-xl">{item.so_dien_thoai}</h1>
                    {item.dia_chi_mac_dinh === true ? (
                      <div className="border-2 rounded-md px-5 py-1 ml-6 border-red-600">
                        <h1 className="text-sm text-red-600">Default</h1>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <h1 className="my-2">{item.dia_chi_full}</h1>
                </div>
                <button
                  onClick={() => {
                    handleSetDefaultAddress(item.address_ID);
                  }}
                  className="border-2 rounded-lg  border-black py-4 px-1"
                >
                  Set to default
                </button>
              </div>
            );
          })}
      </div>
      <Modal
        open={openAddressForm}
        onClose={() => setOpenAddressForm(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-screen">
          <AddressForm />
        </div>
      </Modal>
    </div>
  );
};
export default AddressScreen;
