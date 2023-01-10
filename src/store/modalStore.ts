import { createSlice } from "@reduxjs/toolkit";

interface modalData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: null as modalData | null,
    isOpen: false as boolean,
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
