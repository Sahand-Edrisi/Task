import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsData: [],
  productsStatus: "idle",
  productsError: null,

  productData: {},
  productStatus: "idle",
  productError: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`https://rotikala.chbk.app/products`);
    return response.data.data;
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(
      `https://rotikala.chbk.app/products/${id}/`
    );
    console.log(response);
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = "succeeded";
        state.productsData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "failed";
        state.productsError = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productStatus = "failed";
        state.productError = action.error.message;
      });
  },
});

export default productsSlice.reducer;
