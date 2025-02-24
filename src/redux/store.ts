import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
export type rootState = ReturnType<typeof store.getState>;
