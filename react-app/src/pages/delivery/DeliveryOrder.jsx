import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Card,
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import men_clothes from "../../assets/categories/men_clothes_1.png";
import homeAppliances_1 from "../../assets/categories/HomeAppliances_1.png";
const ORDERS_DASHBOARD = [
  {
    value: 572,
    title: "Not Delivered",
  },
  {
    value: 1000,
    title: "Delivering",
  },
  { value: 986, title: "Delivered" },
  {
    value: 2,
    title: "Not Received",
  },
  {
    value: 2,
    title: "Refund",
  },
];

const RAGE_TYPE = [
  {
    value: "shop1",
    label: "Ciao Amore",
  },
  {
    value: "shop2",
    label: "Shop Name",
  },
  {
    value: "shop3",
    label: "Shop Name",
  },
  {
    value: "shop4",
    label: "Shop Name",
  },
];

const SERVICE_TYPE = [
  {
    value: "service1",
    label: "All",
  },
  {
    value: "service2",
    label: "Service Name",
  },
  {
    value: "service3",
    label: "Service Name",
  },
  {
    value: "service4",
    label: "Service Name",
  },
];
const rows = [
  {
    id: 1,
    orderId: { orderId: "5F5NLSU4", status: "Delivering" },
    info: { name: "Nguyễn Văn A", sdt: "0987654321" },
    address: "198 Trần Quang Khải, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    variations: "-",
    price: "100.000đ",
    service: "Standard",
    sales: 100,
  },
  {
    id: 2,
    orderId: { orderId: "DL382YYY", status: "Delivered" },
    info: { name: "Nguyễn Văn A", sdt: "0987654321" },
    address: "198 Trần Quang Khải, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    variations: "-",
    price: "999.000đ",
    service: "Economy",
    sales: 10,
  },
  {
    id: 3,
    orderId: { orderId: "DL382YYY", status: "Pending" },
    info: { name: "Nguyễn Văn A", sdt: "0987654321" },
    address: "198 Trần Quang Khải, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    variations: "-",
    price: "999.000đ",
    service: "Express",
    sales: 10,
  },
  {
    id: 4,
    orderId: { orderId: "DL382YYY", status: "Not Received" },
    info: { name: "Nguyễn Văn A", sdt: "0987654321" },
    address: "198 Trần Quang Khải, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    variations: "-",
    price: "999.000đ",
    service: "Economy",
    sales: 10,
  },
  {
    id: 5,
    orderId: { orderId: "DL382YYY", status: "Refund" },
    info: { name: "Nguyễn Văn A", sdt: "0987654321" },
    address: "198 Trần Quang Khải, Phường Tân Định, Quận 1, TP Hồ Chí Minh",
    variations: "-",
    price: "999.000đ",
    service: "Economy",
    sales: 10,
  },
];
const columns = [
  {
    field: "id",
    headerName: "#",
    flex: 0.5,
  },
  {
    field: "orderId",
    headerName: "Order ID",
    flex: 1,
    renderCell: (cellValues) => {
      let bgColor;
      let textColor;
      if (cellValues.formattedValue.status === "Delivering") {
        textColor = "#00C853";
        bgColor = "#D2F8E2";
      } else if (cellValues.formattedValue.status === "Delivered") {
        textColor = "#1A88F7";
        bgColor = "#CCE5FF";
      } else if (cellValues.formattedValue.status === "Pending") {
        textColor = "#808089";
        bgColor = "#D8D8D8";
      } else if (cellValues.formattedValue.status === "Not Received") {
        textColor = "#FF0000";
        bgColor = "#FFD9D9";
      } else if (cellValues.formattedValue.status === "Refund") {
        textColor = "#FFB800";
        bgColor = "#FFF2E2";
      }
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="text-[#1A88F7] text-[20px] font-bold">
            {cellValues.formattedValue.orderId}
          </span>
          <span className={`text-[${textColor}] bg-[${bgColor}] px-1`}>
            {cellValues.formattedValue.status}
          </span>
        </div>
      );
    },
  },
  {
    field: "info",
    headerName: "Receiver",
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="text-[#1A88F7] text-[16px] font-bold">
            {cellValues.formattedValue.name}
          </span>
          <span>{cellValues.formattedValue.sdt}</span>
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    flex: 3,
  },
  {
    field: "price",
    headerName: "Total",
    flex: 1,
    renderCell: (cellValues) => {
      console.log(cellValues);
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="text-[#1A88F7] text-[16px] font-bold">
            {cellValues.formattedValue}
          </span>
        </div>
      );
    },
  },
  {
    field: "service",
    headerName: "Service",
    flex: 1,
  },
  {
    field: "Edit",
    headerName: "Options",
    renderCell: (cellValues) => {
      return (
        <div className="flex flex-col items-center justify-center">
          <button style={{ color: "#1A88F7" }}>Detail</button>

          <button style={{ color: "#1A88F7" }}>Update status</button>
        </div>
      );
    },
  },
];
const DeliveryOrder = () => {
  const [value, setValue] = React.useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex-1 p-4 h-full flex flex-col ">
      <Card className="p-4 mb-4 h-[100px] flex flex-col justify-between">
        <h1>Home / Orders</h1>
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
            Orders
          </h1>
        </div>
      </Card>
      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="p-4 my-5">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-medium text-black">Orders Dashboard</h1>
            <h1 className="text-base" style={{ color: "#808089" }}>
              (Last updated at GMT+7 11:30)
            </h1>
          </div>
          <div
            className="flex items-center justify-between mt-4 bg-gray-200 "
            style={{ padding: 1, gap: 1 }}
          >
            {ORDERS_DASHBOARD.map((item, index) => (
              <div
                className="flex flex-1 flex-col justify-center items-center bg-white py-5"
                key={index}
              >
                <h1
                  className=" text-2xl font-medium"
                  style={{ color: "#1A88F1" }}
                >
                  {item.value}
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="All" value="All" />
                <Tab label="Not Delivered" value="Not Delivered" />
                <Tab label="Delivering" value="Delivering" />
                <Tab label="Delivred" value="Delivred" />
                <Tab label="Not Received" value="Not Received" />
                <Tab label="Refund" value="Refund" />
              </TabList>
            </Box>
            <TabPanel value="All">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 my-4"></div>
                  <div className="flex gap-2 my-4">
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 600,
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Order ID/ Phone number/ Receiver"
                        inputProps={{ "aria-label": "search order id" }}
                      />
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </IconButton>
                    </Paper>
                  </div>
                </div>
                <div className="gap-4 flex justify-between">
                  <div className="flex items-center gap-10 w-1/5">
                    <label>Shop</label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      defaultValue="shop1"
                      fullWidth
                    >
                      {RAGE_TYPE.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div className="flex items-center gap-10">
                    <label>Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker defaultValue={dayjs("2022-04-17")} />
                    </LocalizationProvider>
                    <div
                      className=" bg-black"
                      style={{ width: 10, height: 1 }}
                    />
                    <label>Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker defaultValue={dayjs("2022-04-17")} />
                    </LocalizationProvider>
                  </div>
                  <div className="flex items-center gap-10 w-1/5">
                    <label>Service</label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      defaultValue="service1"
                      fullWidth
                    >
                      {SERVICE_TYPE.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
                <div className="flex justify-between my-4">
                  <h1
                    style={{ fontSize: 24, color: "#1A88F7" }}
                    className="font-medium"
                  >
                    572 Orders
                  </h1>
                </div>
                <DataGrid
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
                  disableRowSelectionOnClick
                />
              </div>
            </TabPanel>
            <TabPanel value="Not Delivered">Not Delivered</TabPanel>
            <TabPanel value="Delivering">Delivering</TabPanel>
            <TabPanel value="Delivred">Delivred</TabPanel>
            <TabPanel value="Not Received">Not Received</TabPanel>
            <TabPanel value="Refund">Refund</TabPanel>
          </TabContext>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryOrder;
