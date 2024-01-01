import { createSlice } from "@reduxjs/toolkit";

const setup = () => {
  //   localStorage.setItem("payment-taka", JSON.stringify([]));
  localStorage.getItem("payment-taka")
    ? true
    : localStorage.setItem("payment-taka", JSON.stringify([]));
  let payment = JSON.parse(localStorage.getItem("payment-taka"));
  return { payment: payment };
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState: setup,
  reducers: {
    addPayment: (state, action) => {
      let { cart } = action.payload;

      state.payment = cart;

      localStorage.setItem("payment-taka", JSON.stringify(state.payment));
    },
  },
});

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
