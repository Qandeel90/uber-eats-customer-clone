import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.name == action.payload.name) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({ ...action.payload, qty: action.payload.qty + 1 });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
    removeItemFromCart: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.name == action.payload.name) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteCartItem: (state, action) => {
      return (state = state.filter((item) => item.name != action.payload.name));
    },
    deleteFullCart: (state, action) => {
      return (state = []);
    },
  },
});

export const { addToCart, removeItemFromCart, deleteCartItem, deleteFullCart } =
  cartSlice.actions;
export default cartSlice.reducer;
