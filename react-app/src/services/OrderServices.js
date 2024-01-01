import axios from "axios";

const createOrder = async (order) => {
  const res = await axios.post(
    `http://localhost:7777/api/Order/createOrder`,
    order
  );
};
const getOrdersBySatus = async (status) => {
  const userId = localStorage.getItem("id-user");
  const res = await axios.get("http://localhost:7777/api/Cart/addToCart", {
    params: {
      userId: +userId,
      status: +status,
      page: 1,
      page_size: 20,
    },
  });
  if (res.status === 200) {
    return res.data;
  }
};
const cancelOrderApi = async (orderId) => {
  const res = await axios.put("http://localhost:7777/api/Cart/addToCart", {
    data: {
      order_id: orderId,
    },
  });
  if (res.status === 200) {
    return res.data;
  }
};
export { createOrder, getOrdersBySatus, cancelOrderApi };
