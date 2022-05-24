import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiS",
  initialState: { isVisibleCart: false},
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
