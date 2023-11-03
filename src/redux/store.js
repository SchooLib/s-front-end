import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});