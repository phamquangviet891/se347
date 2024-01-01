import React, { useEffect, useRef, useState, useCallback } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BiCart, BiChat, BiLogOut, BiSearch, BiUser } from "react-icons/bi";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { cancelOrderApi, getOrdersBySatus } from "../../services/OrderServices";

const OrdersScreen = () => {
  const [value, setValue] = React.useState(0);
  const [orders, setOrders] = useState([]);
  const [cancelOrderId, setCancelOrderId] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getOrdersBySatus(newValue);
  };

  useEffect(() => {
    getOrdersBySatus(0);
  }, []);

  const getOrders = async (status) => {
    const res = await getOrdersBySatus(status);
    if (res) {
      setOrders(res);
    }
  };
  const cancelOrder = async () => {
    const res = await cancelOrderApi(cancelOrderId);
    if (res) {
      setOrders([
        ...orders.filter((order) => order.order_id !== cancelOrderId),
      ]);
    }
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className=" w-4/5 h-screen overflow-y-auto">
      <Box sx={{ flex: 1, p: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{
              backgroundColor: "white",
            }}
            className="flex-1"
          >
            <Tab
              label="Confirming"
              {...a11yProps(0)}
              className=" flex-1 text-center"
            />
            <Tab
              label="Delivering"
              {...a11yProps(1)}
              className=" flex-1 text-center"
            />
            <Tab
              label="Complete"
              {...a11yProps(2)}
              className=" flex-1 text-center  "
            />
            <Tab
              label="Cancelled"
              {...a11yProps(3)}
              className=" flex-1 text-center  "
            />
            <Tab
              label="Refund"
              {...a11yProps(3)}
              className=" flex-1 text-center  "
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-row bg-white items-center px-4  rounded-sm">
            <BiSearch size={20} />
            <input
              className=" flex-auto h-10 border-none outline-none px-5 "
              placeholder="Searching for orders"
            />
          </div>
          {orders.map((order) => (
            <div className="bg-white my-4 p-4" style={{ borderRadius: 10 }}>
              <div
                key={order.order_id}
                className="flex flex-row items-center justify-between "
              >
                <h1
                  style={{
                    color: "#808089",
                    fontSize: 25,
                  }}
                >
                  Products Ordered
                </h1>
                <div className="flex" />
                <div className="w-1/3 flex flex-row justify-between items-center">
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Variations
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Unit Price
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {order.shopName}
                </h1>
                <BiChat fill="#1A88F7" />
                <p
                  style={{
                    fontSize: 16,
                    color: "#1A88F7",
                  }}
                >
                  chat now
                </p>
              </div>
              {order.list_orderItem.map((product) => (
                <div
                  key={product.product_id}
                  className="flex flex-row items-center justify-between"
                >
                  <img src={product.productImage} width={97} height={97} />
                  <h1
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    className="flex-1 pl-3"
                  >
                    {product.productName}
                  </h1>
                  <div className="w-1/3 flex flex-row justify-between items-center">
                    <h1
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgba(39,39,42,0.72)",
                      }}
                    >
                      {product.option}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.productSalePrice} đ
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1A88F7",
                      }}
                    >
                      {product.productSalePrice * product.quantity} đ
                    </p>
                  </div>
                </div>
              ))}

              <Divider style={{ borderStyle: "dashed", marginBlock: 20 }} />
              <div className=" flex flex-row justify-between">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCancelOrderId(order.order_id)}
                >
                  Cancel
                </Button>
                <div className="flex flex-row items-center gap-3">
                  <h1>Order status: </h1>
                  <h1
                    style={{
                      fontSize: 20,
                      color: "#FE0000",
                      fontWeight: "bold",
                    }}
                  >
                    Confirming
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-row bg-white items-center px-4  rounded-sm">
            <BiSearch size={20} />
            <input
              className=" flex-auto h-10 border-none outline-none px-5 "
              placeholder="Searching for orders"
            />
          </div>
          {orders.map((order) => (
            <div className="bg-white my-4 p-4" style={{ borderRadius: 10 }}>
              <div
                key={order.order_id}
                className="flex flex-row items-center justify-between "
              >
                <h1
                  style={{
                    color: "#808089",
                    fontSize: 25,
                  }}
                >
                  Products Ordered
                </h1>
                <div className="flex" />
                <div className="w-1/3 flex flex-row justify-between items-center">
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Variations
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Unit Price
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {order.shopName}
                </h1>
                <BiChat fill="#1A88F7" />
                <p
                  style={{
                    fontSize: 16,
                    color: "#1A88F7",
                  }}
                >
                  chat now
                </p>
              </div>
              {order.list_orderItem.map((product) => (
                <div
                  key={product.product_id}
                  className="flex flex-row items-center justify-between"
                >
                  <img src={product.productImage} width={97} height={97} />
                  <h1
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    className="flex-1 pl-3"
                  >
                    {product.productName}
                  </h1>
                  <div className="w-1/3 flex flex-row justify-between items-center">
                    <h1
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgba(39,39,42,0.72)",
                      }}
                    >
                      {product.option}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.productSalePrice} đ
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1A88F7",
                      }}
                    >
                      {product.productSalePrice * product.quantity} đ
                    </p>
                  </div>
                </div>
              ))}

              <Divider style={{ borderStyle: "dashed", marginBlock: 20 }} />
              <div className=" flex flex-row justify-between">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCancelOrderId(order.order_id)}
                >
                  Cancel
                </Button>
                <div className="flex flex-row items-center gap-3">
                  <h1>Order status: </h1>
                  <h1
                    style={{
                      fontSize: 20,
                      color: "#FE0000",
                      fontWeight: "bold",
                    }}
                  >
                    Confirming
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="flex flex-row bg-white items-center px-4  rounded-sm">
            <BiSearch size={20} />
            <input
              className=" flex-auto h-10 border-none outline-none px-5 "
              placeholder="Searching for orders"
            />
          </div>
          {orders.map((order) => (
            <div className="bg-white my-4 p-4" style={{ borderRadius: 10 }}>
              <div
                key={order.order_id}
                className="flex flex-row items-center justify-between "
              >
                <h1
                  style={{
                    color: "#808089",
                    fontSize: 25,
                  }}
                >
                  Products Ordered
                </h1>
                <div className="flex" />
                <div className="w-1/3 flex flex-row justify-between items-center">
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Variations
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Unit Price
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {order.shopName}
                </h1>
                <BiChat fill="#1A88F7" />
                <p
                  style={{
                    fontSize: 16,
                    color: "#1A88F7",
                  }}
                >
                  chat now
                </p>
              </div>
              {order.list_orderItem.map((product) => (
                <div
                  key={product.product_id}
                  className="flex flex-row items-center justify-between"
                >
                  <img src={product.productImage} width={97} height={97} />
                  <h1
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    className="flex-1 pl-3"
                  >
                    {product.productName}
                  </h1>
                  <div className="w-1/3 flex flex-row justify-between items-center">
                    <h1
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgba(39,39,42,0.72)",
                      }}
                    >
                      {product.option}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.productSalePrice} đ
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1A88F7",
                      }}
                    >
                      {product.productSalePrice * product.quantity} đ
                    </p>
                  </div>
                </div>
              ))}

              <Divider style={{ borderStyle: "dashed", marginBlock: 20 }} />
              <div className=" flex flex-row justify-between">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCancelOrderId(order.order_id)}
                >
                  Cancel
                </Button>
                <div className="flex flex-row items-center gap-3">
                  <h1>Order status: </h1>
                  <h1
                    style={{
                      fontSize: 20,
                      color: "#FE0000",
                      fontWeight: "bold",
                    }}
                  >
                    Confirming
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="flex flex-row bg-white items-center px-4  rounded-sm">
            <BiSearch size={20} />
            <input
              className=" flex-auto h-10 border-none outline-none px-5 "
              placeholder="Searching for orders"
            />
          </div>
          {orders.map((order) => (
            <div className="bg-white my-4 p-4" style={{ borderRadius: 10 }}>
              <div
                key={order.order_id}
                className="flex flex-row items-center justify-between "
              >
                <h1
                  style={{
                    color: "#808089",
                    fontSize: 25,
                  }}
                >
                  Products Ordered
                </h1>
                <div className="flex" />
                <div className="w-1/3 flex flex-row justify-between items-center">
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Variations
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Unit Price
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {order.shopName}
                </h1>
                <BiChat fill="#1A88F7" />
                <p
                  style={{
                    fontSize: 16,
                    color: "#1A88F7",
                  }}
                >
                  chat now
                </p>
              </div>
              {order.list_orderItem.map((product) => (
                <div
                  key={product.product_id}
                  className="flex flex-row items-center justify-between"
                >
                  <img src={product.productImage} width={97} height={97} />
                  <h1
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    className="flex-1 pl-3"
                  >
                    {product.productName}
                  </h1>
                  <div className="w-1/3 flex flex-row justify-between items-center">
                    <h1
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgba(39,39,42,0.72)",
                      }}
                    >
                      {product.option}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.productSalePrice} đ
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1A88F7",
                      }}
                    >
                      {product.productSalePrice * product.quantity} đ
                    </p>
                  </div>
                </div>
              ))}

              <Divider style={{ borderStyle: "dashed", marginBlock: 20 }} />
              <div className=" flex flex-row justify-between">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCancelOrderId(order.order_id)}
                >
                  Cancel
                </Button>
                <div className="flex flex-row items-center gap-3">
                  <h1>Order status: </h1>
                  <h1
                    style={{
                      fontSize: 20,
                      color: "#FE0000",
                      fontWeight: "bold",
                    }}
                  >
                    Confirming
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="flex flex-row bg-white items-center px-4  rounded-sm">
            <BiSearch size={20} />
            <input
              className=" flex-auto h-10 border-none outline-none px-5 "
              placeholder="Searching for orders"
            />
          </div>
          {orders.map((order) => (
            <div className="bg-white my-4 p-4" style={{ borderRadius: 10 }}>
              <div
                key={order.order_id}
                className="flex flex-row items-center justify-between "
              >
                <h1
                  style={{
                    color: "#808089",
                    fontSize: 25,
                  }}
                >
                  Products Ordered
                </h1>
                <div className="flex" />
                <div className="w-1/3 flex flex-row justify-between items-center">
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Variations
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Unit Price
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Quantity
                  </p>
                  <p
                    style={{
                      color: "#808089",
                      fontSize: 13,
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <h1
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {order.shopName}
                </h1>
                <BiChat fill="#1A88F7" />
                <p
                  style={{
                    fontSize: 16,
                    color: "#1A88F7",
                  }}
                >
                  chat now
                </p>
              </div>
              {order.list_orderItem.map((product) => (
                <div
                  key={product.product_id}
                  className="flex flex-row items-center justify-between"
                >
                  <img src={product.productImage} width={97} height={97} />
                  <h1
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    className="flex-1 pl-3"
                  >
                    {product.productName}
                  </h1>
                  <div className="w-1/3 flex flex-row justify-between items-center">
                    <h1
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgba(39,39,42,0.72)",
                      }}
                    >
                      {product.option}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.productSalePrice} đ
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    >
                      {product.quantity}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1A88F7",
                      }}
                    >
                      {product.productSalePrice * product.quantity} đ
                    </p>
                  </div>
                </div>
              ))}

              <Divider style={{ borderStyle: "dashed", marginBlock: 20 }} />
              <div className=" flex flex-row justify-between">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCancelOrderId(order.order_id)}
                >
                  Cancel
                </Button>
                <div className="flex flex-row items-center gap-3">
                  <h1>Order status: </h1>
                  <h1
                    style={{
                      fontSize: 20,
                      color: "#FE0000",
                      fontWeight: "bold",
                    }}
                  >
                    Confirming
                  </h1>
                </div>
              </div>
              {cancelOrderId === order.order_id && (
                <div
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 300,
                    position: "absolute",
                    zIndex: 9999,
                  }}
                >
                  <h1 style={{ color: "#808089", fontSize: 20 }}>
                    You sure want to Cancel?
                  </h1>
                  <div className=" gap-4 flex-row flex">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => setCancelOrderId()}
                    >
                      Go back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={cancelOrder}
                    >
                      Yes
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CustomTabPanel>
      </Box>
    </div>
  );
};
export default OrdersScreen;
