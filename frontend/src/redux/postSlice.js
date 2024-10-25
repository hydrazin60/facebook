 // postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
