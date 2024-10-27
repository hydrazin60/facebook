// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice.js";
// import postSlice from "./postSlice.js";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedAuthReducer = persistReducer(persistConfig, authSlice);
// const persistedPostReducer = persistReducer(persistConfig, postSlice);

// const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     post: persistedPostReducer,
//   },
// });

// export const persistor = persistStore(store);

// export default store;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice.js";
import postSlice from "./postSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: authSlice,
  post: postSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
