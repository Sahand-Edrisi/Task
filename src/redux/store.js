import { configureStore } from "@reduxjs/toolkit";
import productsReduce from "./Slice";

const store = configureStore({
  reducer: { products: productsReduce },
});

export default store;
