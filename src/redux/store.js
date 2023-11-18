import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import achievementReducer from "./slices/achievementSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
  key: 'user',
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export default () => {
  const store = configureStore({
    reducer: {
      auth: persistedReducer,
      achievements: achievementReducer,
      user: userReducer,
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
