import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";

import {convertPrice} from "../../utils/price";

const tabs = ["All", "Ongoing", "Upcoming", "Expired"];

const columns = [
  {
    field: "voucher",
    headerName: "Voucher Name",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 3,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={cellValues.formattedValue.img}
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
    field: "voucherType",
    headerName: "Voucher Type",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 2,
  },
  {
    field: "applicableProducts",
    headerName: "Applicable Products",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 2,
  },
  {
    field: "discount",
    headerName: "Discount",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
    renderCell: (cellValues) => {
      return <div>{convertPrice(cellValues.formattedValue)} đ</div>;
    },
  },
  {
    field: "voucherQuantity",
    headerName: "Voucher Quantity",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 2,
  },
  {
    field: "usedVouchers",
    headerName: "Used Vouchers",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 2,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <span
          style={
            cellValues.formattedValue === "Upcoming"
              ? {
                  backgroundColor: "#FFD9D9",
                  padding: "3px 8px 3px 8px",
                  width: "max-content",
                  fontWeight: "bold",
                  color: "#F00",
                }
              : cellValues.formattedValue === "Ongoing"
              ? {
                  backgroundColor: "#D2F8E2",
                  padding: "3px 8px 3px 8px",
                  width: "max-content",
                  fontWeight: "bold",
                  color: "#00C853",
                }
              : {
                  backgroundColor: "#D8D8D8",
                  padding: "3px 8px 3px 8px",
                  width: "max-content",
                  fontWeight: "bold",
                  color: "#808089",
                }
          }
        >
          {cellValues.formattedValue}
        </span>
      );
    },
  },
  {
    field: "expiration",
    headerName: "Date",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 2,
    renderCell: (cellValues) => {
      return (
        <div>
          {cellValues.formattedValue.startDate} -{" "}
          {cellValues.formattedValue.endDate}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button className="text-blue-700">Edit</button>
          <button className="text-blue-700">Delete</button>
        </div>
      );
    },
  },
];

const data = [
  {
    id: 1,
    voucher: {
      name: "VCH-383",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Shop Voucher",
    applicableProducts: "All Products",
    discount: 20000,
    voucherQuantity: 399,
    usedVouchers: 199,
    status: "Upcoming",
    expiration: {
      startDate: "10/10/2023",
      endDate: "29/10/2023",
    },
  },
  {
    id: 2,
    voucher: {
      name: "VCH-486",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "2 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Ongoing",
    expiration: {
      startDate: "10/10/2023",
      endDate: "29/10/2023",
    },
  },
  {
    id: 3,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Expired",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
  {
    id: 4,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Upcoming",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
  {
    id: 5,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Expired",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
  {
    id: 6,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Upcoming",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
  {
    id: 7,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Ongoing",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
  {
    id: 8,
    voucher: {
      name: "KD-33",
      img: "https://static-00.iconduck.com/assets.00/discount-icon-512x512-a3k7kltw.png",
    },
    voucherType: "Products Voucher",
    applicableProducts: "5 Products",
    discount: 20000,
    voucherQuantity: 34,
    usedVouchers: 2,
    status: "Ongoing",
    expiration: {
      startDate: "10/09/2023",
      endDate: "29/09/2023",
    },
  },
];

const SellerVoucher = () => {
  const [value, setValue] = useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col p-4 gap-5 h-full">
      <Card className="flex flex-col gap-2 p-4 h-fit">
        <span className="text-first-text">
          Home / Marketing / My Vouchers / Voucher Details
        </span>
        <div className="text-main-color font-medium text-2xl">My Vouchers</div>
      </Card>

      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="flex flex-col gap-2 p-4">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {tabs.map((tab, index) => (
                  <Tab key={index} label={tab} value={tab} />
                ))}
              </TabList>
            </Box>

            <TabPanel sx={{ padding: "0px" }} value="All">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mt-4">
                  <form className="w-1/3">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by Voucher name..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add New Voucher
                  </button>
                </div>

                <div className="text-2xl text-main-color font-medium">
                  3 Vouchers
                </div>

                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  disableRowSelectionOnClick
                  rowHeight={70}
                />
              </div>
            </TabPanel>
            <TabPanel sx={{ padding: "0px" }} value="Ongoing">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mt-4">
                  <form className="w-1/3">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by Voucher name..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add New Voucher
                  </button>
                </div>

                <div className="text-2xl text-main-color font-medium">
                  3 Vouchers
                </div>

                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    filter: {
                      filterModel: {
                        items: [
                          {
                            field: "status",
                            operator: "contains",
                            value: "Ongoing",
                          },
                        ],
                      },
                    },
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  disableRowSelectionOnClick
                  disableColumnFilter
                  rowHeight={70}
                />
              </div>
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Upcoming">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mt-4">
                  <form className="w-1/3">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by Voucher name..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add New Voucher
                  </button>
                </div>

                <div className="text-2xl text-main-color font-medium">
                  3 Vouchers
                </div>

                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    filter: {
                      filterModel: {
                        items: [
                          {
                            field: "status",
                            operator: "contains",
                            value: "Upcoming",
                          },
                        ],
                      },
                    },
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  disableRowSelectionOnClick
                  disableColumnFilter
                  rowHeight={70}
                />
              </div>
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Expired">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mt-4">
                  <form className="w-1/3">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by Voucher name..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add New Voucher
                  </button>
                </div>

                <div className="text-2xl text-main-color font-medium">
                  3 Vouchers
                </div>

                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    filter: {
                      filterModel: {
                        items: [
                          {
                            field: "status",
                            operator: "contains",
                            value: "Expired",
                          },
                        ],
                      },
                    },
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  disableRowSelectionOnClick
                  disableColumnFilter
                  rowHeight={70}
                />
              </div>
            </TabPanel>
          </TabContext>
        </Card>
      </div>
    </div>
  );
};

export default SellerVoucher;
