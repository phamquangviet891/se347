import React, { useRef } from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

const columnsAll = [
  {
    field: "name",
    headerName: "Order(s)",
    headerClassName: "bg-gray-200 text-gray-500",
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
    field: "total",
    headerName: "Total",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "deliveryChannel",
    headerName: "Delivery Channels",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "note",
    headerName: "Note",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
];

const columnsReturnRefund = [
  {
    field: "name",
    headerName: "Order(s)",
    headerClassName: "bg-gray-200 text-gray-500",
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
    field: "total",
    headerName: "Total",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "refund",
    headerName: "Refund Amount",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
  {
    field: "return",
    headerName: "Return Reason",
    headerClassName: "bg-gray-200 text-gray-500",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 2,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 3,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 4,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 5,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 6,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
  {
    id: 7,
    name: {
      name: "Bình Nước Thủy Tinh Chịu Nhiệt Độ Cao Từ -20o C Đến 130o C Soika SC05",
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/9e/b5/3b409eaaade82e00d15528c27d4ca23f.png.webp",
    },
    total: 2,
    status: "Shipping",
    deliveryChannel: "J&T Express",
    note: "",
    refund: 136000,
    return: "Not suitable",
  },
];

const tabs = [
  "All",
  "To Confirm",
  "To Ship",
  "Shipping",
  "Completed",
  "Cancellation",
  "Return/Refund",
  "Failed Delivery",
];

const getFilteredProducts = (query, rows) => {
  if (!query) {
    return rows;
  }
  return rows.filter((product) =>
    product.name.name.toLowerCase().includes(query.toLowerCase())
  );
};

const Order = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("All");

  const searchRef = useRef(null);

  const handleChange = (event, newValue) => {
    setQuery("");
    setValue(newValue);
  };

  const filteredProducts = getFilteredProducts(query, rows);

  return (
    <div className="flex flex-col p-4 gap-5 h-full">
      <Card className="flex flex-col gap-2 p-4 h-fit">
        <div className="text-first-text">Order / My Orders</div>
        <div className="text-main-color font-medium text-2xl">My Orders</div>
      </Card>

      <div className="h-full overflow-scroll no-scrollbar">
        <Card className="flex flex-col p-4 gap-2">
          <div className="flex justify-between">
            <div className="flex items-center w-1/4 gap-4">
              <div>Shop</div>
              <select
                className="w-1/2 border-[0.5px] border-gray-400 px-3 py-2 rounded"
                name="shops"
                id="shops"
              >
                <option value="">Family Shop</option>
                <option value="">Family Shop</option>
                <option value="">Family Shop</option>
              </select>
            </div>

            <div className="flex w-1/2 gap-2">
              <div className="flex items-center justify-between w-1/2 border-[0.5px] border-gray-400 text-gray-400 px-3 py-2 rounded">
                <input
                  className="focus:outline-none w-full"
                  ref={searchRef}
                  id="search"
                  type="text"
                  placeholder="Search by Order"
                />
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
              </div>

              <button
                className="text-white bg-main-color w-1/4"
                onClick={() => setQuery(searchRef.current.value)}
              >
                Search
              </button>
              <button
                className="text-gray-500 border border-gray-400 w-1/4"
                onClick={() => {
                  setQuery("");
                  searchRef.current.value = "";
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="text-xl font-bold">3 ORDERS</div>
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
              <DataGrid
                rows={filteredProducts}
                columns={columnsAll}
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
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="To Confirm">
              To Confirm
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="To Ship">
              To Ship
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Shipping">
              Shipping
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Completed">
              Completed
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Cancellation">
              Cancellation
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Return/Refund">
              <DataGrid
                rows={filteredProducts}
                columns={columnsReturnRefund}
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
            </TabPanel>

            <TabPanel sx={{ padding: "0px" }} value="Failed Delivery">
              Failed Delivery
            </TabPanel>
          </TabContext>
        </Card>
      </div>
    </div>
  );
};

export default Order;
