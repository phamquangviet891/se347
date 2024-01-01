import { createSlice } from "@reduxjs/toolkit";

const setup = () => {
  localStorage.setItem("cart-taka", JSON.stringify([]));
  let cart = JSON.parse(localStorage.getItem("cart-taka"));
  return { cart: cart };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: setup,
  reducers: {
    addItem: (state, action) => {
      let { cart_id, item, shop } = action.payload;
      //console.log(state.cart.length);
      if (state.cart.filter((e) => e.cart_id === cart_id).length > 0) {
        state.cart = state.cart.map((e) => {
          let cartItem = e;
          if (cartItem.cart_id !== cart_id) return cartItem;
          else {
            if (!cartItem.list_cartItem.some((e) => e === item))
              cartItem.list_cartItem.push(item);
            return cartItem;
          }
        });
      } else {
        state.cart = [
          ...state.cart,
          { cart_id: cart_id, list_cartItem: [item], shop: shop },
        ];
      }
      localStorage.setItem("cart-taka", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      let { cart_id, item } = action.payload;
      //console.log(item);
      state.cart = state.cart.filter((e) => {
        let cartItem = e;
        if (cartItem.cart_id !== cart_id) return cartItem;
        else {
          cartItem.list_cartItem = cartItem.list_cartItem.filter(
            (e_) => e_.cartItem_id !== item.cartItem_id
          );
          if (cartItem.list_cartItem.length > 0) return cartItem;
        }
      });
      localStorage.setItem("cart-taka", JSON.stringify(state.cart));
    },
    addVoucher: (state, action) => {
      let { voucher, cart_id } = action.payload;
      state.cart = state.cart.map((e) => {
        if (e.cart_id !== cart_id) return e;
        else {
          e.voucher = voucher;
          return e;
        }
      });
      localStorage.setItem("cart-taka", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {},
    descreaseQuantity: (state, action) => {},
    deleteItem: (state, action) => {},
    resetCart: (state, action) => {
      state = [];
      localStorage.setItem("cart-taka", JSON.stringify([]));
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  descreaseQuantity,
  deleteItem,
  removeItem,
  addVoucher,
} = cartSlice.actions;
export default cartSlice.reducer;
