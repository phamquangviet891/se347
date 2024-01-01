import axios from "axios";

const createOrder = async (order) => {
  const res = await axios.post(
    `http://localhost:7777/api/Order/createOrder`,
    order
  );
};
const getOrdersBySatus = async (status) => {
  const userId = localStorage.getItem("id-user");
  const res = await axios.get("http://localhost:7777/api/Order/getOrdersByUserId", {
    params: {
      userId: +userId,
      status: 0,
      page: 1,
      page_size: 20,
    },
  });
  console.log(res);
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
