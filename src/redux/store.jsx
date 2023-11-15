import {configureStore} from "@reduxjs/toolkit"
import bookAdminReducer from "./slices/BooksAdmin"
import userAdminReducer from "./slices/UserAdmin"
import acheivementReducer from "./slices/AcheivementAdmin"
import userAdminAPIreducer from "./slices/userAPIAdmin"
import authReducer from "./slices/AuthSlices";
import bookAPIreducer from "./slices/bookSlicesAPI"

export default configureStore({
    reducer:{
        bookAdmin:bookAdminReducer,
        userAdmin:userAdminReducer,
        acheivementAdmin:acheivementReducer,

        userAdminAPI:userAdminAPIreducer,
        auth: authReducer,
        
        bookApi:bookAPIreducer
    },
    devTools:true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})