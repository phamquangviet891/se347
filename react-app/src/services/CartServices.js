import axios from "axios";

const postCart = async (product, quantity, options) => {
  //console.log(email);
  const userID = localStorage.getItem("id-user");
  const { id } = product;

  return axios.post("http://localhost:7777/api/Cart/addToCart", {
    productId: id,
    userId: userID,
    option: options,
    quantity: quantity,
  });
};

const increaseQuantityCart = async (id) => {
  //console.log(email);
  return axios.put(
    `http://localhost:7777/api/Cart/increaseCart?cartItem_id=${id}`
  );
};

const decreaseQuantityCart = async (id) => {
  //console.log(email);
  return axios.put(
    `http://localhost:7777/api/Cart/decreaseCart?cartItem_id=${id}`
  );
};

const getCart = async () => {
  //console.log(email);
  const userID = localStorage.getItem("id-user");

  return axios.get(
    `http://localhost:7777/api/Cart/getCartByUserId?userId=${userID}`
  );
};

const removeCart = async (id) => {
  //console.log(">>>> check delete cart id:", id);
  return axios.delete(
    `http://localhost:7777/api/Cart/removeCart?cartItem_id=${id}`
  );
};

export {
  postCart,
  getCart,
  increaseQuantityCart,
  decreaseQuantityCart,
  removeCart,
};
