import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777";

const getReviewByProduct = async (productId, rating) => {
  const res = await axios.get(
    `/api/Review/getbyProduct?productId=${productId}&rating=${rating}&page=1&page_size=10`
  );
  if (res && res.data) {
    return res.data;
  }
};

export { getReviewByProduct };
