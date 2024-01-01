import axios from "axios";

const getProductHomePage = async () => {
  const res = await axios.get(
    "http://localhost:7777/api/Product/daily_product"
  );
  if (res && res.data) {
    return res.data;
  }
};

const getProductById = async (id) => {
  //const userID = localStorage.getItem("id-user");
  const res = await axios.get(
    `http://localhost:7777/api/Product/detail_page?productId=${id}`
  );
  if (res && res.data) {
    return res.data;
  }
};

const getProductByCategory = async (categoryId, limit = 20) => {
  const res = await axios.get(`http://localhost:7777/api/Product/byCategory`, {
    params: { category_id: categoryId, limit: limit },
  });

  if (res && res.data) {
    return res.data;
  }
};

const searchProductByKey = async (key) => {
  const res = await axios.get(
    `http://localhost:7777/api/Product/search?key=${key}`
  );
  if (res && res.data) {
    return res.data;
  }
};

export {
  getProductHomePage,
  getProductById,
  getProductByCategory,
  searchProductByKey,
};
