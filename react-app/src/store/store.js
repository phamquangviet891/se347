import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";
import paymentReducer from "./slice/payment";
export default configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
});
