import { configureStore } from "@reduxjs/toolkit";
import RestaurantReducer from "./RastaurantSlice";
import CartReducer from "./CartSlice";
export default store = configureStore({
  reducer: {
    myRestaurants: RestaurantReducer,
    cart: CartReducer,
  },
});
