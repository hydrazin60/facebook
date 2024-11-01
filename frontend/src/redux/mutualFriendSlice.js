import { createSlice } from "@reduxjs/toolkit";
const mutualFriendSlice = createSlice({
  name: "mutualFriend",
  initialState: {
    mutualFriend: [],
  },
  reducers: {
    setMutualFriend: (state, action) => {
      state.mutualFriend = action.payload;
    },
  },
});
export const { setMutualFriend } = mutualFriendSlice.actions;
export default mutualFriendSlice.reducer;
