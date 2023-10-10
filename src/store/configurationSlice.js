import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appConfig: {},
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setConfiguration: (state, action) => {
      state.appConfig = action.payload;
    },
  },
});

export const { setConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;
