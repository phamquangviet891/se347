import React, { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { FiDownload } from "react-icons/fi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { OutlinedInput } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import {
  AiFillQuestionCircle,
  AiOutlineFileSync,
  AiOutlineQuestion,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
const WAREHOUSE_DASHBOARD = [
  {
    value: 572,
    title: "Live Products",
  },

  {
    value: 1,
    title: "Delisted & Suspended Products",
  },
  { value: 136, title: "Products Out of Stock" },
  {
    value: 2,
    title: "Products With Low Stock",
  },
  {
    value: 2,
    title: "On-DEMAND Products",
  },
];
const TOP_TABS = [
  {
    key: 0,
    title: "Live",
  },
  {
    key: 1,
    title: "Delisted & Suspended",
  },
  {
    key: 2,
    title: "Out of stock",
  },
  {
    key: 3,
    title: "low stock",
  },
  {
    key: 4,
    title: "on-demand Products",
  },
];
const FILTER_TYPE = [
  {
    value: "name",
    label: "Product Name",
  },
  {
    value: "EUR",
    label: "Product Name",
  },
  {
    value: "BTC",
    label: "Product Name",
  },
  {
    value: "JPY",
    label: "Product Name",
  },
];
const RAGE_TYPE = [
  {
    value: "name",
    label: "L7D Sales Average",
  },
  {
    value: "EUR",
    label: "Product Name",
  },
  {
    value: "BTC",
    label: "Product Name",
  },
  {
    value: "JPY",
    label: "Product Name",
  },
];
const DATA_TABLE = [
  {
    product: {
      image:
        "https://uk.e-cloth.com/cdn/shop/products/qmzqdp8tqleupsgixmnx_1600x.png?v=1689609366",
      title: "Khan lau",
      color: "Blue",
      size: "S",
      sku: "-",
      status: "Normal",
      statusColor: "gray",
    },
    onDemand: false,
    l7D: 50,
    l30D: 20,
    daysSupply: 20,
    stock: 120,
    minimumStock: 20,
  },
  {
    product: {
      image:
        "https://uk.e-cloth.com/cdn/shop/products/qmzqdp8tqleupsgixmnx_1600x.png?v=1689609366",
      title: "Khan lau",
      color: "Blue",
      size: "S",
      sku: "-",
      status: "Normal",
      statusColor: "gray",
    },
    onDemand: false,
    l7D: 50,
    l30D: 20,
    daysSupply: 20,
    stock: 120,
    minimumStock: 20,
  },
  {
    product: {
      image:
        "https://uk.e-cloth.com/cdn/shop/products/qmzqdp8tqleupsgixmnx_1600x.png?v=1689609366",
      title: "Khan lau",
      color: "Blue",
      size: "S",
      sku: "-",
      status: "Normal",
      statusColor: "gray",
    },
    onDemand: false,
    l7D: 50,
    l30D: 20,
    daysSupply: 20,
    stock: 120,
    minimumStock: 20,
  },
  {
    product: {
      image:
        "https://uk.e-cloth.com/cdn/shop/products/qmzqdp8tqleupsgixmnx_1600x.png?v=1689609366",
      title: "Khan lau",
      color: "Blue",
      size: "S",
      sku: "-",
      status: "Normal",
      statusColor: "gray",
    },
    onDemand: false,
    l7D: 50,
    l30D: 20,
    daysSupply: 20,
    stock: 120,
    minimumStock: 20,
  },
];
const SellerWareHouse = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <div className="flex-1 p-4 h-full flex flex-col">
      <Card className="p-4 mb-4 h-[100px]">
        <h1>Home / Warehouse / My Shop 1</h1>
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl font-medium" style={{ color: "#1A88F7" }}>
            My Shop 1
          </h1>
          <div className="flex" style={{ gap: 15 }}>
            <div className="flex items-center">
              <h1>Restock Alert</h1>
              <Switch defaultChecked />
            </div>
            <Button
              variant="outlined"
              color="info"
              style={{ color: "black", borderColor: "black", gap: 7 }}
            >
              <FiDownload />
              Outlined
            </Button>
            <Button variant="contained" color="primary" style={{ gap: 7 }}>
              <AiOutlineFileSync />
              Mass Updated
            </Button>
          </div>
        </div>
      </Card>
      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="p-4 my-5">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-medium text-black">
              Warehouse Dashboard
            </h1>
            <h1 className="text-base" style={{ color: "#808089" }}>
              (Last updated at GMT+7 11:30)
            </h1>
          </div>
          <div
            className="flex items-center justify-between mt-4 bg-gray-200 "
            style={{ padding: 1, gap: 1 }}
          >
            {WAREHOUSE_DASHBOARD.map((item, index) => (
              <div className="flex flex-1 flex-col justify-center items-center bg-white py-5">
                <h1
                  className=" text-2xl font-medium"
                  style={{ color: "#1A88F1" }}
                >
                  {item.value}
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  {item.title}
                  <AiOutlineQuestionCircle />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {TOP_TABS.map((tab) => (
              <Tab label={tab.title} key={tab.key} className="flex-1" />
            ))}
          </Tabs>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 my-4">
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="EUR"
                >
                  {FILTER_TYPE.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <OutlinedInput />
              </div>
              <div className="flex items-center gap-4">
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="EUR"
                >
                  {RAGE_TYPE.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <OutlinedInput />
                <div className=" bg-black" style={{ width: 10, height: 1 }} />
                <OutlinedInput />
              </div>
            </div>
            <div className="gap-2 flex">
              <Button
                variant="outlined"
                style={{ color: "gray", borderColor: "gray" }}
              >
                Reset
              </Button>
              <Button variant="contained">Search</Button>
            </div>
            <div className="flex justify-between my-4">
              <h1
                style={{ fontSize: 24, color: "#1A88F7" }}
                className="font-medium"
              >
                572 live
              </h1>
              <Button variant="contained">Add New Product</Button>
            </div>
            <TableContainer>
              <Table style={{ width: "100%" }}>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#808089" }}>
                    <TableCell align="center">
                      Product Restock Urgency
                    </TableCell>
                    <TableCell align="center">On-demand</TableCell>
                    <TableCell align="center">L7D Sales Average</TableCell>
                    <TableCell align="center">L30D Sales Average</TableCell>
                    <TableCell align="center">Days of Supply</TableCell>
                    <TableCell align="center">Stock</TableCell>
                    <TableCell align="center">
                      Minimum Stock Threshold{" "}
                    </TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DATA_TABLE.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <div className="flex items-start gap-4">
                          <img
                            src={row.product.image}
                            style={{ height: 60, width: 60 }}
                          />
                          <div>
                            <div
                              className="p-1 justify-center items-center flex"
                              style={{
                                backgroundColor: row.product.statusColor,
                              }}
                            >
                              {row.product.status}
                            </div>
                            <h1 className="text-base font-medium text-black">
                              {row.product.title}
                            </h1>
                            <td>
                              <li className="flex-row">
                                Color: {row.product.color}
                              </li>
                              <li className="flex-row">
                                Size: {row.product.size}
                              </li>
                              <li className="flex-row">
                                SKU: {row.product.sku}
                              </li>
                            </td>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <Switch checked={row.onDemand}></Switch>
                      </TableCell>
                      <TableCell align="center">{row.l7D}</TableCell>
                      <TableCell align="center">{row.l30D}</TableCell>
                      <TableCell align="center">{row.daysSupply}</TableCell>
                      <TableCell align="center">{row.stock}</TableCell>

                      <TableCell align="center">{row.minimumStock}</TableCell>
                      <TableCell align="center">
                        <button style={{ color: "blue" }}>Edit</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SellerWareHouse;
