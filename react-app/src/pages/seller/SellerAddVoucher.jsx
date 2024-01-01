import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import dayjs from "dayjs";

const SellerAddVoucher = () => {
  const [title, setTitle] = useState("");
  const [amountDiscount, setAmountDiscount] = useState(0);
  const [minimumOrderPrice, setMinimumOrderPrice] = useState(0);
  const [publicDate, setPublicDate] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProductVoucher, setIsProductVoucher] = useState(false);

  return (
    <div className="flex flex-col p-4 gap-5 h-full">
      <Card className="flex flex-col gap-2 p-4 h-fit">
        <span className="text-first-text">
          Home / Voucher / <span className="text-black">Add New Voucher</span>
        </span>
        <div className="text-main-color font-medium text-2xl">
          Add New Voucher
        </div>
      </Card>

      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="flex flex-col p-4 gap-2">
          <div className="text-xl text-main-color font-medium">
            Voucher Information
          </div>
          <form className="flex flex-col gap-4">
            {/* Voucher name */}
            <div className="flex gap-4 items-top">
              <div className="flex gap-1 text-first-text w-[200px] h-[56px] items-center justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Voucher Name</span>
              </div>
              <div>
                <TextField
                  type="text"
                  id="voucher-name"
                  value={title}
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[570px] p-2.5"
                  placeholder="Input"
                  helperText="Not visible to buyers"
                />
              </div>
            </div>

            {/* Voucher type */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] h-[56px] items-center justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Voucher Type</span>
              </div>
              <div className="flex gap-8 items-center">
                <div className="flex items-center">
                  <input
                    id="shop-voucher-radio"
                    type="radio"
                    value="shop-voucher-radio"
                    name="voucher-type"
                    defaultChecked={!isProductVoucher}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={() => setIsProductVoucher(false)}
                  />
                  <label
                    htmlFor="shop-voucher-radio"
                    className="ms-2 text-gray-900"
                  >
                    Shop Voucher
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="product-voucher-radio"
                    type="radio"
                    value="product-voucher-radio"
                    name="voucher-type"
                    defaultChecked={isProductVoucher}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={() => setIsProductVoucher(true)}
                  />
                  <label
                    htmlFor="product-voucher-radio"
                    className="ms-2 text-gray-900"
                  >
                    Product Voucher
                  </label>
                </div>
              </div>
            </div>

            {/* Voucher discount */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] h-[56px] items-center justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Discount</span>
              </div>

              <div>
                <FormControl>
                  <InputLabel>Amount</InputLabel>
                  <Select
                    className="w-[100px]"
                    id="voucher-discount-type"
                    value=""
                    label="Amount"
                  >
                    <MenuItem value="amount">Amount</MenuItem>
                    <MenuItem value="percentage">Percentage</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  type="text"
                  id="voucher-name"
                  value={amountDiscount}
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[570px] p-2.5"
                  placeholder="Input"
                />
              </div>
            </div>

            {/* Minimum Order Price */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] justify-end">
                <span>Minimum Order Price</span>
              </div>

              <div>
                <TextField
                  type="text"
                  id="voucher-name"
                  value={minimumOrderPrice}
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5"
                  placeholder="Input"
                />
              </div>
            </div>

            {/* Public date */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Public Date</span>
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD/MM/YYYY"
                  defaultValue={dayjs(publicDate)}
                />
              </LocalizationProvider>
            </div>

            {/* Expiration date */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Expiration Date</span>
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD/MM/YYYY"
                  defaultValue={dayjs(expirationDate)}
                />
              </LocalizationProvider>
            </div>

            {/* Note */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] justify-end">
                <span>Note</span>
              </div>

              <div>
                <TextField
                  type="text"
                  id="voucher-name"
                  value={note}
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[570px] p-2.5"
                  placeholder="Input"
                />
              </div>
            </div>

            {/* Voucher image */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-first-text w-[200px] justify-end">
                <span className="text-[#F00] font-bold">*</span>
                <span>Voucher Name</span>
              </div>

              <div className="flex items-center justify-center w-32">
                {selectedImage && (
                  <div className="flex gap-4 items-center">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Uploaded"
                      className="w-full h-32 aspect-square object-cover rounded-md"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 mt-3"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {!selectedImage && (
                  <>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#6EB6FF] border-dashed cursor-pointer  hover:bg-blue-50 "
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-[#1A88F7] "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-base text-[#1A88F7] ">
                          Add Image
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          setSelectedImage(e.target.files[0]);
                        }}
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Applicable products - only shown when Product Voucher is selected */}
            {isProductVoucher && (
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 text-first-text w-[200px] justify-end">
                  <span className="text-[#F00] font-bold">*</span>
                  <span>Applicable Products</span>
                </div>

                <div className="flex items-center justify-center p-2 w-40 border-2 border-[#6EB6FF] border-dashed cursor-pointer  hover:bg-blue-50">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41406 2.96875H10.5859C10.6901 2.96875 10.7422 3.02083 10.7422 3.125V16.875C10.7422 16.9792 10.6901 17.0312 10.5859 17.0312H9.41406C9.3099 17.0312 9.25781 16.9792 9.25781 16.875V3.125C9.25781 3.02083 9.3099 2.96875 9.41406 2.96875Z"
                      fill="#1A88F7"
                    />
                    <path
                      d="M3.4375 9.25781H16.5625C16.6667 9.25781 16.7188 9.3099 16.7188 9.41406V10.5859C16.7188 10.6901 16.6667 10.7422 16.5625 10.7422H3.4375C3.33333 10.7422 3.28125 10.6901 3.28125 10.5859V9.41406C3.28125 9.3099 3.33333 9.25781 3.4375 9.25781Z"
                      fill="#1A88F7"
                    />
                  </svg>
                  <div className="text-main-color">Add Products</div>
                </div>
              </div>
            )}

            {/* Next and Cancel button */}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                className="w-[120px] text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Cancel
              </button>

              <button
                type="button"
                className="w-[120px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Next
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SellerAddVoucher;
