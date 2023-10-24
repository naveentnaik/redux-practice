import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getallProduct } from "../api/products";


export const getItems = createAsyncThunk("items/getItems", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});

export const getIProducts = createAsyncThunk("items/getProducts", async () => {
  const { data } = await getallProduct()
  console.log(data);
  return data;
});


const initialState = {
  isLoading: false,
  items: [],
  cart: [],
};
export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => action.payload.value._id === item._id
      );
      if (existingItem) {
        if (action.payload.type === "add") {
          existingItem.quantity += 1;
        } else if (action.payload.type === "remove") {
          if (existingItem.quantity > 1) {
            console.log("remove");
            existingItem.quantity -= 1;
          }
        }
      } else {
        state.cart.push({ ...action.payload.value, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter((val) => {
        return action.payload._id !== val._id;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      });
  },
});
export const { setCart, removefromCart } = itemSlice.actions;
export default itemSlice.reducer;
