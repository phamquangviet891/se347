import axios from "axios";

const getProductById = async (id) => {
  let product_list = (await axios.get("http://localhost:5000/product/get-all"))
    .data;
  //console.log(">>>> check product_list: ", product_list);
  let rs = product_list.filter((el) => el.productID === id);
  //console.log(">>>>>> Check find product", rs[0]);
  if (rs.length !== 0) return rs[0];
  else return null;
};
const getProductByCategoryId = async (id) => {
  try {
    const product_list = await axios.get(
      `http://localhost:7777/api/Product/search`,
      { params: { key: id } }
    );
    return product_list.data;
  } catch (error) {
    console.log(error);
  }
};
export { getProductById, getProductByCategoryId };
