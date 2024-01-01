import axios from "axios";

const getListCategories = async () => {
  const res = await axios.get(
    "http://localhost:7777/api/Category/getListCategories"
  );
  if (res && res.data) {
    return res.data;
  }
};

export { getListCategories };
