import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer, bookReducer} from "./slices/authSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer
  },
  // devTools: true,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});