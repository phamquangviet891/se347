import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777";

const getShopById = async (id) => {
  const res = await axios.get(`/api/Shop/info?shop_id=${id}`);
  if (res && res.data) {
    return res.data;
  }
};

export { getShopById };
