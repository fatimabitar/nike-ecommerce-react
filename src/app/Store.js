import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: {
    CartSlice,
  },
});

export default Store;
