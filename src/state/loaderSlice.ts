import { createSlice } from "@reduxjs/toolkit";

export type LoaderState = {
  open: boolean;
};

const loaderInitialState: LoaderState = {
  open: false,
};

export const LoaderSlice = createSlice({
  name: "loader",
  initialState: loaderInitialState,
  reducers: {
    setLoader: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const LoaderActions = LoaderSlice.actions;
export const LoaderReducers = LoaderSlice.reducer;
