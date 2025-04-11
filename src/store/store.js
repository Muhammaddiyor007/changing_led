import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./lightSlice";

const store = configureStore({
  reducer: {
    light: lightReducer
  }
});

export default store;
