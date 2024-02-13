import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productSlice.ts";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
