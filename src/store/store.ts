import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataStore";
import modalReducer from "./modalStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
