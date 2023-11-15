import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as books from "../services/bookServices"

export const postBook=createAsyncThunk(
    "books/create",
    async(data,{rejectWithValue})=>{
      console.log({data})
        try{
            const res=await books.creaateBook(data);
            console.log(res.data)
            if(res.data.meta.status=="success"){
                console.log(res.data)
            }
            return res.data
        }catch(err){
            return rejectWithValue(err.response)
        }
    }
)

const booksAPI = createSlice({
    name: "createBooks",
    initialState: {
      loading: false,
      message: "",
      user: "",
      status: "",
      // theme: white,
    },
    extraReducers: {
      [postBook.pending]: (state, action) => {
        return { ...state, loading: true, message: "Processing your action..." };
      },
      [postBook.fulfilled]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.meta.message,
          user: action.payload?.data,
          status: action.payload?.status,
        };
      },
      [postBook.rejected]: (state, action) => {
        return {
          loading: false,
          message: action.payload?.data.meta.message,
          user: {},
          status: "error",
        };
      },
    },
  });

  export default booksAPI.reducer;