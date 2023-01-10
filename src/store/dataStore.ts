import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../hooks/useFetchData";

const perPage = 5;
const baseUrl = `https://reqres.in/api/products/`;
const baseUrlWithPage = `https://reqres.in/api/products/?per_page=${perPage}`;
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null as Products | null,
    url: baseUrlWithPage as string,
  },
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
    setUrlToInput: (state, action) => {
      state.url = `${baseUrl}${action.payload}`;
    },
    setUrlToDefault: (state) => {
      state.url = baseUrlWithPage;
    },
    setUrlPage: (state, action) => {
      state.url = `${baseUrlWithPage}&page=${action.payload}`;
    },
  },
});
export const { changeData, setUrlToDefault, setUrlToInput, setUrlPage } =
  dataSlice.actions;
export default dataSlice.reducer;
