import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
  name: "restaurants",
  initialState: [],
  reducers: {
    addRestaurants(state, action) {
      state.push(action.payload);
    },
  },
});
export const { addRestaurants } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
