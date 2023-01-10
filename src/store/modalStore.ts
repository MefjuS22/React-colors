import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: null,
    isOpen: false,
  },
  reducers: {
    setModalData: (state, action) => {
      state.data = action.payload;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setModalData, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
