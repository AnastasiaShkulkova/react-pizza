import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import pizza from "./pizza/slice";
import { useDispatch } from "react-redux";

export const store: any = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.AppDispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
