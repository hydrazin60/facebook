import { createSlice } from "@reduxjs/toolkit";

const totalFbPostSlice = createSlice({
  name: "totalFbPost",
  initialState: {
    totalFBpost: [],
  },
  reducers: {
    totalFBpost: (state, action) => {
      state.totalFBpost.push(action.payload);
    },
  },
});

export default totalFbPostSlice.reducer;

export const { totalFBpost } = totalFbPostSlice.actions;
