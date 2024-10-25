import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import postSlice from "./postSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage

const persistConfig = {
  key: "root", // Key in storage (can be auth-specific if you prefer)
  storage, // Use localStorage to store the state
};

// Apply persist to the auth reducer
const persistedAuthReducer = persistReducer(persistConfig, authSlice);
const persistedPostReducer = persistReducer(persistConfig, postSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use persisted reducer here
    post: persistedPostReducer,
  },
});

export const persistor = persistStore(store); // Create a persistor

export default store;