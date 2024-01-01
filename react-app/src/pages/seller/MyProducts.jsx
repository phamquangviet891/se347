import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import men_clothes from "../../assets/categories/men_clothes_1.png";
import homeAppliances_1 from "../../assets/categories/HomeAppliances_1.png";
import binh_giu_nhiet from "../../assets/pictures/object-1.png";

import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: { name: "T-shirt", image: men_clothes },
    sku: ["-"],
    variations: ["-"],
    price: ["100.000đ"],
    stock: [19],
    sales: [100],
  },
  {
    id: 2,
    name: { name: "Cooker", image: homeAppliances_1 },
    sku: ["-"],
    variations: ["-"],
    price: ["999.000đ"],
    stock: [194],
    sales: [10],
  },
  {
    id: 3,
    name: { name: "Bình giữ nhiệt", image: binh_giu_nhiet },
    sku: ["-", "-", "-"],
    variations: ["600 ml", "400 ml", "320 ml"],
    price: ["209.500đ", "209.500đ", "209.500đ"],
    stock: [100, 32, 96],
    sales: [15, 5, 100],
  },
];
const rowViolations = [
  {
    id: 1,
    name: { name: "T-shirt", image: men_clothes },
    updated: "15/02/2023 21:21",
    violation: "Wrong product category",
    deadline: "20/02/2023 21:21",
  },
];
const MyProducts = () => {
  const [value, setValue] = React.useState("All");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productId, setProductId] = useState();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleViewProduct = (id) => {
    setAnchorEl(null);
    navigate(`/seller/myproducts/productdetail/${id}`);
  };
  const columns = [
    {
      field: "name",
      headerName: "Product Name",
      flex: 3,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={cellValues.formattedValue.image}
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                marginRight: "4px",
              }}
            />
            <span>{cellValues.formattedValue.name}</span>
          </div>
        );
      },
    },
    {
      field: "sku",
      headerName: "SKU",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            {cellValues.formattedValue.map((cell, index) => (
              <p key={index}>{cell}</p>
            ))}
          </div>
        );
      },
    },
    {
      field: "variations",
      headerName: "Variations",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            {cellValues.formattedValue.map((cell, index) => (
              <p key={index}>{cell}</p>
            ))}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            {cellValues.formattedValue.map((cell, index) => (
              <p key={index}>{cell}</p>
            ))}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            {cellValues.formattedValue.map((cell, index) => (
              <p key={index}>{cell}</p>
            ))}
          </div>
        );
      },
    },
    {
      field: "sales",
      headerName: "Sales",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            {cellValues.formattedValue.map((cell, index) => (
              <p key={index}>{cell}</p>
            ))}
          </div>
        );
      },
    },
    {
      field: "id",
      headerName: "Options",
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-5">
            <button
              style={{ color: "#1A88F7" }}
              onClick={() => handleViewProduct(cellValues.formattedValue)}
            >
              Edit
            </button>

            <button style={{ color: "#1A88F7" }} onClick={handleClick}>
              More
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>View Product Page</MenuItem>
              <MenuItem onClick={handleClose}>Delist</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];
  const columnViolutions = [
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={cellValues.formattedValue.image}
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                marginRight: "4px",
              }}
            />
            <span>{cellValues.formattedValue.name}</span>
          </div>
        );
      },
    },
    {
      field: "updated",
      headerName: "Updated on",
      flex: 1,
    },
    {
      field: "violation",
      headerName: "Violation Reason",
      flex: 1,
      renderCell: (cellValues) => {
        return <p className="text-[#FF0000]">{cellValues.formattedValue}</p>;
      },
    },
    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
      renderCell: (cellValues) => {
        return <p className="text-[#FF0000]">{cellValues.formattedValue}</p>;
      },
    },
    {
      field: "Edit",
      headerName: "Options",
      renderCell: (cellValues) => {
        return (
          <div className="flex flex-col items-center justify-center gap-5">
            <button style={{ color: "#1A88F7" }}>Edit</button>

            <button style={{ color: "#1A88F7" }} onClick={handleClick}>
              More
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Delist</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex-1 p-4 h-full flex flex-col">
      <Card className="p-4 mb-4 h-[100px]">
        <h1> Home / Product / My Products</h1>
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
            My Products
          </h1>
        </div>
      </Card>
      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="p-4">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="All" value="All" />
                <Tab label="Live" value="Live" />
                <Tab label="Sold Out" value="Sold Out" />
                <Tab label="Violation" value="Violation" />
                <Tab label="Delisted" value="Delisted" />
              </TabList>
            </Box>
            <TabPanel value="All">
              <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <div className="inline-block relative w-1/4">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="name">Product Name</option>
                        <option value="sku">SKU</option>
                        <option value="variations">Variations</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                        <option value="sales">Sales</option>
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
                    <input
                      className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/8 mr-4"
                      htmlFor="minstock"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minstock"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxstock"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="minsales"
                    >
                      Sales
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minsales"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxsales"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button className="bg-transparent w-32  text-[#808089]   py-2 px-4 border border-[#808089]  mr-5">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1A88F7] w-32  text-[#FFFFFF]   py-2 px-4 "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                className="my-10"
              >
                <Typography variant="h6" color="#1A88F7" fontWeight="normal">
                  2 Products
                </Typography>
                <button className="bg-[#1A88F7] w-64  text-[#FFFFFF]  hover:text-white py-2 px-4 border border-[#808089]  mr-5">
                  Add New Product
                </button>
              </Box>
              <Box>
                <DataGrid
                  sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#EEEEEE !important", // Increase specificity
                      color: "#808089 !important", // Increase specificity
                    },
                  }}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  rowHeight={100}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                className="my-10"
              >
                <Typography
                  variant="caption"
                  color="#808089"
                  fontWeight="normal"
                >
                  2 products selected
                </Typography>
                <button className="bg-transparent w-32  text-[#1A88F7]   py-2 px-4 border border-[#1A88F7]  ml-5">
                  Hide
                </button>
                <button className="bg-[#FF0000] w-32  text-[#FFFFFF]   py-2 px-4   ml-5">
                  Delete
                </button>
              </Box>
            </TabPanel>
            <TabPanel value="Live">
              <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <div className="inline-block relative w-1/4">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="name">Product Name</option>
                        <option value="sku">SKU</option>
                        <option value="variations">Variations</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                        <option value="sales">Sales</option>
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
                    <input
                      className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/8 mr-4"
                      htmlFor="minstock"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minstock"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxstock"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="minsales"
                    >
                      Sales
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minsales"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxsales"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button className="bg-transparent w-32  text-[#808089]   py-2 px-4 border border-[#808089]  mr-5">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1A88F7] w-32  text-[#FFFFFF]   py-2 px-4 "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                className="my-10"
              >
                <Typography variant="h6" color="#1A88F7" fontWeight="normal">
                  2 Products
                </Typography>
                <button className="bg-[#1A88F7] w-64  text-[#FFFFFF]  hover:text-white py-2 px-4 border border-[#808089]  mr-5">
                  Add New Product
                </button>
              </Box>
              <Box>
                <DataGrid
                  sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#EEEEEE !important", // Increase specificity
                      color: "#808089 !important", // Increase specificity
                    },
                  }}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  rowHeight={100}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                className="my-10"
              >
                <Typography
                  variant="caption"
                  color="#808089"
                  fontWeight="normal"
                >
                  2 products selected
                </Typography>
                <button className="bg-transparent w-32  text-[#1A88F7]   py-2 px-4 border border-[#1A88F7]  ml-5">
                  Hide
                </button>
                <button className="bg-[#FF0000] w-32  text-[#FFFFFF]   py-2 px-4   ml-5">
                  Delete
                </button>
              </Box>
            </TabPanel>
            <TabPanel value="Sold Out">
              <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <div className="inline-block relative w-1/4">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="name">Product Name</option>
                        <option value="sku">SKU</option>
                        <option value="variations">Variations</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                        <option value="sales">Sales</option>
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
                    <input
                      className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/8 mr-4"
                      htmlFor="minstock"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minstock"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxstock"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="minsales"
                    >
                      Sales
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minsales"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxsales"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button className="bg-transparent w-32  text-[#808089]   py-2 px-4 border border-[#808089]  mr-5">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1A88F7] w-32  text-[#FFFFFF]   py-2 px-4 "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                className="my-10"
              >
                <Typography variant="h6" color="#1A88F7" fontWeight="normal">
                  2 Products
                </Typography>
                <button className="bg-[#1A88F7] w-64  text-[#FFFFFF]  hover:text-white py-2 px-4 border border-[#808089]  mr-5">
                  Add New Product
                </button>
              </Box>
              <Box>
                <DataGrid
                  sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#EEEEEE !important", // Increase specificity
                      color: "#808089 !important", // Increase specificity
                    },
                  }}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  rowHeight={100}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                className="my-10"
              >
                <Typography
                  variant="caption"
                  color="#808089"
                  fontWeight="normal"
                >
                  2 products selected
                </Typography>
                <button className="bg-transparent w-32  text-[#1A88F7]   py-2 px-4 border border-[#1A88F7]  ml-5">
                  Hide
                </button>
                <button className="bg-[#FF0000] w-32  text-[#FFFFFF]   py-2 px-4   ml-5">
                  Delete
                </button>
              </Box>
            </TabPanel>
            <TabPanel value="Violation">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                className="my-10"
              >
                <Typography variant="h6" color="#1A88F7" fontWeight="normal">
                  2 Products
                </Typography>
              </Box>
              <Box>
                <DataGrid
                  sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#EEEEEE !important", // Increase specificity
                      color: "#808089 !important", // Increase specificity
                    },
                  }}
                  rows={rowViolations}
                  columns={columnViolutions}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  rowHeight={100}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                className="my-10"
              >
                <Typography
                  variant="caption"
                  color="#808089"
                  fontWeight="normal"
                >
                  2 products selected
                </Typography>
                <button className="bg-transparent w-32  text-[#1A88F7]   py-2 px-4 border border-[#1A88F7]  ml-5">
                  Hide
                </button>
                <button className="bg-[#FF0000] w-32  text-[#FFFFFF]   py-2 px-4   ml-5">
                  Delete
                </button>
              </Box>
            </TabPanel>
            <TabPanel value="Delisted">
              {" "}
              <form className="w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <div className="inline-block relative w-1/4">
                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="name">Product Name</option>
                        <option value="sku">SKU</option>
                        <option value="variations">Variations</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                        <option value="sales">Sales</option>
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
                    <input
                      className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/8 mr-4"
                      htmlFor="minstock"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minstock"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxstock"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="inline-block text-gray-700 text-sm  mb-2 pr-4 w-1/6"
                      htmlFor="minsales"
                    >
                      Sales
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="minsales"
                      type="text"
                      placeholder="Input"
                    />
                    <div className="inline-block w-4 mx-4 border-t border-gray-400"></div>
                    <input
                      className="shadow appearance-none border rounded w-2/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="maxsales"
                      type="text"
                      placeholder="Input"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button className="bg-transparent w-32  text-[#808089]   py-2 px-4 border border-[#808089]  mr-5">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1A88F7] w-32  text-[#FFFFFF]   py-2 px-4 "
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                className="my-10"
              >
                <Typography variant="h6" color="#1A88F7" fontWeight="normal">
                  2 Products
                </Typography>
                <button className="bg-[#1A88F7] w-64  text-[#FFFFFF]  hover:text-white py-2 px-4 border border-[#808089]  mr-5">
                  Add New Product
                </button>
              </Box>
              <Box>
                <DataGrid
                  sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#EEEEEE !important", // Increase specificity
                      color: "#808089 !important", // Increase specificity
                    },
                  }}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  rowHeight={100}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                className="my-10"
              >
                <Typography
                  variant="caption"
                  color="#808089"
                  fontWeight="normal"
                >
                  2 products selected
                </Typography>
                <button className="bg-transparent w-32  text-[#1A88F7]   py-2 px-4 border border-[#1A88F7]  ml-5">
                  Hide
                </button>
                <button className="bg-[#FF0000] w-32  text-[#FFFFFF]   py-2 px-4   ml-5">
                  Delete
                </button>
              </Box>
            </TabPanel>
          </TabContext>
        </Card>
      </div>
    </div>
  );
};

export default MyProducts;
