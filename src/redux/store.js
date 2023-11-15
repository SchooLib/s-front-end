import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'user',
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export default () => {
    const store = configureStore({
    reducer: {
      auth: persistedReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  const persistor = persistStore(store)
  return { store, persistor }
}

