import { Box, ListSubheader, Typography } from "@mui/material";
import React from "react";

import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import { TextField, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AiOutlinePicture } from "react-icons/ai";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import men_clothes from "../../assets/categories/men_clothes_1.png";
import object1 from "../../assets/pictures/object-1.png";

import { useState } from "react";
import {
  CheckCircleOutlineSharp,
  HighlightOff,
  HighlightOffOutlined,
} from "@mui/icons-material";
const steps = [
  {
    label: "Basic Information",
    description: ``,
  },
  {
    label: "Specification",
    description: "",
  },
  {
    label: "Sale Information",
    description: ``,
  },
  {
    label: "Shipping",
    description: ``,
  },
];
const shipExpress = [
  {
    name: "GrabExpress",
    price: 23600,
    active: true,
  },
  {
    name: "AhaMove",
    price: 0,
    active: false,
  },
];
const shipStandard1 = [
  {
    name: "J&T Express",
    price: 0,
    active: false,
  },
  {
    name: "Viettel Post",
    price: 0,
    active: false,
  },
  {
    name: "VNPost Nhanh",
    price: 0,
    active: false,
  },
  {
    name: "J&T Express",
    price: 0,
    active: false,
  },
];
const shipStandard2 = [
  {
    name: "VNPost Tiết Kiệm",
    price: 0,
    active: false,
  },
  {
    name: "Giao Hàng Nhanh",
    price: 0,
    active: false,
  },
  {
    name: "Ninja Van",
    price: 0,
    active: false,
  },
];

const ProductDetail = () => {
  const productById = {
    id: 1,
    name: "T-shirst",
    category: "Men clothes",
    image: men_clothes,
    video: object1,
    description: `Fabric/material: Cotton/Cotton
    Composition content: 100%
    Collar type: round neck
    Type: Regular
    Sleeve length: short sleeve
    Clothing style details: solid color
    Style: Casual
    Applicable age: Youth (18-25 years old)
    
    [Attention gift]
    Please pay attention to our store, and enjoy a variety of discounts. You can also receive the follow-up gift coupon, which will be valid within 7 days after receipt. Don't miss it!
    [Tips]
    If pre-sale is not specified, all products are in stock.
    [About logistics]
    The goods are sent from Shenzhen, China. Generally, it takes 8 to 10 days to arrive at the receiving address.
    ◆ thank you for your [love] and [attention]. If there are any problems after picking up the goods: Missing, wrong delivery, defective, etc., please contact us first. Do not give negative comments in a hurry, and we will solve the problem for you. It is our service tenet to give you a pleasant shopping experience. Five★Praise is our greatest support, and we will be very grateful.`,
    brand: "Adidas",
    shipForm: "Hà Nội",
    price: 100000,
    stock: 10,
    weight: 0.2,
    parcelSize: [20, 20, 10],
    variation: [
      {
        name: "Color",
        options: ["Blue", "Green", "Pink", "Purple"],
      },
      {
        name: "Size",
        options: ["S", "M", "L", "XL"],
      },
    ],
  };
  const [activeStep, setActiveStep] = useState(0);
  const [enableVariation, setEnableVariation] = useState(false);
  const [brand, setBrand] = useState(productById.brand);
  const [isAddNewBrand, setIsAddNewBrand] = useState(false);
  const [newAttributes, setNewAttributes] = useState([]);

  console.log(newAttributes);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAddNewAttribute = () => {
    setNewAttributes((preValue) => {
      return [...preValue, { id: preValue.length, name: "", value: "" }];
    });
  };
  const removeNewAttribute = (id) => {
    setNewAttributes((preValue) => {
      return preValue.filter((value) => value.id != id);
    });
  };
  return (
    <div className="flex-1 p-4 h-full flex flex-col">
      <Card className="p-4 mb-4 h-[100px]">
        <h1>Home / Product / My Products / Product Detail</h1>
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
            Product Detail
          </h1>
        </div>
      </Card>
      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="p-4">
          <Box mt="10px" className="flex flex-row">
            <Box
              className="bg-white shadow-md"
              sx={{
                width: "80%",
                typography: "body1",
                display: "inline-block",
                marginRight: "45px",
              }}
            >
              {activeStep === 0 && (
                <Box m="10px">
                  <Typography variant="h6" color="#1A88F7">
                    Basic Information
                  </Typography>
                  <div class="w-full  px-3">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right"
                      for="name"
                    >
                      <span className="text-red-400">*</span> Product Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                      defaultValue={productById.name}
                    />
                  </div>
                  <div class="w-full px-3">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="category"
                    >
                      <span className="text-red-400">*</span> Category
                    </label>
                    {/* <input
                      class="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Input"
                    /> */}
                    <div class="inline-block shadow appearance-none border rounded w-5/6  text-gray-700">
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        defaultValue={productById.category}
                        fullWidth
                        onChange={() => {}}
                      >
                        <MenuItem value="Men clothes">Men clothes</MenuItem>
                        <MenuItem value="Women clothes">Women clothes</MenuItem>
                        <MenuItem value="Mobile&Gadgets">
                          Mobile & Gadgets
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div class="w-full px-3 flex flex-row mt-10">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="image"
                    >
                      <span className="text-red-400">*</span> Product Images
                    </label>
                    <div class="flex items-center justify-center w-32">
                      <img src={men_clothes} />
                    </div>
                    <div class="flex items-center justify-center w-32  ml-4">
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
                          <p class="text-xs text-[#1A88F7]">(1/9)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </div>
                  <div class="w-full px-3 flex flex-row mt-10">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="video"
                    >
                      <span className="text-red-400">*</span> Product Video
                    </label>
                    {/* <div class="flex items-center justify-center w-32">
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
                          <p class="mb-2 text-sm text-[#1A88F7] ">Add Video</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div> */}
                    <div class="flex items-center justify-center w-32">
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center relative   w-full h-32 border-2  rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <img src={productById.video} />
                        <div className="absolute bottom-0 bg-[#AEAEAE] w-full text-center">
                          <DeleteOutlineIcon className="text-white" />
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                    <ul class="inline-block list-disc list-inside text-[#D2D1D1] text-sm  mb-2 pr-4  mt-10 ml-5">
                      <li>
                        Size: Max 30Mb, resolution should no exceed 1280x1280px
                      </li>
                      <li>Duration: 10s-60s</li>
                      <li>Format: MP4</li>
                    </ul>
                  </div>
                  <div class="w-full px-3 flex flex-row mt-10">
                    <label
                      class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6 text-right mt-10"
                      for="description"
                    >
                      <span className="text-red-400">*</span> Product
                      Description
                    </label>
                    <textarea
                      id="message"
                      rows="10"
                      class="block p-2.5 w-5/6 text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={productById.description}
                    ></textarea>
                  </div>
                </Box>
              )}
              {activeStep === 1 && (
                <Box m="10px">
                  <Typography variant="h6" color="#1A88F7">
                    Specification
                  </Typography>
                  <div class="flex flex-wrap mb-6">
                    <div class="w-5/12 mt-6 mr-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                        for="brand"
                      >
                        <span className="text-red-400">*</span> Brand
                      </label>
                      <div class="inline-block relative w-4/6">
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={brand}
                          onChange={(event) => {
                            setBrand(event.target.value);
                          }}
                          fullWidth
                          sx={{ height: "10" }}
                        >
                          <MenuItem value="No Brand">
                            <p className="text-[#1A88F7]">No Branch</p>
                          </MenuItem>
                          <MenuItem value="Adidas">Adidas</MenuItem>
                          <MenuItem value="Nike">Nike</MenuItem>
                          <MenuItem value="Gucci">Gucci</MenuItem>
                          <ListSubheader>
                            <div className="flex justify-center items-center w-full">
                              {!isAddNewBrand ? (
                                <button
                                  onClick={() => setIsAddNewBrand(true)}
                                  class="bg-transparent  text-[#1A88F7]   px-4 border border-[#6EB6FF] border-dashed  rounded flex justify-center	items-center	"
                                >
                                  <span className="text-3xl mr-4">+</span>
                                  <span>Add New Branch</span>
                                </button>
                              ) : (
                                <div className="w-full">
                                  <OutlinedInput fullWidth />
                                  <div className="flex justify-end mt-3 gap-3">
                                    <HighlightOffOutlined
                                      className="text-[#FF0000]"
                                      onClick={() => setIsAddNewBrand(false)}
                                    />
                                    <CheckCircleOutlineSharp
                                      className="text-[#1A88F7]"
                                      onClick={() => setIsAddNewBrand(false)}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </ListSubheader>
                        </Select>
                      </div>
                    </div>
                    <div class="w-5/12 mt-6 ml-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2  w-2/6 text-right pr-5"
                        for="ship"
                      >
                        <span className="text-red-400">*</span> Ship from
                      </label>
                      <div class="inline-block relative w-4/6">
                        <OutlinedInput
                          defaultValue={productById.shipForm}
                          fullWidth
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap 	mb-6">
                    {/* <div class="w-5/12 mt-6 mr-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                        for="brand"
                      >
                        <span className="text-red-400">*</span> Country of
                        Origin
                      </label>
                      <div class="inline-block relative w-4/6">
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={10}
                          onChange={() => {}}
                          fullWidth
                          sx={{ height: "10" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                        </Select>
                      </div>
                    </div> */}
                    {newAttributes.map((attr, index) => {
                      return (
                        <div
                          class={`w-5/12 mt-6 ${
                            index % 2 === 0 ? "ml-12" : "mr-12"
                          }`}
                          key={attr.id}
                        >
                          <label
                            class="inline-block text-gray-700 text-sm  mb-2  w-2/6 text-right pr-5"
                            for="ship"
                          >
                            <OutlinedInput />
                          </label>
                          <div class="inline-block relative w-4/6">
                            <OutlinedInput className="w-11/12" />
                            <div
                              className="inline-block"
                              onClick={() => {
                                removeNewAttribute(attr.id);
                              }}
                            >
                              {/* <DeleteOutlineIcon className="w-1/12 ml-1" /> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* <div class="w-5/12 mt-6 ml-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2  w-2/6 text-right pr-5"
                        for="ship"
                      ></label>
                      <div class="inline-block relative w-4/6">
                        <button
                          onClick={handleAddNewAttribute}
                          class="bg-transparent  text-[#1A88F7]   px-4 border border-[#6EB6FF] border-dashed  rounded flex justify-center	items-center	"
                        >
                          <span className="text-3xl mr-4">+</span>
                          <span>Add new attribute</span>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </Box>
              )}
              {activeStep === 2 && (
                <Box m="10px">
                  <Typography variant="h6" color="#1A88F7">
                    Sale Information
                  </Typography>
                  {!enableVariation && (
                    <div class="flex flex-wrap mb-6">
                      <div class="w-5/12 mt-6 mr-12">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                          for="price"
                        >
                          <span className="text-red-400">*</span> Variation
                        </label>

                        <div
                          class="inline-block relative w-4/6"
                          onClick={() => setEnableVariation(true)}
                        >
                          <button class="bg-transparent  text-[#1A88F7]   px-4 border border-[#6EB6FF] border-dashed  rounded flex justify-center	items-center	">
                            <span className="text-3xl mr-4">+</span>
                            <span>Enable Variations</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {!enableVariation && (
                    <div class="flex flex-wrap mb-6">
                      <div class="w-5/12 mt-6 mr-12">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                          for="price"
                        >
                          <span className="text-red-400">*</span> Price
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-4/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="price"
                          type="text"
                          placeholder="Input"
                          defaultValue={productById.price}
                        />
                      </div>
                    </div>
                  )}
                  {!enableVariation && (
                    <div class="flex flex-wrap mb-6">
                      <div class="w-5/12 mt-6 mr-12">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                          for="price"
                        >
                          <span className="text-red-400">*</span> Stock
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-4/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="price"
                          type="text"
                          placeholder="Input"
                          defaultValue={productById.stock}
                        />
                      </div>
                    </div>
                  )}
                  {enableVariation && (
                    <div className="flex flex-wrap mb-6">
                      {productById.variation.map((vari, index) => (
                        <div class="w-full mt-6 mr-12 " key={index}>
                          <label
                            class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/12 text-right"
                            for="price"
                          >
                            {index == 0 && "Variation"}
                          </label>

                          <div
                            class="inline-block relative w-10/12 bg-[#F2F2F2] text-[#808089]"
                            onClick={() => setEnableVariation(true)}
                          >
                            <div className="my-5">
                              <label class="inline-block text-sm  w-2/12 text-center">
                                Variation {index + 1}
                              </label>
                              <OutlinedInput
                                sx={{
                                  backgroundColor: "#fff",
                                  width: "250px", // Set the width here
                                  height: "40px", // Set the height here
                                }}
                                placeholder="e.g: Color, etc."
                                defaultValue={vari.name}
                              />
                            </div>
                            <div className="my-5">
                              {vari.options.map((optien, index) => (
                                <>
                                  <label class="inline-block text-sm  w-2/12 text-center my-5">
                                    {index == 0 && "Options"}
                                  </label>
                                  <OutlinedInput
                                    sx={{
                                      backgroundColor: "#fff",
                                      width: "250px", // Set the width here
                                      height: "40px", // Set the height here
                                    }}
                                    placeholder="e.g: Red, etc."
                                    defaultValue={optien}
                                  />
                                  <DeleteOutlineIcon className="mx-5" />
                                </>
                              ))}
                              <>
                                <label class="inline-block text-sm  w-2/12 text-center my-5"></label>
                                <OutlinedInput
                                  sx={{
                                    backgroundColor: "#fff",
                                    width: "250px", // Set the width here
                                    height: "40px", // Set the height here
                                  }}
                                  placeholder="e.g: Red, etc."
                                />
                              </>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* <div class="w-full mt-6 mr-12 ">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/12 text-right"
                          for="price"
                        ></label>

                        <div
                          class="inline-block relative w-10/12 bg-[#F2F2F2] text-[#808089]"
                          onClick={() => setEnableVariation(true)}
                        >
                          <div className="my-5">
                            <label class="inline-block text-sm  w-2/12 text-center">
                              Variation 2
                            </label>
                            <div class="inline-block relative w-4/6">
                              <button class="bg-transparent  text-[#1A88F7]   px-4 border border-[#6EB6FF] border-dashed  rounded flex justify-center	items-center	">
                                <span className="text-3xl mr-4">+</span>
                                <span>Add Variation 2</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div class="w-full mt-6 mr-12 ">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/12 text-right"
                          for="price"
                        >
                          Varilation List
                        </label>

                        <div class="inline-block relative w-10/12  text-[#808089]">
                          <div className="my-5 flex justify-between items-center">
                            <div>
                              <OutlinedInput placeholder="Price" />
                              <OutlinedInput placeholder="Stock" />
                              <OutlinedInput placeholder="SKU" />
                            </div>
                            <div>
                              <button class="bg-[#1A88F7] text-[#FFFFFF]   py-2 px-4 border border-[#1A88F7] ">
                                Apply To All Variations
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full mt-6 mr-12 ">
                        <label
                          class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/12 text-right"
                          for="price"
                        ></label>

                        <div class="inline-block relative w-10/12  text-[#808089]">
                          <div className="my-5">
                            <TableContainer component={Paper}>
                              <Table
                                sx={{
                                  minWidth: 650,
                                  border: "1px solid #808089",
                                }}
                                aria-label="simple table"
                              >
                                <TableHead>
                                  <TableRow
                                    sx={{
                                      backgroundColor: "#F2F2F2",
                                    }}
                                  >
                                    {/* <TableCell
                                      align="center"
                                      sx={{ border: "1px solid #808089" }}
                                    >
                                      Variation
                                    </TableCell> */}
                                    {productById.variation.map(
                                      (vari, index) => (
                                        <TableCell
                                          align="center"
                                          sx={{ border: "1px solid #808089" }}
                                          key={index}
                                        >
                                          {vari.name}
                                        </TableCell>
                                      )
                                    )}
                                    <TableCell
                                      align="center"
                                      sx={{ border: "1px solid #808089" }}
                                    >
                                      <span className="text-red-400">*</span>{" "}
                                      Price
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      sx={{ border: "1px solid #808089" }}
                                    >
                                      <span className="text-red-400">*</span>{" "}
                                      Stock
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                      sx={{ border: "1px solid #808089" }}
                                    >
                                      SKU
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {productById.variation[0].options.map(
                                    (option, index) => (
                                      <>
                                        {productById.variation[1].options.map(
                                          (op2, index) => {
                                            if (index == 0) {
                                              return (
                                                <TableRow>
                                                  <TableCell
                                                    component="th"
                                                    scope="row"
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                    rowSpan={
                                                      productById.variation[0]
                                                        .options.length
                                                    }
                                                  >
                                                    <div className="flex justify-center items-center flex-col">
                                                      <p>{option}</p>
                                                      <img
                                                        className="text-[#1A88F7] w-24 h-24"
                                                        src={men_clothes}
                                                      />
                                                    </div>
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <p>{op2}</p>
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput
                                                      placeholder="Input"
                                                      defaultValue={100000}
                                                    />
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput
                                                      placeholder="Input"
                                                      defaultValue={76}
                                                    />
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput placeholder="Input" />
                                                  </TableCell>
                                                </TableRow>
                                              );
                                            } else {
                                              return (
                                                <TableRow>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <p>{op2}</p>
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput
                                                      placeholder="Input"
                                                      defaultValue={100000}
                                                    />
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput
                                                      placeholder="Input"
                                                      defaultValue={34}
                                                    />
                                                  </TableCell>
                                                  <TableCell
                                                    align="center"
                                                    sx={{
                                                      border:
                                                        "1px solid #808089",
                                                    }}
                                                  >
                                                    <OutlinedInput placeholder="Input" />
                                                  </TableCell>
                                                </TableRow>
                                              );
                                            }
                                          }
                                        )}
                                      </>
                                    )
                                  )}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Box>
              )}
              {activeStep === 3 && (
                <Box m="10px">
                  <Typography variant="h6" color="#1A88F7">
                    Shipping
                  </Typography>
                  <div class="flex flex-wrap mb-6">
                    <div class="w-3/12 mt-6 mr-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                        for="price"
                      >
                        <span className="text-red-400">*</span> Weight
                      </label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        placeholder="Input"
                        className="w-4/6"
                        defaultValue={productById.weight}
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap mb-6">
                    <div class="w-3/12 mt-6">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-2/6 text-right"
                        for="price"
                      >
                        <span className="text-red-400">*</span> Parcel Size
                      </label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        placeholder="W"
                        className="w-4/6"
                        defaultValue={productById.parcelSize[0]}
                      />
                    </div>
                    <div class="w-8 mt-6 text-[#D2D1D1]	flex justify-center	items-center">
                      X
                    </div>
                    <div class="w-2/12 mt-6">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        placeholder="L"
                        className="w-full"
                        defaultValue={productById.parcelSize[1]}
                      />
                    </div>
                    <div class="w-8 mt-6 text-[#D2D1D1]	flex justify-center	items-center">
                      X
                    </div>
                    <div class="w-2/12 mt-6">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        placeholder="H"
                        className="w-full"
                        defaultValue={productById.parcelSize[2]}
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap mb-6">
                    <div class="w-full mt-6 mr-12">
                      <label
                        class="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/12 text-right "
                        for="price"
                      >
                        Shipping Fee
                      </label>
                      <div className="w-11/12  inline-block	">
                        <div class="grid grid-cols-6 border border-2">
                          <div class="col-span-12 bg-[#D2D1D1] font-bold p-2">
                            Express
                          </div>
                          {shipExpress.map((ship) => (
                            <>
                              <div className="col-span-10 p-3">{ship.name}</div>
                              <div className="col-span-1 p-3">
                                {ship.price}đ
                              </div>
                              <div className="col-span-1 p-3">
                                <label class="relative inline-block items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    class="sr-only peer"
                                    checked={ship.active}
                                  />
                                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </div>
                            </>
                          ))}
                          <div class="col-span-12 bg-[#D2D1D1] font-bold p-2">
                            Standard
                          </div>
                          {shipStandard1.map((ship) => (
                            <>
                              <div className="col-span-10 p-3">{ship.name}</div>
                              <div className="col-span-1 p-3">
                                {ship.price}đ
                              </div>
                              <div className="col-span-1 p-3">
                                <label class="relative inline-block items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    class="sr-only peer"
                                    checked={ship.active}
                                  />
                                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </div>
                            </>
                          ))}
                          <div class="col-span-12 bg-[#D2D1D1] font-bold p-2">
                            Standard
                          </div>
                          {shipStandard2.map((ship) => (
                            <>
                              <div className="col-span-10 p-3">{ship.name}</div>
                              <div className="col-span-1 p-3">
                                {ship.price}đ
                              </div>
                              <div className="col-span-1 p-3">
                                <label class="relative inline-block items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    class="sr-only peer"
                                    checked={ship.active}
                                  />
                                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap mb-6">
                    <div class="w-full mt-6 mr-12">
                      <div className="  inline-block	flex justify-end	">
                        <button class="bg-transparent text-[#808089]   py-2 px-4 border border-[#808089] mr-5">
                          Cancel
                        </button>
                        <button class="bg-transparent text-[#1A88F7]   py-2 px-4 border border-[#1A88F7] mr-5">
                          Save and Delisted
                        </button>
                        <button class="bg-[#1A88F7] text-[#FFFFFF]   py-2 px-4 border border-[#1A88F7] ">
                          Save and Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </Box>
              )}
            </Box>
            <div className="display-inline-block w-1/6 pt-12">
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                    // optional={
                    //   index === 2 ? (
                    //     <Typography variant="caption">Last step</Typography>
                    //   ) : null
                    // }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {/* {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )} */}
            </div>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
