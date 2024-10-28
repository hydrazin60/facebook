import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.unshift(action.payload); // Add the new post at the beginning
    },
    setPosts: (state, action) => {
      state.posts = action.payload; // Set fetched posts
    },
  },
});

export const { createPost, setPosts } = postSlice.actions;
export default postSlice.reducer;

// const postSlice = createSlice({
//   name: "post",
//   initialState: {
//     posts: [],
//   },
//   reducers: {
//     createPost: (state, action) => {
//       state.posts.push(action.payload);
//     },
//   },
// });

// export const { createPost } = postSlice.actions;
// export default postSlice.reducer;
