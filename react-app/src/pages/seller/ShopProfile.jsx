import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import shopseller from "../../assets/pictures/shopseller.jpg";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      // sx={{
      //   width: "100%",
      // }}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>
        <p className="text-[#1A88F7]">Shop Infomation</p>
      </DialogTitle>
      <Box mt="10px" className="flex flex-row">
        <Box
          className="bg-white"
          sx={{
            width: "100%",
            typography: "body1",
            display: "inline-block",
          }}
        >
          <Box m="10px">
            <div class="w-full  px-3">
              <label
                class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/12 text-right"
                for="name"
              >
                <span className="text-red-400">*</span> Shop Name
              </label>
              <input
                class="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Input"
              />
            </div>
            <div class="w-full  px-3 flex flex-row	mt-5">
              <label
                class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                for="address"
              >
                <span className="text-red-400">*</span> Address
              </label>
              <div className="grid w-5/6 grid-cols-2 gap-4 bg-[#F2F2F2] pr-5 pb-7">
                <div>
                  <label
                    class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right mt-10"
                    for="province"
                  >
                    <span className="text-red-400">*</span> Province/City
                  </label>
                  <div className="inline-block relative w-4/6">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="" disabled selected>
                        Choose
                      </option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right mt-10"
                    for="district"
                  >
                    <span className="text-red-400">*</span> District
                  </label>
                  <div className="inline-block relative w-4/6">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="" disabled selected>
                        Choose
                      </option>
                      <option value="Quận 1">Quận 1</option>
                      <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                      <option value="Quận 2">Quận 2</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right mt-10"
                    for="ward"
                  >
                    <span className="text-red-400">*</span> Ward
                  </label>
                  <div className="inline-block relative w-4/6">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="" disabled selected>
                        Choose
                      </option>
                      <option value="Quận 1">Quận 1</option>
                      <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                      <option value="Quận 2">Quận 2</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right mt-10"
                    for="business"
                  >
                    <span className="text-red-400">*</span> Street
                  </label>
                  <div className="inline-block relative w-4/6">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="" disabled selected>
                        Choose
                      </option>
                      <option value="Hẻm 101 Hồ Văn Huê">
                        Hẻm 101 Hồ Văn Huê
                      </option>
                      <option value="Hẻm 26 Thích Bửu Đăng">
                        Hẻm 26 Thích Bửu Đăng
                      </option>
                      <option value="Hẻm 47/52 Bùi Đình Túy">
                        Hẻm 47/52 Bùi Đình Túy
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-3 ">
              <label
                class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                for="business"
              >
                <span className="text-red-400">*</span> Business Field
              </label>
              <div className="inline-block relative w-2/6">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="Food And Drink">Food And Drink</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Fast Food">Fast Food</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full px-3 flex flex-row mt-10">
              <label
                class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                for="description"
              >
                <span className="text-red-400">*</span> Description
              </label>
              <textarea
                id="message"
                rows="10"
                class="block p-2.5 w-5/6 text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <div class="w-full px-3 flex flex-row mt-10">
              <label
                class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                for="image"
              >
                <span className="text-red-400">*</span> Product Images
              </label>
              <div class="flex items-center justify-center w-32">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-32 border-2 border-[#1A88F7] border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-[#1A88F7] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-[#1A88F7] ">Add Images</p>
                    <p class="text-xs text-[#1A88F7]">(0/9)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>

            <div class="w-full px-3 flex justify-end my-5">
              <button
                class="bg-transparent text-[#808089] mr-5  py-2 px-10 border border-[#808089]"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button class="bg-[#1A88F7] text-white   py-2 px-10 border border-[#1A88F7] ">
                Add
              </button>
            </div>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const ShopProfile = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="p-4 h-full flex flex-col">
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <div className=" h-full flex flex-col">
        <div>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="bg-white shadow-md p-1.5"
          >
            <Box m="10px">
              <Typography
                variant="subtitle2"
                color="#808089"
                sx={{ mb: "5px" }}
              >
                Shop / <span style={{ color: "#000000" }}>Shop Profile</span>
              </Typography>
              <Typography variant="h6" color="#1A88F7" fontWeight="bold">
                Shop Profile
              </Typography>
            </Box>
          </Box>
        </div>
        <div>
          <Box>
            <Box mt="10px" className="flex flex-row">
              <Box
                className="inputs bg-white shadow-md"
                sx={{
                  width: "100%",
                  typography: "body1",
                  display: "inline-block",
                }}
              >
                <Box m="10px">
                  <div class="w-full px-3">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right"
                      for="name"
                    >
                      Shop Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div class="w-full  px-3">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="address"
                    >
                      Address
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div class="w-full px-3 ">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="business"
                    >
                      Business Field
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="business"
                      type="text"
                      placeholder="Input"
                    />
                  </div>

                  <div class="w-full px-3 flex flex-row mt-10">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="message"
                      rows="10"
                      class="block p-2.5 w-5/6 text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div class="w-full px-3 flex justify-end my-5">
                    <button class="bg-[#1A88F7] text-white   py-2 px-10 border border-[#1A88F7] ">
                      Save
                    </button>
                  </div>
                </Box>
              </Box>
              <div className="profile display-inline-block pt-12 bg-white px-12">
                <div className="flex flex-col	 justify-center	items-center	">
                  <img src={shopseller} className="w-32 h-32" />
                  <p className="my-6 font-bold	">Family Shop</p>
                  <button
                    class="bg-transparent text-[#1A88F7]   py-2 px-4 border border-[#1A88F7] "
                    onClick={handleClickOpen}
                  >
                    Add New Shop
                  </button>
                </div>
              </div>
            </Box>
          </Box>
          <Box>
            <div className="w-full bg-white shadow-lg my-4 grid grid-cols-8 pl-14 py-4">
              <div className="col-span-1">
                <img src={shopseller} alt="shop seller" className="w-[70px]" />
              </div>
              <div className="col-span-5 font-semibold text-xl flex items-center">
                Family Shop 1
              </div>
              <div className="col-span-2 flex items-center">
                <button className="bg-blue-500 text-white px-8 py-2 ">
                  Switch shop
                </button>
              </div>
            </div>
          </Box>
          <Box>
            <div className="w-full bg-white shadow-lg my-4 grid grid-cols-8 pl-14 py-4">
              <div className="col-span-1">
                <img src={shopseller} alt="shop seller" className="w-[70px]" />
              </div>
              <div className="col-span-5 font-semibold text-xl flex items-center">
                Family Shop 1
              </div>
              <div className="col-span-2 flex items-center">
                <button className="bg-blue-500 text-white px-8 py-2 ">
                  Switch shop
                </button>
              </div>
            </div>
          </Box>
          <Box>
            <div className="w-full bg-white shadow-lg my-4 grid grid-cols-8 pl-14 py-4">
              <div className="col-span-1">
                <img src={shopseller} alt="shop seller" className="w-[70px]" />
              </div>
              <div className="col-span-5 font-semibold text-xl flex items-center">
                Family Shop 1
              </div>
              <div className="col-span-2 flex items-center">
                <button className="bg-blue-500 text-white px-8 py-2 ">
                  Switch shop
                </button>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
