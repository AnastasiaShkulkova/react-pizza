import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchPizzaParams } from "./slice";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://634bb600d90b984a1e3e14c2.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
