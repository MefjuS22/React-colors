import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataStore";
import modalReducer from "./modalStore";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
  },
});
